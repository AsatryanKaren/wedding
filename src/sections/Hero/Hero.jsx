import { useEffect, useMemo, useState } from "react";
import styles from "./Hero.module.css";
import shared from "../sectionShared.module.css";
import { Ornament } from "../../components/Ornament/Ornament.jsx";
import { Particles } from "../../components/Particles/Particles.jsx";
import { Petals } from "../../components/Petals/Petals.jsx";

function getTargetDate() {
  const now = new Date();
  const year = now.getFullYear();
  // June is month 5 in JS Date
  return new Date(year, 5, 24, 14, 0, 0, 0);
}

function formatCountdown(ms, lang) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);

  const pad2 = (n) => String(n).padStart(2, "0");
  if (lang === "hy") return `${days} օր · ${pad2(hours)}:${pad2(mins)}`;
  return `${days} d · ${pad2(hours)}:${pad2(mins)}`;
}

export function Hero({ t, lang }) {
  const [loaded, setLoaded] = useState(false);
  const target = useMemo(getTargetDate, []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const msLeft = target.getTime() - now.getTime();
  const showCountdown = msLeft > 0 && msLeft < 1000 * 60 * 60 * 24 * 300;

  return (
    <section
      className={styles.hero}
      aria-label={t.hero.ariaLabel}
      data-loaded={loaded ? "1" : "0"}
    >
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgFade} />
        <Particles count={18} seed={24} />
        <Petals count={7} seed={2406} />
        <div className={styles.vignette} />
      </div>

      <div className={styles.frame} aria-hidden="true">
        <svg
          viewBox="0 0 1000 520"
          className={styles.frameSvg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="34" y="34" width="932" height="452" rx="26" />
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={shared.eyebrow}>{t.hero.subtitle}</div>
        </div>

        <div className={styles.names}>
          <h1 className={styles.nameLine}>
            <span className={styles.name}>{t.hero.names.first}</span>
          </h1>
          <div className={styles.and} aria-hidden="true">
            <span className={styles.andLine} />
            <span className={styles.andAmp}>&</span>
            <span className={styles.andLine} />
          </div>
          <h2 className={styles.nameLine}>
            <span className={styles.name}>{t.hero.names.second}</span>
          </h2>
        </div>

        <Ornament />

        <div className={styles.infoGrid} aria-label={t.ceremony.title}>
          <div className={styles.infoItem}>
            <div className={styles.k}>{t.hero.dateLabel}</div>
            <div className={styles.v}>{t.hero.date}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.k}>{t.hero.timeLabel}</div>
            <div className={styles.v}>{t.hero.time}</div>
          </div>
          <div className={`${styles.infoItem} ${styles.infoWide}`}>
            <div className={styles.k}>{t.hero.placeLabel}</div>
            <div className={styles.v}>{t.hero.place}</div>
          </div>
        </div>

        {showCountdown ? (
          <div className={styles.countdown} aria-label={t.hero.countdownLabel}>
            <span className={styles.countdownLabel}>
              {t.hero.countdownLabel}
            </span>
            <span className={styles.countdownValue}>
              {formatCountdown(msLeft, lang)}
            </span>
          </div>
        ) : null}

        <a
          className={styles.scroll}
          href="#invitation"
          aria-label={t.hero.scrollHint}
        >
          <span className={styles.scrollText}>{t.hero.scrollHint}</span>
          <span className={styles.scrollDot} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
