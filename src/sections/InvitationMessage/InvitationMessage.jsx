import shared from "../sectionShared.module.css";
import styles from "./InvitationMessage.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";

export function InvitationMessage({ t }) {
  return (
    <section
      id="invitation"
      className={shared.section}
      aria-label={t.invitation.title}
    >
      <div className={shared.softGlow} aria-hidden="true" />

      <Reveal className={styles.center}>
        <div className={shared.eyebrow}>{t.invitation.eyebrow}</div>
        <h3 className={shared.title}>{t.invitation.title}</h3>
        <Ornament />
      </Reveal>

      <Reveal className={`${shared.card} ${styles.card}`} delayMs={80}>
        <div className={styles.body}>
          {t.invitation.body.map((p) => (
            <p key={p} className={styles.p}>
              {p}
            </p>
          ))}
          <div className={styles.sig}>{t.invitation.signature}</div>
        </div>
      </Reveal>
    </section>
  );
}
