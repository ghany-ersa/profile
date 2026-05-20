import React, { useState, useEffect } from 'react';
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Briefcase,
  Code2,
  Menu,
  X,
  Terminal,
  Layout,
  Sparkles,
  Users,
  Rocket,
  GraduationCap,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Github,
  Target,
  Wrench,
  TrendingUp,
  Handshake,
  Lightbulb,
  Brain,
  Bot,
  Zap,
  Compass,
  FlaskConical,
  ExternalLink,
  Hand,
} from 'lucide-react';
import { projectImages, profileImage } from './assets/images';

const WHATSAPP_URL = 'https://wa.me/6282164028264?text=Halo%20Ghany%2C%20saya%20ingin%20mendiskusikan%20kolaborasi.';
const GITHUB_URL = 'https://github.com/ghanyersa'; // TODO: replace with your real GitHub URL
const CALENDAR_URL = 'mailto:ghanyersa24@gmail.com?subject=Jadwal%20Diskusi%20Kolaborasi'; // TODO: replace with Calendly/Cal.com link if available

const Portofolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const navItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Case Study', href: '#case-study' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'AI Workflow', href: '#ai-workflow' },
    { name: 'Lab', href: '#lab' },
    { name: 'Kolaborasi', href: '#kolaborasi' },
  ];

  const heroStats = [
    { value: '5+', label: 'Tahun Pengalaman', sub: 'Years of experience' },
    { value: '20K+', label: 'Pengguna Aktif', sub: 'Users impacted' },
    { value: '500+', label: 'Jam Mengajar', sub: 'Hours mentoring' },
    { value: '7', label: 'Tim & Perusahaan', sub: 'Teams shipped with' },
  ];

  const experiences = [
    {
      company: 'Sekolah.mu | talentics.id',
      role: 'Frontend Developer',
      period: 'April 2022 - April 2026',
      highlights: [
        'Membangun & memelihara modul asesmen enterprise berbasis Nuxt.js yang melayani ribuan kandidat per bulan.',
        'Memangkas waktu render halaman asesmen melalui code-splitting, lazy loading, dan optimasi state management.',
        'Berkolaborasi dengan tim product, designer, dan backend untuk merilis fitur baru secara berkelanjutan setiap sprint.',
      ],
      project: {
        title: 'Sistem Asesmen (talentics.id)',
        description:
          'Antarmuka sistem asesmen enterprise yang responsif, interaktif, dan tahan beban - digunakan klien korporat untuk seleksi talenta digital.',
        image: projectImages.talentics,
        tech: ['Nuxt.js', 'Vue.js', 'TypeScript', 'Tailwind'],
      },
    },
    {
      company: 'Nikaah.id',
      role: 'Backend Developer',
      period: 'November 2022 - April 2025',
      highlights: [
        'Mendesain arsitektur multi-tenant berbasis subdomain dinamis sehingga setiap klien mendapat undangan sendiri tanpa intervensi developer.',
        'Membangun REST API untuk RSVP, autentikasi, dashboard admin, dan personalisasi undangan dengan Express.js.',
        'Mengoptimasi struktur database dan integrasi layanan agar platform scalable seiring bertambahnya pengguna.',
      ],
      project: {
        title: 'Platform Undangan Digital (nikaah.id)',
        description:
          'Backend SaaS undangan digital dengan sistem multi-tenant, manajemen tamu, dan personalisasi penuh per klien.',
        image: projectImages.nikaah,
        tech: ['Express.js', 'REST API', 'Multi-tenant', 'PostgreSQL'],
      },
    },
    {
      company: 'FIFGROUP member of ASTRA',
      role: 'IT Development',
      period: 'April 2021 - Mei 2022',
      highlights: [
        'Berperan sebagai solo programmer end-to-end: requirement gathering, perancangan sistem, implementasi, hingga deployment.',
        'Membangun Sistem Manajemen Aset internal berbasis React.js + Java Spring Boot yang menggantikan proses manual lintas cabang.',
        'Mengurangi kerja administratif tim aset dengan otomasi pencatatan dan pelaporan.',
      ],
      project: {
        title: 'Sistem Manajemen Aset Internal',
        description:
          'Aplikasi internal untuk pencatatan, pelacakan, dan pelaporan aset perusahaan - meningkatkan akurasi & kecepatan audit aset.',
        image: projectImages.fifgroup,
        tech: ['React.js', 'Java Spring Boot', 'REST API', 'Fullstack'],
      },
    },
    {
      company: 'Comika Indonesia',
      role: 'IT Vendor - Comika Media',
      period: 'Juni 2021 - Oktober 2021',
      highlights: [
        'Membangun platform media comika.media dengan Next.js + Express.js, fokus pada performa SEO dan user experience.',
        'Mengintegrasikan payment gateway Midtrans untuk subscription dan pembelian merchandise sebagai sumber monetisasi.',
      ],
      project: {
        title: 'Website Comika Media',
        description:
          'Platform media konten komedi dengan fitur subscription digital, e-commerce merchandise, dan checkout terintegrasi.',
        image: projectImages.comika,
        tech: ['Next.js', 'Express.js', 'Midtrans', 'Fullstack'],
      },
    },
    {
      company: 'Peopleshift (shiftacademy.id)',
      role: 'Tutor & Fullstack JavaScript Developer',
      period: 'Desember 2020 - Mei 2022',
      highlights: [
        'Mengajar 500+ jam pelatihan: HTML, CSS, JavaScript, Git, database, Express.js, Vue/Nuxt.js.',
        'Membimbing ratusan peserta dari fundamental hingga merilis aplikasi production-ready melalui project-based learning.',
        'Menyusun kurikulum praktis berorientasi industri yang dipakai berulang lintas batch bootcamp.',
      ],
      project: {
        title: 'Mentoring & Bootcamp JavaScript',
        description:
          'Bimbingan intensif untuk peserta bootcamp di ekosistem JavaScript modern - menjembatani teori dengan praktik industri.',
        image: projectImages.shiftacademy,
        tech: ['Teaching', 'Curriculum Design', 'JavaScript', 'Mentoring'],
      },
    },
    {
      company: 'PT Bejana Investidata Globalindo (BIGIO.ID)',
      role: 'Software QA & Automation Engineer',
      period: 'Maret 2020 - Desember 2020',
      highlights: [
        'Menyusun test scenario, melakukan manual testing, serta mengembangkan automation testing dengan Selenium JavaScript.',
        'Membangun tools automation internal yang menghasilkan testing report otomatis - mempercepat validasi fitur tiap rilis.',
        'Membantu tim development mengidentifikasi & mereproduksi bug lebih cepat sehingga siklus QA lebih ringkas.',
      ],
      project: {
        title: 'Automation Testing & QA Tools',
        description:
          'Internal automation testing tools dengan pelaporan otomatis - meningkatkan efisiensi proses QA dan stabilitas rilis.',
        image: projectImages.bigio,
        tech: ['Selenium', 'JavaScript', 'Automation', 'QA'],
      },
    },
    {
      company: 'Eksekutif Mahasiswa Universitas Brawijaya',
      role: 'Product Owner - EM Apps',
      period: 'Januari 2019 - Desember 2019',
      highlights: [
        'Memimpin pengembangan aplikasi mahasiswa dengan 20.000+ pengguna aktif.',
        'Mengelola product roadmap, koordinasi tim, dan pengembangan REST API berbasis CodeIgniter.',
        'Merilis fitur rekam aktivitas mahasiswa dan sistem pemesanan wawancara digital yang menggantikan proses manual.',
      ],
      project: {
        title: 'EM Apps - Portal Mahasiswa',
        description:
          'Platform digital mahasiswa untuk pelacakan aktivitas non-akademik dan manajemen jadwal wawancara - dipakai 20K+ mahasiswa.',
        image: projectImages.emApps,
        tech: ['CodeIgniter', 'REST API', 'Product Ownership'],
      },
    },
  ];

  const caseStudies = [
    {
      title: 'Sistem Asesmen Enterprise - talentics.id',
      role: 'Frontend Developer · Sekolah.mu',
      image: projectImages.talentics,
      problem:
        'Modul asesmen melayani ribuan kandidat klien korporat secara bersamaan. Halaman terasa berat, state form kompleks, dan tiap rilis fitur baru rawan regresi.',
      action: [
        'Refactor struktur komponen Nuxt.js dan terapkan code-splitting per modul asesmen.',
        'Pisahkan state form berat ke composables agar re-render terisolasi.',
        'Rapikan kolaborasi dengan product & QA via checklist rilis untuk mengurangi regresi.',
      ],
      decisions: [
        {
          q: 'Refactor besar atau patch kecil bertahap?',
          a: 'Pilih patch bertahap per modul - refactor besar berisiko menahan rilis bisnis. Kami trade-off antara kecepatan rilis vs kerapian arsitektur, dan kecepatan menang karena klien korporat butuh fitur baru tiap sprint.',
        },
        {
          q: 'Composables atau global store?',
          a: 'Pakai composables untuk state form karena form-nya rumit tapi scope-nya lokal. Global store akan over-engineering dan bikin re-render menyebar ke modul lain.',
        },
      ],
      result: [
        'Halaman asesmen terasa lebih ringan dan responsif untuk kandidat.',
        'Siklus rilis fitur baru lebih cepat dan minim regresi antar sprint.',
        'Tim product percaya menambahkan fitur kompleks tanpa takut merusak alur kandidat.',
      ],
      stack: ['Nuxt.js', 'Vue.js', 'Tailwind', 'TypeScript'],
    },
    {
      title: 'Sistem Manajemen Aset - FIFGROUP (ASTRA)',
      role: 'Solo Programmer · FIFGROUP',
      image: projectImages.fifgroup,
      problem:
        'Pencatatan aset internal masih manual lintas cabang, sulit diaudit, dan rawan data ganda. Tidak ada tooling tunggal untuk operasional aset.',
      action: [
        'Rancang sistem end-to-end: skema database, API Spring Boot, dan UI React.',
        'Bangun alur pencatatan, perpindahan, dan pelaporan aset dalam satu dashboard.',
        'Sediakan ekspor laporan untuk mempercepat proses audit.',
      ],
      decisions: [
        {
          q: 'Spring Boot atau Node.js untuk backend?',
          a: 'Pilih Spring Boot mengikuti standar internal ASTRA - bukan karena teknologinya lebih baik, tapi karena maintainability oleh tim internal setelah saya selesai jauh lebih penting daripada preferensi pribadi.',
        },
        {
          q: 'Monolith atau microservice?',
          a: 'Monolith. Hanya 1 developer (saya), 1 domain bisnis, dan tim internal kecil. Microservice akan menambah kompleksitas deployment tanpa keuntungan nyata - over-engineering yang umum di proyek seukuran ini.',
        },
        {
          q: 'Custom build atau pakai SaaS asset management?',
          a: 'Custom - karena alur approval dan struktur cabang FIFGROUP sangat spesifik. SaaS akan butuh adaptasi proses bisnis ke tool, bukan sebaliknya.',
        },
      ],
      result: [
        'Operasional tim aset bergeser dari spreadsheet manual ke satu sistem terpusat.',
        'Audit aset jadi lebih cepat karena laporan tersedia on-demand.',
        'Dikerjakan solo dari requirement hingga deployment - bukti kapabilitas fullstack end-to-end.',
      ],
      stack: ['React.js', 'Java Spring Boot', 'REST API', 'Fullstack'],
    },
  ];

  const services = [
    {
      icon: Layout,
      title: 'Frontend Engineering',
      description:
        'Membangun antarmuka web modern berbasis Vue/Nuxt atau React - fokus pada performa, aksesibilitas, dan maintainability.',
      points: ['Vue / Nuxt / React', 'Design system & UI yang reusable', 'Optimasi performa & Core Web Vitals'],
    },
    {
      icon: Wrench,
      title: 'Fullstack Product Build',
      description:
        'Membantu founder & tim kecil merilis MVP atau internal tools dari nol - UI, REST API, database, hingga deployment.',
      points: ['Express.js / Spring Boot', 'REST API & arsitektur multi-tenant', 'Integrasi payment gateway & 3rd-party'],
    },
    {
      icon: GraduationCap,
      title: 'Mentoring & Tech Workshop',
      description:
        '500+ jam pengalaman mengajar bootcamp. Cocok untuk onboarding engineer baru, internal workshop, atau bimbingan project.',
      points: ['Kurikulum praktis berbasis project', 'Code review & pair programming', 'Webinar / in-house training'],
    },
  ];

  const experiments = [
    {
      icon: Hand,
      title: 'WebAR Hand Tracking - Clap & Grab',
      tagline: 'Spawn objek 3D di browser dengan gestur tangan.',
      description:
        'Eksperimen WebAR berbasis A-Frame & MediaPipe Hand Tracking. Kamera browser mendeteksi gestur tepuk tangan untuk memunculkan kubus 3D yang bisa di-"grab" di ruang AR - tanpa instalasi aplikasi, langsung jalan di browser modern.',
      stack: ['A-Frame', 'WebXR', 'Hand Tracking', 'MediaPipe', 'HTML'],
      links: [
        {
          label: 'Live Demo',
          href: 'https://ghanyersa24.github.io/VR-menggunakan-A-Frame/webar-handtracking.html',
        },
        {
          label: 'Source Code',
          href: 'https://github.com/ghanyersa24/VR-menggunakan-A-Frame',
        },
      ],
      note: 'Butuh izin kamera & koneksi internet untuk memuat model hand tracking.',
    },
  ];

  const collaborationPath = [
    {
      icon: MessageCircle,
      title: '1. Diskusi awal',
      description: 'Kirim email atau WhatsApp dengan gambaran kebutuhan. Saya balas dalam 1–2 hari kerja.',
    },
    {
      icon: Target,
      title: '2. Scoping & alignment',
      description: 'Kita sepakati ruang lingkup, target hasil, timeline, dan cara kerja yang paling cocok.',
    },
    {
      icon: Rocket,
      title: '3. Eksekusi & iterasi',
      description: 'Saya kerjakan dengan update progres berkala, terbuka untuk feedback, dan fokus pada outcome nyata.',
    },
  ];

  const education = [
    {
      degree: 'Magister Ilmu Komputer, Sistem Informasi',
      university: 'Universitas Brawijaya',
      period: 'Lulusan September 2027 (Estimasi)',
    },
    {
      degree: 'Sarjana Ilmu Komputer, Sistem Informasi',
      university: 'Universitas Brawijaya',
      period: 'Agustus 2016 - Januari 2021',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React.js', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Java Spring Boot', 'CodeIgniter', 'REST APIs', 'Multi-tenant'],
    },
    {
      category: 'Testing & Tooling',
      items: ['Selenium', 'Git', 'Manual Testing', 'Automation Testing', 'CI mindset'],
    },
    {
      category: 'Leadership & Soft Skills',
      items: ['Mentoring & Teaching', 'Product Ownership', 'IT Strategy', 'Cross-team Collaboration'],
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'pengalaman', 'case-study', 'keahlian', 'ai-workflow', 'lab', 'kolaborasi'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 scroll-smooth">
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="font-bold text-xl tracking-tight text-white">
                Ghany<span className="text-cyan-400">.dev</span>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${activeSection === item.href.substring(1)
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-700'
                      } px-1 py-2 text-sm font-medium transition-all duration-300`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section
          id="beranda"
          className="pt-32 pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Terbuka untuk kolaborasi · Open to collaboration
              </div>

              <p className="text-cyan-400 font-mono mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Halo Dunia, Saya
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
                Ghany Abdillah Ersa.
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-400 mb-6 leading-tight">
                Saya bantu tim merilis produk - dan mencetak engineer yang melanjutkannya.
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                <span className="text-slate-200 font-semibold">Product Engineer &amp; Tech Mentor</span>{' '}
                - fullstack JavaScript dengan fokus <em>frontend</em>. Selama 5+ tahun saya merilis
                fitur enterprise di Sekolah.mu, membangun sistem internal end-to-end di FIFGROUP
                (ASTRA), memimpin produk dengan 20K+ pengguna, dan membimbing ratusan engineer
                lewat 500+ jam mengajar. Saya menggunakan AI sebagai <em>leverage</em>, bukan
                pengganti judgment.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#kolaborasi"
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Handshake className="w-5 h-5" />
                  Ajak Berkolaborasi
                </a>
                <a
                  href="#case-study"
                  className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  Lihat Case Study
                </a>
                <a
                  href="mailto:ghanyersa24@gmail.com"
                  className="inline-flex items-center gap-2 bg-transparent border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 text-slate-300 font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 via-cyan-400/10 to-transparent blur-2xl"
                ></div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full border border-cyan-400/30 [mask-image:linear-gradient(135deg,white,transparent)]"
                ></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 bg-slate-900 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Ghany Abdillah Ersa"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                      <span className="text-6xl sm:text-7xl font-extrabold text-cyan-300 tracking-tight">
                        GE
                      </span>
                      <span className="mt-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                        Ghany Ersa
                      </span>
                    </div>
                  )}
                </div>
                <div
                  className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono shadow-lg"
                  aria-label="Status: available"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  Available
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {heroStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-slate-300 mt-1 font-medium">{stat.label}</div>
                <div className="text-[11px] text-slate-500 font-mono">{stat.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="tentang" className="py-20 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3xl font-bold text-white">Tentang Saya</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Di era ketika menulis kode menjadi komoditas, yang langka adalah engineer yang
                  bisa <strong className="text-cyan-400">menerjemahkan masalah bisnis</strong>,{' '}
                  <strong className="text-cyan-400">mengambil keputusan arsitektural</strong>, dan{' '}
                  <strong className="text-cyan-400">memimpin manusia di sekitarnya</strong>. Itu
                  yang saya latih sejak 2020.
                </p>
                <p>
                  Saya pernah jadi <strong className="text-cyan-400">solo programmer end-to-end</strong>{' '}
                  di FIFGROUP (ASTRA), <strong className="text-cyan-400">frontend engineer</strong>{' '}
                  yang menjaga modul asesmen jutaan kandidat di Sekolah.mu, dan{' '}
                  <strong className="text-cyan-400">product owner</strong> untuk aplikasi mahasiswa
                  20K+ pengguna. Pola kerja saya sederhana: mulai dari masalah nyata, ambil
                  keputusan, ukur hasilnya, ajarkan ke orang berikutnya.
                </p>
                <p>
                  Saya juga membimbing engineer baru - 500+ jam mengajar bootcamp JavaScript dan
                  pembicara webinar. Ini bagian yang AI belum bisa gantikan: membangun manusia,
                  membentuk budaya tim. Saat ini saya juga menempuh Magister Sistem Informasi di
                  Universitas Brawijaya untuk memperdalam sisi strategi & sistem.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/40 rounded-lg px-3 py-2 transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/40 rounded-lg px-3 py-2 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-cyan-400" />
                  Pendidikan & Latar Belakang
                </h3>
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="relative pl-6 border-l-2 border-slate-700 pb-2 last:pb-0"
                    >
                      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                      <h4 className="text-white font-medium">{edu.degree}</h4>
                      <p className="text-cyan-400 text-sm mt-1">{edu.university}</p>
                      <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="pengalaman" className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-white whitespace-nowrap">
                Pengalaman & Karya
              </h2>
              <div className="h-px bg-slate-800 flex-grow"></div>
            </div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="group relative pl-8 sm:pl-40 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors duration-300"
                >
                  <div className="absolute w-5 h-5 bg-slate-950 border-4 border-slate-700 rounded-full -left-[11px] top-1 group-hover:border-cyan-400 transition-colors duration-300 z-10"></div>

                  <div className="hidden sm:block absolute left-0 top-1 -translate-x-full pr-10 text-sm text-slate-400 font-mono w-40 text-right leading-tight">
                    {exp.period.split('-').map((p, i) => (
                      <div key={i}>{p.trim()}</div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-cyan-400 font-medium mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </div>

                    <div className="sm:hidden text-sm text-slate-500 font-mono mb-4">
                      {exp.period}
                    </div>

                    <ul className="space-y-2 text-slate-400 leading-relaxed">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-cyan-400/80 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.project && (
                    <div className="mt-6 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col sm:flex-row group/project hover:border-cyan-900 transition-colors duration-300">
                      <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                        <img
                          src={exp.project.image}
                          alt={exp.project.title}
                          className="w-full h-full object-cover group-hover/project:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/30 group-hover/project:bg-transparent transition-colors duration-300"></div>
                      </div>
                      <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <Layout className="w-4 h-4 text-cyan-400" />
                          {exp.project.title}
                        </h4>
                        <p className="text-slate-400 text-sm mb-4">{exp.project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {exp.project.tech.map((techItem, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2.5 py-1 bg-cyan-950/30 text-cyan-300 rounded text-xs font-medium border border-cyan-900/50"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-500 text-sm">
                *Gambar portofolio merupakan ilustrasi (placeholder) - dapat diganti dengan
                tangkapan layar asli.
              </p>
            </div>
          </div>
        </section>

        <section id="case-study" className="py-20 bg-slate-900/40 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-cyan-400 font-mono text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Featured Work
                </p>
                <h2 className="text-3xl font-bold text-white">Case Study Terpilih</h2>
                <p className="text-slate-400 mt-2 max-w-2xl">
                  Dua proyek yang paling merepresentasikan cara saya bekerja: dari masalah nyata,
                  aksi yang diambil, hingga hasil yang terukur.
                </p>
              </div>
            </div>

            <div className="space-y-10">
              {caseStudies.map((cs, idx) => (
                <article
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-colors"
                >
                  <div>
                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-mono text-cyan-400 mb-2">{cs.role}</p>
                      <h3 className="text-2xl font-bold text-white mb-4">{cs.title}</h3>

                      <div className="space-y-5 text-slate-300">
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-rose-300 mb-2">
                            <Target className="w-4 h-4" /> Problem
                          </div>
                          <p className="text-slate-400 leading-relaxed">{cs.problem}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-amber-300 mb-2">
                            <Wrench className="w-4 h-4" /> Action
                          </div>
                          <ul className="space-y-1.5 text-slate-400">
                            {cs.action.map((a, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-amber-400 mt-1">›</span>
                                <span>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {cs.decisions && (
                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-violet-300 mb-3">
                              <Lightbulb className="w-4 h-4" /> Keputusan Kunci · Key Decisions
                            </div>
                            <div className="space-y-3">
                              {cs.decisions.map((d, i) => (
                                <div
                                  key={i}
                                  className="border-l-2 border-violet-500/30 pl-4 py-1"
                                >
                                  <p className="text-slate-200 text-sm font-medium mb-1">
                                    {d.q}
                                  </p>
                                  <p className="text-slate-400 text-sm leading-relaxed">
                                    {d.a}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300 mb-2">
                            <TrendingUp className="w-4 h-4" /> Result
                          </div>
                          <ul className="space-y-1.5 text-slate-400">
                            {cs.result.map((r, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-800">
                        {cs.stack.map((s, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-cyan-950/30 text-cyan-300 rounded text-xs font-medium border border-cyan-900/50"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="keahlian" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-white">Keahlian Teknis</h2>
              <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-sm font-medium border border-slate-700/50 hover:bg-slate-700 hover:text-cyan-300 cursor-default transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-workflow" className="py-20 bg-slate-900/30 border-y border-slate-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2 justify-center">
                <Bot className="w-4 h-4" /> AI-Augmented Workflow
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                AI sebagai Leverage, Bukan Pengganti Judgment
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Menulis kode kini komoditas. Yang tidak tergantikan adalah engineer yang bisa
                <em> mengarahkan</em> AI dengan konteks bisnis, mereview hasilnya dengan kritis,
                dan tahu kapan <em>tidak</em> menggunakannya. Begini cara saya bekerja sehari-hari.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  icon: Zap,
                  title: 'Prototyping cepat',
                  body: 'Pakai AI untuk men-draft komponen UI, schema database, atau spike teknis dalam menit. Saya yang putuskan mana yang masuk codebase produksi.',
                },
                {
                  icon: Brain,
                  title: 'Code review tandem',
                  body: 'AI sebagai second-pair-of-eyes untuk menangkap edge case, naming, dan potensi bug. Tapi review arsitektural & trade-off bisnis tetap milik manusia.',
                },
                {
                  icon: Compass,
                  title: 'Riset & decision support',
                  body: 'AI bantu membandingkan library, pola arsitektur, atau approach migrasi. Saya menimbang konteks tim, deadline, dan risiko sebelum memutuskan.',
                },
                {
                  icon: GraduationCap,
                  title: 'Mentoring augmented',
                  body: 'Membantu engineer baru memakai AI dengan benar - kapan dipercaya, kapan diverifikasi. Tujuannya cetak engineer mandiri, bukan dependen pada tool.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Filosofi saya soal AI</h3>
                  <p className="text-slate-400 leading-relaxed">
                    AI bagus untuk <em>menulis kode</em>. Tapi yang membuat produk berhasil bukan
                    kode - melainkan <strong className="text-slate-200">keputusan</strong>: kapan
                    refactor, kapan tidak; kapan multi-tenant, kapan monolith; fitur mana yang
                    dipotong demi rilis. Itu yang saya bawa ke meja, dan itu yang membuat tim &amp;
                    klien saya tetap percaya di tengah gempuran AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lab" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2 justify-center">
                <FlaskConical className="w-4 h-4" /> Lab &amp; Eksplorasi
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Tetap Penasaran, Tetap Bereksperimen
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Side project &amp; eksplorasi teknologi di luar pekerjaan utama - cara saya
                menjaga rasa ingin tahu dan menguji ide baru sebelum membawanya ke proyek nyata.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {experiments.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <article
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 text-sm mt-1">{exp.tagline}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-5">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.stack.map((s, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-cyan-950/30 text-cyan-300 rounded text-xs font-medium border border-cyan-900/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {exp.note && (
                      <p className="text-xs text-slate-500 italic mb-4">{exp.note}</p>
                    )}

                    <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-slate-800">
                      {exp.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 font-medium transition-colors"
                        >
                          {link.label}
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>


        <section id="kolaborasi" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-cyan-400 font-mono text-sm mb-3 flex items-center gap-2 justify-center">
                <Handshake className="w-4 h-4" /> Let&apos;s build together
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Mari Bangun Sesuatu yang Bermakna
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Punya ide produk, butuh tangan ekstra untuk tim, atau mencari mentor untuk
                engineer baru? Saya terbuka untuk proyek penuh waktu, kontrak, freelance, atau
                kolaborasi jangka pendek.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {services.map((svc, idx) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-4">{svc.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {svc.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-10 mb-12">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <Users className="w-5 h-5 text-cyan-400" /> Cara Kerja Sama
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {collaborationPath.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h4 className="text-white font-semibold">{step.title}</h4>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 sm:p-12 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]"></div>
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Siap memulai percakapan?
                </h3>
                <p className="text-slate-300 max-w-xl mx-auto mb-8">
                  Ceritakan kebutuhan, target, atau bahkan ide kasar Anda. Saya akan balas
                  dengan langkah konkret yang bisa kita ambil bersama.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" /> Chat via WhatsApp
                  </a>
                  <a
                    href="mailto:ghanyersa24@gmail.com?subject=Kolaborasi%20%E2%80%94%20Diskusi%20Awal"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" /> Email Saya
                  </a>
                  <a
                    href={CALENDAR_URL}
                    className="inline-flex items-center gap-2 bg-transparent border border-cyan-500/40 hover:bg-cyan-500/10 text-cyan-300 font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" /> Jadwalkan Diskusi
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-6 font-mono">
                  Biasa membalas dalam 1–2 hari kerja · Usually replies within 1–2 business days
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 border-t border-slate-800 pt-8 text-sm">
            <div className="flex flex-col items-center sm:items-start text-slate-400 gap-2">
              <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4" /> Jawa Timur, Indonesia
              </span>
              <a
                href="tel:+6282164028264"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" /> +62 821-6402-8264
              </a>
              <a
                href="mailto:ghanyersa24@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" /> ghanyersa24@gmail.com
              </a>
            </div>

            <div className="flex justify-center items-center gap-6">
              <a
                href="https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              >
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              >
                <span className="sr-only">WhatsApp</span>
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="mailto:ghanyersa24@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-center sm:justify-end items-center text-slate-500">
              <p>Didesain & dibangun oleh Ghany A. E. © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portofolio;
