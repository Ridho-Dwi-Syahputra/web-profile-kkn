import { Award } from 'lucide-react';
import Card from '../ui/Card.jsx';
import { ucapanTerimaKasih } from '../../data/tim.js';
import styles from './UcapanTerimaKasih.module.css';

export default function UcapanTerimaKasih() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Card hoverable={false} className={styles.card}>
          <span className={styles.iconBox}>
            <Award size={28} />
          </span>
          <h2 className={styles.title}>
            Terima Kasih<span className={styles.dot}>.</span>
          </h2>
          <p className={styles.text}>{ucapanTerimaKasih}</p>
        </Card>
      </div>
    </section>
  );
}
