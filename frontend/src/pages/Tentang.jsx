import { Leaf } from 'lucide-react';
import Badge from '../components/ui/Badge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import JamOperasional from '../components/sections/JamOperasional.jsx';
import ProfilSection from '../components/sections/ProfilSection.jsx';
import SejarahTimeline from '../components/sections/SejarahTimeline.jsx';
import VisiMisi from '../components/sections/VisiMisi.jsx';

export default function Tentang() {
  return (
    <>
      <PageHeader
        badge={<Badge icon={Leaf}>Profil</Badge>}
        title="Tentang Bank Sampah"
        subtitle="Mengenal lebih dekat Bank Sampah Unit Teluk Kabung Tengah — sejarah, visi, misi, dan komitmen kami."
      />
      <ProfilSection />
      <VisiMisi />
      <SejarahTimeline />
      <JamOperasional />
    </>
  );
}
