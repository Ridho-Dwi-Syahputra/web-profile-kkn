import { Eye, Target } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import Tabs from '../ui/Tabs.jsx';
import { visiMisi } from '../../data/sejarah.js';
import styles from './VisiMisi.module.css';

function VisiContent() {
  return (
    <Card hoverable={false} className={styles.visiCard}>
      <div className={styles.visiIcon}>
        <Eye size={28} />
      </div>
      <p className={styles.visiQuote}>{visiMisi.visi}</p>
    </Card>
  );
}

function MisiContent() {
  return (
    <div className={styles.misiGrid}>
      {visiMisi.misi.map((item, idx) => (
        <Card key={idx} className={styles.misiCard}>
          <span className={styles.misiNum}>
            {String(idx + 1).padStart(2, '0')}
          </span>
          <p className={styles.misiText}>{item}</p>
        </Card>
      ))}
    </div>
  );
}

export default function VisiMisi() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Komitmen</Badge>}
          title="Visi & Misi"
          subtitle="Arah dan komitmen Bank Sampah Unit Teluk Kabung Tengah."
          center
        />
        <Tabs
          tabs={[
            { id: 'visi', label: 'Visi', icon: Eye, content: <VisiContent /> },
            { id: 'misi', label: 'Misi', icon: Target, content: <MisiContent /> },
          ]}
          defaultTab="visi"
        />
      </div>
    </section>
  );
}
