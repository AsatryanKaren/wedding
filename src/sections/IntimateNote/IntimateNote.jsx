import shared from "../sectionShared.module.css";
import styles from "./IntimateNote.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";

export function IntimateNote({ t }) {
  return (
    <section className={shared.section} aria-label={t.intimate.title}>
      <div className={styles.bg} aria-hidden="true" />

      <Reveal className={styles.center}>
        <div className={shared.eyebrow}>{t.intimate.eyebrow}</div>
        <h3 className={shared.title}>{t.intimate.title}</h3>
        <Ornament />
      </Reveal>

      <Reveal className={`${shared.card} ${styles.card}`} delayMs={80}>
        <div className={styles.inner}>
          {t.intimate.body.map((p) => (
            <p key={p} className={styles.p}>
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
