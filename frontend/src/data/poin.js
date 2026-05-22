export const langkahPoin = [
  {
    step: 1,
    title: 'Pilah Sampah',
    desc: 'Pilah sampah di rumah berdasarkan kategori: dedaunan, kertas, plastik, minyak jelantah, dan kantong semen.',
  },
  {
    step: 2,
    title: 'Bawa ke Bank Sampah',
    desc: 'Bawa sampah yang telah dipilah ke tempat penyetoran Bank Sampah pada jam operasional.',
  },
  {
    step: 3,
    title: 'Ditimbang Petugas',
    desc: 'Sampah ditimbang oleh petugas dan nasabah akan mendapatkan poin sesuai jenis dan berat.',
  },
  {
    step: 4,
    title: 'Ajukan Penukaran',
    desc: 'Ajukan penukaran poin sesuai dengan poin yang telah dikumpulkan.',
  },
  {
    step: 5,
    title: 'Kumpulkan Hadiah',
    desc: 'Tukarkan poin dengan berbagai hadiah menarik yang tersedia.',
  },
];

// Data PERSIS sesuai PPT Nabuang Sarok — JANGAN DIUBAH
export const katalogPoin = [
  { no: 1, jenis: 'Dedaunan', kategori: 'Organik', poin: 3, keterangan: 'Daun kering, ranting kecil' },
  { no: 2, jenis: 'Kertas', kategori: 'Kertas', poin: 3, keterangan: 'Koran, kardus, HVS, majalah' },
  { no: 3, jenis: 'Plastik', kategori: 'Plastik', poin: 5, keterangan: 'Botol PET, gelas plastik, kantong' },
  { no: 4, jenis: 'Minyak Jelantah', kategori: 'Minyak', poin: 5, keterangan: 'Minyak goreng bekas' },
  { no: 5, jenis: 'Kantong Semen', kategori: 'Kertas', poin: 8, keterangan: 'Kantong semen bekas' },
];

export const kategoriColors = {
  Organik: {
    color: 'var(--cat-organik)',
    bg: 'var(--cat-organik-bg)',
    border: 'var(--cat-organik-border)',
  },
  Kertas: {
    color: 'var(--cat-kertas)',
    bg: 'var(--cat-kertas-bg)',
    border: 'var(--cat-kertas-border)',
  },
  Plastik: {
    color: 'var(--cat-plastik)',
    bg: 'var(--cat-plastik-bg)',
    border: 'var(--cat-plastik-border)',
  },
  Minyak: {
    color: 'var(--cat-minyak)',
    bg: 'var(--cat-minyak-bg)',
    border: 'var(--cat-minyak-border)',
  },
};

// 6 hadiah dari PPT NASA — pakai LUCIDE icons (no emoji)
export const rewards = [
  { id: 1, nama: 'Buku Gambar', icon: 'BookOpen', poin: 'Mulai 10 poin' },
  { id: 2, nama: 'Gula', icon: 'Candy', poin: 'Mulai 15 poin' },
  { id: 3, nama: 'Minyak Goreng', icon: 'Droplet', poin: 'Mulai 20 poin' },
  { id: 4, nama: 'Stationery', icon: 'Pencil', poin: 'Mulai 10 poin' },
  { id: 5, nama: 'Tumbler', icon: 'GlassWater', poin: 'Mulai 30 poin' },
  { id: 6, nama: 'Jam Tangan', icon: 'Watch', poin: 'Mulai 50 poin' },
];

export const achievementsNasa = [
  'PROPER Emas 2023',
  'Diamond TKMPN 2024',
  'Hak Cipta Kemenkumham',
  'Data SISPN Nasional',
];
