import { Terminal, Handshake, ArrowRight, Mail } from 'lucide-react';
import { Badge, Button } from '../atoms';
import { StatCard } from '../molecules';
import { profileImage } from '../../assets/images';
import { CONTACT } from '../../constants/site';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** Circular profile avatar with glow ring and an availability pill. */
function ProfileAvatar() {
  return (
    <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 via-cyan-400/10 to-transparent blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-cyan-400/30 [mask-image:linear-gradient(135deg,white,transparent)]"
      />
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
      <Badge variant="status" className="absolute -bottom-2 -right-2 shadow-lg">
        Available
      </Badge>
    </div>
  );
}

/** Landing hero: intro copy, primary CTAs, profile avatar, and key metrics. */
export default function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="beranda"
      className="pt-32 pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col justify-center min-h-[90vh]"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <Badge variant="status" className="mb-6">
            {t.hero.statusBadge}
          </Badge>

          <Badge icon={Terminal} className="mb-4">
            {t.hero.greeting}
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
            Ghany Abdillah Ersa.
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-400 mb-6 leading-tight">
            {t.hero.headline}
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            <span className="text-slate-200 font-semibold">
              Product Engineer · Fullstack JavaScript
            </span>{' '}
            - {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="#kolaborasi" variant="primary" icon={Handshake}>
              {t.hero.btnCollaborate}
            </Button>
            <Button href="#case-study" variant="secondary" icon={ArrowRight}>
              {t.hero.btnCaseStudy}
            </Button>
            <Button href={`mailto:${CONTACT.email}`} variant="ghost" icon={Mail}>
              {t.hero.btnEmail}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
          <ProfileAvatar />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {t.stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
