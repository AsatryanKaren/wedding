import { useCallback, useEffect, useRef, useState } from "react";
import { GlobalOutlined } from "../Icons/GlobalOutlined.jsx";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher({
  lang,
  onChange,
  labels,
  variant = "inline",
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target))
        setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = useCallback(
    (code) => {
      onChange(code);
      setOpen(false);
    },
    [onChange],
  );

  const rootClass =
    variant === "inline"
      ? `${styles.root} ${styles.rootInline}`
      : `${styles.root} ${styles.rootBar}`;

  return (
    <div ref={wrapRef} className={rootClass}>
      <span className="srOnly">{labels.ariaLabel}</span>
      <button
        type="button"
        className={styles.trigger}
        aria-label={labels.ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <GlobalOutlined className={styles.icon} aria-hidden />
      </button>
      {open ? (
        <ul className={styles.menu} role="menu" aria-label={labels.ariaLabel}>
          <li role="presentation">
            <button
              type="button"
              role="menuitemradio"
              aria-checked={lang === "hy"}
              className={`${styles.menuBtn} ${lang === "hy" ? styles.menuBtnActive : ""}`}
              onClick={() => pick("hy")}
            >
              {labels.hy}
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="menuitemradio"
              aria-checked={lang === "en"}
              className={`${styles.menuBtn} ${lang === "en" ? styles.menuBtnActive : ""}`}
              onClick={() => pick("en")}
            >
              {labels.en}
            </button>
          </li>
          <li role="presentation">
            <button
              type="button"
              role="menuitemradio"
              aria-checked={lang === "ru"}
              className={`${styles.menuBtn} ${lang === "ru" ? styles.menuBtnActive : ""}`}
              onClick={() => pick("ru")}
            >
              {labels.ru}
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
}
