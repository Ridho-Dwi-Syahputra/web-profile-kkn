# Website Bank Sampah Unit Teluk Kabung Tengah

Frontend statis untuk Bank Sampah Unit Teluk Kabung Tengah — bagian dari program
KKN Nabuang Sarok 2026 Kelompok 4, Universitas Andalas.

## Tech Stack

- React 18 + Vite 5
- React Router DOM v6
- CSS Modules + CSS Variables (`src/styles/variables.css`)
- Lucide React (semua ikon)

## Quick Start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output ke dist/
```

## Struktur Folder

```
src/
├── components/
│   ├── layout/      Navbar, Footer, Layout
│   ├── ui/          Primitives reusable
│   └── sections/    Section per halaman
├── pages/           Halaman per route
├── data/            Data statis (.js)
├── hooks/           Custom hooks
└── styles/          variables.css + globals.css
```

## Dokumentasi

Lihat `docs/plan/00-overview.md` untuk peta dokumentasi implementasi.
PRD lengkap di `docs/PRD-Website-BankSampah.md`.

## Aturan

- **TIDAK ADA EMOJI** — semua ikon WAJIB Lucide React
- Semua gambar pakai `<ImagePlaceholder>` sampai foto asli tersedia
- Data konten edit di `src/data/*.js`, jangan hardcode di JSX
