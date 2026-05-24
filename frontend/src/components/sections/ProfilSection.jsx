import Badge from '../ui/Badge.jsx';
import ImagePlaceholder from '../ui/ImagePlaceholder.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { profilBank } from '../../data/sejarah.js';
import styles from './ProfilSection.module.css';

export default function ProfilSection() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader
            badge={<Badge>Profil</Badge>}
            title="Bank Sampah Unit Teluk Kabung Tengah"
            subtitle="Profil singkat Bank Sampah berbasis masyarakat di Kelurahan Teluk Kabung Tengah."
          />
          <dl className={styles.list}>
            {profilBank.map((row) => (
              <div key={row.label} className={styles.row}>
                <dt className={styles.label}>{row.label}</dt>
                <dd className={styles.value}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className={styles.media}>
          <ImagePlaceholder aspectRatio="4/3" rounded="lg" iconSize={64} />
        </div>
      </div>
    </section>
  );
}
