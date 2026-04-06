import { useInView } from "../../hooks/useInView.js";
import styles from "./Reveal.module.css";

export function Reveal({
  as: As = "div",
  children,
  className = "",
  delayMs = 0,
}) {
  const { ref, inView } = useInView();
  return (
    <As
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.in : ""} ${className}`}
      style={{ "--d": `${delayMs}ms` }}
    >
      {children}
    </As>
  );
}
