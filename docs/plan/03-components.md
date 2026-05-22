# 03 — Komponen Reusable

> Setiap komponen ditempatkan di `src/components/{layout|ui|sections}/` dengan
> pasangan `.jsx` + `.module.css`.

## Layout

### `Layout.jsx`

Wrapper utama. Berisi `<Navbar>`, `<main>{children}</main>`, `<Footer>`.
Trigger `useScrollToTop()` agar tiap pindah route, scroll ke atas.

### `Navbar.jsx`

**Props:** none (akses route via `useLocation()`)

**State:**
- `isOpen` (mobile drawer)
- `scrolled` (via `useScrollPosition()`, threshold 50px)

**Lucide icons:** `Menu`, `X`, `Recycle` (logo)

**Behaviour:**
- `position: fixed`, `top: 0`, `z-index: var(--z-navbar)`
- Background swap di `scrollY ≥ 50`: dari transparent ke
  `rgba(13,43,13,0.92)` + `backdrop-filter: blur(20px)`
- 6 menu items dari `data/nav.js`
- Mobile: hamburger toggle → drawer slide down dengan `animation: slideDown 0.2s`
- Active link: `background: rgba(57,255,20,0.12)`, `color: var(--accent)`
- Auto-close drawer saat klik link

### `Footer.jsx`

**Background:** `var(--footer-bg)`
**Lucide icons:** `MapPin`, `Phone`, `Clock`, `Mail`, `Instagram`, `Recycle`

**3 kolom:**
1. Brand (logo + tagline)
2. Navigasi (6 link)
3. Kontak (alamat, WA, jam, email — dari `data/kontak.js`)

**Bottom bar:** copyright + social icons (Instagram, Mail).

## UI Primitives

### `Button.jsx`

```jsx
<Button variant="primary|outline" to="/path" onClick icon={Icon} iconPosition="right">
  Label
</Button>
```

Render `<Link>` kalau `to` diisi, `<button>` kalau tidak.

### `Card.jsx`

```jsx
<Card className="" hoverable={true}>{children}</Card>
```

Default style sesuai design system.

### `Badge.jsx`

```jsx
<Badge icon={Icon}>Label</Badge>
```

### `SectionHeader.jsx`

```jsx
<SectionHeader
  badge={<Badge icon={Leaf}>Profil</Badge>}
  title="Mengenal Bank Sampah"
  subtitle="Deskripsi singkat..."
  center={false}
  accentDot={true}  // tambahkan titik accent di akhir title
/>
```

### `ImagePlaceholder.jsx`

**Pengganti semua `<img>`** sampai user upload foto.

```jsx
<ImagePlaceholder
  aspectRatio="4/3"
  rounded="lg"     // 'sm' | 'md' | 'lg' | 'full'
  iconSize={48}
  className=""
/>
```

**CSS:**
- Background: `linear-gradient(135deg, var(--secondary), var(--primary))`
- Ikon `Image` Lucide di tengah, `opacity: 0.4`, `color: var(--text-secondary)`
- Tidak ada teks. Slot kosong untuk caption manual nanti.

### `Carousel.jsx` (Generic cross-fade)

**Props:**
```javascript
{
  items: Array,          // Array of nodes/renderable
  height: Number = 320,
  autoPlay: Boolean = true,
  interval: Number = 4500,
  showDots: Boolean = true,
  showArrows: Boolean = true,
  renderItem: (item, idx) => ReactNode,  // optional
}
```

**Internal state:** `current` (active index)
**Hook:** `useCarousel({ length, autoPlay, interval })`
**Lucide icons:** `ChevronLeft`, `ChevronRight`

**Behaviour:**
- Cross-fade transition `opacity 0.6s ease`
- Auto-loop infinite
- Swipe touch (threshold 50px)
- Arrow + dot navigation
- Reset timer saat manual nav

### `ThreeCardCarousel.jsx` (Tim KKN)

**CRITICAL — sesuai PRD 7.6.3.**

**Props:**
```javascript
{ members: Array }  // dari data/tim.js
```

**State:** `activeIndex` (default 0 = Ridho), `isAnimating` (guard)

**Layout per posisi (offset relatif activeIndex):**

| Offset | width | transform | opacity | filter | z-index |
|---|---|---|---|---|---|
| -1 (left) | 320 | `translateX(-125%) scale(0.85)` | 0.45 | `brightness(0.65) blur(1px)` | 5 |
| 0 (center) | 320 | `translateX(-50%) scale(1)` | 1.0 | none | 10 |
| 1 (right) | 320 | `translateX(25%) scale(0.85)` | 0.45 | `brightness(0.65) blur(1px)` | 5 |

**Transition:** `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`

**Card content:**
- Photo area (height 220 center / 160 side) dengan `ImagePlaceholder` lingkar 88×88 (center) / 56×56 (side)
- Counter `n/7` di kanan atas (HANYA center)
- Nama H3, Prodi badge, info row (Fakultas | Universitas)
- Border separator
- Pesan kesan (HANYA center): bg `rgba(57,255,20,0.03)`, quote italic, fadeIn 0.4s

**Navigation:**
- Arrow buttons 44×44, position absolute, top 38%, left/right 8px
- Dot indicator below carousel, active width 28
- Auto-play 6000ms, animation guard 500ms
- Touch swipe support

**Lucide icons:** `ChevronLeft`, `ChevronRight`

### `Accordion.jsx` (FAQ)

```jsx
<Accordion items={[{ q: '...', a: '...' }]} />
```

**State:** `openIndex` (single open). Klik item open → close yang lain.

**Lucide icons:** `ChevronDown`
- Rotate `transform: rotate(180deg)` saat open
- Answer reveal: `animation: fadeIn 0.2s`

### `Tabs.jsx` (Visi/Misi)

```jsx
<Tabs
  tabs={[
    { id: 'visi', label: 'Visi', icon: Eye, content: <...> },
    { id: 'misi', label: 'Misi', icon: Target, content: <...> },
  ]}
  defaultTab="visi"
/>
```

**Active style:** bg `rgba(57,255,20,0.12)`, color `accent`, border `accent`.

## Sections (`src/components/sections/`)

Section = bagian besar dalam sebuah page. Detail layout per section ada di
[`04-pages.md`](./04-pages.md). Daftar section:

| Section | Dipakai di |
|---|---|
| `Hero` | Home |
| `TentangSingkat` | Home |
| `LokasiKontak` | Home |
| `ProfilSection` | Tentang |
| `VisiMisi` | Tentang (pakai `Tabs`) |
| `SejarahTimeline` | Tentang |
| `JamOperasional` | Tentang |
| `BaganOrganisasi` | Struktur |
| `InfoOperasional` | Struktur |
| `DaftarKegiatan` | Kegiatan |
| `CatatanPenting` | Kegiatan |
| `AlurAktivitas` | Poin |
| `KatalogPoin` | Poin |
| `RedeemPoint` | Poin |
| `TentangNabuangSarok` | Poin |
| `FaqSection` | Poin (pakai `Accordion`) |
| `InfoTim` | Tim |
| `UcapanTerimaKasih` | Tim |

## Mapping Lucide Icons (Reward — pengganti emoji)

| Reward (PRD) | Emoji PRD | Lucide |
|---|---|---|
| Buku Gambar | 📓 | `BookOpen` |
| Gula | 🍚 | `Candy` |
| Minyak Goreng | 🫗 | `Droplet` |
| Stationery | ✏️ | `Pencil` |
| Tumbler | 🥤 | `GlassWater` |
| Jam Tangan | ⌚ | `Watch` |

## Mapping Lucide Icons (Kegiatan)

| Kegiatan | Lucide |
|---|---|
| Pengumpulan Sampah Anorganik | `Recycle` |
| Penimbangan & Pencatatan | `Scale` |
| Pemilahan Sampah | `Star` |
| Penjualan ke Pengepul | `Gift` |
| Sosialisasi ke Warga | `Users` |
| Pelatihan Pengolahan Sampah | `Award` |
| Bersih-Bersih Lingkungan | `Leaf` |
| Rencana: Bengkel Las Tenaga Surya | `Target` |
