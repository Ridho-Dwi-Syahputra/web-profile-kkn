# PRD — Website Bank Sampah Unit Teluk Kabung Tengah

**Versi:** 2.0 (Final, dengan revisi lapangan)
**Tanggal:** Mei 2026
**Tim:** KKN Nabuang Sarok — Kelompok 4 (Teluk Kabung Tengah)
**Institusi:** Universitas Andalas
**Tech Stack:** React 18 + Vite + Tailwind/CSS Modules
**Deployment:** Vercel
**Status:** Draft Final — Ready for Development

---

## DAFTAR ISI

1. [Gambaran Umum Proyek](#1-gambaran-umum-proyek)
2. [Tech Stack & Arsitektur](#2-tech-stack--arsitektur)
3. [Design System](#3-design-system)
4. [Struktur Folder Proyek](#4-struktur-folder-proyek)
5. [Routing & Navigasi](#5-routing--navigasi)
6. [Komponen Bersama (Shared Components)](#6-komponen-bersama-shared-components)
7. [Spesifikasi Halaman Detail](#7-spesifikasi-halaman-detail)
   - [7.1 Beranda](#71-halaman-beranda---)
   - [7.2 Tentang](#72-halaman-tentang---tentang)
   - [7.3 Struktur Organisasi](#73-halaman-struktur-organisasi---struktur)
   - [7.4 Kegiatan](#74-halaman-kegiatan---kegiatan)
   - [7.5 Poin & Penukaran](#75-halaman-poin--penukaran---poin)
   - [7.6 Tim KKN](#76-halaman-tim-kkn---tim)
8. [Data Model & Konten Statis](#8-data-model--konten-statis)
9. [Responsivitas & Breakpoint](#9-responsivitas--breakpoint)
10. [Aset & Konten yang Dibutuhkan](#10-aset--konten-yang-dibutuhkan)
11. [Animasi & Interaksi](#11-animasi--interaksi)
12. [Panduan Deployment](#12-panduan-deployment)
13. [Checklist Pre-Launch](#13-checklist-pre-launch)

---

## 1. Gambaran Umum Proyek

### 1.1 Latar Belakang

Bank Sampah Unit Teluk Kabung Tengah adalah unit pengelola sampah berbasis masyarakat yang berlokasi di Kelurahan Teluk Kabung Tengah, Kecamatan Bungus Teluk Kabung, Kota Padang. Bank Sampah ini merupakan **satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung**.

Sebagai bagian dari program **KKN Nabuang Sarok 2026 — Kelompok 4**, tim mahasiswa Universitas Andalas membangun website resmi untuk:
- Memperkuat identitas digital bank sampah
- Memudahkan masyarakat mendapatkan informasi tentang program, kegiatan, dan sistem poin
- Mengintegrasikan dengan program Nabuang Sarok PT Semen Padang

### 1.2 Tujuan Produk

1. Memperkenalkan Bank Sampah Unit Teluk Kabung Tengah secara digital ke masyarakat luas
2. Menyediakan informasi profil, struktur organisasi, dan kegiatan bank sampah
3. Menampilkan sistem poin penukaran sampah sesuai program Nabuang Sarok
4. Memperkenalkan tim KKN Nabuang Sarok Kelompok 4 sebagai pembuat website
5. Memberikan pengalaman pengguna yang nyaman, modern, dan responsif

### 1.3 Ruang Lingkup

- **Tipe:** Website statis (frontend only) — tanpa backend, tanpa database, tanpa autentikasi
- **Halaman:** 6 halaman utama (Beranda, Tentang, Struktur, Kegiatan, Poin, Tim Kami)
- **Bahasa:** Bahasa Indonesia
- **Target Device:** Desktop, Tablet, Mobile (responsif)

### 1.4 Target Pengguna

| Segmen | Kebutuhan |
|---|---|
| Warga Kelurahan Teluk Kabung Tengah | Info bank sampah, cara menukar sampah, sistem poin |
| Pengurus Bank Sampah | Media profil resmi dan dokumentasi kegiatan |
| Mahasiswa / Peneliti | Referensi program bank sampah berbasis komunitas |
| Dinas / Instansi Terkait | Informasi kelembagaan dan kegiatan |
| Mitra (PT Semen Padang, Pertamina, Dinas PU) | Profil mitra binaan |

---

## 2. Tech Stack & Arsitektur

### 2.1 Stack Teknologi

| Komponen | Teknologi | Versi | Keterangan |
|---|---|---|---|
| Framework UI | React | 18.3+ | Library utama |
| Build Tool | Vite | 5+ | Bundler cepat |
| Styling | Tailwind CSS / CSS Modules | 3+ | Utility-first atau modul per komponen |
| Routing | React Router DOM | v6 | Navigasi SPA |
| Icons | Lucide React | Latest | Icon set modern |
| Animasi | Framer Motion (opsional) | Latest | Untuk animasi smooth |
| Carousel | Implementasi custom dengan React hooks | - | Tidak perlu library eksternal |
| Deployment | Vercel | - | Hosting static gratis |
| Version Control | GitHub | - | Repositori + CI/CD |

### 2.2 Prinsip Arsitektur

- **Component-based:** Setiap UI element jadi komponen reusable
- **Data-driven:** Konten statis di file `.js` atau `.json` terpisah di folder `data/`
- **Mobile-first:** Desain dimulai dari mobile, scale up ke desktop
- **Performance:** Lazy loading untuk gambar, minimal dependencies

---

## 3. Design System

### 3.1 Tema Visual

**Mood:** Modern, elegan, ramah lingkungan
**Inspirasi:** HVM Digital — tema hijau gelap dengan aksen lime
**Karakter:** Profesional, terpercaya, peduli lingkungan

### 3.2 Palet Warna

```css
:root {
  /* Primary Colors */
  --primary: #0D2B0D;          /* Dark Green — background utama */
  --secondary: #1A5C1A;         /* Secondary Green — background sekunder */
  --accent: #39FF14;            /* Accent Lime — CTA, highlight */
  --accent-soft: #7FFF00;       /* Accent Lime Soft — hover state */

  /* Text Colors */
  --text-primary: #FFFFFF;      /* Teks utama */
  --text-secondary: #A8D5A8;    /* Teks pendukung, subtitle */

  /* Surface Colors */
  --card-bg: #1E3D1E;           /* Background kartu */
  --border: #2D6B2D;            /* Garis pemisah */
  --overlay: rgba(13,43,13,0.85); /* Overlay gambar */
  --footer-bg: #071507;         /* Footer paling gelap */
  --section-alt: #0a1f0a;       /* Background section alternatif */
}
```

### 3.3 Tipografi

```css
:root {
  --font-heading: 'Plus Jakarta Sans', 'Poppins', sans-serif;
  --font-body: 'Inter', 'Poppins', sans-serif;
}
```

**Skala Tipografi:**

| Element | Font | Size | Weight | Line-height |
|---|---|---|---|---|
| H1 (Hero) | Plus Jakarta Sans | clamp(2.2rem, 4vw, 3.2rem) | 800 | 1.1 |
| H1 (Page Header) | Plus Jakarta Sans | clamp(2rem, 3.5vw, 2.8rem) | 800 | 1.1 |
| H2 (Section Title) | Plus Jakarta Sans | 2rem | 700 | 1.2 |
| H3 (Card Title) | Plus Jakarta Sans | 1.15rem | 600-700 | 1.3 |
| H4 (Sub-heading) | Plus Jakarta Sans | 1rem | 600 | 1.4 |
| Body | Inter | 1rem | 400 | 1.7 |
| Caption | Inter | 0.85rem | 400-500 | 1.5 |
| Button | Plus Jakarta Sans | 0.95rem | 600 | 1 |
| Badge | Plus Jakarta Sans | 0.8rem | 600 | 1 |

### 3.4 Spacing & Layout

```css
:root {
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 20px;
  --container-max: 1200px;
  --container-padding: 24px;  /* 16px on mobile */
  --section-padding: 80px;     /* 60px on mobile */
}
```

### 3.5 Komponen UI Konstanta

**Button:**
- Primary: background `accent`, text `primary` (dark), padding `14px 28px`, border-radius `50px`
- Outline: background transparent, border `border` color, text white
- Hover: translateY(-2px) + shadow glow

**Card:**
- Background: `card-bg`
- Border: `1px solid border`
- Border-radius: `radius` (12px)
- Padding: `24px`
- Hover: translateY(-4px), border-color `rgba(57,255,20,0.3)`, shadow

**Badge:**
- Background: `rgba(57,255,20,0.1)`
- Border: `1px solid rgba(57,255,20,0.2)`
- Color: `accent`
- Padding: `6px 14px`, border-radius `50px`
- Font-size: `0.8rem`, weight 600

### 3.6 Shadow & Effects

```css
--shadow-card: 0 12px 40px rgba(0,0,0,0.3);
--shadow-card-hover: 0 20px 60px rgba(0,0,0,0.4);
--shadow-glow: 0 8px 30px rgba(57,255,20,0.25);
--blur-backdrop: blur(20px);
```

---

## 4. Struktur Folder Proyek

```
bank-sampah-website/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero-bg.jpg
│   │   │   ├── logo.png
│   │   │   ├── lokasi/          # Foto bank sampah
│   │   │   ├── kegiatan/        # Foto kegiatan
│   │   │   ├── pengurus/        # Foto pengurus
│   │   │   └── tim/             # Foto tim KKN
│   │   └── icons/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   └── Carousel.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── ContactInfo.jsx
│   │       └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tentang.jsx
│   │   ├── Struktur.jsx
│   │   ├── Kegiatan.jsx
│   │   ├── Poin.jsx
│   │   └── Tim.jsx
│   ├── data/
│   │   ├── pengurus.js
│   │   ├── kegiatan.js
│   │   ├── poin.js
│   │   ├── tim.js
│   │   └── faq.js
│   ├── hooks/
│   │   ├── useCarousel.js
│   │   └── useScrollPosition.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
├── vercel.json
└── README.md
```

---

## 5. Routing & Navigasi

### 5.1 Route Map

| No | Route | Komponen | Label Navbar |
|---|---|---|---|
| 1 | `/` | `Home.jsx` | Beranda |
| 2 | `/tentang` | `Tentang.jsx` | Tentang |
| 3 | `/struktur` | `Struktur.jsx` | Struktur |
| 4 | `/kegiatan` | `Kegiatan.jsx` | Kegiatan |
| 5 | `/poin` | `Poin.jsx` | Poin |
| 6 | `/tim` | `Tim.jsx` | Tim Kami |
| - | `*` | `NotFound.jsx` (opsional) | - |

### 5.2 Konfigurasi React Router

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/struktur" element={<Struktur />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/poin" element={<Poin />} />
      <Route path="/tim" element={<Tim />} />
    </Routes>
  </Layout>
</BrowserRouter>
```

### 5.3 Scroll Behavior

- Setiap navigasi ke halaman baru → `window.scrollTo({ top: 0, behavior: 'smooth' })`
- Buat hook `useScrollToTop()` yang otomatis scroll ke atas saat route berubah

---

## 6. Komponen Bersama (Shared Components)

### 6.1 Navbar

**File:** `src/components/layout/Navbar.jsx`

**Spesifikasi:**
- Position: `fixed top-0`, full width, `z-index: 1000`
- Background:
  - Saat scrollY < 50px: `transparent`
  - Saat scrollY ≥ 50px: `rgba(13,43,13,0.92)` + `backdrop-filter: blur(20px)` + border-bottom
- Tinggi: `72px`
- Padding: `0 24px` (16px mobile)
- Container max-width: `1200px`

**Struktur (left → right):**
1. **Logo Group** (klik → ke /)
   - Icon recycle dalam box `40x40px`, gradient lime-green, border-radius 10px
   - Text: "Bank Sampah" (1.05rem, bold) + subtitle "Teluk Kabung Tengah" (0.7rem, text-secondary)

2. **Menu Items** (desktop only)
   - 6 link: Beranda, Tentang, Struktur, Kegiatan, Poin, Tim Kami
   - Padding `8px 16px`, border-radius 8px
   - Active state: background `rgba(57,255,20,0.12)`, color `accent`
   - Inactive: color `text-secondary`
   - Font: `var(--font-heading)`, weight 500, size 0.9rem

3. **Mobile Toggle** (mobile only)
   - Icon menu (hamburger) atau X
   - Button transparan, color white

**Mobile Drawer:**
- Slide down dari atas
- Background `rgba(13,43,13,0.97)` + blur
- Setiap item: padding `14px 16px`, full width
- Animasi: fadeIn 0.2s

### 6.2 Footer

**File:** `src/components/layout/Footer.jsx`

**Background:** `#071507`
**Padding:** `60px 0 0`
**Border-top:** `1px solid border`

**Layout:** Grid 3-4 kolom (auto-fit minmax 220px)

**Kolom 1 — Brand:**
- Logo + nama "Bank Sampah"
- Tagline pendek (max 2 kalimat)

**Kolom 2 — Navigasi:**
- 6 link navigasi (sama dengan navbar)
- Hover: color `accent`

**Kolom 3 — Kontak:**
- Alamat (icon mapPin)
- WhatsApp (icon phone)
- Jam operasional (icon clock)
- Font size 0.9rem, color `text-secondary`

**Bottom Bar:**
- Border-top, padding `24px 0`
- Copyright text (left)
- Social icons (right): Instagram, Email
- Icon dalam box 36x36, hover: border-color & text → accent

### 6.3 Carousel (Generic)

**File:** `src/components/ui/Carousel.jsx`

**Props:**
```javascript
{
  items: Array,           // Konten slide (string label atau object)
  height: Number = 320,   // Tinggi area carousel (px)
  autoPlay: Boolean = true,
  interval: Number = 4500, // ms
  showDots: Boolean = true,
  showArrows: Boolean = true,
}
```

**Behavior:**
- Auto-slide setiap `interval` ms
- Loop (infinite)
- Manual navigation: panah kiri/kanan + dot indicator
- Swipe support (touch)
- Lazy load gambar

**Visual:**
- Border-radius: `radius`
- Overflow hidden
- Active slide: opacity 1
- Inactive slides: opacity 0
- Transition: opacity 0.6s ease

**Dot Indicator:**
- Active: width 24px, background `accent`
- Inactive: width 8px, background `rgba(255,255,255,0.3)`
- Height 8px, border-radius 4px

**Arrow Buttons:**
- 36x36 circle, background `rgba(13,43,13,0.7)` + blur
- Border: `1px solid border`
- Position: absolute, left/right 12px, top 50%

### 6.4 SectionHeader

**Props:**
```javascript
{
  badge: ReactNode,     // Badge text/element
  title: String,        // Section title
  subtitle: String,     // Section subtitle
  center: Boolean = false,
}
```

**Layout:**
- Badge → Title (dengan accent dot di akhir) → Subtitle
- Margin-bottom 48px
- Title: H2, weight 700
- Subtitle: max-width 600px, color `text-secondary`

### 6.5 Button

**Variants:**
- `primary` — background accent, color primary, hover translate + glow
- `outline` — transparent, border, color white, hover border-color accent

**Common:**
- Padding `14px 28px`
- Border-radius 50px
- Font: heading, weight 600, size 0.95rem
- Transition 0.3s cubic-bezier

### 6.6 Card

**Default:**
```css
.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
  border-color: rgba(57,255,20,0.3);
}
```

### 6.7 Badge

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  background: rgba(57,255,20,0.1);
  color: var(--accent);
  border: 1px solid rgba(57,255,20,0.2);
}
```

---

## 7. Spesifikasi Halaman Detail

---

### 7.1 Halaman Beranda — `/`

**Tujuan:** Pintu masuk utama, pengenalan singkat bank sampah & CTA navigasi

**Section List (top → bottom):**

#### 7.1.1 Hero Section

**Layout:** Grid 2 kolom (1:1) di desktop, 1 kolom di mobile
**Min-height:** 100vh
**Background:** `linear-gradient(160deg, #0D2B0D 0%, #102e10 40%, #1A3A1A 100%)`
**Padding-top:** 100px (memberi ruang untuk navbar)

**Decorative Elements:**
- Radial gradient lime (top-right, 500x500px, opacity 6%)
- Radial gradient hijau (bottom-left, 400x400px)
- Grid pattern background (opacity 3%, 60x60px)

**Kolom Kiri (Content):**
- Badge: ikon leaf + "Kelurahan Teluk Kabung Tengah"
- H1: "Bank Sampah Unit" + line-break + `<span color: accent>Teluk Kabung Tengah</span>`
- Tagline: "Bersama mengelola sampah untuk lingkungan yang lebih bersih, sehat, dan bernilai ekonomi bagi masyarakat."
- Tombol:
  - Primary: "Pelajari Lebih Lanjut" → /tentang (icon arrowRight)
  - Outline: "Lihat Kegiatan" → /kegiatan

**Kolom Kanan (Visual):**
- Aspect-ratio 4:3
- Border-radius `radius-lg`
- Background gradient hijau
- Placeholder foto bank sampah (icon image + text "Foto Bank Sampah")
- **Hide pada mobile**

**Animasi:**
- Content: fadeInUp 0.6s ease-out forwards
- Visual: fadeIn 0.5s ease-out, delay 0.2s

#### 7.1.2 Tentang Singkat + Carousel

**Background:** `var(--primary)`
**Padding:** `var(--section-padding)`

**Layout:** Grid 2 kolom (1:1)

**Kolom Kiri:**
- Carousel (height 340px)
- Items: 4 placeholder foto ("Foto Lokasi Bank Sampah 1", "Foto Kegiatan Pengumpulan", "Foto Penimbangan Sampah", "Foto Warga Berpartisipasi")

**Kolom Kanan:**
- SectionHeader: badge "Tentang Kami", title "Mengenal Bank Sampah"
- 2 paragraf deskripsi
- Tombol outline: "Selengkapnya" → /tentang

**Mobile:** Stack vertikal (1 kolom)

#### 7.1.3 Lokasi & Kontak

**Background:** `var(--primary)`

**Layout:** Grid 2 kolom

**Kolom Kiri — Map:**
- SectionHeader: badge dengan icon mapPin + "Lokasi", title "Temukan Kami"
- Map placeholder (height 320px) ATAU Google Maps embed
- Alamat: "Kelurahan Teluk Kabung Tengah, Kec. Bungus Teluk Kabung, Kota Padang"

**Kolom Kanan — Kontak (Cards):**
- SectionHeader: badge "Kontak", title "Hubungi Kami"
- 4 card kontak:
  1. **Alamat** — Kelurahan Teluk Kabung Tengah, Kec. Bungus Teluk Kabung, Kota Padang, Sumatera Barat
  2. **WhatsApp** — +62 812-XXXX-XXXX (placeholder, isi sesuai data lapangan)
  3. **Jam Operasional** — Senin – Sabtu: 08.00 – 16.00 WIB
  4. **Email** — banksampah.tkbtengah@email.com (placeholder)

**Card Structure:**
- Display: flex, gap 16px
- Icon box (40x40, accent bg)
- Text: label kecil + value bold

**Mobile:** Stack 1 kolom

---

### 7.2 Halaman Tentang — `/tentang`

**Tujuan:** Profil lengkap, sejarah, visi misi, lokasi

**Section List:**

#### 7.2.1 Page Header

**Padding:** `120px 0 60px`
**Background:** Gradient hijau (sama dengan hero beranda)

**Konten:**
- Badge: icon leaf + "Profil"
- H1: "Tentang Bank Sampah." (titik = accent)
- Subtitle: "Mengenal lebih dekat Bank Sampah Unit Teluk Kabung Tengah — sejarah, visi, misi, dan komitmen kami."

#### 7.2.2 Profil Section

**Layout:** Grid 2 kolom

**Kolom Kiri:**
- SectionHeader: badge "Profil", title "Bank Sampah Unit Teluk Kabung Tengah"
- List info (label-value pair):
  - Nama Resmi: Bank Sampah Unit Teluk Kabung Tengah
  - Tanggal Berdiri: (sesuai data lapangan, fallback "2023")
  - Alamat: Kelurahan Teluk Kabung Tengah, Kec. Bungus Teluk Kabung, Kota Padang
  - Status: Aktif — terdaftar di Kelurahan

**Kolom Kanan:**
- Image placeholder (aspect-ratio 4:3)

#### 7.2.3 Visi & Misi (dengan Tab Interaktif)

**Background:** `--section-alt` (#0a1f0a)

**Tab Switcher:**
- 2 tab: "Visi" (icon eye) | "Misi" (icon target)
- Active: bg `rgba(57,255,20,0.12)`, color accent, border accent
- Inactive: bg card-bg, color text-secondary

**Konten Visi:**
- Single card centered, max-width 700px
- Icon eye (56x56) di tengah
- Quote: "Menjadi unit pengelola sampah berbasis masyarakat yang mandiri, berdaya guna, dan berkontribusi nyata terhadap kebersihan lingkungan serta peningkatan kesejahteraan warga Kelurahan Teluk Kabung Tengah."

**Konten Misi:**
- Grid 2-3 kolom (auto-fit 280px)
- Setiap item: number badge + text
- 5 poin misi:
  1. Meningkatkan kesadaran masyarakat tentang pengelolaan sampah yang baik dan benar
  2. Mengurangi volume sampah yang masuk ke TPA melalui pemilahan di sumber
  3. Memberikan nilai ekonomi pada sampah melalui sistem poin dan penukaran
  4. Membangun jaringan kemitraan dengan pengepul, instansi, dan komunitas peduli lingkungan
  5. Menjadikan bank sampah sebagai pusat edukasi lingkungan bagi warga sekitar

#### 7.2.4 Sejarah (Timeline)

**Background:** `var(--primary)`

**Layout:** Timeline vertikal, max-width 800px

**Items (4 entry):**
| Tahun | Judul | Deskripsi |
|---|---|---|
| 2023 | Pendirian Bank Sampah | Didirikan atas inisiatif warga dan dukungan kelurahan sebagai solusi pengelolaan sampah berbasis komunitas |
| 2024 | Pengembangan Program | Mulai menjalankan program pengumpulan rutin, sosialisasi ke RT/RW, dan menjalin kerja sama dengan pengepul lokal |
| 2025 | Peningkatan Partisipasi | Jumlah anggota bertambah signifikan, kegiatan pelatihan pengolahan sampah semakin rutin |
| 2026 | Digitalisasi | Tim KKN Nabuang Sarok membantu membangun website resmi sebagai media informasi digital |

**Struktur Item:**
- Year badge (48x48, rounded 12, accent bg)
- Connector line (vertikal, antar item)
- Title + Description

**Carousel Foto Sejarah (di bawah timeline):**
- 3 items placeholder
- Height 300px

#### 7.2.5 Jam Operasional

**Background:** `--section-alt`
**Layout:** Simple table, max-width 500px, centered

**Struktur Row:**
- Display: flex, justify-content: space-between
- Padding `16px 20px`
- Border-bottom

**Data:**
| Hari | Jam |
|---|---|
| Senin | 08.00 – 16.00 WIB |
| Selasa | 08.00 – 16.00 WIB |
| Rabu | 08.00 – 16.00 WIB |
| Kamis | 08.00 – 16.00 WIB |
| Jumat | 08.00 – 16.00 WIB |
| Sabtu | 08.00 – 16.00 WIB |
| Minggu | Tutup (text-secondary) |

---

### 7.3 Halaman Struktur Organisasi — `/struktur`

**Tujuan:** Menampilkan 4 pengurus dan info operasional Bank Sampah

**PENTING:** Hanya **4 pengurus** (bukan 7 seperti PRD lama).

#### 7.3.1 Page Header

Sama dengan pola halaman lain — gradient hijau, badge, H1 "Struktur Organisasi."

#### 7.3.2 Bagan Organisasi Visual

**Background:** `var(--primary)`

**Hierarki:**
```
            [Koordinator: Bapak Fadli]
                       |
        ----------------------------------
        |              |                |
   [Sekretaris]   [Bendahara]      [Anggota]
```

**Card Pengurus:**
- Border-radius 12, padding 24
- Foto placeholder (circle 80x80 atau 100x100 untuk koordinator)
- Background avatar: gradient hijau, border accent (koordinator) / border (lain)
- Nama: H3, weight 600
- Jabatan: badge accent

**Featured Card (Koordinator):**
- Lebih besar (100x100 avatar)
- Border accent
- Background gradient lime soft

**Connector Lines:**
- Vertical line (2px wide, height 32px, color border)

**Data Pengurus:**
| No | Nama | Jabatan | Level |
|---|---|---|---|
| 1 | Bapak Fadli | Koordinator | 0 (top) |
| 2 | (Sesuai data lapangan) | Sekretaris | 1 |
| 3 | (Sesuai data lapangan) | Bendahara | 1 |
| 4 | (Sesuai data lapangan) | Anggota | 2 |

> ⚠️ Nama pengurus selain Bapak Fadli masih placeholder, perlu dilengkapi dari lapangan.

#### 7.3.3 Info Operasional (dari hasil wawancara)

**Background:** `--section-alt`

**Layout:** Grid 2 kolom (auto-fit 300px), max-width 900px

**Konten (4 card):**
1. **Koordinator**
   "Bank Sampah dikoordinasikan oleh Bapak Fadli yang bertanggung jawab atas seluruh kegiatan operasional dan pengembangan fasilitas."

2. **Satu-Satunya di Kecamatan**
   "Bank Sampah ini merupakan satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung."

3. **Dukungan Mitra**
   "Fasilitas dan fondasi awal bank sampah didukung oleh kerja sama dengan Pertamina, sementara pembangunan tahap kedua dibantu oleh Dinas PU."

4. **Rencana Pengembangan**
   "Terdapat rencana pembuatan bengkel las bertenaga listrik tenaga surya (panel surya) untuk melayani kebutuhan masyarakat dan nelayan sekitar."

**Struktur Card:**
- Number badge (32x32) + Title + Description

#### 7.3.4 Galeri Dokumentasi

**Background:** `var(--primary)`
**Carousel** dengan 3 placeholder ("Foto Rapat Pengurus", "Foto Kegiatan Bersama", "Foto Peresmian"), height 360px

---

### 7.4 Halaman Kegiatan — `/kegiatan`

**Tujuan:** Rincian/daftar kegiatan Bank Sampah (BUKAN card berita)

**PENTING:** Halaman ini **tidak menggunakan card berita dengan gambar besar**. Format adalah **list/rincian kegiatan** dengan icon + deskripsi singkat.

#### 7.4.1 Page Header

Standard — badge calendar + "Kegiatan", H1 "Kegiatan Bank Sampah."

#### 7.4.2 Daftar Rincian Kegiatan

**Background:** `var(--primary)`

**SectionHeader:** badge "Rincian Kegiatan", title "Apa Saja yang Kami Lakukan"

**Layout:** List vertikal (flex column, gap 12px)

**Struktur Item (Card horizontal):**
```
┌─────────────────────────────────────────────┐
│  [Icon]    [Title]  [Badge frekuensi]       │
│   01                                         │
│            Description text...               │
└─────────────────────────────────────────────┘
```

**Detail:**
- Card padding `24px 28px`
- Icon box: 52x52, border-radius 14, bg `rgba(57,255,20,0.08)`, color accent
- Number "0X" di bawah icon (text-secondary, opacity 0.5, weight 700)
- Title: H3, weight 700, 1.05rem
- Badge frekuensi: di sebelah title (e.g., "Rutin Mingguan", "Bulanan")
- Description: text-secondary, 0.9rem, line-height 1.7

**Data 8 Kegiatan:**

| No | Nama Kegiatan | Frekuensi | Icon | Deskripsi |
|---|---|---|---|---|
| 1 | Pengumpulan Sampah Anorganik | Rutin Mingguan | recycle | Warga mengumpulkan sampah anorganik (plastik, kertas, logam, kaca) dari rumah masing-masing untuk disetor |
| 2 | Penimbangan & Pencatatan | Setiap Penyetoran | scale | Sampah yang disetor warga ditimbang dan dicatat jenisnya, lalu dikonversi ke poin |
| 3 | Pemilahan Sampah | Rutin Mingguan | star | Sampah terkumpul dipilah berdasarkan kategori (plastik, kertas, logam, kaca, elektronik) untuk siap dijual |
| 4 | Penjualan ke Pengepul | Bulanan | gift | Sampah terpilah dijual ke pengepul mitra. Hasil untuk operasional + reward warga |
| 5 | Sosialisasi ke Warga | Berkala | users | Penyuluhan pentingnya memilah sampah, pengelolaan sampah rumah tangga, manfaat bergabung |
| 6 | Pelatihan Pengolahan Sampah | Berkala | award | Workshop mengolah sampah jadi produk bernilai (kerajinan plastik, kompos) |
| 7 | Bersih-Bersih Lingkungan | Bulanan | leaf | Gotong royong membersihkan lingkungan kelurahan |
| 8 | Rencana: Bengkel Las Tenaga Surya | Dalam Perencanaan | target | Pengembangan fasilitas bengkel las bertenaga panel surya untuk masyarakat & nelayan |

#### 7.4.3 Catatan Penting

**Background:** `--section-alt`

**SectionHeader:** badge "Info", title "Catatan Penting", subtitle "Informasi tambahan dari hasil wawancara dengan pengurus"

**Layout:** List vertikal, max-width 700px

**Item Structure:**
- Background: `rgba(57,255,20,0.03)`
- Border: `1px solid rgba(57,255,20,0.1)`
- Padding `16px 20px`, border-radius
- Icon leaf (24x24) + text

**5 Catatan:**
1. Bank Sampah ini merupakan satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung.
2. Fasilitas dan fondasi awal dibangun atas kerja sama dengan Pertamina.
3. Pembangunan tahap kedua dibantu oleh Dinas PU.
4. Terdapat rencana pengembangan bengkel las bertenaga listrik dari panel surya.
5. Bank Sampah fokus pada sampah anorganik — plastik, kertas, logam, kaca, dan elektronik.

---

### 7.5 Halaman Poin & Penukaran — `/poin`

**Tujuan:** Sistem poin Nabuang Sarok — cara kerja, katalog poin, hadiah, info program

**PENTING:** Data poin **HARUS sesuai dengan PPT Sosialisasi Nabuang Sarok (PT Semen Padang)** — bukan poin generik.

#### 7.5.1 Page Header

Standard — badge "Nabuang Sarok" (icon scale), H1 "Poin & Penukaran.", subtitle "Program Nabuang Sarok — pilah sampah, kumpulkan poin, tukar hadiah menarik."

#### 7.5.2 Alur Aktivitas (5 Langkah)

**Background:** `var(--primary)`

**SectionHeader:** badge "Alur Aktivitas", title "Cara Kerja Nabuang Sarok", subtitle "Lima langkah mudah untuk mulai mengumpulkan poin"

**Layout:** Timeline vertikal, max-width 800px

**Struktur Item:**
- Number circle (52x52, accent border, large number 01-05)
- Connector line vertikal (2px, color border, 40px height)
- Title (H4, 1.05rem) + Description

**5 Langkah (sesuai PPT NASA):**
1. **Pilah Sampah** — Pilah sampah di rumah berdasarkan kategori: dedaunan, kertas, plastik, minyak jelantah, dan kantong semen.
2. **Bawa ke Bank Sampah** — Bawa sampah yang telah dipilah ke tempat penyetoran Bank Sampah pada jam operasional.
3. **Ditimbang Petugas** — Sampah ditimbang oleh petugas dan nasabah akan mendapatkan poin sesuai jenis dan berat.
4. **Ajukan Penukaran** — Ajukan penukaran poin sesuai dengan poin yang telah dikumpulkan.
5. **Kumpulkan Hadiah** — Tukarkan poin dengan berbagai hadiah menarik yang tersedia.

#### 7.5.3 Katalog Poin (5 Item — Data dari PPT NASA)

**Background:** `--section-alt`

**SectionHeader:** badge "Katalog Poin", title "Nilai Poin per Kilogram"

**Layout:** Grid card (auto-fit 200px), max-width 900px

**Struktur Card:**
- Center text
- Padding `28px 20px`
- Border-color sesuai kategori (lihat color map)
- Poin value box (64x64, border-radius 16, bg & border sesuai kategori) — angka besar 1.5rem
- Nama sampah (H4, 1.05rem)
- Badge kategori
- Keterangan (text-secondary, 0.82rem)
- Footer: "X poin per kg" (border-top)

**Data Katalog (HARUS PERSIS):**

| No | Jenis | Kategori | Poin/Kg | Keterangan |
|---|---|---|---|---|
| 1 | Dedaunan | Organik | **3** | Daun kering, ranting kecil |
| 2 | Kertas | Kertas | **3** | Koran, kardus, HVS, majalah |
| 3 | Plastik | Plastik | **5** | Botol PET, gelas plastik, kantong |
| 4 | Minyak Jelantah | Minyak | **5** | Minyak goreng bekas |
| 5 | Kantong Semen | Kertas | **8** | Kantong semen bekas |

**Color Map Kategori:**
```javascript
{
  'Organik': { color: '#7FFF00', bg: 'rgba(127,255,0,0.1)' },
  'Kertas':  { color: '#64C8FF', bg: 'rgba(100,200,255,0.1)' },
  'Plastik': { color: '#FFC83C', bg: 'rgba(255,200,60,0.1)' },
  'Minyak':  { color: '#FF8C64', bg: 'rgba(255,140,100,0.1)' },
}
```

#### 7.5.4 Redeem Point (Hadiah)

**Background:** `var(--primary)`

**SectionHeader:** badge (icon gift) + "Redeem Point", title "Tukar Poin dengan Hadiah"

**Layout:** Grid card (auto-fit 160px), max-width 800px

**Struktur Card:**
- Center text, padding `24px 16px`
- Background: gradient subtle
- Icon emoji (2.2rem) di atas
- Nama hadiah (0.92rem, weight 600)
- Badge "Mulai X poin"

**6 Hadiah (dari PPT NASA):**
1. **Buku Gambar** 📓 — Mulai 10 poin
2. **Gula** 🍚 — Mulai 15 poin
3. **Minyak Goreng** 🫗 — Mulai 20 poin
4. **Stationery** ✏️ — Mulai 10 poin
5. **Tumbler** 🥤 — Mulai 30 poin
6. **Jam Tangan** ⌚ — Mulai 50 poin

#### 7.5.5 Tentang Nabuang Sarok (Program NASA)

**Background:** `--section-alt`

**SectionHeader:** badge "Program NASA", title "Tentang Nabuang Sarok", subtitle "Program PT Semen Padang untuk pengelolaan sampah berkelanjutan"

**Layout:** Single card, max-width 700px, centered

**Konten:**
- **Paragraf 1:** Nabuang Sarok adalah program yang dinisiasi oleh PT Semen Padang, berfokus pada perubahan perilaku masyarakat dalam membuang dan memilah sampah sejak dari sumbernya di wilayah Sumatera Barat.
- **Paragraf 2:** Melalui pendekatan edukasi, penyediaan sarana, serta kolaborasi dengan masyarakat dan mahasiswa KKN, program ini bertujuan mengurangi timbulan sampah yang tidak terkelola dan mendorong praktik pengelolaan sampah yang berkelanjutan.

**Achievement Badges (di footer card):**
- PROPER Emas 2023
- Diamond TKMPN 2024
- Hak Cipta Kemenkumham
- Data SISPN Nasional

#### 7.5.6 FAQ (Accordion)

**Background:** `var(--primary)`

**Layout:** Single column, max-width 700px

**Struktur FAQ Item:**
- Border-radius 12, border
- Button toggle (full width): question text + chevron icon
- Active state: border accent, bg `rgba(57,255,20,0.03)`
- Answer area: padding, color text-secondary, animasi fadeIn

**5 FAQ:**
1. **Bagaimana cara mendaftar sebagai anggota?**
   Kunjungi website Nabuang Sarok, klik opsi "Bergabung dengan kami", lalu isi data diri pada form pendaftaran. Anda juga bisa mendaftar langsung di pos Bank Sampah.

2. **Apakah ada minimal berat sampah untuk disetor?**
   Tidak ada minimal berat. Berapa pun sampah yang Anda bawa akan diterima, ditimbang, dan dikonversi menjadi poin.

3. **Berapa lama poin berlaku?**
   Poin tidak memiliki masa kadaluarsa. Poin akan terus terakumulasi hingga Anda memutuskan untuk menukarkannya.

4. **Apa itu Program Nabuang Sarok?**
   Nabuang Sarok adalah program PT Semen Padang yang berfokus pada perubahan perilaku masyarakat dalam membuang dan memilah sampah sejak dari sumbernya. Program ini berkolaborasi dengan mahasiswa KKN untuk sosialisasi dan edukasi.

5. **Jenis sampah apa saja yang diterima?**
   Bank Sampah menerima dedaunan, kertas, plastik, minyak jelantah, dan kantong semen. Setiap jenis memiliki nilai poin yang berbeda per kilogram.

---

### 7.6 Halaman Tim KKN — `/tim`

**Tujuan:** Memperkenalkan 7 anggota tim KKN Nabuang Sarok Kelompok 4

**PENTING:**
- **Ridho Dwi Syahputra di posisi PERTAMA** (carousel default index 0)
- **Carousel 3-card** style (seperti referensi "bloom/vivid/petaled")
- **Profil + Pesan Kesan DIGABUNG** dalam satu card

#### 7.6.1 Page Header

Standard — badge "Tim", H1 "Tim KKN Nabuang Sarok.", subtitle "Tujuh mahasiswa Universitas Andalas yang berkolaborasi membangun website ini."

#### 7.6.2 Info Cards (Quick Stats)

**Padding:** `60px 0 20px`

**Layout:** Grid (auto-fit 200px), gap 14px

**4 Stats:**
1. **Anggota** (icon users) — 7 Orang
2. **Program** (icon award) — KKN Nabuang Sarok
3. **Periode** (icon calendar) — 2026
4. **Lokasi** (icon mapPin) — Teluk Kabung Tengah

**Struktur Card:**
- Center, padding `22px 16px`
- Icon box (42x42, accent bg)
- Label (0.72rem, text-secondary)
- Value (0.95rem, weight 700)

#### 7.6.3 3-Card Carousel Anggota (CRITICAL)

**Background:** `var(--primary)`
**Section overflow:** `hidden` (di level section, BUKAN container)

**SectionHeader:** badge "Anggota", title "Kenali Tim Kami", subtitle "Geser untuk melihat profil dan kesan setiap anggota"

**Container Carousel:**
- Position: relative
- Height: 560px
- Max-width: 900px, margin 0 auto

**Card Behavior (3 cards visible secara bersamaan):**

```javascript
// Base width sama untuk semua card
const baseWidth = 320; // SEMUA card sama

// Transform berdasarkan posisi
const transforms = {
  '-1': 'translateX(-125%) scale(0.85)',  // Left card
  '0':  'translateX(-50%) scale(1)',       // Center (active)
  '1':  'translateX(25%) scale(0.85)',     // Right card
};
```

**Styling per posisi:**

| Posisi | Width | Scale | Opacity | Filter | Z-index | Pointer |
|---|---|---|---|---|---|---|
| Left (-1) | 320 | 0.85 | 0.45 | brightness(0.65) blur(1px) | 5 | none |
| Center (0) | 320 | 1.0 | 1.0 | none | 10 | auto |
| Right (1) | 320 | 0.85 | 0.45 | brightness(0.65) blur(1px) | 5 | none |

**Transition:** `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`

**Struktur Card (Combined Profile + Pesan Kesan):**

```
┌─────────────────────────────┐
│                       [N/7] │   ← Counter (center only)
│         [Foto Area]         │
│          O                  │   ← Avatar circle (88x88)
│        "Foto"               │
├─────────────────────────────┤
│      Nama Lengkap           │
│         [Prodi]             │   ← Badge
│  Fakultas    Universitas    │   ← Two-column info
├─────────────────────────────┤   ← Border separator
│ "                           │
│ Quote pesan kesan dari      │   ← Pesan kesan (center only)
│ anggota...                  │
└─────────────────────────────┘
```

**Photo Area:**
- Height 220 (center) / 160 (side)
- Background gradient hijau
- Radial glow background
- Avatar circle: 88x88 (center) / 56x56 (side)
- Border-radius 50%, border accent
- Counter top-right (only center): `1/7` format

**Info Area:**
- Padding `20px 24px 24px` (center) / `12px 16px 16px` (side)
- Nama: center text, H3, 1.1rem (center) / 0.82rem (side), weight 700
- Prodi badge: accent style
- Info row (Fakultas | Universitas): flex with separator

**Pesan Kesan Area (HANYA muncul di center card):**
- Margin-top 10
- Padding `14px 16px`
- Border-radius 12
- Background `rgba(57,255,20,0.03)`
- Border `1px solid rgba(57,255,20,0.08)`
- Quote mark (Georgia serif, 1.2rem, opacity 0.2, accent color)
- Quote text: italic, text-secondary, 0.82rem, line-height 1.7
- Animation: fadeIn 0.4s ease

**Navigation Arrows:**
- 44x44 circle, position absolute
- Left: 8px from left, Right: 8px from right
- Top: 38%
- Background `rgba(30,61,30,0.7)` + blur(10px)
- Border `1px solid rgba(57,255,20,0.15)`
- Hover: bg accent transparent, border accent

**Dot Indicator:**
- Below carousel, gap 6
- Active: width 28, color accent
- Inactive: width 8, color `rgba(255,255,255,0.15)`
- Height 8, border-radius 4
- Transition 0.4s ease

**Behavior:**
- Auto-play setiap 6000ms
- Reset timer saat navigasi manual
- Touch/swipe support (threshold 50px)
- Animasi guard (prevent rapid clicks): 500ms

**Data Anggota Tim (HARUS dalam urutan ini):**

| Pos | Nama | NIM | Fakultas | Prodi |
|---|---|---|---|---|
| 1 (default active) | **Ridho Dwi Syahputra** | 2311522033 | Teknologi Informasi | Sistem Informasi |
| 2 | Muhammad Fakhri Nurwahid | - | Teknik | Teknik Lingkungan |
| 3 | Hauna Amiratussyifa | - | Teknik | Teknik Industri |
| 4 | Faiza Mumtaz | - | Teknik | Teknik Industri |
| 5 | Rafi Yandra Maulana Fauzi | - | Teknologi Informasi | Sistem Informasi |
| 6 | Az-Zahra Fadhilah | - | ISIP | Sosiologi |
| 7 | Davyd Yehuda | - | Teknologi Informasi | Sistem Informasi |

**Pesan & Kesan (default — boleh diganti dengan pesan asli):**

- **Ridho:** "Membangun website ini adalah cara kami menghubungkan teknologi dengan kebutuhan masyarakat. Terima kasih untuk semua pelajaran selama KKN."
- **Fakhri:** "KKN di Teluk Kabung Tengah memberi pengalaman berharga tentang pengelolaan lingkungan langsung di tengah masyarakat. Semoga Bank Sampah ini terus berkembang."
- **Hauna:** "Keramahan warga Teluk Kabung Tengah membuat KKN ini terasa seperti di rumah sendiri. Banyak pelajaran hidup yang tidak didapat di kampus."
- **Faiza:** "Senang bisa berkontribusi untuk lingkungan melalui Bank Sampah. Pengalaman ini mengajarkan pentingnya gotong royong dan kepedulian sosial."
- **Rafi:** "KKN ini membuka mata tentang bagaimana teknologi bisa membantu masyarakat secara langsung. Luar biasa pengalamannya."
- **Az-Zahra:** "Berinteraksi langsung dengan warga memberi perspektif baru tentang dinamika sosial. Teluk Kabung Tengah punya potensi besar."
- **Davyd:** "Pengalaman KKN yang tidak terlupakan. Bekerja sama dengan tim dan warga untuk sesuatu yang bermanfaat bagi lingkungan."

#### 7.6.4 Ucapan Terima Kasih

**Background:** `--section-alt`

**Layout:** Single card, max-width 700px, centered, padding `48px 36px`

**Konten:**
- Icon award (56x56, accent)
- H2: "Terima Kasih."
- Paragraf:
  "Kami mengucapkan terima kasih kepada seluruh pengurus Bank Sampah Unit Teluk Kabung Tengah, Bapak Fadli selaku koordinator, warga Kelurahan Teluk Kabung Tengah, serta pihak kelurahan dan Universitas Andalas atas dukungannya selama program KKN berlangsung."

---

## 8. Data Model & Konten Statis

### 8.1 `data/pengurus.js`

```javascript
export const pengurus = [
  { nama: 'Bapak Fadli', jabatan: 'Koordinator', level: 0, foto: '/assets/pengurus/fadli.jpg' },
  { nama: 'TBD', jabatan: 'Sekretaris', level: 1, foto: null },
  { nama: 'TBD', jabatan: 'Bendahara', level: 1, foto: null },
  { nama: 'TBD', jabatan: 'Anggota', level: 2, foto: null },
];
```

### 8.2 `data/kegiatan.js`

```javascript
export const kegiatan = [
  {
    id: 1,
    nama: 'Pengumpulan Sampah Anorganik',
    deskripsi: 'Warga mengumpulkan sampah anorganik...',
    frekuensi: 'Rutin Mingguan',
    icon: 'recycle',
  },
  // ... 8 items total
];

export const catatanPenting = [
  'Bank Sampah ini merupakan satu-satunya unit pengelola sampah anorganik di Kecamatan Bungus Teluk Kabung.',
  // ... 5 items total
];
```

### 8.3 `data/poin.js`

```javascript
export const katalogPoin = [
  { no: 1, jenis: 'Dedaunan', kategori: 'Organik', poin: 3, keterangan: 'Daun kering, ranting kecil' },
  { no: 2, jenis: 'Kertas', kategori: 'Kertas', poin: 3, keterangan: 'Koran, kardus, HVS, majalah' },
  { no: 3, jenis: 'Plastik', kategori: 'Plastik', poin: 5, keterangan: 'Botol PET, gelas plastik, kantong' },
  { no: 4, jenis: 'Minyak Jelantah', kategori: 'Minyak', poin: 5, keterangan: 'Minyak goreng bekas' },
  { no: 5, jenis: 'Kantong Semen', kategori: 'Kertas', poin: 8, keterangan: 'Kantong semen bekas' },
];

export const langkahPoin = [
  { step: 1, title: 'Pilah Sampah', desc: '...' },
  // ... 5 items
];

export const rewards = [
  { nama: 'Buku Gambar', icon: '📓', poin: 'Mulai 10 poin' },
  { nama: 'Gula', icon: '🍚', poin: 'Mulai 15 poin' },
  { nama: 'Minyak Goreng', icon: '🫗', poin: 'Mulai 20 poin' },
  { nama: 'Stationery', icon: '✏️', poin: 'Mulai 10 poin' },
  { nama: 'Tumbler', icon: '🥤', poin: 'Mulai 30 poin' },
  { nama: 'Jam Tangan', icon: '⌚', poin: 'Mulai 50 poin' },
];

export const kategoriColors = {
  'Organik': { color: '#7FFF00', bg: 'rgba(127,255,0,0.1)', border: 'rgba(127,255,0,0.2)' },
  'Kertas':  { color: '#64C8FF', bg: 'rgba(100,200,255,0.1)', border: 'rgba(100,200,255,0.2)' },
  'Plastik': { color: '#FFC83C', bg: 'rgba(255,200,60,0.1)', border: 'rgba(255,200,60,0.2)' },
  'Minyak':  { color: '#FF8C64', bg: 'rgba(255,140,100,0.1)', border: 'rgba(255,140,100,0.2)' },
};
```

### 8.4 `data/tim.js`

```javascript
export const tim = [
  {
    id: 1,
    nama: 'Ridho Dwi Syahputra',
    nim: '2311522033',
    fakultas: 'Teknologi Informasi',
    prodi: 'Sistem Informasi',
    foto: '/assets/tim/ridho.jpg',
    pesan: 'Membangun website ini adalah cara kami menghubungkan teknologi dengan kebutuhan masyarakat. Terima kasih untuk semua pelajaran selama KKN.',
  },
  // ... 7 anggota total, urutan PENTING
];

export const infoTim = {
  jumlahAnggota: 7,
  program: 'KKN Nabuang Sarok',
  periode: 2026,
  lokasi: 'Teluk Kabung Tengah',
  universitas: 'Universitas Andalas',
};
```

### 8.5 `data/faq.js`

```javascript
export const faqPoin = [
  { q: 'Bagaimana cara mendaftar sebagai anggota?', a: '...' },
  // ... 5 items
];
```

### 8.6 `data/sejarah.js`

```javascript
export const sejarah = [
  { year: '2023', title: 'Pendirian Bank Sampah', desc: '...' },
  // ... 4 items
];

export const visiMisi = {
  visi: 'Menjadi unit pengelola sampah berbasis masyarakat...',
  misi: [
    'Meningkatkan kesadaran masyarakat...',
    // ... 5 items
  ],
};
```

---

## 9. Responsivitas & Breakpoint

```css
/* Tailwind-style breakpoints */
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### 9.1 Aturan Umum Per Breakpoint

| Element | Mobile (<640) | Tablet (640-1024) | Desktop (>1024) |
|---|---|---|---|
| Container padding | 16px | 24px | 24px |
| Section padding | 60px | 70px | 80px |
| H1 size | 2.2rem | 2.5rem | 3.2rem |
| Section title | 1.6rem | 1.8rem | 2rem |
| Navbar | Hamburger | Compact | Full menu |
| Hero grid | 1 col (visual hidden) | 2 col | 2 col |
| Card grid | 1 col | 2 col | 3-4 col |
| Carousel arrows | Hide (swipe only) | Show | Show |
| Tim carousel side cards | Smaller / hide left | Show both | Show both |

### 9.2 Tabel Khusus Responsivitas Per Halaman

**Beranda:**
- Hero grid: `1fr` mobile, `1fr 1fr` desktop
- Hero visual: hidden mobile
- Kontak grid: `1fr` mobile, `1fr 1fr` desktop

**Tentang:**
- Profil grid: `1fr` mobile, `1fr 1fr` desktop
- Misi cards: `1fr` mobile, `2 col` tablet+

**Kegiatan:**
- List item: tetap horizontal, tapi padding lebih kecil di mobile

**Poin:**
- Katalog grid: `1 col` mobile, `2 col` tablet, `3-4 col` desktop
- Reward grid: `2 col` mobile, `3 col` desktop

**Tim:**
- Carousel: kemungkinan only center card visible di mobile sempit
- Info cards: `2 col` mobile, `4 col` desktop

---

## 10. Aset & Konten yang Dibutuhkan

### 10.1 Foto (PRIORITAS)

| Kategori | Jumlah | Resolusi Min | Format | Penyedia |
|---|---|---|---|---|
| Logo Bank Sampah | 1 | 512x512px | PNG transparan | Pengurus |
| Foto Lokasi (eksterior/interior) | 4-6 | 1600x900 | JPG/WebP | Tim KKN dokumentasi |
| Foto Pengurus | 4 | 800x800 (1:1) | JPG | Pengurus |
| Foto Kegiatan | (untuk carousel) | 1600x900 | JPG | Tim KKN dokumentasi |
| Foto Tim KKN | 7 individu + 4-6 grup | 800x1067 (3:4) | JPG | Tim KKN |
| Foto Sejarah | 3 | 1600x900 | JPG | Bank Sampah arsip |

### 10.2 Konten Teks

| Konten | Sumber | Status |
|---|---|---|
| Visi & Misi resmi | Bank Sampah | Verifikasi |
| Sejarah singkat | Bank Sampah | Verifikasi |
| Data poin (katalog) | PPT NASA | ✅ Final |
| Daftar pengurus lengkap | Bank Sampah | TBD |
| Pesan & kesan tim | Tim KKN | TBD |
| Nomor WA / Email kontak | Bank Sampah | TBD |
| Koordinat lokasi (Maps) | Tim KKN | TBD |

### 10.3 Konten Wajib Diisi Sebelum Launch

- [ ] Logo Bank Sampah (vector / PNG transparan)
- [ ] Minimal 1 foto lokasi yang baik untuk hero & carousel
- [ ] Nama 3 pengurus lain (Sekretaris, Bendahara, Anggota)
- [ ] Foto 4 pengurus
- [ ] Nomor WhatsApp kontak resmi
- [ ] Embed Google Maps untuk lokasi presisi

---

## 11. Animasi & Interaksi

### 11.1 Page Load Animations

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

- Hero content: `fadeInUp 0.6s ease-out forwards`
- Hero visual: `fadeIn 0.5s ease-out, delay 0.2s`
- Section reveal: dapat menggunakan IntersectionObserver + class trigger

### 11.2 Hover Effects

| Element | Hover Effect |
|---|---|
| Button primary | translateY(-2px) + box-shadow lime |
| Button outline | translateY(-2px) + border lime + color lime |
| Card | translateY(-4px) + shadow + border lime |
| Navbar link | bg accent transparent |
| Footer link | color → accent |
| Social icon | border + color → accent |

### 11.3 Carousel Animations

**Generic Carousel:**
- Slide transition: `opacity 0.6s ease` (cross-fade)
- Dot transition: `all 0.3s`

**Tim Carousel (3-card):**
- Card transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- Pesan kesan fade: `fadeIn 0.4s ease`
- Auto-play: 6000ms interval
- Animation guard: 500ms (prevent rapid clicks)

### 11.4 Scroll Effects

- Navbar: backdrop-blur appears at scrollY > 50px
- Smooth scroll on route change: `window.scrollTo({ top: 0, behavior: 'smooth' })`

### 11.5 Accordion (FAQ)

- Toggle chevron: `transform: rotate(180deg)` saat open
- Transition: `transform 0.3s`
- Content reveal: `fadeIn 0.2s`

---

## 12. Panduan Deployment

### 12.1 Setup Vite

**File:** `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
});
```

### 12.2 Vercel Config

**File:** `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### 12.3 Build Settings (Vercel Dashboard)

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 18.x |

### 12.4 Environment Variables

Tidak ada env vars yang diperlukan (static site, no API).

### 12.5 Domain Setup

- Default Vercel URL: `bank-sampah-tlk.vercel.app` (atau custom)
- Custom domain (opsional): bisa pakai domain .id atau subdomain universitas

---

## 13. Checklist Pre-Launch

### 13.1 Functional

- [ ] Semua 6 halaman dapat diakses via routing
- [ ] Navbar berfungsi di mobile (hamburger menu)
- [ ] Logo navbar → link ke /
- [ ] Semua menu navbar berfungsi
- [ ] Footer link berfungsi
- [ ] Carousel auto-play berjalan
- [ ] Carousel navigation (arrow & dot) berfungsi
- [ ] Carousel swipe (touch) berfungsi
- [ ] Tim carousel 3-card layout simetris
- [ ] FAQ accordion berfungsi
- [ ] Tab Visi/Misi berfungsi

### 13.2 Konten

- [ ] Semua foto sudah diisi (bukan placeholder)
- [ ] Data poin sudah diverifikasi (sesuai PPT NASA)
- [ ] Nama 4 pengurus lengkap
- [ ] Nomor WA kontak resmi
- [ ] Email kontak resmi
- [ ] Visi misi sudah disetujui
- [ ] Sejarah sudah disetujui
- [ ] Pesan & kesan 7 anggota tim

### 13.3 Visual

- [ ] Konsistensi warna sesuai design system
- [ ] Typography hierarchy benar
- [ ] Spacing konsisten
- [ ] Tidak ada overflow horizontal
- [ ] Hover state semua elemen interaktif
- [ ] Animasi smooth (tidak janky)

### 13.4 Responsive

- [ ] Mobile (320px - 640px): semua halaman tampil baik
- [ ] Tablet (768px): grid 2 kolom muncul
- [ ] Desktop (1024px+): grid full muncul
- [ ] Carousel berfungsi di semua viewport
- [ ] Navbar hamburger berfungsi di mobile

### 13.5 Performance

- [ ] Lighthouse score > 90 (Performance, Accessibility, SEO)
- [ ] Gambar dioptimalkan (compress dengan tinypng / squoosh)
- [ ] Lazy load gambar carousel
- [ ] Build production size reasonable (< 500KB JS)

### 13.6 SEO & Metadata

- [ ] `<title>` setiap halaman unik
- [ ] Meta description per halaman
- [ ] Open Graph tags (untuk share di social media)
- [ ] Favicon
- [ ] robots.txt
- [ ] sitemap.xml

### 13.7 Aksesibilitas

- [ ] Semua gambar punya `alt` text deskriptif
- [ ] Kontras teks memenuhi WCAG AA (>= 4.5:1)
- [ ] Heading hierarchy benar (H1 → H2 → H3)
- [ ] Navigasi keyboard (Tab, Enter) berfungsi
- [ ] Focus indicator visible

### 13.8 Deployment

- [ ] Repository GitHub publik / private setup
- [ ] Build production sukses (`npm run build`)
- [ ] Deploy ke Vercel sukses
- [ ] URL Vercel dapat diakses
- [ ] Tidak ada console error
- [ ] Tidak ada broken link / broken image

---

## LAMPIRAN A: Daftar Icon yang Digunakan

Gunakan **Lucide React** untuk konsistensi:

| Nama Icon | Lucide Name | Lokasi Penggunaan |
|---|---|---|
| leaf | `Leaf` | Badge halaman tentang, hero |
| menu | `Menu` | Navbar mobile toggle |
| x | `X` | Navbar mobile close |
| chevron-left | `ChevronLeft` | Carousel prev |
| chevron-right | `ChevronRight` | Carousel next |
| chevron-down | `ChevronDown` | FAQ accordion |
| map-pin | `MapPin` | Lokasi |
| phone | `Phone` | Kontak WA |
| clock | `Clock` | Jam operasional |
| mail | `Mail` | Kontak email |
| instagram | `Instagram` | Social media |
| users | `Users` | Tim, struktur |
| recycle | `Recycle` | Logo, kegiatan |
| arrow-right | `ArrowRight` | CTA button |
| calendar | `Calendar` | Kegiatan, periode |
| star | `Star` | Decoration |
| target | `Target` | Misi, rencana |
| eye | `Eye` | Visi |
| award | `Award` | Terima kasih, achievement |
| gift | `Gift` | Reward, redeem |
| scale | `Scale` | Penimbangan, poin |

## LAMPIRAN B: Referensi Visual

- **Mood Board:** HVM Digital (dark green, lime accent)
- **Carousel Tim Reference:** 3-card peek style (e.g., bloom/vivid/petaled theme carousel)
- **Card Style:** Modern glassmorphism untuk pesan kesan area
- **Animation Style:** Smooth, ease-out, tidak agresif

## LAMPIRAN C: Data Tim Lengkap (Tabel)

| No | Nama | NIM | Fakultas | Program Studi |
|---|---|---|---|---|
| 1 | **Ridho Dwi Syahputra** | **2311522033** | Teknologi Informasi | Sistem Informasi |
| 2 | Muhammad Fakhri Nurwahid | TBD | Teknik | Teknik Lingkungan |
| 3 | Hauna Amiratussyifa | TBD | Teknik | Teknik Industri |
| 4 | Faiza Mumtaz | TBD | Teknik | Teknik Industri |
| 5 | Rafi Yandra Maulana Fauzi | TBD | Teknologi Informasi | Sistem Informasi |
| 6 | Az-Zahra Fadhilah | TBD | ISIP | Sosiologi |
| 7 | Davyd Yehuda | TBD | Teknologi Informasi | Sistem Informasi |

> Universitas: **Universitas Andalas (UNAND)**
> Periode KKN: **2026**
> Program: **KKN Nabuang Sarok 2026 — Kelompok 4 (Kelurahan Teluk Kabung Tengah, Kecamatan Bungus Teluk Kabung)**

---

## CATATAN AKHIR UNTUK DEVELOPER

1. **Konsistensi adalah kunci** — Gunakan CSS variables untuk semua warna, spacing, dan radius. Jangan hardcode values.

2. **Carousel Tim KKN sangat critical** — Pastikan implementasi 3-card layout dengan ukuran base width yang SAMA (320px) untuk semua card, perbedaan hanya pada `scale`, `opacity`, dan `filter`.

3. **Data terpisah dari komponen** — Letakkan semua konten statis di folder `data/` sebagai file `.js` agar mudah diupdate tanpa menyentuh komponen.

4. **Mobile first** — Build dari layout mobile dulu, lalu enhance untuk desktop dengan `@media (min-width)`.

5. **Foto placeholder** — Selama foto asli belum ada, gunakan komponen placeholder dengan icon image + label deskriptif. **JANGAN gunakan gambar generik dari internet**.

6. **Halaman Poin** — Data katalog HARUS persis sesuai PPT Nabuang Sarok (5 item, poin sesuai angka resmi). Jangan tambah/kurangi.

7. **Halaman Struktur** — Hanya 4 pengurus, jangan lebih.

8. **Halaman Kegiatan** — Format list dengan icon + deskripsi singkat, BUKAN card berita dengan foto besar.

9. **Pesan & Kesan** — Default text bisa diganti dengan pesan asli dari masing-masing anggota tim. Field ini PENTING karena jadi karakter halaman Tim.

10. **Periksa berkala** — Tampilan di browser saat development sering berbeda dengan production. Test di Chrome, Firefox, Safari, dan mobile (iOS Safari + Chrome Android).

---

**END OF DOCUMENT**

> Dokumen ini disiapkan oleh Tim KKN Nabuang Sarok Kelompok 4 — Universitas Andalas
> Untuk implementasi: Claude Code (Anthropic) sebagai AI assistant developer
> Versi 2.0 — Mei 2026
