# 05 — Data Statis (`src/data/`)

> Semua data konten ada di sini. Untuk update konten setelah launch, **edit
> file-file ini saja** tanpa perlu menyentuh komponen.

## `data/nav.js`

```javascript
export const navLinks = [
  { to: '/',         label: 'Beranda' },
  { to: '/tentang',  label: 'Tentang' },
  { to: '/struktur', label: 'Struktur' },
  { to: '/kegiatan', label: 'Kegiatan' },
  { to: '/poin',     label: 'Poin' },
  { to: '/tim',      label: 'Tim Kami' },
];
```

## `data/kontak.js`

```javascript
export const kontak = {
  alamat: 'Kelurahan Teluk Kabung Tengah, Kec. Bungus Teluk Kabung, Kota Padang, Sumatera Barat',
  whatsapp: '+62 812-XXXX-XXXX',     // TBD — isi dari lapangan
  email: 'banksampah.tkbtengah@email.com',  // TBD
  jamSingkat: 'Senin – Sabtu: 08.00 – 16.00 WIB',
  instagram: '#',  // TBD
};

export const jamOperasional = [
  { hari: 'Senin', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Selasa', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Rabu', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Kamis', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Jumat', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Sabtu', jam: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Minggu', jam: 'Tutup', tutup: true },
];
```

## `data/pengurus.js`

```javascript
export const pengurus = [
  { id: 1, nama: 'Bapak Fadli', jabatan: 'Koordinator', level: 0 },
  { id: 2, nama: 'TBD',         jabatan: 'Sekretaris',  level: 1 },
  { id: 3, nama: 'TBD',         jabatan: 'Bendahara',   level: 1 },
  { id: 4, nama: 'TBD',         jabatan: 'Anggota',     level: 2 },
];

export const infoOperasional = [
  {
    no: 1,
    title: 'Koordinator',
    desc: 'Bank Sampah dikoordinasikan oleh Bapak Fadli yang bertanggung jawab atas seluruh kegiatan operasional dan pengembangan fasilitas.',
  },
  {
    no: 2,
    title: 'Satu-Satunya di Kecamatan',
    desc: 'Bank Sampah ini merupakan satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung.',
  },
  {
    no: 3,
    title: 'Dukungan Mitra',
    desc: 'Fasilitas dan fondasi awal bank sampah didukung oleh kerja sama dengan Pertamina, sementara pembangunan tahap kedua dibantu oleh Dinas PU.',
  },
  {
    no: 4,
    title: 'Rencana Pengembangan',
    desc: 'Terdapat rencana pembuatan bengkel las bertenaga listrik tenaga surya (panel surya) untuk melayani kebutuhan masyarakat dan nelayan sekitar.',
  },
];
```

## `data/kegiatan.js`

```javascript
export const kegiatan = [
  { id: 1, nama: 'Pengumpulan Sampah Anorganik', icon: 'Recycle', frekuensi: 'Rutin Mingguan', desc: 'Warga mengumpulkan sampah anorganik (plastik, kertas, logam, kaca) dari rumah masing-masing untuk disetor.' },
  { id: 2, nama: 'Penimbangan & Pencatatan',     icon: 'Scale',   frekuensi: 'Setiap Penyetoran', desc: 'Sampah yang disetor warga ditimbang dan dicatat jenisnya, lalu dikonversi ke poin.' },
  { id: 3, nama: 'Pemilahan Sampah',             icon: 'Star',    frekuensi: 'Rutin Mingguan', desc: 'Sampah terkumpul dipilah berdasarkan kategori (plastik, kertas, logam, kaca, elektronik) untuk siap dijual.' },
  { id: 4, nama: 'Penjualan ke Pengepul',        icon: 'Gift',    frekuensi: 'Bulanan', desc: 'Sampah terpilah dijual ke pengepul mitra. Hasil untuk operasional + reward warga.' },
  { id: 5, nama: 'Sosialisasi ke Warga',         icon: 'Users',   frekuensi: 'Berkala', desc: 'Penyuluhan pentingnya memilah sampah, pengelolaan sampah rumah tangga, manfaat bergabung.' },
  { id: 6, nama: 'Pelatihan Pengolahan Sampah',  icon: 'Award',   frekuensi: 'Berkala', desc: 'Workshop mengolah sampah jadi produk bernilai (kerajinan plastik, kompos).' },
  { id: 7, nama: 'Bersih-Bersih Lingkungan',     icon: 'Leaf',    frekuensi: 'Bulanan', desc: 'Gotong royong membersihkan lingkungan kelurahan.' },
  { id: 8, nama: 'Rencana: Bengkel Las Tenaga Surya', icon: 'Target', frekuensi: 'Dalam Perencanaan', desc: 'Pengembangan fasilitas bengkel las bertenaga panel surya untuk masyarakat & nelayan.' },
];

export const catatanPenting = [
  'Bank Sampah ini merupakan satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung.',
  'Fasilitas dan fondasi awal dibangun atas kerja sama dengan Pertamina.',
  'Pembangunan tahap kedua dibantu oleh Dinas PU.',
  'Terdapat rencana pengembangan bengkel las bertenaga listrik dari panel surya.',
  'Bank Sampah fokus pada sampah anorganik — plastik, kertas, logam, kaca, dan elektronik.',
];
```

## `data/poin.js`

```javascript
export const langkahPoin = [
  { step: 1, title: 'Pilah Sampah',       desc: 'Pilah sampah di rumah berdasarkan kategori: dedaunan, kertas, plastik, minyak jelantah, dan kantong semen.' },
  { step: 2, title: 'Bawa ke Bank Sampah', desc: 'Bawa sampah yang telah dipilah ke tempat penyetoran Bank Sampah pada jam operasional.' },
  { step: 3, title: 'Ditimbang Petugas',   desc: 'Sampah ditimbang oleh petugas dan nasabah akan mendapatkan poin sesuai jenis dan berat.' },
  { step: 4, title: 'Ajukan Penukaran',    desc: 'Ajukan penukaran poin sesuai dengan poin yang telah dikumpulkan.' },
  { step: 5, title: 'Kumpulkan Hadiah',    desc: 'Tukarkan poin dengan berbagai hadiah menarik yang tersedia.' },
];

// PERSIS sesuai PPT Nabuang Sarok — JANGAN UBAH
export const katalogPoin = [
  { no: 1, jenis: 'Dedaunan',       kategori: 'Organik', poin: 3, keterangan: 'Daun kering, ranting kecil' },
  { no: 2, jenis: 'Kertas',         kategori: 'Kertas',  poin: 3, keterangan: 'Koran, kardus, HVS, majalah' },
  { no: 3, jenis: 'Plastik',        kategori: 'Plastik', poin: 5, keterangan: 'Botol PET, gelas plastik, kantong' },
  { no: 4, jenis: 'Minyak Jelantah', kategori: 'Minyak', poin: 5, keterangan: 'Minyak goreng bekas' },
  { no: 5, jenis: 'Kantong Semen',  kategori: 'Kertas',  poin: 8, keterangan: 'Kantong semen bekas' },
];

export const kategoriColors = {
  Organik: { color: 'var(--cat-organik)', bg: 'var(--cat-organik-bg)', border: 'var(--cat-organik-border)' },
  Kertas:  { color: 'var(--cat-kertas)',  bg: 'var(--cat-kertas-bg)',  border: 'var(--cat-kertas-border)' },
  Plastik: { color: 'var(--cat-plastik)', bg: 'var(--cat-plastik-bg)', border: 'var(--cat-plastik-border)' },
  Minyak:  { color: 'var(--cat-minyak)',  bg: 'var(--cat-minyak-bg)',  border: 'var(--cat-minyak-border)' },
};

// 6 hadiah dari PPT NASA — pakai LUCIDE icons (no emoji)
export const rewards = [
  { id: 1, nama: 'Buku Gambar',    icon: 'BookOpen',   poin: 'Mulai 10 poin' },
  { id: 2, nama: 'Gula',           icon: 'Candy',      poin: 'Mulai 15 poin' },
  { id: 3, nama: 'Minyak Goreng',  icon: 'Droplet',    poin: 'Mulai 20 poin' },
  { id: 4, nama: 'Stationery',     icon: 'Pencil',     poin: 'Mulai 10 poin' },
  { id: 5, nama: 'Tumbler',        icon: 'GlassWater', poin: 'Mulai 30 poin' },
  { id: 6, nama: 'Jam Tangan',     icon: 'Watch',      poin: 'Mulai 50 poin' },
];

export const achievementsNasa = [
  'PROPER Emas 2023',
  'Diamond TKMPN 2024',
  'Hak Cipta Kemenkumham',
  'Data SISPN Nasional',
];
```

## `data/faq.js`

```javascript
export const faqPoin = [
  {
    q: 'Bagaimana cara mendaftar sebagai anggota?',
    a: 'Kunjungi website Nabuang Sarok, klik opsi "Bergabung dengan kami", lalu isi data diri pada form pendaftaran. Anda juga bisa mendaftar langsung di pos Bank Sampah.',
  },
  {
    q: 'Apakah ada minimal berat sampah untuk disetor?',
    a: 'Tidak ada minimal berat. Berapa pun sampah yang Anda bawa akan diterima, ditimbang, dan dikonversi menjadi poin.',
  },
  {
    q: 'Berapa lama poin berlaku?',
    a: 'Poin tidak memiliki masa kadaluarsa. Poin akan terus terakumulasi hingga Anda memutuskan untuk menukarkannya.',
  },
  {
    q: 'Apa itu Program Nabuang Sarok?',
    a: 'Nabuang Sarok adalah program PT Semen Padang yang berfokus pada perubahan perilaku masyarakat dalam membuang dan memilah sampah sejak dari sumbernya. Program ini berkolaborasi dengan mahasiswa KKN untuk sosialisasi dan edukasi.',
  },
  {
    q: 'Jenis sampah apa saja yang diterima?',
    a: 'Bank Sampah menerima dedaunan, kertas, plastik, minyak jelantah, dan kantong semen. Setiap jenis memiliki nilai poin yang berbeda per kilogram.',
  },
];
```

## `data/sejarah.js`

```javascript
export const sejarah = [
  { year: '2023', title: 'Pendirian Bank Sampah',       desc: 'Didirikan atas inisiatif warga dan dukungan kelurahan sebagai solusi pengelolaan sampah berbasis komunitas.' },
  { year: '2024', title: 'Pengembangan Program',        desc: 'Mulai menjalankan program pengumpulan rutin, sosialisasi ke RT/RW, dan menjalin kerja sama dengan pengepul lokal.' },
  { year: '2025', title: 'Peningkatan Partisipasi',     desc: 'Jumlah anggota bertambah signifikan, kegiatan pelatihan pengolahan sampah semakin rutin.' },
  { year: '2026', title: 'Digitalisasi',                desc: 'Tim KKN Nabuang Sarok membantu membangun website resmi sebagai media informasi digital.' },
];

export const visiMisi = {
  visi: 'Menjadi unit pengelola sampah berbasis masyarakat yang mandiri, berdaya guna, dan berkontribusi nyata terhadap kebersihan lingkungan serta peningkatan kesejahteraan warga Kelurahan Teluk Kabung Tengah.',
  misi: [
    'Meningkatkan kesadaran masyarakat tentang pengelolaan sampah yang baik dan benar.',
    'Mengurangi volume sampah yang masuk ke TPA melalui pemilahan di sumber.',
    'Memberikan nilai ekonomi pada sampah melalui sistem poin dan penukaran.',
    'Membangun jaringan kemitraan dengan pengepul, instansi, dan komunitas peduli lingkungan.',
    'Menjadikan bank sampah sebagai pusat edukasi lingkungan bagi warga sekitar.',
  ],
};

export const profilBank = [
  { label: 'Nama Resmi',     value: 'Bank Sampah Unit Teluk Kabung Tengah' },
  { label: 'Tanggal Berdiri', value: '2023' },
  { label: 'Alamat',         value: 'Kelurahan Teluk Kabung Tengah, Kec. Bungus Teluk Kabung, Kota Padang' },
  { label: 'Status',         value: 'Aktif — terdaftar di Kelurahan' },
];

export const tentangNasa = [
  'Nabuang Sarok adalah program yang dinisiasi oleh PT Semen Padang, berfokus pada perubahan perilaku masyarakat dalam membuang dan memilah sampah sejak dari sumbernya di wilayah Sumatera Barat.',
  'Melalui pendekatan edukasi, penyediaan sarana, serta kolaborasi dengan masyarakat dan mahasiswa KKN, program ini bertujuan mengurangi timbulan sampah yang tidak terkelola dan mendorong praktik pengelolaan sampah yang berkelanjutan.',
];
```

## `data/tim.js`

> **PENTING:** Ridho Dwi Syahputra HARUS di index 0 (default active carousel).

```javascript
export const tim = [
  {
    id: 1,
    nama: 'Ridho Dwi Syahputra',
    nim: '2311522033',
    fakultas: 'Teknologi Informasi',
    prodi: 'Sistem Informasi',
    pesan: 'Membangun website ini adalah cara kami menghubungkan teknologi dengan kebutuhan masyarakat. Terima kasih untuk semua pelajaran selama KKN.',
  },
  {
    id: 2,
    nama: 'Muhammad Fakhri Nurwahid',
    nim: 'TBD',
    fakultas: 'Teknik',
    prodi: 'Teknik Lingkungan',
    pesan: 'KKN di Teluk Kabung Tengah memberi pengalaman berharga tentang pengelolaan lingkungan langsung di tengah masyarakat. Semoga Bank Sampah ini terus berkembang.',
  },
  {
    id: 3,
    nama: 'Hauna Amiratussyifa',
    nim: 'TBD',
    fakultas: 'Teknik',
    prodi: 'Teknik Industri',
    pesan: 'Keramahan warga Teluk Kabung Tengah membuat KKN ini terasa seperti di rumah sendiri. Banyak pelajaran hidup yang tidak didapat di kampus.',
  },
  {
    id: 4,
    nama: 'Faiza Mumtaz',
    nim: 'TBD',
    fakultas: 'Teknik',
    prodi: 'Teknik Industri',
    pesan: 'Senang bisa berkontribusi untuk lingkungan melalui Bank Sampah. Pengalaman ini mengajarkan pentingnya gotong royong dan kepedulian sosial.',
  },
  {
    id: 5,
    nama: 'Rafi Yandra Maulana Fauzi',
    nim: 'TBD',
    fakultas: 'Teknologi Informasi',
    prodi: 'Sistem Informasi',
    pesan: 'KKN ini membuka mata tentang bagaimana teknologi bisa membantu masyarakat secara langsung. Luar biasa pengalamannya.',
  },
  {
    id: 6,
    nama: 'Az-Zahra Fadhilah',
    nim: 'TBD',
    fakultas: 'ISIP',
    prodi: 'Sosiologi',
    pesan: 'Berinteraksi langsung dengan warga memberi perspektif baru tentang dinamika sosial. Teluk Kabung Tengah punya potensi besar.',
  },
  {
    id: 7,
    nama: 'Davyd Yehuda',
    nim: 'TBD',
    fakultas: 'Teknologi Informasi',
    prodi: 'Sistem Informasi',
    pesan: 'Pengalaman KKN yang tidak terlupakan. Bekerja sama dengan tim dan warga untuk sesuatu yang bermanfaat bagi lingkungan.',
  },
];

export const infoTim = {
  jumlahAnggota: 7,
  program: 'KKN Nabuang Sarok',
  periode: 2026,
  lokasi: 'Teluk Kabung Tengah',
  universitas: 'Universitas Andalas',
};

export const ucapanTerimaKasih = 'Kami mengucapkan terima kasih kepada seluruh pengurus Bank Sampah Unit Teluk Kabung Tengah, Bapak Fadli selaku koordinator, warga Kelurahan Teluk Kabung Tengah, serta pihak kelurahan dan Universitas Andalas atas dukungannya selama program KKN berlangsung.';
```

## Field TBD (perlu data lapangan)

| File | Field | Catatan |
|---|---|---|
| `kontak.js` | `whatsapp`, `email`, `instagram` | Tanya pengurus |
| `pengurus.js` | nama Sekretaris/Bendahara/Anggota | Tanya pengurus |
| `tim.js` | NIM anggota 2-7 | Minta ke anggota tim |
| `tim.js` | `pesan` (boleh diganti dengan pesan asli) | Tiap anggota tulis sendiri |
