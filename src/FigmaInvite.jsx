import { figmaAssets, venueLinks } from "./constants/figmaAssets.js";
import { useInViewOnce } from "./hooks/useInViewOnce.js";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useActiveNavSection } from "./hooks/useActiveNavSection.js";
import { useScrollPast } from "./hooks/useScrollPast.js";
import { useWeddingCountdown } from "./hooks/useWeddingCountdown.js";
import { FamilyTreeVisual } from "./components/FamilyTreeVisual.jsx";
import { IconCelebration } from "./components/Icons/Icons.jsx";
import { ScheduleVine } from "./components/ScheduleVine.jsx";
import styles from "./FigmaInvite.module.css";

const WEDDING_AT = new Date("2026-06-24T14:00:00");

const WEDDING_DAY_SCHEDULE = [
  {
    time: "14:00",
    datetime: "2026-06-24T14:00:00",
    title: "Ceremony",
    place: "Saint Anna Church — Abovyan St, Yerevan",
    detail: "We exchange our vows surrounded by family and friends. Please silence phones and enjoy the moment with us.",
    tag: "Vows",
  },
  {
    time: "15:00",
    datetime: "2026-06-24T15:00:00",
    title: "Photo session",
    place: "Saint Anna Church & grounds",
    detail: "Portraits with us and the wedding party before everyone heads toward Art Village.",
    tag: "Photos",
  },
  {
    time: "17:00",
    datetime: "2026-06-24T17:00:00",
    title: "Guest arrival at the venue",
    place: "Art Village Armenia — Ashtarak",
    detail: "Welcome drinks, find your table, and settle in among the gardens before the evening unfolds.",
    tag: "Arrival",
  },
  {
    time: "17:30",
    datetime: "2026-06-24T17:30:00",
    title: "Cocktails & lemonade",
    place: "Art Village — gardens & pavilion",
    detail: "Signature cocktails, fresh lemonade, and light bites while the space fills with conversation.",
    tag: "Reception",
  },
  {
    time: "18:00",
    datetime: "2026-06-24T18:00:00",
    title: "Dinner is served",
    place: "Art Village — celebration spaces",
    detail: "Plated dinner, toasts from our nearest and dearest, and your chosen entrée.",
    tag: "Feast",
  },
  {
    time: "19:30",
    datetime: "2026-06-24T19:30:00",
    title: "First dance",
    place: "Art Village Hall",
    detail: "We open the dancing together under the lights — then the floor is yours.",
    tag: "Dance",
  },
  {
    time: "20:30",
    datetime: "2026-06-24T20:30:00",
    title: "Open dancing",
    place: "Terrace & gardens",
    detail: "DJ sets until late; cozy wraps if the evening turns cool.",
    tag: "Party",
  },
  {
    time: "21:00",
    datetime: "2026-06-24T21:00:00",
    title: "Cake",
    place: "Art Village Hall",
    detail: "Something sweet before the night carries on — join us for the cutting.",
    tag: "Cake",
  },
  {
    time: "22:30",
    datetime: "2026-06-24T22:30:00",
    title: "Sparkling toast",
    place: "Art Village",
    detail: "A glass of something sparkling with everyone — cheers to you for being here.",
    tag: "Toast",
  },
];

const ATTIRE_PALETTE_WOMEN = [
  { hex: "#6b7d6e", name: "Sage", hint: "Midi & maxi dresses, soft linen, cool undertones" },
  { hex: "#e8d9ce", name: "Blush", hint: "Dusty rose, mauve, and barely-there pink" },
  { hex: "#c4a574", name: "Champagne", hint: "Metallic sheen, gold-beige, warm jewellery" },
  { hex: "#d4c4a8", name: "Sand", hint: "Oat, stone, and warm cream separates" },
  { hex: "#8b7d82", name: "Dusty mauve", hint: "Muted plum & taupe florals" },
  { hex: "#5c6b62", name: "Eucalyptus", hint: "Blue-green silks & light crepe" },
];

const ATTIRE_PALETTE_MEN = [
  { hex: "#1b3022", name: "Forest", hint: "Deep green or charcoal wool suits" },
  { hex: "#3d5244", name: "Moss", hint: "Olive & sage tailoring, textured jackets" },
  { hex: "#2a3540", name: "Midnight", hint: "Navy suit, crisp white or cream shirt" },
  { hex: "#1a1a1a", name: "Black", hint: "Classic black suit or dinner jacket — always welcome" },
  { hex: "#4a4a48", name: "Charcoal", hint: "Grey suit, matte black accessories" },
  { hex: "#d4c4a8", name: "Sand", hint: "Linen blazer, tan chinos, light knit" },
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

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "story", label: "Story" },
  { id: "events", label: "Details" },
  { id: "attire", label: "Attire" },
  { id: "schedule", label: "Schedule" },
  { id: "roots", label: "Roots" },
];

export default function FigmaInvite() {
  const countdown = useWeddingCountdown(WEDDING_AT);
  const reducedMotion = useReducedMotion();
  const navScrolled = useScrollPast(40);
  const activeNavId = useActiveNavSection(88);

  const motion = reducedMotion ? "reduce" : "full";

  return (
    <div className={styles.page} data-motion={motion}>
      <header className={`${styles.topNav} ${navScrolled ? styles.topNavScrolled : ""}`.trim()}>
        <p className={styles.logo}>
          <span className={styles.logoName}>Karen</span>
          <span className={styles.logoAmp}>&amp;</span>
          <span className={styles.logoName}>Anna</span>
        </p>
        <nav aria-label="Primary">
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  className={activeNavId === id ? styles.active : undefined}
                  href={`#${id}`}
                  aria-current={activeNavId === id ? "true" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section
        id="home"
        className={`${styles.hero} ${styles.heroLetterOpened} ${styles.heroUnified}`.trim()}
        aria-label="Welcome"
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
              <p className={styles.heroKicker}>You are invited to the wedding of</p>
              <h1 className={styles.heroTitle}>Karen &amp; Anna</h1>
              <p className={styles.heroDate}>June 24, 2026</p>
              <hr className={styles.heroRule} />
              {countdown.passed ? (
                <p className={`${styles.heroDate} ${styles.heroAfterRule}`} style={{ fontSize: "1.125rem" }}>
                  With love — thank you for celebrating with us.
                </p>
              ) : (
                <div className={`${styles.countdown} ${styles.heroAfterRule}`} aria-live="polite">
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.days}</p>
                    <p className={styles.countLabel}>Days</p>
                  </div>
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.hours}</p>
                    <p className={styles.countLabel}>Hours</p>
                  </div>
                  <div className={styles.countItem}>
                    <p className={styles.countNum}>{countdown.mins}</p>
                    <p className={styles.countLabel}>Mins</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <a href="#story" className={styles.heroChevron} aria-label="Scroll to story">
          <img src={figmaAssets.chevronDown} alt="" width={12} height={7} />
        </a>
      </section>

      <section id="story" className={styles.story}>
        <div className={styles.storyGrid}>
          <Reveal reducedMotion={reducedMotion}>
            <div>
              <p className={styles.storyEyebrow}>Our Journey</p>
              <h2 className={styles.storyHeading}>
                How we found each other — and kept choosing one another.
              </h2>
              <p className={styles.storyLead}>
                Ours began in the most ordinary kind of room — a meeting at the office — and grew from
                there into something neither of us saw coming, until one birthday changed everything.
              </p>
              <div className={styles.timeline}>
                <article className={styles.timelineItem}>
                  <span className={styles.timelineDot} aria-hidden />
                  <h3>The First Hello</h3>
                  <p className={styles.timelineMeta}>March 28 • The office where we work</p>
                  <p className={styles.timelineBody}>
                    We met across a conference table: Karen as project manager, Anna as frontend
                    developer. It was just another work meeting — until the conversation lingered, and
                    the professional line between us quietly softened into curiosity, then friendship,
                    then something neither agenda nor calendar had planned.
                  </p>
                </article>
                <article className={styles.timelineItem}>
                  <span className={styles.timelineDot} aria-hidden />
                  <h3>The Proposal</h3>
                  <p className={styles.timelineMeta}>September 8 • Karen&apos;s birthday</p>
                  <p className={styles.timelineBody}>
                    Anna chose a day Karen thought was only about cake and candles — her birthday, when
                    she wasn&apos;t watching for a ring or a speech. In that unguarded, happy moment, the
                    question landed: not in a grand production, but in the middle of real life, when
                    love felt safest and most surprising all at once.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
          <Reveal reducedMotion={reducedMotion} delayMs={140}>
            <div className={styles.storyPhotos}>
              <div className={styles.storyPhotosBlur} aria-hidden />
              <div className={styles.photoGrid}>
                <div className={`${styles.photoCard} ${styles.photoCardHero}`.trim()}>
                  <img
                    src={figmaAssets.storyPhotoPortrait}
                    alt="Karen and Anna, portrait"
                    decoding="async"
                  />
                </div>
                <div className={`${styles.photoCard} ${styles.photoCardStack}`.trim()}>
                  <img
                    src={figmaAssets.storyPhotoRight}
                    alt="Karen and Anna in Rome"
                    decoding="async"
                  />
                </div>
                <div className={`${styles.photoCard} ${styles.photoCardStack}`.trim()}>
                  <img
                    src={figmaAssets.storyPhotoLeft}
                    alt="Karen and Anna overlooking the city"
                    decoding="async"
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
              <p className={styles.eventsEyebrow}>The Celebration</p>
              <h2 className={styles.eventsTitle}>Where and When</h2>
            </header>
          </Reveal>
          <div className={styles.eventCards}>
            <Reveal reducedMotion={reducedMotion}>
              <article className={styles.eventCard}>
                <div className={styles.eventCardTop}>
                  <div>
                    <img src={figmaAssets.iconCeremony} alt="" width={29} height={31} />
                    <h3>The Ceremony</h3>
                  </div>
                  <p className={styles.eventTime}>14:00</p>
                </div>
                <p className={styles.eventQuote}>
                  &ldquo;A sacred union amidst the soft whispers of stone and spirit.&rdquo;
                </p>
                <div>
                  <div className={styles.eventLocation}>
                    <img src={figmaAssets.iconPinCeremony} alt="" width={15} height={19} />
                    <div className={styles.eventLocationText}>
                      <p className={styles.eventVenueName}>Saint Anna Church</p>
                      <p className={styles.eventAddress}>Abovyan St, Yerevan, Armenia</p>
                      <a
                        className={styles.eventVenueLink}
                        href={venueLinks.saintAnnaGoogleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
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
                      alt="Saint Anna Church (Katoghike), Abovyan Street, Yerevan"
                      decoding="async"
                    />
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
                    <h3>The Celebration</h3>
                  </div>
                  <p className={styles.eventTime}>17:00</p>
                </div>
                <p className={styles.eventQuote}>
                  &ldquo;Dining where gardens and open sky meet — at Art Village Armenia.&rdquo;
                </p>
                <div>
                  <div className={styles.eventLocation}>
                    <img src={figmaAssets.iconPinReception} alt="" width={21} height={19} />
                    <div className={styles.eventLocationText}>
                      <p className={styles.eventVenueName}>Art Village Armenia</p>
                      <p className={styles.eventAddress}>
                        Aragatsotn Province, Ashtarak Municipality — plot 25
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
                          Open in Google Maps
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
                      alt="Art Village Armenia — event venue and gardens"
                      decoding="async"
                    />
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
              <p className={styles.attireBandEyebrow}>Dress the part</p>
              <h2 id="attire-heading" className={styles.attireBandTitle}>
                What to wear &amp; which colours feel at home
              </h2>
              <p className={styles.attireBandLead}>
                Garden formal with a whisper of the woods — think movement, texture, and tones that belong
                beside stone, grass, and candlelight.
              </p>
            </Reveal>
          </div>
        </div>

        <div className={styles.attireBody}>
          <div className={styles.attireLayout}>
            <Reveal reducedMotion={reducedMotion} delayMs={60}>
              <article className={styles.attireDressCard}>
                <span className={styles.attireCardKicker}>The code</span>
                <h3 className={styles.attireCardTitle}>Garden formal</h3>
                <p className={styles.attireCardText}>
                  Think of the day in two chapters: the ceremony at Saint Anna, then celebration among the
                  gardens and halls of Art Village. Long or midi dresses, tailored suits, and polished
                  separates all feel at home — we love when you dress up a little, in whatever shape that
                  takes for you.
                </p>
                <p className={styles.attireCardText}>
                  Layers are your friend: June light can be warm, and the evening may cool once the sun
                  drops. Nothing has to match perfectly; we care most that you feel comfortable moving from
                  stone and pew to lawn, terrace, and dance floor without a second thought.
                </p>
                <ul className={styles.attireMiniList}>
                  <li>
                    Fabrics that breathe: linen, silk, light wool, crepe — anything that drapes and moves
                    with you through a long, happy day
                  </li>
                  <li>
                    Heels are welcome; a block heel, wedge, or elegant flat will be kinder on grass and
                    gravel between venues
                  </li>
                  <li>
                    For suits, black is absolutely welcome — alongside navy, charcoal, greens, or anything
                    in the palette below. A well-fitted jacket and trousers (or refined separates)
                    photographs beautifully beside softer dress tones
                  </li>
                  <li>
                    A wrap, shawl, or light jacket for after sunset — especially if you run cool when the
                    music starts
                  </li>
                  <li>
                    Small bag or clutch is plenty; you won&apos;t need to carry much once you&apos;re with us
                  </li>
                </ul>
              </article>
            </Reveal>

            <Reveal reducedMotion={reducedMotion} delayMs={120}>
              <div className={styles.attirePaletteCard}>
                <div className={styles.attirePaletteHeader}>
                  <span className={styles.attireCardKicker}>Palette</span>
                  <h3 className={styles.attirePaletteTitle}>Colours we&apos;re dreaming of</h3>
                  <p className={styles.attirePaletteSub}>
                    Two gentle ranges below — pick what feels like you. They sit in the same garden, so
                    everyone still photographs beautifully together.
                  </p>
                </div>
                <div className={styles.attirePaletteGroups}>
                  <div className={styles.attirePaletteGroup}>
                    <h4 className={styles.attirePaletteGroupTitle}>For her</h4>
                    <ul className={styles.attireSwatchRow} aria-label="Suggested colours for women">
                      {ATTIRE_PALETTE_WOMEN.map((c) => (
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
                    <h4 className={styles.attirePaletteGroupTitle}>For him</h4>
                    <ul className={styles.attireSwatchRow} aria-label="Suggested colours for men">
                      {ATTIRE_PALETTE_MEN.map((c) => (
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
            <aside className={styles.attireWhiteTeaseWrap} aria-label="Note on wearing white">
              <div className={styles.attireWhiteTeaseCard}>
                <div className={styles.attireTeaseQuestionsRow}>
                  <span className={styles.attireWhiteTeaseLabel}>A tiny rule, with humour</span>
                  <p className={styles.attireFootnoteInline}>
                    Questions? Wear what makes you feel handsome, radiant, and ready to celebrate — if you&apos;re
                    close to either palette above, you&apos;re already perfect.
                  </p>
                </div>
                <p className={styles.attireWhiteTease}>
                  To the women joining us: white and ivory are on a <em>very</em> exclusive guest list — it
                  caps at two, and we already filled both seats. If your outfit could moonlight in a detergent
                  ad or upstage us at the altar, please aim for literally any other colour. We promise we&apos;ll
                  still gasp at how good you look — just not because you&apos;re wearing our signature shade.
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
              <p className={styles.scheduleEyebrow}>The Day Unfolds</p>
              <h2 id="schedule-heading" className={styles.scheduleTitle}>
                Wedding day schedule
              </h2>
              <p className={styles.scheduleSub}>
                Everything you need to know about where to be and when — times are a gentle guide; we&apos;ll
                keep you looked after from arrival to send-off.
              </p>
            </header>
          </Reveal>
          <div className={styles.scheduleFlow}>
            <div className={styles.scheduleTrack}>
              <ScheduleVine className={styles.scheduleVine} />
              <ol className={styles.scheduleList}>
              {WEDDING_DAY_SCHEDULE.map((row, i) => {
                const side = i % 2 === 0 ? styles.scheduleItemStart : styles.scheduleItemEnd;
                return (
                  <Reveal
                    key={row.time + row.title}
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
                <p className={styles.rootsEyebrow}>Two families, one canopy</p>
                <h2 id="roots-heading" className={styles.rootsHeading}>
                  Rooted together
                </h2>
                <p className={styles.rootsSubline}>Growing a new branch of family.</p>
                <p className={styles.rootsLead}>
                  For us, marriage is more than a vow between two people. It gathers the stories, tables, and
                  traditions we each grew up with — two family trees leaning close until their branches meet, and
                  something altogether new has room to grow.
                </p>
                <blockquote className={styles.rootsQuote}>
                  <p>
                    We carry the love that raised us into the home we&apos;re building side by side.
                  </p>
                </blockquote>
                <ul className={styles.rootsList}>
                  <li>Honoring the parents and elders who taught us how to love well.</li>
                  <li>Celebrating cousins, siblings, and friends who already feel like kin.</li>
                  <li>Looking ahead to the memories we&apos;ll make — anniversaries, holidays, and ordinary Tuesdays.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal reducedMotion={reducedMotion}>
        <footer className={styles.footer}>
          <p className={styles.footerNames}>Karen &amp; Anna</p>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#schedule">Schedule</a>
            </li>
            <li>
              <a href="#attire">Attire</a>
            </li>
            <li>
              <a href="#events">Location</a>
            </li>
            <li>
              <a href="https://instagram.com" rel="noreferrer" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="#home">Privacy</a>
            </li>
          </ul>
          <p className={styles.footerLegal}>© 2026 Karen &amp; Anna. Made with love.</p>
        </footer>
      </Reveal>
    </div>
  );
}
