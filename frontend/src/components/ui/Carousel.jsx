import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useCarousel from '../../hooks/useCarousel.js';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import styles from './Carousel.module.css';

export default function Carousel({
  items,
  height = 320,
  autoPlay = true,
  interval = 4500,
  showDots = true,
  showArrows = true,
  renderItem,
}) {
  const { current, next, prev, goTo } = useCarousel({
    length: items.length,
    autoPlay,
    interval,
  });

  const touchStartX = useRef(null);
  const [dragging, setDragging] = useState(false);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setDragging(true);
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
    setDragging(false);
  };

  return (
    <div
      className={styles.carousel}
      style={{ height }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.track}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${idx === current ? styles.active : ''}`.trim()}
            aria-hidden={idx !== current}
          >
            {renderItem ? (
              renderItem(item, idx)
            ) : (
              <ImagePlaceholder aspectRatio="auto" rounded="md" iconSize={56} />
            )}
          </div>
        ))}
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Slide sebelumnya"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Slide berikutnya"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div className={styles.dots}>
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`.trim()}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
