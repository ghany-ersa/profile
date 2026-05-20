export const id = {
  // Navbar
  nav: {
    beranda: 'Beranda',
    tentang: 'Tentang',
    caseStudy: 'Case Study',
    pengalaman: 'Pengalaman',
    lab: 'Lab',
    kolaborasi: 'Kolaborasi',
  },

  // Hero Section
  hero: {
    statusBadge: 'Terbuka untuk kolaborasi',
    greeting: 'Halo Dunia, Saya',
    headline: 'Saya buat organisasi Anda bergerak lebih cepat dengan teknologi.',
    bio: 'saya menggantikan proses manual dengan sistem yang benar-benar dipakai. Di FIFGROUP (ASTRA) saya bangun sistem manajemen aset yang memangkas kerja administratif lintas cabang. Di Sekolah.mu saya jaga modul asesmen untuk jutaan kandidat tetap stabil tiap rilis. Di EM Apps saya pimpin produk yang dipakai 20K+ mahasiswa. Semuanya dimulai dari masalah nyata - bukan asumsi.',
    btnCollaborate: 'Ajak Berkolaborasi',
    btnCaseStudy: 'Lihat Case Study',
    btnEmail: 'Email',
  },

  // Stats
  stats: [
    { value: '5+', label: 'Tahun Pengalaman', sub: 'Years of experience' },
    { value: '20K+', label: 'Pengguna Aktif', sub: 'Users impacted' },
    { value: '500+', label: 'Jam Mengajar', sub: 'Hours mentoring' },
    { value: '7', label: 'Tim & Perusahaan', sub: 'Teams shipped with' },
  ],

  // About Section
  about: {
    title: 'Tentang Saya',
    p1: 'Kebanyakan organisasi tidak lambat karena kurang orang - mereka lambat karena proses yang belum tersentuh teknologi. Approval manual, data yang tersebar, laporan yang dikerjakan ulang setiap minggu. Di situlah saya masuk.',
    p1Highlight: 'proses yang belum tersentuh teknologi',
    p2a: 'sistem internal end-to-end di FIFGROUP (ASTRA)',
    p2b: 'modul asesmen jutaan kandidat di Sekolah.mu',
    p2c: '20K+ pengguna aktif',
    p2: 'Selama 5+ tahun saya membangun {a}, menjaga {b}, dan memimpin produk dengan {c}. Pola kerjanya selalu sama: temukan hambatan nyata, bangun solusinya, ukur hasilnya.',
    p3: 'Saya juga mengintegrasikan AI ke dalam workflow sehari-hari - bukan sebagai eksperimen, tapi sebagai multiplier produktivitas tim. Saat ini menempuh Magister Sistem Informasi di Universitas Brawijaya untuk memperdalam sisi strategi & transformasi digital.',
    p3Highlight: 'multiplier produktivitas tim',
    educationTitle: 'Pendidikan & Latar Belakang',
  },

  // Education
  education: [
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
  ],

  // Case Study Section
  caseStudy: {
    badge: 'Featured Work',
    title: 'Case Study Terpilih',
    description: 'Dua proyek yang paling merepresentasikan cara saya bekerja: dari masalah nyata, aksi yang diambil, hingga hasil yang terukur.',
    problem: 'Problem',
    action: 'Action',
    keyDecisions: 'Keputusan Kunci',
    result: 'Result',
  },

  // Case Studies Data
  caseStudies: [
    {
      title: 'Sistem Asesmen Enterprise - talentics.id',
      role: 'Frontend Developer · Sekolah.mu',
      problem: 'Modul asesmen melayani ribuan kandidat klien korporat secara bersamaan. Halaman terasa berat, state form kompleks, dan tiap rilis fitur baru rawan regresi.',
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
    },
    {
      title: 'Sistem Manajemen Aset - FIFGROUP (ASTRA)',
      role: 'Solo Programmer · FIFGROUP',
      problem: 'Pencatatan aset internal masih manual lintas cabang, sulit diaudit, dan rawan data ganda. Tidak ada tooling tunggal untuk operasional aset.',
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
    },
  ],

  // Experience Section
  experience: {
    title: 'Pengalaman & Karya',
  },

  // Experiences Data
  experiences: [
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
        description: 'Antarmuka sistem asesmen enterprise yang responsif, interaktif, dan tahan beban - digunakan klien korporat untuk seleksi talenta digital.',
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
        description: 'Backend SaaS undangan digital dengan sistem multi-tenant, manajemen tamu, dan personalisasi penuh per klien.',
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
        description: 'Aplikasi internal untuk pencatatan, pelacakan, dan pelaporan aset perusahaan - meningkatkan akurasi & kecepatan audit aset.',
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
        description: 'Platform media konten komedi dengan fitur subscription digital, e-commerce merchandise, dan checkout terintegrasi.',
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
        description: 'Bimbingan intensif untuk peserta bootcamp di ekosistem JavaScript modern - menjembatani teori dengan praktik industri.',
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
        description: 'Internal automation testing tools dengan pelaporan otomatis - meningkatkan efisiensi proses QA dan stabilitas rilis.',
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
        description: 'Platform digital mahasiswa untuk pelacakan aktivitas non-akademik dan manajemen jadwal wawancara - dipakai 20K+ mahasiswa.',
      },
    },
  ],

  // Lab Section
  lab: {
    eyebrow: 'Lab & Eksplorasi',
    title: 'Tetap Penasaran, Tetap Bereksperimen',
    description: 'Side project & eksplorasi teknologi di luar pekerjaan utama - cara saya menjaga rasa ingin tahu dan menguji ide baru sebelum membawanya ke proyek nyata.',
    cameraNotePrefix: 'Butuh izin kamera',
    whatsappNotePrefix: 'Pastikan sudah login ke WhatsApp Web',
  },

  // Experiments Data
  experiments: [
    {
      title: 'WebAR Hand Tracking - Clap & Grab',
      tagline: 'Spawn objek 3D di browser dengan gestur tangan.',
      description: 'Eksperimen WebAR berbasis A-Frame & MediaPipe Hand Tracking. Kamera browser mendeteksi gestur tepuk tangan untuk memunculkan kubus 3D yang bisa di-"grab" di ruang AR - tanpa instalasi aplikasi, langsung jalan di browser modern.',
      note: 'Butuh izin kamera & koneksi internet untuk memuat model hand tracking.',
    },
    {
      title: 'WA Blast - Chrome Extension',
      tagline: 'Kirim pesan WhatsApp massal langsung dari browser.',
      description: 'Chrome extension untuk mengirim pesan WhatsApp ke banyak kontak sekaligus tanpa perlu tool pihak ketiga. Memanfaatkan WhatsApp Web API yang berjalan di browser, lengkap dengan antarmuka yang simpel untuk input daftar nomor dan pesan kustom.',
      note: 'Pastikan sudah login ke WhatsApp Web sebelum menggunakan extension ini.',
    },
  ],

  // Services
  services: [
    {
      title: 'Frontend Engineering',
      description: 'Saya bantu wujudkan tampilan web yang tidak hanya cantik, tapi juga cepat, nyaman dipakai, dan mudah dikembangkan ke depannya.',
      points: ['Vue / Nuxt / React', 'Design system & UI yang reusable', 'Optimasi performa & Core Web Vitals'],
    },
    {
      title: 'Fullstack Product Build',
      description: 'Punya ide produk atau butuh tools internal? Saya bisa bantu dari nol sampai jalan - UI, API, database, sampai siap pakai.',
      points: ['Express.js / Laravel', 'REST API & arsitektur multi-tenant', 'Integrasi payment gateway & 3rd-party'],
    },
    {
      title: 'Mentoring & Tech Workshop',
      description: 'Lebih dari 500 jam mendampingi orang belajar ngoding. Baik untuk onboarding tim, workshop internal, atau sekadar butuh teman diskusi teknis.',
      points: ['Kurikulum praktis berbasis project', 'Code review & pair programming', 'Webinar / in-house training'],
    },
  ],

  // Collaboration Path
  collaborationPath: [
    {
      title: '1. Diskusi awal',
      description: 'Kirim email atau WhatsApp dengan gambaran kebutuhan. Saya balas dalam 1–2 hari kerja.',
    },
    {
      title: '2. Scoping & alignment',
      description: 'Kita sepakati ruang lingkup, target hasil, timeline, dan cara kerja yang paling cocok.',
    },
    {
      title: '3. Eksekusi & iterasi',
      description: 'Saya kerjakan dengan update progres berkala, terbuka untuk feedback, dan fokus pada outcome nyata.',
    },
  ],

  // Collaboration Section
  collaboration: {
    eyebrow: "Let's move faster together",
    title: 'Siap Mulai Proyek Bersama?',
    description: 'Ada proses yang terasa lambat, sistem yang belum terintegrasi, atau peluang otomasi yang belum tersentuh? Saya terbuka untuk diskusi - proyek penuh waktu, kontrak, freelance, atau konsultasi jangka pendek.',
    howWeWork: 'Cara Kerja Sama',
    ctaTitle: 'Siap memulai percakapan?',
    ctaDescription: 'Ceritakan kebutuhan, target, atau bahkan ide kasar Anda. Saya akan balas dengan langkah konkret yang bisa kita ambil bersama.',
    btnWhatsapp: 'Chat via WhatsApp',
    btnEmail: 'Email Saya',
    btnCalendar: 'Jadwalkan Diskusi',
    replyNote: 'Biasa membalas dalam 1–2 hari kerja',
  },

  // Footer
  footer: {
    credit: 'Didesain & dibangun oleh Ghany A. E. © 2024',
  },
};
