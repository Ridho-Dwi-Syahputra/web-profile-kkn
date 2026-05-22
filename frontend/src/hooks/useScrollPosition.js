import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(
    typeof window === 'undefined' ? 0 : window.scrollY
  );

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollY;
}
