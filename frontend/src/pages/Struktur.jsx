import { Users } from 'lucide-react';
import Badge from '../components/ui/Badge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import BaganOrganisasi from '../components/sections/BaganOrganisasi.jsx';
import GaleriDokumentasi from '../components/sections/GaleriDokumentasi.jsx';
import InfoOperasional from '../components/sections/InfoOperasional.jsx';

export default function Struktur() {
  return (
    <>
      <PageHeader
        badge={<Badge icon={Users}>Pengurus</Badge>}
        title="Struktur Organisasi"
        subtitle="Empat pengurus inti Bank Sampah Unit Teluk Kabung Tengah dan informasi operasionalnya."
      />
      <BaganOrganisasi />
      <InfoOperasional />
      <GaleriDokumentasi />
    </>
  );
}
