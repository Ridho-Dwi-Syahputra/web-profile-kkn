import Badge from '../ui/Badge.jsx';
import Carousel from '../ui/Carousel.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { sejarah } from '../../data/sejarah.js';
import styles from './SejarahTimeline.module.css';

export default function SejarahTimeline() {
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
          <Carousel items={[1, 2, 3]} height={300} />
        </div>
      </div>
    </section>
  );
}
