import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder.jsx';
import Badge from './Badge.jsx';
import styles from './ThreeCardCarousel.module.css';

const AUTO_PLAY_MS = 6000;
const ANIMATION_GUARD_MS = 550;

export default function ThreeCardCarousel({ members }) {
  const [active, setActive] = useState(0);
  const isAnimating = useRef(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);
  const total = members.length;

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    if (total <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
    }, AUTO_PLAY_MS);
  }, [clearTimer, total]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const guard = () => {
    if (isAnimating.current) return false;
    isAnimating.current = true;
    setTimeout(() => {
      isAnimating.current = false;
    }, ANIMATION_GUARD_MS);
    return true;
  };

  const next = () => {
    if (!guard()) return;
    setActive((a) => (a + 1) % total);
    startTimer();
  };

  const prev = () => {
    if (!guard()) return;
    setActive((a) => (a - 1 + total) % total);
    startTimer();
  };

  const goTo = (idx) => {
    if (idx === active || !guard()) return;
    setActive(idx);
    startTimer();
  };

  // Returns signed offset di range -floor(total/2)..floor(total/2)
  // sehingga setiap card punya posisi unik dan transisi mengalir
  const getOffset = (idx) => {
    const half = Math.floor(total / 2);
    let offset = idx - active;
    if (offset > half) offset -= total;
    if (offset < -half) offset += total;
    return offset;
  };

  const positionClass = (offset) => {
    if (offset === 0) return styles.pos0;
    if (offset === -1) return styles.posL1;
    if (offset === 1) return styles.posR1;
    if (offset < -1) return styles.posLFar;
    return styles.posRFar;
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className={styles.section}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.viewport}>
        {members.map((m, idx) => {
          const offset = getOffset(idx);
          if (Math.abs(offset) > 2) return null;
          const isCenter = offset === 0;
          return (
            <article
              key={m.id}
              className={`${styles.card} ${positionClass(offset)} ${
                isCenter ? styles.center : styles.side
              }`.trim()}
              aria-hidden={!isCenter}
            >
              <div className={styles.photo}>
                {isCenter && (
                  <span className={styles.counter}>
                    {active + 1}/{total}
                  </span>
                )}
                <div className={styles.avatarWrap}>
                  <ImagePlaceholder
                    aspectRatio="1/1"
                    rounded="full"
                    iconSize={isCenter ? 36 : 24}
                    className={isCenter ? styles.avatarCenter : styles.avatarSide}
                  />
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{m.nama}</h3>
                <div className={styles.prodi}>
                  <Badge>{m.prodi}</Badge>
                </div>
                <div className={styles.infoRow}>
                  <span>
                    <span className={styles.label}>Fakultas</span>
                    <span className={styles.value}>{m.fakultas}</span>
                  </span>
                  <span className={styles.divider} aria-hidden="true" />
                  <span>
                    <span className={styles.label}>Universitas</span>
                    <span className={styles.value}>UNAND</span>
                  </span>
                </div>
                <div
                  className={`${styles.pesan} ${
                    isCenter ? styles.pesanVisible : ''
                  }`.trim()}
                  aria-hidden={!isCenter}
                >
                  <span className={styles.quote} aria-hidden="true">
                    &ldquo;
                  </span>
                  <p>{m.pesan}</p>
                </div>
              </div>
            </article>
          );
        })}

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={prev}
          aria-label="Anggota sebelumnya"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={next}
          aria-label="Anggota berikutnya"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className={styles.dots}>
        {members.map((m, idx) => (
          <button
            key={m.id}
            type="button"
            className={`${styles.dot} ${idx === active ? styles.dotActive : ''}`.trim()}
            onClick={() => goTo(idx)}
            aria-label={`Lihat ${m.nama}`}
          />
        ))}
      </div>
    </section>
  );
}
