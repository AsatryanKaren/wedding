import { useEffect, useRef, useState } from "react";

/**
 * Sets visible to true once the element intersects the viewport, then disconnects.
 */
export function useInViewOnce(options = {}) {
  const ref = useRef(null);
  const {
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.08,
    disabled = false,
  } = options;
  const [visible, setVisible] = useState(() => Boolean(disabled));

  useEffect(() => {
    if (disabled) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (hit) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [disabled, rootMargin, threshold]);

  return [ref, visible];
}
