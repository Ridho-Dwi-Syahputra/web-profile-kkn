import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Recycle, X } from 'lucide-react';
import { navLinks } from '../../data/nav.js';
import useScrollPosition from '../../hooks/useScrollPosition.js';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollPosition();
  const scrolled = scrollY >= 50;
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`${styles.nav} ${scrolled || open ? styles.scrolled : ''}`.trim()}
    >
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="Beranda">
          <span className={styles.logoWrapper} aria-hidden="true">
            <img src="/logo.jpeg" alt="Logo Bank Sampah TKT" className={styles.logoImg} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Bank Sampah</span>
            <span className={styles.brandSub}>Teluk Kabung Tengah</span>
          </span>
        </Link>

        <ul className={styles.menu}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className={styles.drawer}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? `${styles.drawerLink} ${styles.active}`
                  : styles.drawerLink
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
