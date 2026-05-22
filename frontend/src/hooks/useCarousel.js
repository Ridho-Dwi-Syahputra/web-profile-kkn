import { useCallback, useEffect, useRef, useState } from 'react';

export default function useCarousel({
  length,
  autoPlay = true,
  interval = 4500,
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (!autoPlay || length <= 1) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % length);
    }, interval);
  }, [autoPlay, length, interval, clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % length);
    startTimer();
  }, [length, startTimer]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + length) % length);
    startTimer();
  }, [length, startTimer]);

  const goTo = useCallback(
    (idx) => {
      setCurrent(idx % length);
      startTimer();
    },
    [length, startTimer]
  );

  return { current, next, prev, goTo };
}
