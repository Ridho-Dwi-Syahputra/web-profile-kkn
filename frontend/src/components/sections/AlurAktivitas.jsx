import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { langkahPoin } from '../../data/poin.js';
import styles from './AlurAktivitas.module.css';

export default function AlurAktivitas() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Alur Aktivitas</Badge>}
          title="Cara Kerja Nabuang Sarok"
          subtitle="Lima langkah mudah untuk mulai mengumpulkan poin."
          center
        />
        <ol className={styles.list}>
          {langkahPoin.map((item) => (
            <li key={item.step} className={styles.item}>
              <span className={styles.num}>
                {String(item.step).padStart(2, '0')}
              </span>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
