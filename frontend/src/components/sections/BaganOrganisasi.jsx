import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { pengurus } from '../../data/pengurus.js';
import styles from './BaganOrganisasi.module.css';

function PengurusCard({ data, featured = false }) {
  if (!data) return null;
  return (
    <Card
      hoverable
      className={`${styles.card} ${featured ? styles.featured : styles.member}`.trim()}
    >
      <h3 className={`${styles.name} ${featured ? styles.nameFeatured : ''}`.trim()}>
        {data.nama}
      </h3>
      <Badge>{data.jabatan}</Badge>
    </Card>
  );
}

export default function BaganOrganisasi() {
  const ketua = pengurus.find((p) => p.jabatan === 'Ketua');
  const sekretaris = pengurus.find((p) => p.jabatan === 'Sekretaris');
  const bendahara = pengurus.find((p) => p.jabatan === 'Bendahara');
  const operator = pengurus.find((p) => p.jabatan === 'Petugas operator');
  const magot = pengurus.find((p) => p.jabatan === 'Petugas magot');
  const kerajinan = pengurus.find((p) => p.jabatan === 'Petugas kerajinan tangan');
  const pencacah = pengurus.find((p) => p.jabatan === 'Petugas pencacah');

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Pengurus</Badge>}
          title="Bagan Organisasi"
          subtitle="Struktur Kepengurusan BSU TKT Sejahtera."
          center
        />

        <div className={styles.tree}>
          <div className={styles.topRow}>
            <PengurusCard data={ketua} featured />
          </div>

          <div className={styles.treeForks}>
            <div className={styles.forkStem} />
            <div className={styles.forkHorizontal} />
            <div className={styles.forkBranches}>
              <div className={styles.forkBranch} />
              <div className={styles.forkBranch} />
            </div>
          </div>

          <div className={styles.columnsWrapper}>
            {/* Left Column */}
            <div className={styles.column}>
              <PengurusCard data={sekretaris} />
              <div className={styles.connector} />
              <PengurusCard data={operator} />
              <div className={styles.connector} />
              <PengurusCard data={kerajinan} />
            </div>

            {/* Right Column */}
            <div className={styles.column}>
              <PengurusCard data={bendahara} />
              <div className={styles.connector} />
              <PengurusCard data={magot} />
              <div className={styles.connector} />
              <PengurusCard data={pencacah} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
