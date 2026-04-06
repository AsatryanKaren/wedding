import styles from "./FamilyTreeVisual.module.css";

/**
 * Stylized tree: two stems joining into one trunk, shared roots, one canopy,
 * metaphor for two families growing together.
 */
export function FamilyTreeVisual() {
  return (
    <div className={styles.wrap} aria-hidden>
      <svg
        className={styles.svg}
        viewBox="0 0 420 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ft-canopy" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5a7260" stopOpacity="0.42" />
            <stop offset="45%" stopColor="#4d6453" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#735c00" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="ft-root" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#061b0e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#061b0e" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ft-trunk" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#061b0e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1b3022" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Ground wash */}
        <ellipse
          cx="210"
          cy="518"
          rx="168"
          ry="22"
          fill="#061b0e"
          fillOpacity="0.055"
        />

        <g>
          <g className={styles.roots}>
            <path
              d="M210 498c-32 14-58 32-80 54M210 498c34 12 62 30 86 50M210 508c-22 10-42 24-58 40M210 508c24 8 46 20 64 36M210 518c-14 6-28 16-40 28M210 518c16 6 32 14 44 26"
              stroke="url(#ft-root)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M210 486c-44-10-84-28-114-52M210 486c48-8 90-24 122-46"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>

          {/* Twin lower stems → merge into one */}
          <path
            className={styles.trunkLeft}
            d="M 176 498 C 188 448 198 402 208 358 C 204 338 206 318 210 302"
            stroke="url(#ft-trunk)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={styles.trunkRight}
            d="M 244 498 C 232 448 222 402 212 358 C 216 338 214 318 210 302"
            stroke="url(#ft-trunk)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className={styles.trunk}
            d="M210 302V208"
            stroke="url(#ft-trunk)"
            strokeWidth="3.4"
            strokeLinecap="round"
          />

          <g className={styles.rings}>
            <ellipse
              cx="210"
              cy="378"
              rx="24"
              ry="11"
              stroke="currentColor"
              strokeOpacity="0.28"
              strokeWidth="1.3"
            />
            <ellipse
              cx="210"
              cy="390"
              rx="28"
              ry="13"
              stroke="#735c00"
              strokeOpacity="0.55"
              strokeWidth="1.15"
            />
          </g>

          <path
            className={styles.branchLeft}
            d="M210 268c-48-22-88-62-108-112-8-22-12-46-10-72"
            stroke="#3d5244"
            strokeWidth="2.35"
            strokeLinecap="round"
          />
          <path
            className={styles.branchRight}
            d="M210 262c52-24 96-68 116-120 10-28 14-58 10-90"
            stroke="#4d5640"
            strokeWidth="2.35"
            strokeLinecap="round"
          />
          <path
            d="M210 248c-28-36-42-78-38-120M210 242c32-40 50-86 46-132"
            stroke="currentColor"
            strokeOpacity="0.38"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          <path
            className={styles.canopy}
            d="M210 40c-76 30-124 94-124 168 0 54 30 102 76 132 26 17 56 26 88 26s62-9 88-26c46-30 76-78 76-132 0-74-48-138-124-168z"
            fill="url(#ft-canopy)"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeOpacity="0.38"
          />

          <g className={styles.leaves}>
            <circle
              cx="108"
              cy="124"
              r="3.5"
              fill="#735c00"
              fillOpacity="0.5"
            />
            <circle cx="152" cy="82" r="3" fill="#4d6453" fillOpacity="0.45" />
            <circle cx="198" cy="58" r="3.2" fill="#5a7260" fillOpacity="0.5" />
            <circle cx="210" cy="88" r="4" fill="#735c00" fillOpacity="0.48" />
            <circle
              cx="268"
              cy="64"
              r="3.4"
              fill="#735c00"
              fillOpacity="0.46"
            />
            <circle cx="312" cy="98" r="3" fill="#4d6453" fillOpacity="0.42" />
            <circle
              cx="328"
              cy="152"
              r="2.8"
              fill="#735c00"
              fillOpacity="0.44"
            />
            <circle cx="88" cy="178" r="2.6" fill="#4d6453" fillOpacity="0.4" />
            <circle
              cx="132"
              cy="148"
              r="2.4"
              fill="#735c00"
              fillOpacity="0.38"
            />
            <circle
              cx="288"
              cy="132"
              r="2.5"
              fill="#5a7260"
              fillOpacity="0.4"
            />
            <circle
              cx="248"
              cy="108"
              r="2.2"
              fill="#735c00"
              fillOpacity="0.42"
            />
          </g>

          <path
            d="M210 162v48"
            stroke="#735c00"
            strokeOpacity="0.45"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle cx="210" cy="162" r="5.5" fill="#735c00" fillOpacity="0.32" />
        </g>
      </svg>
    </div>
  );
}
