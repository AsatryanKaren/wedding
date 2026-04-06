import styles from "./Ornament.module.css";

export function Ornament({ label }) {
  return (
    <div
      className={styles.wrap}
      aria-hidden={label ? "false" : "true"}
      aria-label={label}
    >
      <span className={styles.line} />
      <span className={styles.dot} />
      <svg
        className={styles.flourish}
        viewBox="0 0 200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 12c16.6 0 25.5-8.8 35.6-8.8 8 0 12.3 3.9 14.4 8.8-2.1 4.9-6.4 8.8-14.4 8.8-10.1 0-19-8.8-35.6-8.8Z"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.35"
        />
        <path
          d="M100 12c-16.6 0-25.5-8.8-35.6-8.8-8 0-12.3 3.9-14.4 8.8 2.1 4.9 6.4 8.8 14.4 8.8 10.1 0 19-8.8 35.6-8.8Z"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.35"
        />
        <path
          d="M100 6.5c3.9 0 7 2.5 7 5.5s-3.1 5.5-7 5.5-7-2.5-7-5.5 3.1-5.5 7-5.5Z"
          stroke="currentColor"
          strokeWidth="1.25"
          opacity="0.6"
        />
      </svg>
      <span className={styles.dot} />
      <span className={styles.line} />
    </div>
  );
}
