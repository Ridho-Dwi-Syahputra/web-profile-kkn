import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { jamOperasional } from '../../data/kontak.js';
import styles from './JamOperasional.module.css';

export default function JamOperasional() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Jadwal</Badge>}
          title="Jam Operasional"
          subtitle="Bank Sampah buka setiap hari kerja dan Sabtu."
          center
        />
        <div className={styles.table}>
          {jamOperasional.map((row) => (
            <div
              key={row.hari}
              className={`${styles.row} ${row.tutup ? styles.tutup : ''}`.trim()}
            >
              <span className={styles.hari}>{row.hari}</span>
              <span className={styles.jam}>{row.jam}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
