import { Sparkles } from 'lucide-react';
import { Badge, Container, Section } from '../atoms';
import { CaseStudyCard } from '../molecules';
import { caseStudies as caseStudiesBase } from '../../data';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** "Case Study Terpilih" - featured projects in Problem/Action/Result form. */
export default function CaseStudySection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const caseStudies = caseStudiesBase.map((cs, i) => ({
    ...cs,
    ...t.caseStudies[i],
  }));

  return (
    <Section id="case-study" bordered className="bg-slate-900/40">
      <Container>
        <div className="mb-12">
          <Badge icon={Sparkles} className="mb-2">
            {t.caseStudy.badge}
          </Badge>
          <h2 className="text-3xl font-bold text-white">{t.caseStudy.title}</h2>
          <p className="text-slate-400 mt-2 max-w-2xl">
            {t.caseStudy.description}
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} t={t.caseStudy} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
