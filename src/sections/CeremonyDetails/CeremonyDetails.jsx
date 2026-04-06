import shared from "../sectionShared.module.css";
import styles from "./CeremonyDetails.module.css";
import { Reveal } from "../../components/Reveal/Reveal.jsx";
import { Ornament } from "../../components/Ornament/Ornament.jsx";
import {
  IconCalendar,
  IconClock,
  IconChurch,
  IconPin,
} from "../../components/Icons/Icons.jsx";

const iconFor = {
  date: IconCalendar,
  time: IconClock,
  church: IconChurch,
  location: IconPin,
};

export function CeremonyDetails({ t }) {
  const items = t.ceremony.items;
  const keys = /** @type {const} */ (["date", "time", "church", "location"]);

  return (
    <section className={shared.section} aria-label={t.ceremony.title}>
      <Reveal className={styles.head}>
        <div className={shared.eyebrow}>{t.ceremony.eyebrow}</div>
        <h3 className={shared.title}>{t.ceremony.title}</h3>
        <Ornament />
      </Reveal>

      <div className={styles.grid} role="list" aria-label={t.ceremony.title}>
        {keys.map((k, idx) => {
          const Icon = iconFor[k];
          return (
            <Reveal
              key={k}
              className={`${shared.card} ${styles.item}`}
              as="div"
              delayMs={idx * 70}
              role="listitem"
            >
              <div className={styles.icon} aria-hidden="true">
                <Icon />
              </div>
              <div className={styles.text}>
                <div className={styles.label}>{items[k].label}</div>
                <div className={styles.value}>{items[k].value}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
