export function IconCalendar(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M7 3v3M17 3v3M4.5 8.5h15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M6.5 21h11c1.1 0 2-.9 2-2V7.5c0-1.1-.9-2-2-2h-11c-1.1 0-2 .9-2 2V19c0 1.1.9 2 2 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity=".9"
      />
      <path
        d="M8 12.2h3.3M8 15.6h6.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity=".85"
      />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 6.5v6l4 2.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconChurch(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 2.5v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9.7 4.8h4.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity=".9"
      />
      <path
        d="M7 10.2 12 6.8l5 3.4v11.3H7V10.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 21.5v-4.2c0-1 0.8-1.8 1.8-1.8s1.8 0.8 1.8 1.8v4.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M9.4 12.2h5.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity=".8"
      />
    </svg>
  );
}

/** Garden party / evening; pairs with “The Celebration” event card */
export function IconCelebration(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9.5 2.5h5l-1.35 8.5h-2.3L9.5 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 11v6.5M9.85 18h4.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M17.5 3.8v2.4M16.3 5h2.4M19.8 9.5l1.35 1.35M20.45 8.15v2.7M21.8 9.5h-2.7"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.88"
      />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 22s7-4.6 7-12a7 7 0 1 0-14 0c0 7.4 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.1a3.1 3.1 0 1 0 0-6.2 3.1 3.1 0 0 0 0 6.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

/** Hero scroll hint; replaces fragile Figma MCP asset URLs */
export function IconChevronDown(props) {
  return (
    <svg
      viewBox="0 0 12 7"
      width="12"
      height="7"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M1 1.5 5.5 4 10 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
