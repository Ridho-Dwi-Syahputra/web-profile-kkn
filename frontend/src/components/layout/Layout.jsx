import BeachBackground from './BeachBackground.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import useScrollToTop from '../../hooks/useScrollToTop.js';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  useScrollToTop();
  return (
    <div className={styles.layout}>
      <BeachBackground />
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
