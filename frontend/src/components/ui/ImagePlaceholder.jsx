import { Image as ImageIcon } from 'lucide-react';
import styles from './ImagePlaceholder.module.css';

export default function ImagePlaceholder({
  aspectRatio = '4/3',
  rounded = 'lg',
  iconSize = 48,
  className = '',
  style = {},
}) {
  return (
    <div
      className={`${styles.placeholder} ${styles[`rounded-${rounded}`]} ${className}`.trim()}
      style={{ aspectRatio, ...style }}
      role="img"
      aria-label="Placeholder gambar"
    >
      <ImageIcon size={iconSize} className={styles.icon} strokeWidth={1.5} />
    </div>
  );
}
