import { figmaAssets, venueLinks } from "./constants/figmaAssets.js";
import { useInViewOnce } from "./hooks/useInViewOnce.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useActiveNavSection } from "./hooks/useActiveNavSection.js";
import { useScrollPast } from "./hooks/useScrollPast.js";
import { useWeddingCountdown } from "./hooks/useWeddingCountdown.js";
import { FamilyTreeVisual } from "./components/FamilyTreeVisual.jsx";
import { IconCelebration } from "./components/Icons/Icons.jsx";
import { ScheduleVine } from "./components/ScheduleVine.jsx";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher.jsx";
import { useI18n } from "./i18n/LanguageContext.jsx";
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

function Reveal({ as: Tag = "div", children, className = "", delayMs = 0, reducedMotion, ...rest }) {
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
  const f = t.figma;
  const countdown = useWeddingCountdown(WEDDING_AT);
  const reducedMotion = useReducedMotion();
  const navScrolled = useScrollPast(40);
  const activeNavId = useActiveNavSection(88);

  const motion = reducedMotion ? "reduce" : "full";

  return (
    <div className={styles.page} data-motion={motion}>
      <header className={`${styles.topNav} ${navScrolled ? styles.topNavScrolled : ""}`.trim()}>
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
              {NAV_IDS.map(({ id, key }) => (
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
                  alt=""
                  className={styles.heroInviteCardImg}
                  decoding="async"
                  width={1400}
                  height={933}
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
                <p className={`${styles.heroDate} ${styles.heroAfterRule}`} style={{ fontSize: "1.125rem" }}>
                  {f.hero.thankYouPassed}
                </p>
              ) : (
                <div className={`${styles.countdown} ${styles.heroAfterRule}`} aria-live="polite">
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
        <a href="#story" className={styles.heroChevron} aria-label={f.hero.chevronAria}>
          <img src={figmaAssets.chevronDown} alt="" width={12} height={7} />
        </a>
      </section>

      <section id="story" className={styles.story}>
        <div className={styles.storyGrid}>
          <Reveal reducedMotion={reducedMotion}>
            <div>
              <p className={styles.storyEyebrow}>{f.story.eyebrow}</p>
              <h2 className={styles.storyHeading}>{f.story.heading}</h2>
              <p className={styles.storyLead}>{f.story.lead}</p>
              <div className={styles.timeline}>
                <article className={styles.timelineItem}>
                  <span className={styles.timelineDot} aria-hidden />
                  <h3>{f.story.t1Title}</h3>
                  <p className={styles.timelineMeta}>{f.story.t1Meta}</p>
                  <p className={styles.timelineBody}>{f.story.t1Body}</p>
                </article>
                <article className={styles.timelineItem}>
                  <span className={styles.timelineDot} aria-hidden />
                  <h3>{f.story.t2Title}</h3>
                  <p className={styles.timelineMeta}>{f.story.t2Meta}</p>
                  <p className={styles.timelineBody}>{f.story.t2Body}</p>
                </article>
              </div>
            </div>
          </Reveal>
          <Reveal reducedMotion={reducedMotion} delayMs={140}>
            <div className={styles.storyPhotos}>
              <div className={styles.storyPhotosBlur} aria-hidden />
              <div className={styles.photoGrid}>
                <div className={`${styles.photoCard} ${styles.photoCardHero}`.trim()}>
                  <img src={figmaAssets.storyPhotoPortrait} alt={f.story.altPortrait} decoding="async" />
                </div>
                <div className={`${styles.photoCard} ${styles.photoCardStack}`.trim()}>
                  <img src={figmaAssets.storyPhotoRight} alt={f.story.altRome} decoding="async" />
                </div>
                <div className={`${styles.photoCard} ${styles.photoCardStack}`.trim()}>
                  <img src={figmaAssets.storyPhotoLeft} alt={f.story.altCity} decoding="async" />
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
          <div className={styles.eventCards}>
            <Reveal reducedMotion={reducedMotion}>
              <article className={styles.eventCard}>
                <div className={styles.eventCardTop}>
                  <div>
                    <img src={figmaAssets.iconCeremony} alt="" width={29} height={31} />
                    <h3>{f.events.ceremonyTitle}</h3>
                  </div>
                  <p className={styles.eventTime}>14:00</p>
                </div>
                <p className={styles.eventQuote}>&ldquo;{f.events.ceremonyQuote}&rdquo;</p>
                <div>
                  <div className={styles.eventLocation}>
                    <img src={figmaAssets.iconPinCeremony} alt="" width={15} height={19} />
                    <div className={styles.eventLocationText}>
                      <p className={styles.eventVenueName}>{f.events.ceremonyVenue}</p>
                      <p className={styles.eventAddress}>{f.events.ceremonyAddress}</p>
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
                    <img src={figmaAssets.ceremonyMap} alt={f.events.mapAltCeremony} decoding="async" />
                    <div className={styles.eventMapTint} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
            <Reveal reducedMotion={reducedMotion} delayMs={120}>
              <article className={styles.eventCard}>
                <div className={styles.eventCardTop}>
                  <div>
                    <IconCelebration className={styles.eventCelebrationIcon} />
                    <h3>{f.events.celebrationTitle}</h3>
                  </div>
                  <p className={styles.eventTime}>17:00</p>
                </div>
                <p className={styles.eventQuote}>&ldquo;{f.events.celebrationQuote}&rdquo;</p>
                <div>
                  <div className={styles.eventLocation}>
                    <img src={figmaAssets.iconPinReception} alt="" width={21} height={19} />
                    <div className={styles.eventLocationText}>
                      <p className={styles.eventVenueName}>{f.events.receptionVenue}</p>
                      <p className={styles.eventAddress}>{f.events.receptionAddress}</p>
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
                    <img src={figmaAssets.receptionMap} alt={f.events.mapAltReception} decoding="async" />
                    <div className={styles.eventMapTint} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="attire" className={styles.attire} aria-labelledby="attire-heading">
        <div className={styles.attireBand}>
          <div className={styles.attireBandInner}>
            <Reveal reducedMotion={reducedMotion}>
              <p className={styles.attireBandEyebrow}>{f.attire.eyebrow}</p>
              <h2 id="attire-heading" className={styles.attireBandTitle}>
                {f.attire.title}
              </h2>
              <p className={styles.attireBandLead}>{f.attire.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className={styles.attireBody}>
          <div className={styles.attireLayout}>
            <Reveal reducedMotion={reducedMotion} delayMs={60}>
              <article className={styles.attireDressCard}>
                <span className={styles.attireCardKicker}>{f.attire.codeKicker}</span>
                <h3 className={styles.attireCardTitle}>{f.attire.codeTitle}</h3>
                <p className={styles.attireCardText}>{f.attire.codeP1}</p>
                <p className={styles.attireCardText}>{f.attire.codeP2}</p>
                <ul className={styles.attireMiniList}>
                  <li>{f.attire.bullet1}</li>
                  <li>{f.attire.bullet2}</li>
                  <li>{f.attire.bullet3}</li>
                  <li>{f.attire.bullet4}</li>
                  <li>{f.attire.bullet5}</li>
                </ul>
              </article>
            </Reveal>

            <Reveal reducedMotion={reducedMotion} delayMs={120}>
              <div className={styles.attirePaletteCard}>
                <div className={styles.attirePaletteHeader}>
                  <span className={styles.attireCardKicker}>{f.attire.paletteKicker}</span>
                  <h3 className={styles.attirePaletteTitle}>{f.attire.paletteTitle}</h3>
                  <p className={styles.attirePaletteSub}>{f.attire.paletteSub}</p>
                </div>
                <div className={styles.attirePaletteGroups}>
                  <div className={styles.attirePaletteGroup}>
                    <h4 className={styles.attirePaletteGroupTitle}>{f.attire.forHer}</h4>
                    <ul className={styles.attireSwatchRow} aria-label={f.attire.womenAria}>
                      {f.attire.paletteWomen.map((c) => (
                        <li key={`w-${c.hex}-${c.name}`} className={styles.attireSwatchItem}>
                          <span
                            className={styles.attireSwatch}
                            style={{ "--swatch": c.hex }}
                            aria-hidden
                          />
                          <span className={styles.attireSwatchName}>{c.name}</span>
                          <span className={styles.attireSwatchHint}>{c.hint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.attirePaletteGroup}>
                    <h4 className={styles.attirePaletteGroupTitle}>{f.attire.forHim}</h4>
                    <ul className={styles.attireSwatchRow} aria-label={f.attire.menAria}>
                      {f.attire.paletteMen.map((c) => (
                        <li key={`m-${c.hex}-${c.name}`} className={styles.attireSwatchItem}>
                          <span
                            className={styles.attireSwatch}
                            style={{ "--swatch": c.hex }}
                            aria-hidden
                          />
                          <span className={styles.attireSwatchName}>{c.name}</span>
                          <span className={styles.attireSwatchHint}>{c.hint}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal reducedMotion={reducedMotion} delayMs={90}>
            <aside className={styles.attireWhiteTeaseWrap} aria-label={f.attire.whiteTeaseAria}>
              <div className={styles.attireWhiteTeaseCard}>
                <div className={styles.attireTeaseQuestionsRow}>
                  <span className={styles.attireWhiteTeaseLabel}>{f.attire.whiteTeaseLabel}</span>
                  <p className={styles.attireFootnoteInline}>{f.attire.whiteTeaseInline}</p>
                </div>
                <p className={styles.attireWhiteTease}>
                  {f.attire.whiteTeaseBefore}
                  <em>{f.attire.whiteTeaseEm}</em>
                  {f.attire.whiteTeaseAfter}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="schedule" className={styles.schedule} aria-labelledby="schedule-heading">
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
                  const side = i % 2 === 0 ? styles.scheduleItemStart : styles.scheduleItemEnd;
                  return (
                    <Reveal
                      key={row.datetime + row.title}
                      as="li"
                      className={`${styles.scheduleItem} ${side}`.trim()}
                      reducedMotion={reducedMotion}
                      delayMs={i * 36}
                    >
                      <div className={styles.scheduleRow}>
                        <time className={styles.scheduleTime} dateTime={row.datetime}>
                          <span className={styles.scheduleTimeInner}>{row.time}</span>
                        </time>
                        <div className={styles.scheduleCard}>
                          <h3 className={styles.scheduleCardTitle}>{row.title}</h3>
                          <p className={styles.schedulePlace}>{row.place}</p>
                          <p className={styles.scheduleDetail}>{row.detail}</p>
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

      <section id="roots" className={styles.roots} aria-labelledby="roots-heading">
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
            {NAV_IDS.map(({ id, key }) => (
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
