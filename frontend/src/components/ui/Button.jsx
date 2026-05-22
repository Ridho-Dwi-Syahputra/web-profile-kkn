import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = `${styles.btn} ${styles[variant]} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} className={styles.icon} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} className={styles.icon} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}
