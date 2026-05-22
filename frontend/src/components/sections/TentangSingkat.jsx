import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import styles from './TentangSingkat.module.css';

export default function TentangSingkat() {
  const slides = [1, 2, 3, 4];

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Carousel items={slides} height={340} />
        </div>

        <div className={styles.content}>
          <SectionHeader
            badge={<Badge>Tentang Kami</Badge>}
            title="Mengenal Bank Sampah"
            subtitle="Bank Sampah Unit Teluk Kabung Tengah adalah unit pengelola sampah anorganik berbasis masyarakat di Kelurahan Teluk Kabung Tengah."
          />
          <p className={styles.text}>
            Sebagai satu-satunya unit pengelola sampah anorganik di Kecamatan
            Bungus Teluk Kabung, kami fokus pada pengumpulan, pemilahan, dan
            pengelolaan sampah plastik, kertas, logam, kaca, dan elektronik.
          </p>
          <p className={styles.text}>
            Bank Sampah ini berkolaborasi dengan Program Nabuang Sarok PT Semen
            Padang untuk membangun kebiasaan memilah sampah sejak dari sumbernya.
          </p>
          <div className={styles.cta}>
            <Button to="/tentang" variant="outline">
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
