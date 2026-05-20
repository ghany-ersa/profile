<div align="center">

# Ghany Abdillah Ersa - Portfolio

A modern, responsive personal portfolio showcasing experience, projects, technical expertise, and recognitions. Built with a clean dark-mode aesthetic and a fully content-driven architecture.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/GitHub_Pages-Live-222?logo=github)](https://ghanyersa24.github.io/ghany-folio/)
[![License](https://img.shields.io/badge/License-Personal_Use-lightgrey)](#license)

[Live Demo](https://ghanyersa24.github.io/ghany-folio/) · [Report an issue](https://github.com/ghanyersa/ghany-folio/issues) · [Connect on LinkedIn](https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a)

</div>

---

## About

This site presents a curated overview of my work as a **Fullstack JavaScript Engineer** with a frontend focus. It is engineered to be fast, accessible, and trivial to maintain - content lives in a single source of truth, assets are centralized through a manifest, and the production build is optimized for static hosting.

| | |
| --- | --- |
| **Name** | Ghany Abdillah Ersa |
| **Role** | Fullstack JavaScript Engineer (Frontend-focused) |
| **Experience** | 5+ years |
| **Location** | East Java, Indonesia |
| **Email** | [ghanyersa24@gmail.com](mailto:ghanyersa24@gmail.com) |
| **LinkedIn** | [ghany-abdillah-ersa](https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a) |

---

## Highlights

- **Single-page architecture** with smooth-scroll navigation and an active-section indicator.
- **Fully responsive** - refined layouts from mobile to ultrawide displays.
- **Experience timeline** that pairs work history with related project cards.
- **Awards gallery** with visual storytelling.
- **Animated mobile drawer** for a polished navigation experience.
- **Centralized asset manifest** - swap images without touching component code.
- **Zero-config deployment** to GitHub Pages via GitHub Actions.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [React 18](https://react.dev/) |
| Build Tool | [Vite 5](https://vitejs.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Typography | Inter & JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages (via GitHub Actions) |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or newer**
- npm (bundled with Node) - pnpm or yarn also supported

### Installation

```bash
# Clone the repository
git clone https://github.com/ghanyersa/ghany-folio.git
cd ghany-folio

# Install dependencies
npm install
```

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server at `http://localhost:5173` |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```
ghany-folio/
├── .github/workflows/
│   └── static.yml             # GitHub Pages deployment workflow
├── index.html                 # Entry HTML + Google Fonts preload
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind theme & content paths
├── postcss.config.js
└── src/
    ├── main.jsx               # React root - mounts <Portofolio />
    ├── index.css              # Tailwind directives + base styles
    ├── Portofolio.jsx         # Primary portfolio component
    └── assets/
        └── images/
            ├── index.js       # Image manifest (single source of truth)
            ├── projects/      # Project imagery
            └── awards/        # Award imagery
```

---

## Managing Assets

All images resolve through one entry point: [src/assets/images/index.js](src/assets/images/index.js). Placeholders currently reference Unsplash URLs.

To replace placeholders with local files:

1. Drop the asset into the appropriate folder (`projects/` or `awards/`).
2. Update the manifest at [src/assets/images/index.js](src/assets/images/index.js):

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

3. No changes are required in [src/Portofolio.jsx](src/Portofolio.jsx) - Vite will hash, optimize, and bundle the assets automatically.

### Available Image Keys

| Category | Key | Used For |
| --- | --- | --- |
| Project | `talentics` | Sekolah.mu / talentics.id |
| Project | `fifgroup` | FIFGROUP (ASTRA) |
| Project | `shiftacademy` | Peopleshift / shiftacademy.id |
| Project | `bigio` | PT Bejana Investidata (BIGIO.ID) |
| Project | `emApps` | EM Apps - Universitas Brawijaya |
| Award | `topLeaderOlf` | Top 50 Leader - OLF |
| Award | `businessPlan` | 2nd Place - Business Plan |
| Award | `teknologiInovasi` | 2nd Place - Teknologi Inovasi |
| Award | `bmcJatimOpen` | 1st Place - BMC Jatim Open 2023 |

---

## Updating Content

All portfolio data lives in well-named arrays inside [src/Portofolio.jsx](src/Portofolio.jsx):

| Array | Purpose |
| --- | --- |
| `navItems` | Top navigation items |
| `experiences` | Work history & related projects |
| `education` | Education history |
| `skills` | Grouped technical expertise |
| `awards` | Awards & leadership achievements |

Edit these arrays to update content - JSX markup below them does not need to be modified.

---

## Deployment

The site deploys automatically to **GitHub Pages** through the workflow at [.github/workflows/static.yml](.github/workflows/static.yml) on every push to `main`.

The `base` path is configured in [vite.config.js](vite.config.js) to match the repository name. If forking, update the `base` value accordingly.

---

## License

© 2024–2026 Ghany Abdillah Ersa. All content and visual assets are intended for personal portfolio use.

---

<div align="center">

**Crafted with care - feedback and collaboration are always welcome.**

</div>
