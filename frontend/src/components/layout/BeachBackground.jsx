import styles from './BeachBackground.module.css';

const wavePath =
  'M0,60 C150,20 350,100 600,60 C850,20 1050,100 1200,60 L1200,120 L0,120 Z';

const bubbles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 8,
  left: 5 + Math.random() * 90,
  delay: Math.random() * 15,
  duration: 18 + Math.random() * 14,
}));

export default function BeachBackground() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.sky} />
      <div className={styles.horizonGlow} />
      <div className={styles.sun} />

      <div className={styles.bubbles}>
        {bubbles.map((b) => (
          <span
            key={b.id}
            className={styles.bubble}
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.ocean}>
        <svg
          className={`${styles.wave} ${styles.waveBack}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d={wavePath} fill="rgba(34, 211, 238, 0.18)" />
          <path d={wavePath} fill="rgba(34, 211, 238, 0.18)" transform="translate(1200,0)" />
        </svg>
        <svg
          className={`${styles.wave} ${styles.waveMid}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d={wavePath} fill="rgba(103, 232, 249, 0.22)" />
          <path d={wavePath} fill="rgba(103, 232, 249, 0.22)" transform="translate(1200,0)" />
        </svg>
        <svg
          className={`${styles.wave} ${styles.waveFront}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d={wavePath} fill="rgba(255, 255, 255, 0.12)" />
          <path d={wavePath} fill="rgba(255, 255, 255, 0.12)" transform="translate(1200,0)" />
        </svg>
      </div>
    </div>
  );
}
