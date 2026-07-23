import { Scale } from 'lucide-react';
import Badge from '../components/ui/Badge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import AlurAktivitas from '../components/sections/AlurAktivitas.jsx';
import FaqSection from '../components/sections/FaqSection.jsx';
import TentangNabuangSarok from '../components/sections/TentangNabuangSarok.jsx';

export default function Poin() {
  return (
    <>
      <PageHeader
        badge={<Badge icon={Scale}>Nabuang Sarok</Badge>}
        title="Poin & Penukaran"
        subtitle="Program Nabuang Sarok - pilah sampah, kumpulkan poin, tukar hadiah menarik."
      />
      <AlurAktivitas />
      <TentangNabuangSarok />
      <FaqSection />
    </>
  );
}
