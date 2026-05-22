import styles from './Card.module.css';

export default function Card({
  children,
  className = '',
  hoverable = true,
  as: Tag = 'div',
  ...rest
}) {
  const cls = `${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`.trim();
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
