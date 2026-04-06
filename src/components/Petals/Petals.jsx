import { useMemo } from "react";
import styles from "./Petals.module.css";

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Petals({ count = 8, seed = 2406 }) {
  const petals = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map((_, i) => {
      const x = rand() * 100;
      const s = 0.75 + rand() * 1.45;
      const d = rand() * 5200;
      const t = 12000 + rand() * 9000;
      const r = rand() * 360;
      const drift = 16 + rand() * 26;
      const hue = rand() > 0.5 ? "champagne" : "pearl";
      return { id: i, x, s, d, t, r, drift, hue };
    });
  }, [count, seed]);

  return (
    <div className={styles.layer} aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`${styles.petal} ${p.hue === "champagne" ? styles.champagne : styles.pearl}`}
          style={{
            left: `${p.x}%`,
            "--s": p.s,
            "--d": `${p.d}ms`,
            "--t": `${p.t}ms`,
            "--r": `${p.r}deg`,
            "--x": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
