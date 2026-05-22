import { ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>
            Halaman tidak ditemukan<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.text}>
            URL yang Anda buka tidak tersedia atau telah dipindahkan. Silakan
            kembali ke beranda.
          </p>
          <Button to="/" variant="primary" icon={ArrowLeft} iconPosition="left">
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </section>
  );
}
