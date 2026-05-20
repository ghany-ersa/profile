# Arsitektur - Portfolio (Atomic Design)

Dokumen ini menjelaskan struktur kode setelah refactor.

---

## 1. Filosofi: Atomic Design

Atomic Design (Brad Frost) menyusun UI sebagai hierarki dari unit terkecil
ke terbesar. Komponen di tingkat atas hanya boleh menyusun komponen di
tingkat bawahnya - tidak pernah sebaliknya.

```
atoms → molecules → organisms → templates → pages
```

| Tingkat       | Definisi                                              | Contoh di proyek ini                          |
|---------------|-------------------------------------------------------|------------------------------------------------|
| **Atom**      | Elemen UI terkecil, tanpa logika bisnis & tanpa data  | `Button`, `Card`, `IconBox`, `TechTag`         |
| **Molecule**  | Gabungan beberapa atom dengan satu tujuan jelas       | `StatCard`, `NavLink`, `FeatureCard`           |
| **Organism**  | Bagian halaman utuh, menyusun molecule + atom         | `HeroSection`, `Navbar`, `Footer`              |
| **Template**  | Kerangka tata letak halaman, tanpa konten konkret     | `PageLayout`                                   |
| **Page**      | Komposisi akhir - merangkai organism jadi satu layar  | `PortfolioPage`                                |

---

## 2. Struktur Folder

```
src/
├── assets/images/      # Manifest gambar (import + URL eksternal)
├── constants/          # Nilai statis lintas aplikasi
│   ├── icons.js        #   Registry ikon: string → komponen lucide-react
│   └── site.js         #   Link & kontak (email, WhatsApp, sosial media)
├── data/               # LAPISAN KONTEN - semua teks portfolio
│   ├── navigation.js   #   Nav items + daftar id section
│   ├── profile.js      #   Hero stats + riwayat pendidikan
│   ├── experiences.js  #   Riwayat pengalaman kerja
│   ├── caseStudies.js  #   Studi kasus (Problem/Action/Result)
│   ├── services.js     #   Layanan + alur kolaborasi
│   ├── experiments.js  #   Side project / Lab
│   └── index.js        #   Barrel export
├── hooks/              # Custom React hooks
│   └── useActiveSection.js   # Scroll-spy untuk highlight nav aktif
├── utils/              # Helper murni tanpa dependensi React
│   └── cn.js           #   Penggabung className kondisional
├── components/
│   ├── atoms/          # 9 atom + barrel index.js
│   ├── molecules/      # 11 molecule + barrel index.js
│   ├── organisms/      # 8 organism + barrel index.js
│   └── templates/      # PageLayout + barrel index.js
├── pages/              # PortfolioPage + barrel index.js
└── main.jsx            # Entry point - me-render <PortfolioPage />
```

---

## 3. Keputusan Arsitektural

### 3.1 Pemisahan data dari tampilan (Separation of Concerns)
Seluruh konten teks dipindah ke `src/data/`. Komponen hanya menerima data
sebagai props dan fokus merender. **Manfaat:** mengubah teks portfolio tidak
perlu menyentuh kode komponen sama sekali.

### 3.2 Registry ikon (`constants/icons.js`)
File data tidak boleh meng-import komponen React agar tetap "murni".
Karena itu data menyimpan ikon sebagai **string** (mis. `icon: 'zap'`), dan
komponen meresolusinya lewat `getIcon('zap')`. Ini memutus ketergantungan
lapisan data pada `lucide-react`.

### 3.3 Barrel exports (`index.js` per folder)
Tiap folder komponen punya `index.js` yang mengekspor ulang isinya. Import
jadi ringkas dan stabil:

```js
import { Card, Button, IconBox } from '../atoms';   // ✅ satu baris
```

### 3.4 Komponen generik vs spesifik
`FeatureCard` menggantikan **2 blok berulang** (services & langkah
kolaborasi) karena keduanya berbentuk ikon + judul + deskripsi.
Variasi diatur lewat props (`layout`, `align`, `iconSize`) - bukan
menduplikasi markup.

### 3.5 Hook untuk logika stateful
Logika scroll-spy diekstrak ke `useActiveSection`. `Navbar` jadi deklaratif,
dan hook bisa diuji / dipakai ulang secara terpisah. Listener scroll memakai
`{ passive: true }` untuk performa.

### 3.6 Template vs Page
`PageLayout` (template) memegang **struktur** - navbar, `<main>`, footer.
`PortfolioPage` (page) memegang **urutan konten**. Mengubah urutan section
cukup memindah satu baris di `PortfolioPage.jsx`.

---

## 4. Tanggung Jawab Komponen

### Atoms (`components/atoms/`)
| Komponen         | Tanggung jawab                                                |
|------------------|---------------------------------------------------------------|
| `Container`      | Pembungkus max-width + padding horizontal konsisten           |
| `Section`        | `<section>` dengan anchor id & ritme vertikal seragam         |
| `Card`           | Permukaan berbingkai - basis semua kartu (varian + hover)     |
| `Button`         | Link bergaya tombol (4 varian)                                |
| `IconBox`        | Kotak bertint yang membingkai ikon                            |
| `Badge`          | Pil kecil - eyebrow heading / status "Available"              |
| `SectionHeading` | Judul section (layout `left` & `center`)                      |
| `TechTag`        | Chip teknologi/skill (tone `cyan` & `slate`)                  |
| `ListItem`       | Satu baris bullet (marker check / arrow)                      |

### Molecules (`components/molecules/`)
| Komponen        | Tanggung jawab                                          |
|-----------------|---------------------------------------------------------|
| `NavLink`       | Satu link navigasi (varian desktop & mobile)            |
| `StatCard`      | Satu metrik hero                                        |
| `FeatureCard`   | Kartu ikon+judul+deskripsi generik (services & langkah kolaborasi) |
| `ProjectCard`   | Pratinjau proyek di bawah entri timeline                |
| `TimelineEntry` | Satu entri pada timeline pengalaman                     |
| `CaseStudyCard` | Satu studi kasus utuh (Problem→Action→Result)           |
| `ExperimentCard`| Satu kartu side project (Lab)                           |
| `DecisionItem`  | Pasangan Q&A "keputusan kunci"                          |
| `EducationItem` | Satu entri riwayat pendidikan                           |
| `SocialLinks`   | Baris ikon sosial media (footer)                        |
| `ContactInfo`   | Kolom kontak (lokasi, telepon, email) di footer         |

### Organisms (`components/organisms/`)
Delapan section halaman: `Navbar`, `HeroSection`, `AboutSection`,
`ExperienceSection`, `CaseStudySection`, `LabSection`,
`CollaborationSection`, `Footer`.
Tiap organism meng-import datanya sendiri dari `src/data/`.

---

## 5. Praktik Clean Code yang Diterapkan

- **Single Responsibility** - tiap komponen punya satu alasan untuk berubah.
- **DRY** - pola berulang (container, kartu, bullet, ikon) diangkat jadi atom;
  `FeatureCard` menghapus 2 duplikasi blok.
- **Penamaan konsisten** - komponen `PascalCase`, file komponen `.jsx`,
  data/util/hook `camelCase.js`, section diberi sufiks `Section`.
- **Komposisi di atas konfigurasi** - variasi lewat props, bukan flag rumit.
- **Pure data layer** - `src/data/` bebas dari import React/komponen.
- **Aksesibilitas** - `aria-label` pada tombol ikon, `sr-only` pada link
  sosial, `loading="lazy"` pada gambar proyek.
- **Komentar bermakna** - tiap file diawali JSDoc singkat tentang tujuannya.

---

## 6. Cara Menambah / Mengubah Konten

| Tujuan                          | File yang diubah                                  |
|---------------------------------|---------------------------------------------------|
| Ubah teks pengalaman / proyek   | `src/data/*.js` (tanpa menyentuh komponen)         |
| Tambah item navigasi            | `src/data/navigation.js`                           |
| Ubah link kontak / sosial       | `src/constants/site.js`                            |
| Tambah ikon baru                | Daftarkan di `src/constants/icons.js`              |
| Ubah urutan section             | `src/pages/PortfolioPage.jsx` (pindah satu baris)  |
| Tambah section baru             | Buat organism → import di `PortfolioPage.jsx`      |

---

## 7. Verifikasi

```bash
npm run dev      # mode pengembangan
npm run build    # build produksi - lulus tanpa error
npm run preview  # pratinjau hasil build
```
