# 00 — Overview Implementasi

> Dokumen ini adalah peta navigasi untuk seri dokumen `docs/plan/`. Baca file ini
> dulu untuk memahami konteks, lalu lompat ke file spesifik sesuai kebutuhan.

## Konteks Project

**Nama:** Website Bank Sampah Unit Teluk Kabung Tengah
**Pemilik:** Tim KKN Nabuang Sarok Kelompok 4 — Universitas Andalas
**Periode:** KKN 2026
**Status:** Frontend-only static website, ready for development

PRD lengkap ada di [`../PRD-Website-BankSampah.md`](../PRD-Website-BankSampah.md).
Dokumen plan ini menerjemahkan PRD menjadi langkah implementasi yang actionable.

## Tech Stack Final

| Komponen | Pilihan | Alasan |
|---|---|---|
| Build tool | Vite 5+ | Fast HMR, simple config |
| UI library | React 18 | Sesuai PRD |
| Router | React Router DOM v6 | SPA navigation |
| Styling | **CSS Modules + `variables.css`** | Scoped per komponen, tanpa setup tambahan |
| Icons | **Lucide React** | Konsisten, tree-shakeable |
| Animasi | **Pure CSS `@keyframes`** | Ringan, tanpa dependency tambahan |
| Deployment | Vercel | Static hosting gratis |

## Aturan Project (NON-NEGOTIABLE)

1. **TIDAK ADA EMOJI** di seluruh codebase (JSX, CSS, JS). Semua ikon WAJIB
   memakai Lucide React. PRD asli menampilkan emoji 📓🍚🫗✏️🥤⌚ pada reward —
   diganti dengan `BookOpen`, `Candy`, `Droplet`, `Pencil`, `GlassWater`, `Watch`.
2. **Tidak ada gambar asli** — semua `<img>` diganti dengan komponen
   `<ImagePlaceholder>` (ikon `Image` Lucide + background gradient). Label /
   caption foto akan ditambahkan user belakangan.
3. **Data PERSIS sesuai PRD** untuk Katalog Poin (5 item dari PPT NASA) dan
   Pengurus (hanya 4 orang, Bapak Fadli sebagai Koordinator).
4. **Ridho Dwi Syahputra** harus berada di **index 0** array `tim` agar menjadi
   default active di 3-card carousel halaman Tim.

## Peta Dokumen

| File | Topik |
|---|---|
| [`01-setup.md`](./01-setup.md) | Instalasi Vite, dependencies, struktur folder, config |
| [`02-design-system.md`](./02-design-system.md) | CSS variables, tipografi, spacing, keyframes |
| [`03-components.md`](./03-components.md) | Spesifikasi tiap komponen reusable |
| [`04-pages.md`](./04-pages.md) | Detail per halaman (section list, layout, behavior) |
| [`05-data.md`](./05-data.md) | Skema dan isi `src/data/*.js` |
| [`06-routing.md`](./06-routing.md) | Konfigurasi React Router + scroll behaviour |
| [`07-checklist.md`](./07-checklist.md) | Pre-launch checklist + audit khusus |

## Prinsip Implementasi

- **Component-based** — Setiap UI element jadi komponen reusable.
- **Data-driven** — Konten statis di `src/data/*.js`, bukan hardcoded di JSX.
- **Mobile-first** — CSS mobile dulu, enhance ke desktop via media query.
- **Tidak over-engineer** — Tidak ada state management library, tidak ada
  TypeScript, tidak ada testing framework. Static site.

## Halaman (6 + 1)

| Route | Komponen | Tujuan |
|---|---|---|
| `/` | `Home.jsx` | Pintu masuk + pengenalan singkat |
| `/tentang` | `Tentang.jsx` | Profil, visi-misi, sejarah |
| `/struktur` | `Struktur.jsx` | 4 pengurus + info operasional |
| `/kegiatan` | `Kegiatan.jsx` | Daftar 8 kegiatan + 5 catatan |
| `/poin` | `Poin.jsx` | Sistem Nabuang Sarok (alur, katalog, reward, FAQ) |
| `/tim` | `Tim.jsx` | 7 anggota KKN dengan 3-card carousel |
| `*` | `NotFound.jsx` | 404 fallback |
