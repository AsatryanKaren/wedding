import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({ lang, onChange, labels }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <span className="srOnly">{labels.ariaLabel}</span>
        <div className={styles.pill} role="group" aria-label={labels.ariaLabel}>
          <button
            type="button"
            className={`${styles.btn} ${lang === "hy" ? styles.active : ""}`}
            onClick={() => onChange("hy")}
            aria-pressed={lang === "hy"}
          >
            {labels.hy}
          </button>
          <button
            type="button"
            className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
            onClick={() => onChange("en")}
            aria-pressed={lang === "en"}
          >
            {labels.en}
          </button>
          <span className={styles.glow} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

