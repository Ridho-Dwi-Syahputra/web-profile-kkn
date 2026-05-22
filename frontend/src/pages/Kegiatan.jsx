import { Calendar } from 'lucide-react';
import Badge from '../components/ui/Badge.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import CatatanPenting from '../components/sections/CatatanPenting.jsx';
import DaftarKegiatan from '../components/sections/DaftarKegiatan.jsx';

export default function Kegiatan() {
  return (
    <>
      <PageHeader
        badge={<Badge icon={Calendar}>Kegiatan</Badge>}
        title="Kegiatan Bank Sampah"
        subtitle="Daftar kegiatan rutin yang dilakukan Bank Sampah dan catatan penting dari pengurus."
      />
      <DaftarKegiatan />
      <CatatanPenting />
    </>
  );
}
