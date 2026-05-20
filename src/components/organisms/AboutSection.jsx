import { BookOpen, Github, Linkedin } from 'lucide-react';
import { Container, Section } from '../atoms';
import { EducationItem } from '../molecules';
import { LINKS } from '../../constants/site';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** Small bordered link used for the GitHub / LinkedIn pair. */
function ProfileLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/40 rounded-lg px-3 py-2 transition-colors"
    >
      <Icon className="w-4 h-4" /> {label}
    </a>
  );
}

/** "Tentang Saya" - narrative bio plus an education/background card. */
export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Section id="tentang" bordered className="bg-slate-900/50">
      <Container>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">{t.about.title}</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              {t.about.p1.split(t.about.p1Highlight)[0]}
              <strong className="text-cyan-400">{t.about.p1Highlight}</strong>
              {t.about.p1.split(t.about.p1Highlight)[1]}
            </p>
            <p>
              {t.about.p2.split('{a}')[0]}
              <strong className="text-cyan-400">{t.about.p2a}</strong>
              {t.about.p2.split('{a}')[1].split('{b}')[0]}
              <strong className="text-cyan-400">{t.about.p2b}</strong>
              {t.about.p2.split('{b}')[1].split('{c}')[0]}
              <strong className="text-cyan-400">{t.about.p2c}</strong>
              {t.about.p2.split('{c}')[1]}
            </p>
            <p>
              {t.about.p3.split(t.about.p3Highlight)[0]}
              <strong className="text-cyan-400">{t.about.p3Highlight}</strong>
              {t.about.p3.split(t.about.p3Highlight)[1]}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ProfileLink href={LINKS.github} icon={Github} label="GitHub" />
              <ProfileLink href={LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              {t.about.educationTitle}
            </h3>
            <div className="space-y-6">
              {t.education.map((item) => (
                <EducationItem key={item.degree} education={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
