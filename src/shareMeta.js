/** Social / messaging link previews: absolute URLs for og:image and canonical */

const SHARE_IMAGE_PATH = "hero-letter-cover.jpg";

const SHARE_BY_LANG = {
  en: {
    title: "Karen & Anna, Wedding, 24 June 2026",
    description:
      "Join us in Yerevan, ceremony at Saint Anna Church, celebration at Art Village Armenia. Save the date.",
    ogLocale: "en_GB",
    imageAlt: "Wedding invitation, Karen and Anna",
    siteName: "Karen & Anna",
    jsonLdName: "Karen & Anna, Wedding",
  },
  hy: {
    title: "Կարեն և Աննա · հարսանիք, 24 հունիս 2026",
    description:
      "Հրավիրում ենք Երևան՝ պսակադրություն Սուրբ Աննա եկեղեցում, խնջույք Art Village Armenia-ում։ Պահեք ամսաթիվը։",
    ogLocale: "hy_AM",
    imageAlt: "Հարսանեկան հրավեր, Կարեն և Աննա",
    siteName: "Կարեն և Աննա",
    jsonLdName: "Կարեն և Աննա, հարսանիք",
  },
  ru: {
    title: "Карен и Анна · Свадьба, 24 июня 2026",
    description:
      "Приглашаем в Ереван: церемония венчания в церкви Святой Анны, торжество в Art Village Armenia.",
    ogLocale: "ru_RU",
    imageAlt: "Свадебное приглашение, Карен и Анна",
    siteName: "Карен и Анна",
    jsonLdName: "Карен и Анна, Свадьба",
  },
};

function ensureMeta(attrName, attrValue) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(attrName, attrValue, content) {
  const el = ensureMeta(attrName, attrValue);
  el.setAttribute("content", content);
}

export function applyShareMeta(lang = "en") {
  if (typeof window === "undefined") return;

  const locale = lang === "hy" ? "hy" : lang === "ru" ? "ru" : "en";
  const share = SHARE_BY_LANG[locale];

  const base = import.meta.env.BASE_URL || "/";
  const origin = window.location.origin;
  const imageUrl = new URL(
    SHARE_IMAGE_PATH,
    origin + (base.endsWith("/") ? base : `${base}/`),
  ).href;
  const pageUrl = `${origin}${window.location.pathname}${window.location.search}`;

  document.title = share.title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", share.description);

  setMeta("property", "og:title", share.title);
  setMeta("property", "og:description", share.description);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", pageUrl);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:alt", share.imageAlt);
  setMeta("property", "og:site_name", share.siteName);
  setMeta("property", "og:locale", share.ogLocale);

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", share.title);
  setMeta("name", "twitter:description", share.description);
  setMeta("name", "twitter:image", imageUrl);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = pageUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MarriageEvent",
    name: share.jsonLdName,
    description: share.description,
    image: imageUrl,
    startDate: "2026-06-24T14:00:00+04:00",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: [
      {
        "@type": "Place",
        name: "Saint Anna Church",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Abovyan Street",
          addressLocality: "Yerevan",
          addressCountry: "AM",
        },
      },
      {
        "@type": "Place",
        name: "Art Village Armenia",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ashtarak, Aragatsotn",
          addressCountry: "AM",
        },
      },
    ],
  };

  let ld = document.getElementById("wedding-event-jsonld");
  if (!ld) {
    ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "wedding-event-jsonld";
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(jsonLd);
}
