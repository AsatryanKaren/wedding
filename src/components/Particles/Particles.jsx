import { useMemo } from "react";
import styles from "./Particles.module.css";

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Particles({ count = 16, seed = 24 }) {
  const items = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map((_, i) => {
      const x = rand() * 100;
      const y = rand() * 100;
      const s = 0.55 + rand() * 1.25;
      const d = rand() * 4200;
      const t = 7400 + rand() * 5600;
      const o = 0.18 + rand() * 0.34;
      const hue = rand() > 0.5 ? "gold" : "pearl";
      return { id: i, x, y, s, d, t, o, hue };
    });
  }, [count, seed]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          className={`${styles.p} ${p.hue === "gold" ? styles.gold : styles.pearl}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.o,
            "--s": p.s,
            "--d": `${p.d}ms`,
            "--t": `${p.t}ms`,
          }}
        />
      ))}
    </div>
  );
}
