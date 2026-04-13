import { figmaAssets, venueLinks } from "./constants/figmaAssets.js";
import { useInViewOnce } from "./hooks/useInViewOnce.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useActiveNavSection } from "./hooks/useActiveNavSection.js";
import { useScrollPast } from "./hooks/useScrollPast.js";
import { useWeddingCountdown } from "./hooks/useWeddingCountdown.js";
import { FamilyTreeVisual } from "./components/FamilyTreeVisual.jsx";
import {
  IconCelebration,
  IconChevronDown,
  IconChurch,
  IconPin,
} from "./components/Icons/Icons.jsx";
import { ScheduleVine } from "./components/ScheduleVine.jsx";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher.jsx";
import { useI18n } from "./i18n/LanguageContext.jsx";
import { useInviteMode } from "./hooks/InviteContext.jsx";
import styles from "./FigmaInvite.module.css";

const WEDDING_AT = new Date("2026-06-24T14:00:00");

const NAV_IDS = [
  { id: "home", key: "home" },
  { id: "story", key: "story" },
  { id: "events", key: "details" },
  { id: "attire", key: "attire" },
  { id: "schedule", key: "schedule" },
  { id: "roots", key: "roots" },
];

function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delayMs = 0,
  reducedMotion,
  ...rest
}) {
  const [ref, visible] = useInViewOnce({ disabled: reducedMotion });
  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delayMs}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function FigmaInvite() {
  const { lang, setLang, t } = useI18n();
  const { hasSpecialAccess } = useInviteMode();
  const f = t.figma;
  const countdown = useWeddingCountdown(WEDDING_AT);
  const reducedMotion = useReducedMotion();
  const navScrolled = useScrollPast(40);
  const activeNavId = useActiveNavSection(88);

  const motion = reducedMotion ? "reduce" : "full";
  const navIds = hasSpecialAccess
    ? NAV_IDS
    : NAV_IDS.filter((item) => item.id !== "schedule");

  return (
    <div className={styles.page} data-motion={motion}>
      <header
        className={`${styles.topNav} ${navScrolled ? styles.topNavScrolled : ""}`.trim()}
      >
        <div className={styles.topNavBrand}>
          <p className={styles.logo}>
            <span className={styles.logoName}>{f.logo.karen}</span>
            <span className={styles.logoAmp}>&amp;</span>
            <span className={styles.logoName}>{f.logo.anna}</span>
          </p>
          <LanguageSwitcher
            lang={lang}
            onChange={setLang}
            labels={t.language}
            variant="inline"
          />
        </div>
        <div className={styles.topNavRight}>
          <nav aria-label={f.nav.ariaLabel}>
            <ul className={styles.navLinks}>
              {navIds.map(({ id, key }) => (
                <li key={id}>
                  <a
                    className={activeNavId === id ? styles.active : undefined}
                    href={`#${id}`}
                    aria-current={activeNavId === id ? "true" : undefined}
                  >
                    {f.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className={`${styles.hero} ${styles.heroLetterOpened} ${styles.heroUnified}`.trim()}
        aria-label={f.hero.ariaSection}
      >
        <div className={styles.heroLetterPaper} aria-hidden />
        <div className={styles.heroUnifiedInner}>
          <figure className={styles.heroUnifiedFigure}>
            <div className={styles.heroMobileBanner}>
              <span className={styles.heroInviteCardFrame}>
                <img
                  src={figmaAssets.heroInvitationCover}
                  alt={f.hero.coverAlt}
                  className={styles.heroInviteCardImg}
                  decoding="async"
                  width={1024}
                  height={1536}
                />
              </span>
            </div>
          </figure>
          <div className={styles.heroLetterPanel}>
            <div className={styles.heroContent}>
              <p className={styles.heroKicker}>{f.hero.kicker}</p>
              <h1 className={styles.heroTitle}>{f.hero.title}</h1>
              <p className={styles.heroDate}>{f.hero.dateLine}</p>
              <hr className={styles.heroRule} />
              {countdown.passed ? (
                <p
                  className={`${styles.heroDate} ${styles.heroAfterRule}`}
                  style={{ fontSize: "1.125rem" }}
                >
                  {f.hero.thankYouPassed}
                </p>
              ) : (
                <div
                  className={`${styles.countdown} ${styles.heroAfterRule}`}
                  aria-live="polite"
                >
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.days}</p>
                    <p className={styles.countLabel}>{f.hero.days}</p>
                  </div>
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.hours}</p>
                    <p className={styles.countLabel}>{f.hero.hours}</p>
                  </div>
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.mins}</p>
                    <p className={styles.countLabel}>{f.hero.mins}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <a
          href="#story"
          className={styles.heroChevron}
          aria-label={f.hero.chevronAria}
        >
          <IconChevronDown />
        </a>
      </section>

      <section id="story" className={styles.story}>
        <div className={styles.storyGrid}>
          <Reveal reducedMotion={reducedMotion}>
            <div>
              <p className={styles.storyEyebrow}>{f.story.eyebrow}</p>
              <h2 className={styles.storyHeading}>{f.story.heading}</h2>
              <p className={styles.storyLead}>{f.story.lead}</p>
            </div>
          </Reveal>
          <Reveal reducedMotion={reducedMotion} delayMs={140}>
            <div className={styles.storyPhotos}>
              <div className={styles.storyPhotosBlur} aria-hidden />
              <div className={styles.photoGrid}>
                <div
                  className={`${styles.photoCard} ${styles.photoCardHero}`.trim()}
                >
                  <img
                    src={figmaAssets.storyPhotoPortrait}
                    alt={f.story.altPortrait}
                    decoding="async"
                    width={4032}
                    height={3024}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="events" className={styles.events}>
        <div className={styles.eventsInner}>
          <Reveal reducedMotion={reducedMotion}>
            <header className={styles.eventsHeader}>
              <p className={styles.eventsEyebrow}>{f.events.eyebrow}</p>
              <h2 className={styles.eventsTitle}>{f.events.title}</h2>
            </header>
          </Reveal>
          <div
            className={`${styles.eventCards} ${!hasSpecialAccess ? styles.eventCardsSingle : ""}`.trim()}
          >
            <Reveal reducedMotion={reducedMotion}>
              <article className={styles.eventCard}>
                <div className={styles.eventCardTop}>
                  <div>
                    <IconChurch className={styles.eventCelebrationIcon} />
                    <h3>{f.events.ceremonyTitle}</h3>
                  </div>
                  <p className={styles.eventTime}>14:00</p>
                </div>
                <p className={styles.eventQuote}>
                  &ldquo;{f.events.ceremonyQuote}&rdquo;
                </p>
                <div>
                  <div className={styles.eventLocation}>
                    <IconPin className={styles.eventPinIcon} />
                    <div className={styles.eventLocationText}>
                      <p className={styles.eventVenueName}>
                        {f.events.ceremonyVenue}
                      </p>
                      <p className={styles.eventAddress}>
                        {f.events.ceremonyAddress}
                      </p>
                      <a
                        className={styles.eventVenueLink}
                        href={venueLinks.saintAnnaGoogleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {f.events.openMaps}
                      </a>
                    </div>
                  </div>
                  <a
                    className={styles.eventMap}
                    href={venueLinks.saintAnnaGoogleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={figmaAssets.ceremonyMap}
                      alt={f.events.mapAltCeremony}
                      decoding="async"
                    />
                    <div className={styles.eventMapTint} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
            {hasSpecialAccess && (
              <Reveal reducedMotion={reducedMotion} delayMs={120}>
                <article className={styles.eventCard}>
                  <div className={styles.eventCardTop}>
                    <div>
                      <IconCelebration className={styles.eventCelebrationIcon} />
                      <h3>{f.events.celebrationTitle}</h3>
                    </div>
                    <p className={styles.eventTime}>18:00</p>
                  </div>
                  <p className={styles.eventQuote}>
                    &ldquo;{f.events.celebrationQuote}&rdquo;
                  </p>
                  <div>
                    <div className={styles.eventLocation}>
                      <IconPin className={styles.eventPinIcon} />
                      <div className={styles.eventLocationText}>
                        <p className={styles.eventVenueName}>
                          {f.events.receptionVenue}
                        </p>
                        <p className={styles.eventAddress}>
                          {f.events.receptionAddress}
                        </p>
                        <div className={styles.eventVenueLinkRow}>
                          <a
                            className={styles.eventVenueLink}
                            href={venueLinks.artVillageSite}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            artvillage.am
                          </a>
                          <span className={styles.eventVenueLinkSep} aria-hidden>
                            ·
                          </span>
                          <a
                            className={styles.eventVenueLink}
                            href={venueLinks.artVillageGoogleMaps}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {f.events.openMaps}
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      className={`${styles.eventMap} ${styles.eventMapReception}`.trim()}
                      href={venueLinks.artVillageSite}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={figmaAssets.receptionMap}
                        alt={f.events.mapAltReception}
                        decoding="async"
                      />
                      <div className={styles.eventMapTint} aria-hidden />
                    </a>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section
        id="attire"
        className={styles.attire}
        aria-labelledby="attire-heading"
      >
        <div className={styles.attireBand}>
          <div className={styles.attireBandInner}>
            <Reveal reducedMotion={reducedMotion}>
              <p className={styles.attireBandEyebrow}>{f.attire.eyebrow}</p>
              <h2 id="attire-heading" className={styles.attireBandTitle}>
                {f.attire.title}
              </h2>
              {f.attire.leadWomenMark?.trim() || f.attire.leadMenMark?.trim() ? (
                <div className={styles.attireBandLead}>
                  {f.attire.leadWomenMark?.trim() ? (
                    <p className={styles.attireBandLeadLine}>
                      <span className={styles.attireBandLeadMark}>
                        {f.attire.leadWomenMark}
                      </span>
                      {f.attire.leadWomenText ?? ""}
                    </p>
                  ) : null}
                  {f.attire.leadMenMark?.trim() ? (
                    <p className={styles.attireBandLeadLine}>
                      <span className={styles.attireBandLeadMark}>
                        {f.attire.leadMenMark}
                      </span>
                      {f.attire.leadMenText ?? ""}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </Reveal>
          </div>
        </div>

        <div className={styles.attireBody}>
          <div className={styles.attireLayout}>
            <Reveal reducedMotion={reducedMotion} delayMs={60}>
              <div className={styles.attirePaletteCard}>
                <div className={styles.attirePaletteHeader}>
                  <span className={styles.attireCardKicker}>
                    {f.attire.paletteKicker}
                  </span>
                  <h3 className={styles.attirePaletteTitle}>
                    {f.attire.paletteTitle}
                  </h3>
                </div>
                <div className={styles.attirePaletteGroups}>
                  <div className={styles.attirePaletteGroup}>
                    <h4 className={styles.attirePaletteGroupTitle}>
                      {f.attire.forHer}
                    </h4>
                    <ul
                      className={styles.attireSwatchRow}
                      aria-label={f.attire.womenAria}
                    >
                      {f.attire.paletteWomen.map((c) => (
                        <li
                          key={`w-${c.hex}-${c.name}`}
                          className={styles.attireSwatchItem}
                        >
                          <span
                            className={styles.attireSwatch}
                            style={{ "--swatch": c.hex }}
                            aria-hidden
                          />
                          <span className={styles.attireSwatchName}>
                            {c.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.attirePaletteGroup}>
                    <h4 className={styles.attirePaletteGroupTitle}>
                      {f.attire.forHim}
                    </h4>
                    <ul
                      className={styles.attireSwatchRow}
                      aria-label={f.attire.menAria}
                    >
                      {f.attire.paletteMen.map((c) => (
                        <li
                          key={`m-${c.hex}-${c.name}`}
                          className={styles.attireSwatchItem}
                        >
                          <span
                            className={styles.attireSwatch}
                            style={{ "--swatch": c.hex }}
                            aria-hidden
                          />
                          <span className={styles.attireSwatchName}>
                            {c.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {hasSpecialAccess && (
        <section
          id="schedule"
          className={styles.schedule}
          aria-labelledby="schedule-heading"
        >
          <div className={styles.scheduleInner}>
            <Reveal reducedMotion={reducedMotion}>
              <header className={styles.scheduleHeader}>
                <p className={styles.scheduleEyebrow}>{f.schedule.eyebrow}</p>
                <h2 id="schedule-heading" className={styles.scheduleTitle}>
                  {f.schedule.title}
                </h2>
                <p className={styles.scheduleSub}>{f.schedule.sub}</p>
              </header>
            </Reveal>
            <div className={styles.scheduleFlow}>
              <div className={styles.scheduleTrack}>
                <ScheduleVine className={styles.scheduleVine} />
                <ol className={styles.scheduleList}>
                  {f.schedule.rows.map((row, i) => {
                    const side =
                      i % 2 === 0
                        ? styles.scheduleItemStart
                        : styles.scheduleItemEnd;
                    return (
                      <Reveal
                        key={row.datetime + row.title}
                        as="li"
                        className={`${styles.scheduleItem} ${side}`.trim()}
                        reducedMotion={reducedMotion}
                        delayMs={i * 36}
                      >
                        <div className={styles.scheduleRow}>
                          <time
                            className={styles.scheduleTime}
                            dateTime={row.datetime}
                          >
                            <span className={styles.scheduleTimeInner}>
                              {row.time}
                            </span>
                          </time>
                          <div className={styles.scheduleCard}>
                            <h3 className={styles.scheduleCardTitle}>
                              {row.title}
                            </h3>
                            <p className={styles.schedulePlace}>{row.place}</p>
                            <p className={styles.scheduleDetail}>
                              {row.detail}
                            </p>
                            <span className={styles.scheduleTag}>{row.tag}</span>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      <section
        id="roots"
        className={styles.roots}
        aria-labelledby="roots-heading"
      >
        <div className={styles.rootsInner}>
          <div className={styles.rootsGrid}>
            <Reveal reducedMotion={reducedMotion} delayMs={80}>
              <div className={styles.rootsGridVisual}>
                <div className={styles.rootsVisualWrap}>
                  <FamilyTreeVisual />
                </div>
              </div>
            </Reveal>
            <Reveal reducedMotion={reducedMotion}>
              <div className={styles.rootsCopy}>
                <p className={styles.rootsEyebrow}>{f.roots.eyebrow}</p>
                <h2 id="roots-heading" className={styles.rootsHeading}>
                  {f.roots.heading}
                </h2>
                <p className={styles.rootsSubline}>{f.roots.subline}</p>
                <p className={styles.rootsLead}>{f.roots.lead}</p>
                <blockquote className={styles.rootsQuote}>
                  <p>{f.roots.quote}</p>
                </blockquote>
                <ul className={styles.rootsList}>
                  <li>{f.roots.li1}</li>
                  <li>{f.roots.li2}</li>
                  <li>{f.roots.li3}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal reducedMotion={reducedMotion}>
        <footer className={styles.footer}>
          <p className={styles.footerNames}>{f.footer.names}</p>
          <ul className={styles.footerLinks}>
            {navIds.map(({ id, key }) => (
              <li key={id}>
                <a href={`#${id}`}>{f.nav[key]}</a>
              </li>
            ))}
          </ul>
          <p className={styles.footerLegal}>{f.footer.legal}</p>
        </footer>
      </Reveal>
    </div>
  );
}
