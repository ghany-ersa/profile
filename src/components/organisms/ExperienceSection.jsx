import { Container, Section } from '../atoms';
import { TimelineEntry } from '../molecules';
import { experiences } from '../../data';

/** "Pengalaman & Karya" — a vertical timeline of work experience. */
export default function ExperienceSection() {
  return (
    <Section id="pengalaman">
      <Container size="5xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            Pengalaman & Karya
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
