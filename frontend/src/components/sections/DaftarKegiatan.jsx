import { useState } from 'react';
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
import ImagePlaceholder from '../ui/ImagePlaceholder.jsx';
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

function KegiatanCard({ item, idx }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[item.icon] || Circle;

  return (
    <article
      className={`${styles.card} ${open ? styles.open : ''}`}
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
    >
      {/* Landscape image background */}
      <div className={styles.imageArea}>
        <ImagePlaceholder
          aspectRatio="16/9"
          iconSize={40}
          className={styles.image}
        />
      </div>

      {/* Number badge — always visible */}
      <span className={styles.num} aria-hidden="true">
        {String(idx + 1).padStart(2, '0')}
      </span>

      {/* Bottom title strip — visible when not hovered/opened */}
      <div className={styles.footer} aria-hidden="true">
        <span className={styles.iconWrap}>
          <Icon size={18} strokeWidth={2} />
        </span>
        <span className={styles.footerTitle}>{item.nama}</span>
      </div>

      {/* Hover / click overlay */}
      <div className={styles.overlay} aria-hidden={!open}>
        <div className={styles.overlayContent}>
          <div className={styles.overlayHeader}>
            <span className={styles.iconWrapLg}>
              <Icon size={22} strokeWidth={2} />
            </span>
            <h3 className={styles.title}>{item.nama}</h3>
          </div>
          <div className={styles.badgeRow}>
            <Badge>{item.frekuensi}</Badge>
          </div>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </div>
    </article>
  );
}

export default function DaftarKegiatan() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Rincian Kegiatan</Badge>}
          title="Apa Saja yang Kami Lakukan"
          subtitle="Daftar kegiatan rutin Bank Sampah. Sentuh kartu untuk melihat detail kegiatan."
        />
        <div className={styles.grid}>
          {kegiatan.map((item, idx) => (
            <KegiatanCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
