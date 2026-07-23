import { ArrowRight, Leaf } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import imgBankSampah from '../../assets/beranda/BankSampah.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlowA} aria-hidden="true" />
      <div className={styles.bgGlowB} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <Badge icon={Leaf}>Kelurahan Teluk Kabung Tengah</Badge>
          <h1 className={styles.title}>
            Bank Sampah Unit
            <br />
            <span className={styles.accent}>Teluk Kabung Tengah</span>
          </h1>
          <p className={styles.tagline}>
            Bersama mengelola sampah untuk lingkungan yang lebih bersih, sehat,
            dan bernilai ekonomi bagi masyarakat.
          </p>
          <div className={styles.actions}>
            <Button to="/tentang" variant="primary" icon={ArrowRight}>
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <img src={imgBankSampah} alt="Fasilitas Bank Sampah TKT Sejahtera" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}
