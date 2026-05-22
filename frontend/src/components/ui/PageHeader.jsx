import styles from './PageHeader.module.css';

export default function PageHeader({ badge, title, subtitle }) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {badge && <div className={styles.badge}>{badge}</div>}
        <h1 className={styles.title}>
          {title}
          <span className={styles.dot}>.</span>
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.glow} aria-hidden="true" />
    </header>
  );
}
