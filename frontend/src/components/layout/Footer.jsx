import { Link } from 'react-router-dom';
import { Clock, Instagram, Mail, MapPin, Phone, Recycle } from 'lucide-react';
import { navLinks } from '../../data/nav.js';
import { kontak } from '../../data/kontak.js';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.brand}>
            <span className={styles.logo} aria-hidden="true">
              <Recycle size={22} strokeWidth={2.4} />
            </span>
            <span className={styles.brandName}>Bank Sampah</span>
          </Link>
          <p className={styles.tagline}>
            Bank Sampah berbasis masyarakat yang mengelola sampah organik
            (maggot) dan anorganik (plastik, kertas, logam, kaca) di Kelurahan
            Teluk Kabung Tengah.
          </p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigasi</h4>
          <ul className={styles.linkList}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Kontak</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={16} className={styles.contactIcon} />
              <span>{kontak.alamat}</span>
            </li>
            <li>
              <Phone size={16} className={styles.contactIcon} />
              <span>{kontak.whatsapp}</span>
            </li>
            <li>
              <Clock size={16} className={styles.contactIcon} />
              <span>{kontak.jamSingkat}</span>
            </li>
            <li>
              <Mail size={16} className={styles.contactIcon} />
              <span>{kontak.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Bank Sampah Unit Teluk Kabung Tengah.
            Dibangun oleh Tim KKN Nabuang Sarok — Universitas Andalas.
          </p>
          <div className={styles.social}>
            <a
              href={kontak.instagram}
              className={styles.socialIcon}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} />
            </a>
            <a
              href={`mailto:${kontak.email}`}
              className={styles.socialIcon}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
