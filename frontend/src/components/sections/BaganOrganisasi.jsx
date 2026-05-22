import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import ImagePlaceholder from '../ui/ImagePlaceholder.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { pengurus } from '../../data/pengurus.js';
import styles from './BaganOrganisasi.module.css';

function PengurusCard({ data, featured = false }) {
  return (
    <Card
      hoverable
      className={`${styles.card} ${featured ? styles.featured : styles.member}`.trim()}
    >
      <div
        className={`${styles.avatarWrap} ${featured ? styles.avatarWrapFeatured : ''}`.trim()}
      >
        <ImagePlaceholder
          aspectRatio="1/1"
          rounded="full"
          iconSize={featured ? 32 : 22}
          className={featured ? styles.avatarFeatured : styles.avatar}
        />
      </div>
      <h3 className={`${styles.name} ${featured ? styles.nameFeatured : ''}`.trim()}>
        {data.nama}
      </h3>
      <Badge>{data.jabatan}</Badge>
    </Card>
  );
}

export default function BaganOrganisasi() {
  const koordinator = pengurus.find((p) => p.level === 0);
  const anggota = pengurus.filter((p) => p.level === 1);

  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>Pengurus</Badge>}
          title="Bagan Organisasi"
          subtitle="Empat pengurus inti Bank Sampah Unit Teluk Kabung Tengah."
          center
        />

        <div className={styles.tree}>
          {koordinator && (
            <div className={styles.topRow}>
              <PengurusCard data={koordinator} featured />
            </div>
          )}

          {anggota.length > 0 && (
            <>
              <div className={styles.connector} aria-hidden="true" />
              <div className={styles.row}>
                {anggota.map((p) => (
                  <PengurusCard key={p.id} data={p} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
