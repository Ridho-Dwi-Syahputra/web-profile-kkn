import styles from './Badge.module.css';

export default function Badge({ icon: Icon, children, className = '', tone = 'accent' }) {
  return (
    <span className={`${styles.badge} ${styles[tone]} ${className}`.trim()}>
      {Icon && <Icon size={14} className={styles.icon} />}
      <span>{children}</span>
    </span>
  );
}
