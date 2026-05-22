import { Award } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { tentangNasa } from '../../data/sejarah.js';
import { achievementsNasa } from '../../data/poin.js';
import styles from './TentangNabuangSarok.module.css';

export default function TentangNabuangSarok() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Program NASA</Badge>}
          title="Tentang Nabuang Sarok"
          subtitle="Program PT Semen Padang untuk pengelolaan sampah berkelanjutan."
          center
        />
        <Card hoverable={false} className={styles.card}>
          {tentangNasa.map((par, idx) => (
            <p key={idx} className={styles.par}>
              {par}
            </p>
          ))}
          <div className={styles.achievements}>
            <span className={styles.achievementsLabel}>
              <Award size={16} />
              Pengakuan & Prestasi
            </span>
            <div className={styles.badgeList}>
              {achievementsNasa.map((a) => (
                <Badge key={a}>{a}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
