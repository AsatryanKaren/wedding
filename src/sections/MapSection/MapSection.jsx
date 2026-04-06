import shared from "../sectionShared.module.css";
import styles from "./MapSection.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";

const MAPS_QUERY = "Saint Anna Church Abovyan Street Yerevan Armenia";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`;

export function MapSection({ t }) {
  return (
    <section className={shared.section} aria-label={t.map.title}>
      <Reveal className={styles.center}>
        <div className={shared.eyebrow}>{t.map.eyebrow}</div>
        <h3 className={shared.title}>{t.map.title}</h3>
        <p className={shared.lead}>{t.map.body}</p>
        <Ornament />
      </Reveal>

      <Reveal className={`${shared.card} ${styles.card}`} delayMs={80}>
        <div className={styles.mapWrap}>
          <iframe
            className={styles.iframe}
            title={t.map.title}
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className={styles.actions}>
          <a
            className={styles.btn}
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.map.openInMaps}
          </a>
          <div className={styles.note}>{t.map.embedNote}</div>
        </div>
      </Reveal>
    </section>
  );
}
