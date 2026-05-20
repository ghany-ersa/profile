import { FlaskConical } from 'lucide-react';
import { Container, Section, SectionHeading } from '../atoms';
import { ExperimentCard } from '../molecules';
import { experiments as experimentsBase } from '../../data';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** "Lab & Eksplorasi" - side projects and technology experiments. */
export default function LabSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const experiments = experimentsBase.map((exp, i) => ({
    ...exp,
    ...t.experiments[i],
  }));

  return (
    <Section id="lab">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t.lab.eyebrow}
          eyebrowIcon={FlaskConical}
          title={t.lab.title}
          description={t.lab.description}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.title} experiment={experiment} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
