import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Container } from '../atoms';
import { NavLink } from '../molecules';
import { sectionIds } from '../../data';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** Language toggle button EN / ID */
function LangToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      className="flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-1 rounded-md border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-300 transition-colors"
      aria-label="Toggle language"
    >
      <span className={lang === 'id' ? 'text-cyan-400' : 'text-slate-500'}>ID</span>
      <span className="text-slate-600">/</span>
      <span className={lang === 'en' ? 'text-cyan-400' : 'text-slate-500'}>EN</span>
    </button>
  );
}

/** Fixed top navigation with scroll-spy and a mobile dropdown menu. */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds, 'beranda');
  const { lang } = useLanguage();
  const t = translations[lang];

  const navItems = [
    { id: 'beranda', name: t.nav.beranda },
    { id: 'tentang', name: t.nav.tentang },
    { id: 'case-study', name: t.nav.caseStudy },
    { id: 'pengalaman', name: t.nav.pengalaman },
    { id: 'lab', name: t.nav.lab },
    { id: 'kolaborasi', name: t.nav.kolaborasi },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => window.scrollTo(0, 0)}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-xl tracking-tight text-white">
              Ghany<span className="text-cyan-400">.dev</span>
            </span>
          </button>

          {/* desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
              />
            ))}
            <LangToggle />
          </div>

          {/* mobile: lang toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                variant="mobile"
                onClick={closeMenu}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
