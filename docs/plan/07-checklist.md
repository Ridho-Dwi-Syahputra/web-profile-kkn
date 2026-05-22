# 07 — Checklist Pre-Launch

## A. Audit Khusus Project Ini

### A.1 No-emoji audit

Tidak boleh ada emoji unicode di codebase. Jalankan:

```bash
# di root frontend/
grep -rnP "[\x{1F300}-\x{1FAFF}\x{2600}-\x{27BF}\x{1F000}-\x{1F2FF}]" src/
# harus 0 hasil
```

Jika ada match, ganti dengan ikon Lucide.

### A.2 Placeholder image audit

Tidak boleh ada `<img>` dengan `src` ke file gambar yang belum ada. Jalankan:

```bash
grep -rnE "<img" src/ public/
# semua harus pakai <ImagePlaceholder> atau dihapus
```

### A.3 Static data audit

Tidak boleh ada konten hardcoded di JSX yang seharusnya ada di `src/data/`.
Konten yang hardcoded acceptable: heading, label section, label button generic.

## B. Functional

- [ ] 6 halaman + 404 dapat diakses via routing
- [ ] Navbar fixed di top, swap background saat scroll
- [ ] Mobile hamburger menu buka-tutup drawer
- [ ] Logo navbar → link ke `/`
- [ ] Active link highlight benar (NavLink `isActive`)
- [ ] Footer link berfungsi
- [ ] Carousel generic (Home, Struktur, Tentang) auto-play
- [ ] Carousel arrow + dot + swipe berfungsi
- [ ] 3-card carousel Tim simetris, Ridho default center
- [ ] 3-card carousel auto-play 6000ms, animation guard 500ms
- [ ] FAQ Accordion (Poin) buka-tutup single open
- [ ] Tab Visi/Misi (Tentang) switch
- [ ] Page change → scroll smooth ke atas

## C. Konten

- [ ] Visi & Misi sesuai PRD
- [ ] Sejarah 4 entry (2023-2026)
- [ ] **Katalog Poin PERSIS: Dedaunan 3, Kertas 3, Plastik 5, Minyak Jelantah 5, Kantong Semen 8**
- [ ] **Hanya 4 pengurus (Bapak Fadli + 3 TBD)**
- [ ] **7 anggota tim, Ridho di index 0**
- [ ] 8 kegiatan dengan ikon Lucide masing-masing
- [ ] 5 catatan penting di Kegiatan
- [ ] 5 langkah alur Poin
- [ ] 6 reward Poin pakai Lucide icon (BUKAN emoji)
- [ ] 5 FAQ Poin
- [ ] Ucapan terima kasih Tim

## D. Visual

- [ ] Semua warna pakai CSS variable (tidak ada hex hardcoded di komponen)
- [ ] Tipografi hierarchy: H1 hero > H1 page > H2 section > H3 card
- [ ] Spacing konsisten via `--section-padding` & `--container-padding`
- [ ] Tidak ada overflow horizontal di mobile
- [ ] Hover state aktif: button, card, nav link, social icon
- [ ] Animasi smooth (`fadeIn`, `fadeInUp` ease-out)
- [ ] Focus visible (outline accent) untuk keyboard navigation

## E. Responsive

- [ ] 360px (mobile small) — tidak ada overflow, navbar hamburger
- [ ] 640px (mobile large) — masih single column
- [ ] 768px (tablet) — grid 2 kolom muncul
- [ ] 1024px+ (desktop) — full grid, 3-card carousel side cards visible
- [ ] Hero visual hidden di mobile

## F. Performance

- [ ] `npm run build` sukses tanpa error
- [ ] Bundle JS < 500KB (cek `dist/assets/*.js`)
- [ ] Lucide diimport per-icon (tree-shake), bukan `import * as Icons`
- [ ] Carousel item lazy mount (opsional)

## G. SEO & Metadata

- [ ] `<title>` di `index.html` deskriptif
- [ ] `<meta name="description">`
- [ ] Favicon (placeholder atau hijau plain)
- [ ] Open Graph tags (opsional)

## H. Aksesibilitas

- [ ] Semua `<button>` punya text content atau `aria-label`
- [ ] Heading hierarchy benar (1 H1 per halaman)
- [ ] Kontras teks utama vs background memenuhi WCAG AA
- [ ] Carousel arrow punya `aria-label="Previous slide"` / `"Next slide"`
- [ ] Accordion button punya `aria-expanded`
- [ ] Tab punya `role="tab"` + `aria-selected`
- [ ] Focus visible

## I. Deployment

- [ ] Repository GitHub setup
- [ ] `vercel.json` exists dengan rewrite rule
- [ ] Vercel preset = Vite
- [ ] Deploy preview sukses
- [ ] Tidak ada console error / warning di production
- [ ] Tidak ada broken link
