import {
  Award,
  Circle,
  Gift,
  Leaf,
  Recycle,
  Scale,
  Star,
  Target,
  Users,
} from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { kegiatan } from '../../data/kegiatan.js';
import styles from './DaftarKegiatan.module.css';

const iconMap = {
  Award,
  Gift,
  Leaf,
  Recycle,
  Scale,
  Star,
  Target,
  Users,
};

export default function DaftarKegiatan() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Rincian Kegiatan</Badge>}
          title="Apa Saja yang Kami Lakukan"
          subtitle="Daftar kegiatan rutin Bank Sampah dan rencana pengembangan."
        />
        <div className={styles.list}>
          {kegiatan.map((item, idx) => {
            const Icon = iconMap[item.icon] || Circle;
            return (
              <Card key={item.id} className={styles.item}>
                <div className={styles.iconCol}>
                  <span className={styles.iconBox}>
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <span className={styles.num}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className={styles.bodyCol}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{item.nama}</h3>
                    <Badge>{item.frekuensi}</Badge>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
