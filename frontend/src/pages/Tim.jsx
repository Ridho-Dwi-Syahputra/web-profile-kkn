import { Users } from 'lucide-react';
import Badge from '../components/ui/Badge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import ThreeCardCarousel from '../components/ui/ThreeCardCarousel.jsx';
import InfoTim from '../components/sections/InfoTim.jsx';
import UcapanTerimaKasih from '../components/sections/UcapanTerimaKasih.jsx';
import { tim } from '../data/tim.js';

export default function Tim() {
  return (
    <>
      <PageHeader
        badge={<Badge icon={Users}>Tim</Badge>}
        title="Tim KKN Nabuang Sarok"
        subtitle="Tujuh mahasiswa Universitas Andalas yang berkolaborasi membangun website ini."
      />
      <InfoTim />
      <section className="section">
        <div className="container">
          <SectionHeader
            badge={<Badge>Anggota</Badge>}
            title="Kenali Tim Kami"
            subtitle="Geser untuk melihat profil dan kesan setiap anggota."
            center
          />
          <ThreeCardCarousel members={tim} />
        </div>
      </section>
      <UcapanTerimaKasih />
    </>
  );
}
