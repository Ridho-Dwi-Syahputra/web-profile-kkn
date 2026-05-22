# 06 — Routing & Navigasi

## `src/routes.jsx`

```jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tentang from './pages/Tentang.jsx';
import Struktur from './pages/Struktur.jsx';
import Kegiatan from './pages/Kegiatan.jsx';
import Poin from './pages/Poin.jsx';
import Tim from './pages/Tim.jsx';
import NotFound from './pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/tentang"  element={<Tentang />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/poin"     element={<Poin />} />
      <Route path="/tim"      element={<Tim />} />
      <Route path="*"         element={<NotFound />} />
    </Routes>
  );
}
```

`<BrowserRouter>` ada di `main.jsx` (lihat [`01-setup.md`](./01-setup.md)).

## Scroll Behaviour

### `hooks/useScrollToTop.js`

```jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
}
```

Dipanggil di `Layout.jsx` agar berlaku global.

### `hooks/useScrollPosition.js`

```jsx
import { useEffect, useState } from 'react';

export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrollY;
}
```

Dipakai di `Navbar` untuk swap background saat `scrollY >= 50`.

## Active Link

```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to={link.to}
  className={({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link
  }
>
  {link.label}
</NavLink>
```

## Navigasi Programatik

Untuk button CTA pakai `<Button to="/path">` yang internally render `<Link>`.
Tidak perlu `useNavigate()` di project ini.

## Mobile Drawer

Toggle state di komponen `Navbar`. Drawer render conditionally:

```jsx
{isOpen && (
  <div className={styles.drawer}>
    {navLinks.map(link => (
      <NavLink
        key={link.to}
        to={link.to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${styles.drawerLink} ${styles.active}` : styles.drawerLink
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
)}
```

`onClick` auto-close drawer setelah pilih link.
