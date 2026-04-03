import { useEffect, useState } from "react";

/** Section `id`s in document order; must match `href="#..."` in the nav */
const SECTION_IDS = ["home", "story", "events", "attire", "schedule", "roots"];

/**
 * Which section is “current” while scrolling (for fixed nav highlight).
 * Uses the last section whose top has crossed the offset (aligns with anchor scroll-margin).
 */
export function useActiveNavSection(offsetPx = 96) {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);

  useEffect(() => {
    const compute = () => {
      let active = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= offsetPx) {
          active = id;
        }
      }
      setActiveId((prev) => (prev === active ? prev : active));
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [offsetPx]);

  return activeId;
}
