// Ordered nav items. `id` matches the section element id used for scroll-spy.
// Order MUST follow the section order in pages/PortfolioPage.jsx.
export const navItems = [
  { id: 'beranda', name: 'Beranda' },
  { id: 'tentang', name: 'Tentang' },
  { id: 'case-study', name: 'Case Study' },
  { id: 'pengalaman', name: 'Pengalaman' },
  { id: 'lab', name: 'Lab' },
  { id: 'kolaborasi', name: 'Kolaborasi' },
];

// Every section id observed by the scroll-spy hook, in document order
// (includes non-nav sections). MUST match the DOM order in PortfolioPage.jsx.
export const sectionIds = [
  'beranda',
  'tentang',
  'case-study',
  'pengalaman',
  'lab',
  'kolaborasi',
];
