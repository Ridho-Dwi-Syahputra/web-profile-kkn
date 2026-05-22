# 04 — Detail Per Halaman

> Versi actionable dari PRD section 7. Setiap halaman = 1 file di `src/pages/`
> yang mengkomposisi section components.

---

## 7.1 Home (`/`) — `pages/Home.jsx`

```jsx
<>
  <Hero />
  <TentangSingkat />
  <LokasiKontak />
</>
```

### Section 1 — `Hero`

**Layout:** Grid `1fr` mobile, `1fr 1fr` desktop. Min-height `100vh`.
**Background:** `linear-gradient(160deg, #0D2B0D 0%, #102e10 40%, #1A3A1A 100%)`
**Padding-top:** `100px` (kompensasi navbar fixed)

**Kolom kiri:**
- `<Badge icon={Leaf}>Kelurahan Teluk Kabung Tengah</Badge>`
- H1: "Bank Sampah Unit" + line-break + `<span style={{color: var(--accent)}}>Teluk Kabung Tengah</span>`
- Tagline
- 2 button: primary "Pelajari Lebih Lanjut" (→ `/tentang`, icon ArrowRight),
  outline "Lihat Kegiatan" (→ `/kegiatan`)

**Kolom kanan:**
- `<ImagePlaceholder aspectRatio="4/3" rounded="lg" iconSize={64} />`
- `display: none` di mobile

**Animasi:** Content `fadeInUp 0.6s`, visual `fadeIn 0.5s 0.2s`.

### Section 2 — `TentangSingkat`

**Layout:** Grid 2 kolom (1:1).

**Kiri:** `<Carousel height={340} items={[<ImagePlaceholder />,...]} />` (4 placeholder).
**Kanan:** `SectionHeader` + 2 paragraf + `<Button variant="outline" to="/tentang">Selengkapnya</Button>`

### Section 3 — `LokasiKontak`

**Layout:** Grid 2 kolom.

**Kiri:**
- SectionHeader: badge ikon MapPin + "Lokasi", title "Temukan Kami"
- `<ImagePlaceholder aspectRatio="16/9" />` (placeholder peta)
- Alamat di bawahnya

**Kanan:**
- SectionHeader: badge "Kontak", title "Hubungi Kami"
- 4 card kontak: Alamat (MapPin), WhatsApp (Phone), Jam (Clock), Email (Mail)

Data dari `data/kontak.js`.

---

## 7.2 Tentang (`/tentang`) — `pages/Tentang.jsx`

```jsx
<>
  <PageHeader badge={...} title="Tentang Bank Sampah" subtitle="..." />
  <ProfilSection />
  <VisiMisi />              {/* section-alt */}
  <SejarahTimeline />
  <JamOperasional />        {/* section-alt */}
</>
```

> `PageHeader` adalah pattern berulang — bisa dijadikan section terpisah atau
> inline. Style: padding `120px 0 60px`, gradient hero, center text.

### `ProfilSection`

Grid 2 kolom. Kiri: SectionHeader + list info (label-value pair) di
`data/profil.js` atau inline. Kanan: `<ImagePlaceholder aspectRatio="4/3" />`.

### `VisiMisi`

Pakai `<Tabs>` dengan 2 tab:
- **Visi:** Single card centered max-width 700, ikon Eye 56×56 di tengah, quote.
- **Misi:** Grid auto-fit 280px, setiap item number badge + text. 5 poin.

Data: `data/sejarah.js` → `visiMisi`.

### `SejarahTimeline`

Timeline vertikal max-width 800. Tiap item:
- Year badge (48×48 rounded 12, accent bg)
- Connector line vertikal (2px)
- Title + Description

4 entry (2023-2026). Setelah timeline, `<Carousel height={300} items={3 placeholder}>`.

### `JamOperasional`

Section-alt. Tabel sederhana max-width 500, centered. 7 row: Senin-Sabtu jam
sama, Minggu Tutup (text-secondary).

---

## 7.3 Struktur (`/struktur`) — `pages/Struktur.jsx`

```jsx
<>
  <PageHeader title="Struktur Organisasi" badge={<Badge icon={Users}>Pengurus</Badge>} />
  <BaganOrganisasi />
  <InfoOperasional />     {/* section-alt */}
  <GaleriDokumentasi />   {/* carousel */}
</>
```

### `BaganOrganisasi`

Hierarki:
```
        [Bapak Fadli — Koordinator]
                  |
   -----------------------------------
   |             |                  |
[Sekretaris] [Bendahara]        [Anggota]
```

**Card pengurus:**
- Padding 24, border-radius 12, center text
- `<ImagePlaceholder rounded="full" aspectRatio="1/1" iconSize={32} />` di tengah
  - Koordinator: 100×100, border `--accent`, bg gradient lime soft
  - Lainnya: 80×80, border `--border`
- Nama H3
- Jabatan dalam `<Badge>`

**Connector line:** vertical 2px width, 32px height, color `--border`.

Mobile: stack vertikal.

### `InfoOperasional`

Grid auto-fit 300px. 4 card, masing-masing: number badge (32×32) + title + description.

Konten sesuai PRD 7.3.3:
1. Koordinator
2. Satu-Satunya di Kecamatan
3. Dukungan Mitra
4. Rencana Pengembangan

### Galeri Dokumentasi

`<Carousel height={360} items={3 placeholder}>`.

---

## 7.4 Kegiatan (`/kegiatan`) — `pages/Kegiatan.jsx`

```jsx
<>
  <PageHeader badge={<Badge icon={Calendar}>Kegiatan</Badge>} title="Kegiatan Bank Sampah" />
  <DaftarKegiatan />
  <CatatanPenting />     {/* section-alt */}
</>
```

### `DaftarKegiatan`

**Layout:** Flex column, gap 12px. **BUKAN card berita dengan gambar.**

**Item card horizontal:**
```
┌──────────────────────────────────────────┐
│  [Icon 52×52]  Title  [Badge frekuensi] │
│      01                                  │
│                Description...            │
└──────────────────────────────────────────┘
```

- Icon box 52×52, border-radius 14, bg `rgba(57,255,20,0.08)`, color `--accent`
- Number "0X" kecil di bawah icon (opacity 0.5, weight 700)
- Title H3 + badge frekuensi di sebelahnya
- Description: text-secondary, 0.9rem

Loop 8 item dari `data/kegiatan.js`.

### `CatatanPenting`

Section-alt. SectionHeader + list max-width 700.
- Item bg `rgba(57,255,20,0.03)`, border `1px solid rgba(57,255,20,0.1)`
- Padding `16px 20px`, border-radius
- Ikon `Leaf` 24×24 + text
- 5 item dari `data/kegiatan.js` → `catatanPenting`

---

## 7.5 Poin (`/poin`) — `pages/Poin.jsx`

```jsx
<>
  <PageHeader badge={<Badge icon={Scale}>Nabuang Sarok</Badge>} title="Poin & Penukaran" subtitle="..." />
  <AlurAktivitas />
  <KatalogPoin />              {/* section-alt */}
  <RedeemPoint />
  <TentangNabuangSarok />      {/* section-alt */}
  <FaqSection />
</>
```

### `AlurAktivitas`

Timeline vertikal max-width 800.

**Item:**
- Number circle 52×52, border accent, angka besar 01-05
- Connector line vertical 2px, height 40
- Title H4 + Description

5 langkah dari `data/poin.js` → `langkahPoin`.

### `KatalogPoin`

Section-alt. SectionHeader. Grid auto-fit 200, max-width 900.

**Card per item:**
- Center, padding 28 20
- Border-color sesuai kategori (dari `kategoriColors`)
- Poin value box 64×64 border-radius 16, bg & border kategori, angka besar 1.5rem
- Nama H4
- Badge kategori
- Keterangan
- Footer "X poin per kg" (border-top)

5 item PERSIS dari `data/poin.js` → `katalogPoin`.

### `RedeemPoint`

SectionHeader badge ikon `Gift` + "Redeem Point". Grid auto-fit 160, max-width 800.

**Card:**
- Center, padding 24 16
- Background subtle gradient
- **Ikon Lucide** 2.2rem (NO emoji)
- Nama 0.92rem weight 600
- Badge "Mulai X poin"

6 hadiah dari `data/poin.js` → `rewards`.

### `TentangNabuangSarok`

Section-alt. Single card max-width 700 centered. 2 paragraf + 4 achievement badge
(PROPER Emas 2023, Diamond TKMPN 2024, Hak Cipta Kemenkumham, Data SISPN).

### `FaqSection`

`<Accordion items={faqPoin} />`, max-width 700.

---

## 7.6 Tim (`/tim`) — `pages/Tim.jsx`

```jsx
<>
  <PageHeader badge={<Badge>Tim</Badge>} title="Tim KKN Nabuang Sarok" subtitle="..." />
  <InfoTim />
  <ThreeCardCarousel members={tim} />
  <UcapanTerimaKasih />     {/* section-alt */}
</>
```

### `InfoTim`

Padding `60px 0 20px`. Grid auto-fit 200, gap 14.

**4 stat card:**
1. Users — "Anggota" / "7 Orang"
2. Award — "Program" / "KKN Nabuang Sarok"
3. Calendar — "Periode" / "2026"
4. MapPin — "Lokasi" / "Teluk Kabung Tengah"

**Card:** center, padding 22 16, icon box 42×42 accent bg.

### `ThreeCardCarousel`

Lihat [`03-components.md`](./03-components.md#threecardcarouseljsx-tim-kkn).

Data: `data/tim.js` → `tim` (Ridho di index 0).

### `UcapanTerimaKasih`

Section-alt. Single card max-width 700 centered, padding 48 36.
- Ikon `Award` 56×56 (accent)
- H2 "Terima Kasih"
- Paragraf ucapan terima kasih

---

## Page Header Pattern (shared)

Pattern berulang di setiap halaman selain Home. Implementasi sederhana di
masing-masing page atau dijadikan komponen `<PageHeader>` di `components/ui/`.

```jsx
<header className={styles.pageHeader}>
  <div className="container">
    {badge}
    <h1>{title}<span className={styles.dot}>.</span></h1>
    {subtitle && <p>{subtitle}</p>}
  </div>
</header>
```

**Style:**
- `padding: 120px 0 60px`
- Background gradient sama dengan hero
- Center text
- `.dot` accent color
