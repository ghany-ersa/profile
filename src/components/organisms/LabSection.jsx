import { FlaskConical } from 'lucide-react';
import { Container, Section, SectionHeading } from '../atoms';
import { ExperimentCard } from '../molecules';
import { experiments } from '../../data';

/** "Lab & Eksplorasi" - side projects and technology experiments. */
export default function LabSection() {
  return (
    <Section id="lab">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Lab & Eksplorasi"
          eyebrowIcon={FlaskConical}
          title="Tetap Penasaran, Tetap Bereksperimen"
          description="Side project & eksplorasi teknologi di luar pekerjaan utama - cara saya menjaga rasa ingin tahu dan menguji ide baru sebelum membawanya ke proyek nyata."
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
