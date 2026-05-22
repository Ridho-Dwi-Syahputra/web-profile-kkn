import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Accordion.module.css';

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`${styles.item} ${isOpen ? styles.open : ''}`.trim()}
          >
            <button
              type="button"
              className={styles.head}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.q}</span>
              <ChevronDown
                size={20}
                className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`.trim()}
              />
            </button>
            {isOpen && (
              <div className={styles.body}>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
