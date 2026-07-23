import { GraduationCap } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import ImagePlaceholder from '../ui/ImagePlaceholder.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { dpl } from '../../data/tim.js';
import styles from './DplSection.module.css';

export default function DplSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge icon={GraduationCap}>Dosen Pembimbing</Badge>}
          title="Dosen Pembimbing Lapangan"
          subtitle="Pembimbing akademik tim KKN selama program berlangsung."
          center
        />
        <Card hoverable={false} className={styles.card}>
          <div className={styles.avatarWrap}>
            {dpl.foto ? (
              <img 
                src={dpl.foto} 
                alt={`Foto ${dpl.nama}`} 
                className={styles.avatar}
                style={{ objectFit: 'cover', borderRadius: '50%' }}
              />
            ) : (
              <ImagePlaceholder
                aspectRatio="1/1"
                rounded="full"
                iconSize={36}
                className={styles.avatar}
              />
            )}
          </div>
          <h3 className={styles.name}>{dpl.nama}</h3>
          <div className={styles.badge}>
            <Badge icon={GraduationCap}>{dpl.jabatan}</Badge>
          </div>
          <p className={styles.institusi}>{dpl.institusi}</p>
        </Card>
      </div>
    </section>
  );
}
