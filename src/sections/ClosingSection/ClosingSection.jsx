import shared from "../sectionShared.module.css";
import styles from "./ClosingSection.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";

export function ClosingSection({ t }) {
  return (
    <section
      className={`${shared.section} ${styles.section}`}
      aria-label={t.closing.title}
    >
      <div className={styles.bg} aria-hidden="true" />

      <Reveal className={styles.center}>
        <h3 className={styles.title}>{t.closing.title}</h3>
        <Ornament />
        <p className={styles.body}>{t.closing.body}</p>
        <div className={styles.names}>{t.closing.namesLine}</div>
      </Reveal>
    </section>
  );
}
