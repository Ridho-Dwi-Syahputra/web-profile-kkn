# 02 — Design System

## 1. CSS Variables (`src/styles/variables.css`)

```css
:root {
  /* ===== Colors ===== */
  --primary: #0D2B0D;
  --secondary: #1A5C1A;
  --accent: #39FF14;
  --accent-soft: #7FFF00;

  --text-primary: #FFFFFF;
  --text-secondary: #A8D5A8;

  --card-bg: #1E3D1E;
  --border: #2D6B2D;
  --overlay: rgba(13, 43, 13, 0.85);
  --footer-bg: #071507;
  --section-alt: #0a1f0a;

  /* ===== Category Colors (Poin) ===== */
  --cat-organik: #7FFF00;
  --cat-organik-bg: rgba(127, 255, 0, 0.1);
  --cat-organik-border: rgba(127, 255, 0, 0.2);

  --cat-kertas: #64C8FF;
  --cat-kertas-bg: rgba(100, 200, 255, 0.1);
  --cat-kertas-border: rgba(100, 200, 255, 0.2);

  --cat-plastik: #FFC83C;
  --cat-plastik-bg: rgba(255, 200, 60, 0.1);
  --cat-plastik-border: rgba(255, 200, 60, 0.2);

  --cat-minyak: #FF8C64;
  --cat-minyak-bg: rgba(255, 140, 100, 0.1);
  --cat-minyak-border: rgba(255, 140, 100, 0.2);

  /* ===== Typography ===== */
  --font-heading: 'Plus Jakarta Sans', 'Poppins', sans-serif;
  --font-body: 'Inter', 'Poppins', sans-serif;

  /* ===== Spacing ===== */
  --radius-sm: 8px;
  --radius: 12px;
  --radius-lg: 20px;
  --container-max: 1200px;
  --container-padding: 24px;
  --section-padding: 80px;

  /* ===== Shadows ===== */
  --shadow-card: 0 12px 40px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 20px 60px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 8px 30px rgba(57, 255, 20, 0.25);
  --blur-backdrop: blur(20px);

  /* ===== Z-index ===== */
  --z-navbar: 1000;
  --z-drawer: 1100;
}

@media (max-width: 640px) {
  :root {
    --container-padding: 16px;
    --section-padding: 60px;
  }
}
```

## 2. Tipografi

| Element | Font | Size | Weight | Line-height |
|---|---|---|---|---|
| H1 Hero | heading | `clamp(2.2rem, 4vw, 3.2rem)` | 800 | 1.1 |
| H1 Page Header | heading | `clamp(2rem, 3.5vw, 2.8rem)` | 800 | 1.1 |
| H2 Section | heading | 2rem | 700 | 1.2 |
| H3 Card | heading | 1.15rem | 600-700 | 1.3 |
| H4 Sub | heading | 1rem | 600 | 1.4 |
| Body | body | 1rem | 400 | 1.7 |
| Caption | body | 0.85rem | 400-500 | 1.5 |
| Button | heading | 0.95rem | 600 | 1 |
| Badge | heading | 0.8rem | 600 | 1 |

## 3. Globals (`src/styles/globals.css`)

```css
/* ===== Font Import ===== */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

/* ===== Reset ===== */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--primary);
  color: var(--text-primary);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img, svg { display: block; max-width: 100%; }

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

ul, ol { list-style: none; }

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  line-height: 1.2;
}

/* ===== Utilities ===== */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.section {
  padding: var(--section-padding) 0;
}

.section-alt {
  background: var(--section-alt);
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ===== Focus visible ===== */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  border-radius: 4px;
}
```

## 4. Komponen UI Tokens

### Button

| Variant | Background | Color | Hover |
|---|---|---|---|
| primary | `--accent` | `--primary` | `translateY(-2px)` + `--shadow-glow` |
| outline | transparent | `--text-primary` | border `--accent` + color `--accent` |

Common: padding `14px 28px`, border-radius `50px`, font-size `0.95rem`, weight 600.

### Card

```css
background: var(--card-bg);
border: 1px solid var(--border);
border-radius: var(--radius);
padding: 24px;
transition: 0.3s ease;
```

Hover: `translateY(-4px)`, `box-shadow: var(--shadow-card)`,
`border-color: rgba(57,255,20,0.3)`.

### Badge

```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 6px 14px;
border-radius: 50px;
font-size: 0.8rem;
font-weight: 600;
background: rgba(57, 255, 20, 0.1);
color: var(--accent);
border: 1px solid rgba(57, 255, 20, 0.2);
```

## 5. Breakpoints

```css
/* Mobile-first */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md / tablet */ }
@media (min-width: 1024px) { /* lg / desktop */ }
@media (min-width: 1280px) { /* xl */ }
```
