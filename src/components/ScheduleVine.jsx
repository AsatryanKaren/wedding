import { useId } from "react";

/**
 * Soft S-curve “vine” for the schedule; reads as botanical / ceremonial, not a rigid timeline.
 */
export function ScheduleVine({ className }) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      className={className}
      viewBox="0 0 120 1000"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient
          id={`sv-stroke-${uid}`}
          x1="0"
          y1="0"
          x2="120"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#735c00" stopOpacity="0.2" />
          <stop offset="0.45" stopColor="#4d6453" stopOpacity="0.38" />
          <stop offset="1" stopColor="#735c00" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient
          id={`sv-glow-${uid}`}
          x1="60"
          y1="0"
          x2="60"
          y2="1000"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d0e9d4" stopOpacity="0" />
          <stop offset="0.5" stopColor="#d0e9d4" stopOpacity="0.35" />
          <stop offset="1" stopColor="#d0e9d4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M60 0 C 102 140 18 280 60 420 C 102 560 18 700 60 840 C 88 920 32 980 60 1000"
        stroke={`url(#sv-glow-${uid})`}
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M60 0 C 102 140 18 280 60 420 C 102 560 18 700 60 840 C 88 920 32 980 60 1000"
        stroke={`url(#sv-stroke-${uid})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
