import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import Card from '../ui/Card.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';
import { kontak } from '../../data/kontak.js';
import styles from './LokasiKontak.module.css';

const contactItems = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: kontak.alamat,
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: kontak.whatsapp,
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: kontak.jamSingkat,
  },
  {
    icon: Mail,
    label: 'Email',
    value: kontak.email,
  },
];

export default function LokasiKontak() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.mapCol}>
          <SectionHeader
            badge={<Badge icon={MapPin}>Lokasi</Badge>}
            title="Temukan Kami"
            subtitle="Berlokasi di Kelurahan Teluk Kabung Tengah, Kecamatan Bungus Teluk Kabung, Kota Padang."
          />
          <div className={styles.map}>
            <iframe
              className={styles.mapFrame}
              src="https://maps.google.com/maps?q=WCG6%2B5PX+BSU+Sejahtera+Bank+Sampah,+Bungus+Teluk+Kabung,+Padang&output=embed&z=17&hl=id"
              title="Lokasi Bank Sampah Unit Teluk Kabung Tengah"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={styles.address}>{kontak.alamat}</p>
        </div>

        <div className={styles.contactCol}>
          <SectionHeader
            badge={<Badge>Kontak</Badge>}
            title="Hubungi Kami"
          />
          <div className={styles.contactList}>
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className={styles.contactCard}>
                  <span className={styles.contactIcon}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
