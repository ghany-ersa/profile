import React, { useState, useEffect } from 'react';
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Briefcase,
  Code2,
  Award,
  Menu,
  X,
  Terminal,
  Layout,
} from 'lucide-react';
import { projectImages, awardImages } from './assets/images';

const Portofolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const navItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Pengalaman & Karya', href: '#pengalaman' },
    { name: 'Keahlian', href: '#keahlian' },
    { name: 'Penghargaan', href: '#penghargaan' },
  ];

  const experiences = [
    {
      company: 'Sekolah.mu | talentics.id',
      role: 'Frontend Developer',
      period: 'April 2022 - April 2026',
      description:
        'Mengembangkan dan mengoptimalkan sistem asesmen berbasis Nuxt.js untuk mendukung pengalaman pengguna yang cepat, responsif, dan scalable. Berkolaborasi lintas tim bersama product, designer, dan backend engineer dalam membangun fitur enterprise yang digunakan pada proses asesmen digital secara efisien.',
      project: {
        title: 'Sistem Asesmen (talentics.id)',
        description:
          'Membangun antarmuka sistem asesmen enterprise yang responsif, interaktif, dan berorientasi pada performa pengguna.',
        image: projectImages.talentics,
        tech: ['Nuxt.js', 'Vue.js', 'Frontend'],
      },
    },

    {
      company: 'Nikaah.id',
      role: 'Backend Developer',
      period: 'November 2022 - April 2025',
      description:
        'Merancang dan mengembangkan backend platform undangan digital menggunakan Express.js dengan arsitektur multi-tenant berbasis subdomain dinamis. Membangun REST API untuk manajemen tamu (RSVP), autentikasi, dashboard admin, serta sistem personalisasi undangan. Mengoptimalkan struktur database, integrasi layanan, dan alur backend agar platform mampu menangani pengelolaan undangan secara mandiri, scalable, dan efisien tanpa intervensi developer.',
      project: {
        title: 'Platform Undangan Digital (nikaah.id)',
        description:
          'Mengembangkan backend platform SaaS undangan digital dengan sistem multi-tenant, manajemen tamu, dan personalisasi undangan.',
        image: projectImages.nikaah,
        tech: ['Express.js', 'REST API', 'Multi Tenant', 'Backend'],
      },
    },

    {
      company: 'FIFGROUP member of ASTRA',
      role: 'IT Development',
      period: 'April 2021 - Mei 2022',
      description:
        'Berperan sebagai solo programmer dalam pengembangan sistem manajemen aset internal berbasis React.js dan Java Spring Boot. Menangani proses pengembangan end-to-end mulai dari perancangan sistem, implementasi fitur, integrasi backend, hingga deployment untuk mendukung operasional internal perusahaan.',
      project: {
        title: 'Sistem Manajemen Aset Internal',
        description:
          'Membangun sistem manajemen aset internal perusahaan secara menyeluruh untuk meningkatkan efisiensi pengelolaan aset.',
        image: projectImages.fifgroup,
        tech: ['React.js', 'Java Spring Boot', 'Fullstack'],
      },
    },

    {
      company: 'Comika Indonesia',
      role: 'IT Vendor Comika Media',
      period: 'Juni 2021 - Oktober 2021',
      description:
        'Mengembangkan platform media digital comika.media menggunakan Next.js dan Express.js dengan fokus pada performa dan pengalaman pengguna. Mengimplementasikan sistem subscription dan pembelian merchandise melalui integrasi payment gateway Midtrans untuk mendukung monetisasi platform.',
      project: {
        title: 'Website Comika Media',
        description:
          'Membangun platform media berbasis konten komedi dengan fitur subscription digital dan sistem pembayaran online.',
        image: projectImages.comika,
        tech: ['Next.js', 'Express.js', 'Fullstack'],
      },
    },

    {
      company: 'Peopleshift (shiftacademy.id)',
      role: 'Tutor & Fullstack Javascript Developer',
      period: 'Desember 2020 - Mei 2022',
      description:
        'Mengajar lebih dari 500 jam pelatihan pemrograman web meliputi HTML, CSS, JavaScript, Git, database, Express.js, dan Vue/Nuxt.js. Membimbing siswa dari level fundamental hingga siap membangun aplikasi web production-ready melalui pendekatan praktik langsung dan project-based learning.',
      project: {
        title: 'Mentoring & Bootcamp',
        description:
          'Membimbing ratusan peserta bootcamp dalam pengembangan web modern berbasis JavaScript ecosystem.',
        image: projectImages.shiftacademy,
        tech: ['Teaching', 'Mentoring', 'JavaScript'],
      },
    },

    {
      company: 'PT Bejana Investidata Globalindo (BIGIO.ID)',
      role: 'Software QA & Automation Engineer',
      period: 'Maret 2020 - Desember 2020',
      description:
        'Berfokus pada software quality assurance dengan menyusun test scenario, melakukan manual testing, serta mengembangkan automation testing menggunakan Selenium JavaScript. Membangun tools automation testing internal yang mampu menjalankan pengujian otomatis sekaligus menghasilkan laporan testing (testing report) untuk meningkatkan efisiensi proses QA, mempercepat validasi fitur, dan mempermudah monitoring bug pada proses development.',
      project: {
        title: 'Automation Testing & Quality Assurance',
        description:
          'Mengembangkan automation testing tools dan proses QA untuk memastikan kualitas serta stabilitas aplikasi.',
        image: projectImages.bigio,
        tech: ['Selenium', 'JavaScript', 'Automation Testing', 'QA Testing'],
      },
    },

    {
      company: 'Eksekutif Mahasiswa Universitas Brawijaya',
      role: 'Product Owner EM Apps',
      period: 'Januari 2019 - Desember 2019',
      description:
        'Memimpin pengembangan aplikasi mahasiswa yang digunakan oleh lebih dari 20.000 pengguna aktif. Mengelola product roadmap, koordinasi tim, serta pengembangan REST API menggunakan CodeIgniter untuk mendukung fitur rekam aktivitas mahasiswa dan sistem pemesanan wawancara secara digital.',
      project: {
        title: 'EM Apps (Portal Mahasiswa)',
        description:
          'Platform digital mahasiswa untuk pelacakan aktivitas non-akademik dan manajemen jadwal wawancara.',
        image: projectImages.emApps,
        tech: ['Codeigniter', 'REST API', 'Leadership'],
      },
    },
  ];

  const education = [
    {
      degree: 'Magister Ilmu Komputer, Sistem Informasi',
      university: 'Universitas Brawijaya',
      period: 'Lulusan September 2025 (Estimasi)',
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
      items: ['JavaScript', 'Vue.js', 'Nuxt.js', 'React.js', 'HTML/CSS', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Java Spring Boot', 'Codeigniter', 'REST APIs'],
    },
    {
      category: 'Testing & Tools',
      items: ['Selenium', 'Git', 'Manual Testing', 'Automated Testing'],
    },
    {
      category: 'Soft Skills',
      items: ['Digital Strategy', 'IT Strategy', 'Mentoring & Teaching', 'Product Ownership'],
    },
  ];

  const awards = [
    {
      title: 'Top 50 Leader - OLF',
      issuer: 'Universitas Negeri Malang',
      description:
        'Membimbing siswa Pramuka untuk mencapai Top 50 Leader tingkat nasional selama dua tahun berturut-turut, membuktikan efektivitas pengembangan kepemimpinan yang berkelanjutan.',
      image: awardImages.topLeaderOlf,
    },
    {
      title: 'Juara 2 Business Plan',
      issuer: 'Wirausaha on Week Competition',
      description:
        'Mengarahkan tim mengembangkan ide bisnis berbasis lingkungan dengan pemanfaatan teknologi sebagai transformasi solusi.',
      image: awardImages.businessPlan,
    },
    {
      title: 'Juara 2 Teknologi Inovasi',
      issuer: 'Wirausaha on Week Competition',
      description:
        'Mengarahkan tim mengembangkan solusi berbasis machine learning untuk identifikasi penyakit di bidang medis.',
      image: awardImages.teknologiInovasi,
    },
    {
      title: 'Juara 1 Business Model Canvas',
      issuer: 'Jatim Open 2023',
      description:
        'Menciptakan ide bisnis berbasis lingkungan dengan memanfaatkan teknologi sebagai transformasi.',
      image: awardImages.bmcJatimOpen,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'tentang', 'pengalaman', 'keahlian', 'penghargaan'];
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
          className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]"
        >
          <div className="max-w-3xl">
            <p className="text-cyan-400 font-mono mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Halo Dunia, Saya
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
              Ghany Abdillah Ersa.
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-400 mb-6">
              Saya membangun pengalaman digital yang tangguh.
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Seorang Fullstack JavaScript Engineer dengan spesialisasi di Frontend Development.
              Dengan pengalaman lebih dari 5 tahun, saya bersemangat merancang antarmuka pengguna
              yang intuitif dan memanfaatkan teknologi web modern seperti Vue, Nuxt, dan React.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ghanyersa24@gmail.com"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Hubungi Saya
              </a>
              <a
                href="https://www.linkedin.com/in/ghany-abdillah-ersa-06156013a"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
                Profil LinkedIn
              </a>
            </div>
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
                  Saya adalah seorang profesional di bidang Teknologi Informasi yang aktif membangun
                  perangkat lunak sejak tahun 2020. Meskipun fokus utama dan keahlian saya terletak
                  pada <i>frontend development</i> dengan framework JavaScript modern, saya juga
                  memiliki kapabilitas yang kuat dalam arsitektur <i>backend</i>.
                </p>
                <p>
                  Di luar pengembangan perangkat lunak tradisional, saya sangat berkomitmen pada
                  pendidikan dan berbagi pengetahuan. Saya telah menghabiskan lebih dari{' '}
                  <strong className="text-cyan-400">500 jam</strong> mengajar untuk program Bootcamp
                  JavaScript dan aktif berkontribusi sebagai pembicara webinar, membantu
                  menjembatani kesenjangan antara konsep teoretis dan implementasi di dunia nyata.
                </p>
                <p>
                  Saat ini, saya sedang memperluas cakrawala akademik dengan menempuh pendidikan
                  Magister (S2) Sistem Informasi di Universitas Brawijaya.
                </p>
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

                <div className="mt-8 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-3xl font-bold text-white mb-1">5+</span>
                    <span className="text-sm text-slate-400">Tahun Pengalaman</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-white mb-1">500+</span>
                    <span className="text-sm text-slate-400">Jam Mengajar</span>
                  </div>
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

                    <p className="text-slate-400 leading-relaxed text-lg">{exp.description}</p>
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
                *Gambar portofolio di atas merupakan ilustrasi (placeholder). Anda dapat
                menggantinya dengan tangkapan layar asli dari karya Anda.
              </p>
            </div>
          </div>
        </section>

        <section id="keahlian" className="py-20 bg-slate-900/30 border-y border-slate-800">
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

        <section id="penghargaan" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3xl font-bold text-white">Penghargaan & Kepemimpinan</h2>
              <div className="h-px bg-slate-800 flex-grow"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20 transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700">
                      <Award className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                    <p className="text-cyan-400 text-sm font-medium mb-4">{award.issuer}</p>
                    <p className="text-slate-400 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Mari Terhubung</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Baik Anda memiliki pertanyaan, ide proyek, atau sekadar ingin menyapa, kotak masuk
              saya selalu terbuka. Saya akan berusaha membalas pesan Anda secepatnya!
            </p>
            <a
              href="mailto:ghanyersa24@gmail.com"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Kirim Pesan
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 border-t border-slate-800 pt-8 text-sm">
            <div className="flex flex-col items-center sm:items-start text-slate-400">
              <span className="flex items-center gap-2 mb-2 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4" /> Jawa Timur, Indonesia
              </span>
              <a
                href="tel:+6282164028264"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" /> +62 821-6402-8264
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
                href="mailto:ghanyersa24@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              >
                <span className="sr-only">Email</span>
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-center sm:justify-end items-center text-slate-500">
              <p>Didesain & Dibangun oleh Ghany A. E. © 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portofolio;
