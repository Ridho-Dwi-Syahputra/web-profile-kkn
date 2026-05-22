import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { kategoriColors, katalogPoin } from '../../data/poin.js';
import styles from './KatalogPoin.module.css';

export default function KatalogPoin() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          badge={<Badge>Katalog Poin</Badge>}
          title="Nilai Poin per Kilogram"
          subtitle="Daftar jenis sampah yang diterima dan nilai poin per kilogram."
          center
        />
        <div className={styles.grid}>
          {katalogPoin.map((item) => {
            const color = kategoriColors[item.kategori] || kategoriColors.Kertas;
            return (
              <div
                key={item.no}
                className={styles.card}
                style={{
                  borderColor: color.border,
                }}
              >
                <div
                  className={styles.poinBox}
                  style={{
                    background: color.bg,
                    border: `1px solid ${color.border}`,
                    color: color.color,
                  }}
                >
                  <span className={styles.poinValue}>{item.poin}</span>
                </div>
                <h3 className={styles.name}>{item.jenis}</h3>
                <div className={styles.cat}>
                  <span
                    className={styles.catBadge}
                    style={{
                      background: color.bg,
                      color: color.color,
                      borderColor: color.border,
                    }}
                  >
                    {item.kategori}
                  </span>
                </div>
                <p className={styles.ket}>{item.keterangan}</p>
                <div className={styles.footer}>
                  <span style={{ color: color.color }}>{item.poin}</span>
                  <span className={styles.footerLabel}>poin per kg</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
