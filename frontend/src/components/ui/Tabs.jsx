import { useState } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ tabs, defaultTab }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);
  const activeTab = tabs.find((t) => t.id === active) || tabs[0];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.active : ''}`.trim()}
              onClick={() => setActive(tab.id)}
            >
              {Icon && <Icon size={18} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className={styles.panel} role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
}
