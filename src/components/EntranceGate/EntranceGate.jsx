import styles from "./EntranceGate.module.css";

export function EntranceGate({ t, onEnter, exiting, reducedMotion }) {
  return (
    <div
      className={styles.root}
      data-exiting={exiting ? "1" : "0"}
      data-reduced-motion={reducedMotion ? "1" : "0"}
      role="dialog"
      aria-modal="true"
      aria-label={t.gate.ariaLabel}
    >
      <div className={styles.backdrop} aria-hidden="true" />

      <button
        type="button"
        className={styles.box}
        onClick={onEnter}
        aria-label={`${t.gate.ariaLabel}. ${t.gate.hint}`}
      >
        <span className={styles.frame} aria-hidden="true" />

        <span className={styles.kicker}>{t.hero.subtitle}</span>

        <span className={styles.names}>
          <span className={styles.name}>{t.hero.names.first}</span>
          <span className={styles.and} aria-hidden="true">
            &amp;
          </span>
          <span className={styles.name}>{t.hero.names.second}</span>
        </span>

        <span className={styles.rule} aria-hidden="true" />

        <p className={styles.message}>{t.gate.message}</p>

        <span className={styles.when}>
          {t.hero.date} · {t.hero.time}
        </span>
        <span className={styles.tagline}>{t.gate.tagline}</span>

        <span className={styles.cta}>
          <span className={styles.ctaLabel}>{t.gate.cta}</span>
        </span>

        <span className={styles.hint}>{t.gate.hint}</span>
      </button>
    </div>
  );
}
