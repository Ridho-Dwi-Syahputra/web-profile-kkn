import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tentang from './pages/Tentang.jsx';
import Struktur from './pages/Struktur.jsx';
import Poin from './pages/Poin.jsx';
import Tim from './pages/Tim.jsx';
import NotFound from './pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/poin" element={<Poin />} />
      <Route path="/tim" element={<Tim />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
