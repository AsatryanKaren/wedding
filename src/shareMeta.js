/** Social / messaging link previews: absolute URLs for og:image and canonical */

const SHARE_TITLE = "Karen & Anna, Wedding, 24 June 2026";
const SHARE_DESCRIPTION =
  "Join us in Yerevan, ceremony at Saint Anna Church, celebration at Art Village Armenia. Save the date.";

const SHARE_IMAGE_PATH = "hero-letter-cover.jpg";

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

export function applyShareMeta() {
  if (typeof window === "undefined") return;

  const base = import.meta.env.BASE_URL || "/";
  const origin = window.location.origin;
  const imageUrl = new URL(SHARE_IMAGE_PATH, origin + (base.endsWith("/") ? base : `${base}/`)).href;
  const pageUrl = `${origin}${window.location.pathname}${window.location.search}`;

  document.title = SHARE_TITLE;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute("content", SHARE_DESCRIPTION);

  setMeta("property", "og:title", SHARE_TITLE);
  setMeta("property", "og:description", SHARE_DESCRIPTION);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:url", pageUrl);
  setMeta("property", "og:image", imageUrl);
  setMeta("property", "og:image:alt", "Wedding invitation, Karen and Anna");
  setMeta("property", "og:site_name", "Karen & Anna");
  setMeta("property", "og:locale", "en_GB");

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", SHARE_TITLE);
  setMeta("name", "twitter:description", SHARE_DESCRIPTION);
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
    name: "Karen & Anna, Wedding",
    description: SHARE_DESCRIPTION,
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
