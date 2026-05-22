import { Leaf } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { catatanPenting } from '../../data/kegiatan.js';
import styles from './CatatanPenting.module.css';

export default function CatatanPenting() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Info</Badge>}
          title="Catatan Penting"
          subtitle="Informasi tambahan dari hasil wawancara dengan pengurus."
          center
        />
        <ul className={styles.list}>
          {catatanPenting.map((text, idx) => (
            <li key={idx} className={styles.item}>
              <span className={styles.icon}>
                <Leaf size={20} />
              </span>
              <span className={styles.text}>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
