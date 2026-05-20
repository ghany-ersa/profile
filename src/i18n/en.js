export const en = {
  // Navbar
  nav: {
    beranda: 'Home',
    tentang: 'About',
    caseStudy: 'Case Study',
    pengalaman: 'Experience',
    lab: 'Lab',
    kolaborasi: 'Collaborate',
  },

  // Hero Section
  hero: {
    statusBadge: 'Open to collaboration',
    greeting: 'Hello World, I am',
    headline: 'I help your organization move faster with technology.',
    bio: "I replace manual processes with systems that people actually use. At FIFGROUP (ASTRA) I built an asset management system that cut administrative work across branches. At Sekolah.mu I kept the assessment module stable for millions of candidates every release. At EM Apps I led a product used by 20K+ students. Everything starts from real problems - not assumptions.",
    btnCollaborate: "Let's Collaborate",
    btnCaseStudy: 'View Case Studies',
    btnEmail: 'Email',
  },

  // Stats
  stats: [
    { value: '5+', label: 'Years of Experience', sub: 'Tahun pengalaman' },
    { value: '20K+', label: 'Active Users', sub: 'Pengguna terdampak' },
    { value: '500+', label: 'Hours Mentoring', sub: 'Jam mengajar' },
    { value: '7', label: 'Teams & Companies', sub: 'Tim & perusahaan' },
  ],

  // About Section
  about: {
    title: 'About Me',
    p1: "Most organizations aren't slow because they lack people - they're slow because of processes that technology hasn't touched yet. Manual approvals, scattered data, reports redone every week. That's where I come in.",
    p1Highlight: "processes that technology hasn't touched yet",
    p2a: 'end-to-end internal systems at FIFGROUP (ASTRA)',
    p2b: "assessment modules for millions of candidates at Sekolah.mu",
    p2c: '20K+ active users',
    p2: "Over 5+ years I've built {a}, maintained {b}, and led products with {c}. The pattern is always the same: find the real bottleneck, build the solution, measure the outcome.",
    p3: "I also integrate AI into everyday workflows - not as an experiment, but as a team productivity multiplier. Currently pursuing a Master's in Information Systems at Universitas Brawijaya to deepen my knowledge in strategy & digital transformation.",
    p3Highlight: 'team productivity multiplier',
    educationTitle: 'Education & Background',
  },

  // Education
  education: [
    {
      degree: 'Master of Computer Science, Information Systems',
      university: 'Universitas Brawijaya',
      period: 'Expected September 2027',
    },
    {
      degree: 'Bachelor of Computer Science, Information Systems',
      university: 'Universitas Brawijaya',
      period: 'August 2016 – January 2021',
    },
  ],

  // Case Study Section
  caseStudy: {
    badge: 'Featured Work',
    title: 'Selected Case Studies',
    description: 'Two projects that best represent how I work: from a real problem, the actions taken, to measurable results.',
    problem: 'Problem',
    action: 'Action',
    keyDecisions: 'Key Decisions',
    result: 'Result',
  },

  // Case Studies Data
  caseStudies: [
    {
      title: 'Enterprise Assessment System - talentics.id',
      role: 'Frontend Developer · Sekolah.mu',
      problem: 'The assessment module served thousands of corporate client candidates simultaneously. Pages felt heavy, form state was complex, and every new feature release risked regressions.',
      action: [
        'Refactored Nuxt.js component structure and applied code-splitting per assessment module.',
        'Extracted heavy form state into composables to isolate re-renders.',
        'Improved collaboration with product & QA via release checklists to reduce regressions.',
      ],
      decisions: [
        {
          q: 'Big refactor or small incremental patches?',
          a: 'Chose incremental patches per module - a big refactor risked blocking business releases. We traded architecture cleanliness for release speed, and speed won because corporate clients needed new features every sprint.',
        },
        {
          q: 'Composables or global store?',
          a: 'Used composables for form state because the forms were complex but locally scoped. A global store would have been over-engineering and spread re-renders to other modules.',
        },
      ],
      result: [
        'Assessment pages felt lighter and more responsive for candidates.',
        'New feature release cycles became faster with fewer cross-sprint regressions.',
        'The product team felt confident adding complex features without breaking the candidate flow.',
      ],
    },
    {
      title: 'Asset Management System - FIFGROUP (ASTRA)',
      role: 'Solo Programmer · FIFGROUP',
      problem: 'Internal asset records were managed manually across branches, difficult to audit, and prone to duplicate data. No single tooling existed for asset operations.',
      action: [
        'Designed the system end-to-end: database schema, Spring Boot API, and React UI.',
        'Built asset recording, transfer, and reporting flows in a single dashboard.',
        'Provided report exports to speed up the audit process.',
      ],
      decisions: [
        {
          q: 'Spring Boot or Node.js for the backend?',
          a: "Chose Spring Boot to align with ASTRA's internal standards - not because it's technically superior, but because maintainability by the internal team after I left was far more important than personal preference.",
        },
        {
          q: 'Monolith or microservices?',
          a: "Monolith. Only 1 developer (me), 1 business domain, and a small internal team. Microservices would add deployment complexity with no real benefit - over-engineering common in projects of this size.",
        },
        {
          q: 'Custom build or off-the-shelf SaaS?',
          a: "Custom - because FIFGROUP's approval flows and branch structure were highly specific. A SaaS would require adapting business processes to the tool, not the other way around.",
        },
      ],
      result: [
        'Asset team operations shifted from manual spreadsheets to a single centralized system.',
        'Asset audits became faster because reports are available on-demand.',
        'Delivered solo from requirement to deployment - proof of end-to-end fullstack capability.',
      ],
    },
  ],

  // Experience Section
  experience: {
    title: 'Experience & Work',
  },

  // Experiences Data
  experiences: [
    {
      company: 'Sekolah.mu | talentics.id',
      role: 'Frontend Developer',
      period: 'April 2022 – April 2026',
      highlights: [
        'Built and maintained an enterprise assessment module with Nuxt.js serving thousands of candidates per month.',
        'Reduced assessment page render time through code-splitting, lazy loading, and state management optimization.',
        'Collaborated with product, design, and backend teams to continuously ship new features every sprint.',
      ],
      project: {
        title: 'Assessment System (talentics.id)',
        description: 'Responsive, interactive, and load-resilient enterprise assessment UI - used by corporate clients for digital talent selection.',
      },
    },
    {
      company: 'Nikaah.id',
      role: 'Backend Developer',
      period: 'November 2022 – April 2025',
      highlights: [
        'Designed a dynamic subdomain-based multi-tenant architecture so each client gets their own invitation without developer intervention.',
        'Built REST APIs for RSVP, authentication, admin dashboard, and invitation personalization using Express.js.',
        'Optimized database structure and service integrations to keep the platform scalable as user numbers grew.',
      ],
      project: {
        title: 'Digital Invitation Platform (nikaah.id)',
        description: 'SaaS backend for digital invitations with multi-tenant system, guest management, and full per-client personalization.',
      },
    },
    {
      company: 'FIFGROUP member of ASTRA',
      role: 'IT Development',
      period: 'April 2021 – May 2022',
      highlights: [
        'Acted as end-to-end solo programmer: requirement gathering, system design, implementation, and deployment.',
        'Built an internal Asset Management System with React.js + Java Spring Boot replacing manual cross-branch processes.',
        'Reduced administrative work for the asset team through automated recording and reporting.',
      ],
      project: {
        title: 'Internal Asset Management System',
        description: 'Internal application for company asset recording, tracking, and reporting - improving audit accuracy and speed.',
      },
    },
    {
      company: 'Comika Indonesia',
      role: 'IT Vendor - Comika Media',
      period: 'June 2021 – October 2021',
      highlights: [
        'Built the comika.media platform with Next.js + Express.js, focused on SEO performance and user experience.',
        'Integrated Midtrans payment gateway for subscription and merchandise purchases as monetization channels.',
      ],
      project: {
        title: 'Comika Media Website',
        description: 'Comedy content media platform with digital subscription, merchandise e-commerce, and integrated checkout.',
      },
    },
    {
      company: 'Peopleshift (shiftacademy.id)',
      role: 'Tutor & Fullstack JavaScript Developer',
      period: 'December 2020 – May 2022',
      highlights: [
        'Delivered 500+ hours of training: HTML, CSS, JavaScript, Git, databases, Express.js, Vue/Nuxt.js.',
        'Guided hundreds of participants from fundamentals to shipping production-ready apps via project-based learning.',
        'Developed industry-oriented practical curricula reused across multiple bootcamp batches.',
      ],
      project: {
        title: 'JavaScript Mentoring & Bootcamp',
        description: 'Intensive mentoring for bootcamp participants in the modern JavaScript ecosystem - bridging theory and industry practice.',
      },
    },
    {
      company: 'PT Bejana Investidata Globalindo (BIGIO.ID)',
      role: 'Software QA & Automation Engineer',
      period: 'March 2020 – December 2020',
      highlights: [
        'Wrote test scenarios, performed manual testing, and developed automation testing with Selenium JavaScript.',
        'Built internal automation tools generating automated testing reports - accelerating feature validation each release.',
        'Helped the development team identify and reproduce bugs faster, shortening the QA cycle.',
      ],
      project: {
        title: 'Automation Testing & QA Tools',
        description: 'Internal automation testing tools with automated reporting - improving QA process efficiency and release stability.',
      },
    },
    {
      company: 'Eksekutif Mahasiswa Universitas Brawijaya',
      role: 'Product Owner - EM Apps',
      period: 'January 2019 – December 2019',
      highlights: [
        'Led development of a student application with 20,000+ active users.',
        'Managed product roadmap, team coordination, and REST API development with CodeIgniter.',
        'Released student activity tracking and digital interview scheduling features replacing manual processes.',
      ],
      project: {
        title: 'EM Apps - Student Portal',
        description: 'Digital student platform for tracking non-academic activities and managing interview schedules - used by 20K+ students.',
      },
    },
  ],

  // Lab Section
  lab: {
    eyebrow: 'Lab & Exploration',
    title: 'Stay Curious, Keep Experimenting',
    description: 'Side projects & technology exploration outside of main work - how I keep my curiosity alive and test new ideas before bringing them into real projects.',
  },

  // Experiments Data
  experiments: [
    {
      title: 'WebAR Hand Tracking - Clap & Grab',
      tagline: 'Spawn 3D objects in the browser with hand gestures.',
      description: 'A WebAR experiment using A-Frame & MediaPipe Hand Tracking. The browser camera detects clapping gestures to spawn 3D cubes that can be "grabbed" in AR space - no app installation needed, runs directly in modern browsers.',
      note: 'Camera permission & internet connection required to load the hand tracking model.',
    },
    {
      title: 'WA Blast - Chrome Extension',
      tagline: 'Send bulk WhatsApp messages directly from the browser.',
      description: 'A Chrome extension to send WhatsApp messages to multiple contacts at once without any third-party tool. Leverages the WhatsApp Web API running in the browser, complete with a simple interface for entering contact lists and custom messages.',
      note: 'Make sure you are logged into WhatsApp Web before using this extension.',
    },
  ],

  // Services
  services: [
    {
      title: 'Frontend Engineering',
      description: 'I help bring web interfaces to life - not just visually appealing, but fast, user-friendly, and easy to extend over time.',
      points: ['Vue / Nuxt / React', 'Reusable design systems & UI', 'Performance optimization & Core Web Vitals'],
    },
    {
      title: 'Fullstack Product Build',
      description: 'Have a product idea or need internal tools? I can take it from zero to launch - UI, API, database, all the way to production.',
      points: ['Express.js / Laravel', 'REST API & multi-tenant architecture', 'Payment gateway & 3rd-party integrations'],
    },
    {
      title: 'Mentoring & Tech Workshop',
      description: 'Over 500 hours guiding people through coding. Whether for team onboarding, internal workshops, or just a technical sounding board.',
      points: ['Project-based practical curriculum', 'Code review & pair programming', 'Webinar / in-house training'],
    },
  ],

  // Collaboration Path
  collaborationPath: [
    {
      title: '1. Initial Discussion',
      description: 'Send an email or WhatsApp with an overview of your needs. I reply within 1–2 business days.',
    },
    {
      title: '2. Scoping & Alignment',
      description: "We agree on the scope, target outcomes, timeline, and the working style that fits best.",
    },
    {
      title: '3. Execution & Iteration',
      description: "I'll work with regular progress updates, open to feedback, and focused on real outcomes.",
    },
  ],

  // Collaboration Section
  collaboration: {
    eyebrow: "Let's move faster together",
    title: 'Ready to Start a Project Together?',
    description: 'Is there a slow process, an unintegrated system, or an untapped automation opportunity? I am open to discussion - full-time projects, contracts, freelance, or short-term consulting.',
    howWeWork: 'How We Work',
    ctaTitle: 'Ready to start a conversation?',
    ctaDescription: 'Tell me about your needs, goals, or even a rough idea. I will reply with concrete steps we can take together.',
    btnWhatsapp: 'Chat via WhatsApp',
    btnEmail: 'Email Me',
    btnCalendar: 'Schedule a Discussion',
    replyNote: 'Usually replies within 1–2 business days',
  },

  // Footer
  footer: {
    credit: 'Designed & built by Ghany A. E. © 2024',
  },
};
