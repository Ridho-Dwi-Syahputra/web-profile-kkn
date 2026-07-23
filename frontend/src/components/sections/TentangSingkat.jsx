import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import styles from './TentangSingkat.module.css';

import g1 from '../../assets/beranda/gambar1.jpg';
import g2 from '../../assets/beranda/gambar2.jpg';
import g3 from '../../assets/beranda/gambar3.jpg';
import g4 from '../../assets/beranda/gambar4.jpg';

export default function TentangSingkat() {
  const slides = [g1, g2, g3, g4];

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Carousel 
            items={slides} 
            height={340} 
            renderItem={(src, idx) => (
              <img src={src} alt={`Dokumentasi Bank Sampah ${idx + 1}`} className={styles.carouselImage} />
            )}
          />
        </div>

        <div className={styles.content}>
          <SectionHeader
            badge={<Badge>Tentang Kami</Badge>}
            title="Mengenal Bank Sampah"
            subtitle="Bank Sampah Unit Teluk Kabung Tengah adalah unit pengelola sampah berbasis masyarakat yang mengelola sampah organik dan anorganik di Kelurahan Teluk Kabung Tengah."
          />
          <p className={styles.text}>
            Sebagai satu-satunya bank sampah dengan fasilitas mandiri di Kota
            Padang, kami fokus pada pengumpulan, pemilahan, pengolahan organik
            melalui maggot, serta pengolahan plastik menjadi bio solar.
          </p>
          <p className={styles.text}>
            Bank Sampah ini berada di bawah binaan CSR Pertamina dan
            berkolaborasi dengan Program Nabuang Sarok PT Semen Padang untuk
            membangun kebiasaan memilah sampah sejak dari sumbernya.
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
