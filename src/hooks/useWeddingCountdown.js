import { useEffect, useState } from "react";

export function useWeddingCountdown(targetDate) {
  const [parts, setParts] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    passed: false,
  });

  useEffect(() => {
    const end = targetDate.getTime();

    function tick() {
      const now = Date.now();
      const diff = end - now;
      if (diff <= 0) {
        setParts({ days: 0, hours: 0, mins: 0, passed: true });
        return;
      }
      const days = Math.floor(diff / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
      );
      const mins = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
      setParts({ days, hours, mins, passed: false });
    }

    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return parts;
}
