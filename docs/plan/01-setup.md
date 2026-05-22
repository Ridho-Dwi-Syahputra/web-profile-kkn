# 01 — Setup Project

## 1. Inisialisasi Vite

```bash
cd "d:/Local Disk D/Tugas/KKN/website BSU/frontend"
npm create vite@latest . -- --template react
npm install
```

## 2. Dependencies

```bash
npm install react-router-dom lucide-react
```

`package.json` (production deps minimal):

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "lucide-react": "^0.460.0"
  }
}
```

## 3. Struktur Folder

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/      (Navbar, Footer, Layout)
│   │   ├── ui/          (Button, Card, Badge, dst)
│   │   └── sections/    (per-section komponen)
│   ├── pages/           (1 file per route)
│   ├── data/            (data statis .js)
│   ├── hooks/           (custom hooks)
│   ├── styles/          (variables.css, globals.css)
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── README.md
```

## 4. Konfigurasi File

### `vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
});
```

### `vercel.json`

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### `index.html`

- `<title>` — "Bank Sampah Unit Teluk Kabung Tengah"
- `<meta name="description">` — Tagline singkat
- Font: Google Fonts `Plus Jakarta Sans` + `Inter` via `<link>` di `<head>`
- Root: `<div id="root"></div>`

### `src/main.jsx`

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/variables.css';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### `src/App.jsx`

```javascript
import Layout from './components/layout/Layout.jsx';
import AppRoutes from './routes.jsx';

export default function App() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
```

## 5. Script

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## 6. Run

```bash
npm run dev
# → http://localhost:5173
```

## 7. Build & Deploy

```bash
npm run build       # output ke dist/
npm run preview     # serve dist/ lokal
```

Deploy ke Vercel: push ke GitHub, import repo di Vercel dashboard. Framework
preset: **Vite**. Build command default sudah benar.
