# Portofolio — Ghany Abdillah Ersa

Situs portofolio pribadi yang menampilkan profil, pengalaman kerja, karya, keahlian teknis, dan penghargaan. Dibangun dengan **React + Vite + Tailwind CSS** dengan desain *dark mode* yang modern, responsif, dan minimalis.

> Live preview: _belum ter-deploy — lihat petunjuk pengembangan lokal di bawah._

---

## Sekilas

- **Nama**: Ghany Abdillah Ersa
- **Peran**: Fullstack JavaScript Engineer (Frontend-focused)
- **Pengalaman**: 5+ tahun
- **Domisili**: Jawa Timur, Indonesia
- **Kontak**: [ghanyersa24@gmail.com](mailto:ghanyersa24@gmail.com) · [LinkedIn](https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a)

---

## Fitur

- **Single-page** dengan navigasi *smooth scroll* dan indikator section aktif.
- **Responsive design** — tampil rapi dari mobile, tablet, hingga desktop.
- **Timeline pengalaman** yang menggabungkan riwayat kerja dengan kartu proyek terkait.
- **Galeri penghargaan** dengan ilustrasi visual.
- **Mobile drawer menu** dengan animasi transisi.
- **Aset gambar terpusat** lewat manifest, mudah diganti tanpa menyentuh komponen.

---

## Tech Stack

| Lapisan        | Teknologi                              |
| -------------- | -------------------------------------- |
| Framework      | [React 18](https://react.dev/)         |
| Build Tool     | [Vite 5](https://vitejs.dev/)          |
| Styling        | [Tailwind CSS 3](https://tailwindcss.com/) |
| Ikon           | [lucide-react](https://lucide.dev/)    |
| Tipografi      | Inter & JetBrains Mono (Google Fonts)  |

---

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org/) v18 atau lebih baru
- npm (bundled dengan Node) atau pnpm/yarn

### Instalasi & Menjalankan

```bash
# Install dependencies
npm install

# Jalankan dev server (otomatis buka browser di http://localhost:5173)
npm run dev

# Build production (output ke folder dist/)
npm run build

# Preview hasil build secara lokal
npm run preview
```

---

## Struktur Project

```
porto/
├── index.html              # Entry HTML + preload Google Fonts
├── package.json
├── vite.config.js          # Konfigurasi Vite
├── tailwind.config.js      # Konfigurasi Tailwind (font family, content paths)
├── postcss.config.js
└── src/
    ├── main.jsx            # React root, render <Portofolio />
    ├── index.css           # Tailwind directives + base styles
    ├── Portofolio.jsx      # Komponen utama portofolio
    └── assets/
        └── images/
            ├── index.js    # Manifest gambar (URL mapping)
            ├── projects/   # Gambar proyek (drop file di sini)
            └── awards/     # Gambar penghargaan (drop file di sini)
```

---

## Mengganti Aset Gambar

Semua gambar di-resolve lewat satu file: [src/assets/images/index.js](src/assets/images/index.js). Saat ini menggunakan URL Unsplash sebagai *placeholder*.

Untuk mengganti dengan file lokal Anda:

1. Taruh file di folder yang sesuai (`projects/` atau `awards/`).
2. Edit [src/assets/images/index.js](src/assets/images/index.js):

   ```js
   import talentics from './projects/talentics.jpg';
   import topLeader from './awards/top-leader-olf.jpg';

   export const projectImages = {
     talentics,
     // ...
   };

   export const awardImages = {
     topLeaderOlf: topLeader,
     // ...
   };
   ```

3. Komponen [src/Portofolio.jsx](src/Portofolio.jsx) **tidak perlu disentuh** — Vite otomatis akan men-*hash*, mengoptimalkan, dan mem-*bundle* aset.

### Key gambar yang tersedia

| Kategori | Key                 | Digunakan untuk                   |
| -------- | ------------------- | --------------------------------- |
| Project  | `talentics`         | Sekolah.mu / talentics.id         |
| Project  | `fifgroup`          | FIFGROUP (ASTRA)                  |
| Project  | `shiftacademy`      | Peopleshift / shiftacademy.id     |
| Project  | `bigio`             | PT Bejana Investidata (BIGIO.ID)  |
| Project  | `emApps`            | EM Apps — UB                      |
| Award    | `topLeaderOlf`      | Top 50 Leader — OLF               |
| Award    | `businessPlan`      | Juara 2 Business Plan             |
| Award    | `teknologiInovasi`  | Juara 2 Teknologi Inovasi         |
| Award    | `bmcJatimOpen`      | Juara 1 BMC — Jatim Open 2023     |

---

## Memperbarui Konten

Data (pengalaman, pendidikan, keahlian, penghargaan) didefinisikan sebagai array di dalam [src/Portofolio.jsx](src/Portofolio.jsx):

- `navItems` — item navigasi atas
- `experiences` — timeline pengalaman + proyek terkait
- `education` — riwayat pendidikan
- `skills` — kelompok keahlian teknis
- `awards` — penghargaan & kepemimpinan

Cukup edit array tersebut untuk mengganti konten — tidak perlu menyentuh markup JSX di bawahnya.

---

## Lisensi

© 2024 Ghany Abdillah Ersa. Konten dan aset visual untuk keperluan portofolio pribadi.
