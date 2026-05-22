import Accordion from '../ui/Accordion.jsx';
import Badge from '../ui/Badge.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { faqPoin } from '../../data/faq.js';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          badge={<Badge>FAQ</Badge>}
          title="Pertanyaan yang Sering Diajukan"
          subtitle="Jawaban atas pertanyaan umum seputar sistem poin Nabuang Sarok."
          center
        />
        <div className={styles.wrap}>
          <Accordion items={faqPoin} />
        </div>
      </div>
    </section>
  );
}
