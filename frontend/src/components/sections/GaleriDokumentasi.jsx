import Badge from '../ui/Badge.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import styles from './GaleriDokumentasi.module.css';

export default function GaleriDokumentasi() {
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
          <Carousel items={[1, 2, 3]} height={360} />
        </div>
      </div>
    </section>
  );
}
