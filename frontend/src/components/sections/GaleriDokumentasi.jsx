import Badge from '../ui/Badge.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import styles from './GaleriDokumentasi.module.css';

import g1 from '../../assets/beranda/gambar1.jpg';
import g2 from '../../assets/beranda/gambar2.jpg';
import g3 from '../../assets/beranda/gambar3.jpg';
import g4 from '../../assets/beranda/gambar4.jpg';

export default function GaleriDokumentasi() {
  const slides = [g1, g2, g3, g4];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Dokumentasi</Badge>}
          title="Galeri Kegiatan"
          subtitle="Cuplikan momen pengurus dan kegiatan Bank Sampah."
          center
        />
        <div className={styles.gallery}>
          <Carousel 
            items={slides} 
            height={360} 
            renderItem={(src, idx) => (
              <img src={src} alt={`Dokumentasi Pengurus ${idx + 1}`} className={styles.carouselImage} />
            )}
          />
        </div>
      </div>
    </section>
  );
}
