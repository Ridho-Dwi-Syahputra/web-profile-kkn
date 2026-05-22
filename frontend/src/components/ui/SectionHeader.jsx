import styles from './SectionHeader.module.css';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = false,
  accentDot = true,
}) {
  return (
    <div className={`${styles.header} ${center ? styles.center : ''}`.trim()}>
      {badge && <div className={styles.badge}>{badge}</div>}
      <h2 className={styles.title}>
        {title}
        {accentDot && <span className={styles.dot}>.</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
