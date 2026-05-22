import { Award, Calendar, MapPin, Users } from 'lucide-react';
import Card from '../ui/Card.jsx';
import { infoTim } from '../../data/tim.js';
import styles from './InfoTim.module.css';

const stats = [
  { icon: Users, label: 'Anggota', value: `${infoTim.jumlahAnggota} Orang` },
  { icon: Award, label: 'Program', value: infoTim.program },
  { icon: Calendar, label: 'Periode', value: infoTim.periode },
  { icon: MapPin, label: 'Lokasi', value: infoTim.lokasi },
];

export default function InfoTim() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className={styles.card}>
              <span className={styles.iconBox}>
                <Icon size={20} />
              </span>
              <span className={styles.label}>{s.label}</span>
              <span className={styles.value}>{s.value}</span>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
