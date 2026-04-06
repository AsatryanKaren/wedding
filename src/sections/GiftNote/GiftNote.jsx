import shared from "../sectionShared.module.css";
import styles from "./GiftNote.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";

export function GiftNote({ t }) {
  return (
    <section className={shared.section} aria-label={t.gift.title}>
      <Reveal className={styles.center}>
        <div className={shared.eyebrow}>{t.gift.eyebrow}</div>
        <h3 className={shared.title}>{t.gift.title}</h3>
        <Ornament />
      </Reveal>

      <Reveal className={`${shared.card} ${styles.card}`} delayMs={80}>
        <div className={styles.inner}>
          <div className={styles.mark} aria-hidden="true">
            ♡
          </div>
          <div className={styles.text}>
            {t.gift.body.map((p) => (
              <p key={p} className={styles.p}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
