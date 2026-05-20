import { Sparkles } from 'lucide-react';
import { Badge, Container, Section } from '../atoms';
import { CaseStudyCard } from '../molecules';
import { caseStudies } from '../../data';

/** "Case Study Terpilih" - featured projects in Problem/Action/Result form. */
export default function CaseStudySection() {
  return (
    <Section id="case-study" bordered className="bg-slate-900/40">
      <Container>
        <div className="mb-12">
          <Badge icon={Sparkles} className="mb-2">
            Featured Work
          </Badge>
          <h2 className="text-3xl font-bold text-white">Case Study Terpilih</h2>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Dua proyek yang paling merepresentasikan cara saya bekerja: dari masalah nyata,
            aksi yang diambil, hingga hasil yang terukur.
          </p>
        </div>

        <div className="space-y-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
