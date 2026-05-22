import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { infoOperasional } from '../../data/pengurus.js';
import styles from './InfoOperasional.module.css';

export default function InfoOperasional() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Operasional</Badge>}
          title="Info Operasional"
          subtitle="Hal-hal penting tentang pengelolaan dan mitra Bank Sampah."
          center
        />
        <div className={styles.grid}>
          {infoOperasional.map((item) => (
            <Card key={item.no} className={styles.card}>
              <span className={styles.num}>
                {String(item.no).padStart(2, '0')}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
