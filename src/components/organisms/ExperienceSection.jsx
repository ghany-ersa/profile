import { Container, Section } from '../atoms';
import { TimelineEntry } from '../molecules';
import { experiences as experiencesBase } from '../../data';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** "Pengalaman & Karya" - a vertical timeline of work experience. */
export default function ExperienceSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const experiences = experiencesBase.map((exp, i) => ({
    ...exp,
    ...t.experiences[i],
    project: { ...exp.project, ...t.experiences[i].project },
  }));

  return (
    <Section id="pengalaman">
      <Container size="5xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            {t.experience.title}
          </h2>
          <div className="h-px bg-slate-800 flex-grow" />
        </div>

        <div className="space-y-16">
          {experiences.map((experience) => (
            <TimelineEntry key={experience.company} experience={experience} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
