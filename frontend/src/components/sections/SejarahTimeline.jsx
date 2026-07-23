import Badge from '../ui/Badge.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { sejarah } from '../../data/sejarah.js';
import styles from './SejarahTimeline.module.css';

import g1 from '../../assets/beranda/gambar1.jpg';
import g2 from '../../assets/beranda/gambar2.jpg';
import g3 from '../../assets/beranda/gambar3.jpg';
import g4 from '../../assets/beranda/gambar4.jpg';

export default function SejarahTimeline() {
  const slides = [g1, g2, g3, g4];

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Perjalanan</Badge>}
          title="Sejarah Singkat"
          subtitle="Perjalanan Bank Sampah Unit Teluk Kabung Tengah dari pendirian hingga digitalisasi."
          center
        />
        <ol className={styles.timeline}>
          {sejarah.map((item) => (
            <li key={item.year} className={styles.item}>
              <span className={styles.year}>{item.year}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className={styles.gallery}>
          <Carousel 
            items={slides} 
            height={300} 
            renderItem={(src, idx) => (
              <img src={src} alt={`Sejarah Bank Sampah ${idx + 1}`} className={styles.carouselImage} />
            )}
          />
        </div>
      </div>
    </section>
  );
}
