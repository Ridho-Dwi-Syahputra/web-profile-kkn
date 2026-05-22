import {
  BookOpen,
  Candy,
  Droplet,
  Gift,
  GlassWater,
  Pencil,
  Watch,
} from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { rewards } from '../../data/poin.js';
import styles from './RedeemPoint.module.css';

const iconMap = {
  BookOpen,
  Candy,
  Droplet,
  GlassWater,
  Pencil,
  Watch,
};

export default function RedeemPoint() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge icon={Gift}>Redeem Point</Badge>}
          title="Tukar Poin dengan Hadiah"
          subtitle="Kumpulkan poin dan tukarkan dengan hadiah pilihan berikut."
          center
        />
        <div className={styles.grid}>
          {rewards.map((item) => {
            const Icon = iconMap[item.icon] || Gift;
            return (
              <div key={item.id} className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon size={32} strokeWidth={1.8} />
                </span>
                <h3 className={styles.name}>{item.nama}</h3>
                <span className={styles.poin}>{item.poin}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
