import { PageLayout } from '../components/templates';
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  CaseStudySection,
  LabSection,
  CollaborationSection,
} from '../components/organisms';

/**
 * The portfolio page — arranges section organisms in display order.
 * Pure composition: no markup, no logic, no data. Each organism is
 * self-contained, so reordering the page is a one-line change here.
 */
export default function PortfolioPage() {
  return (
    <PageLayout>
      {/* Alur: Perkenalan → Bukti → Kredensial → Eksplorasi → CTA */}
      <HeroSection />
      <AboutSection />
      <CaseStudySection />
      <ExperienceSection />
      <LabSection />
      <CollaborationSection />
    </PageLayout>
  );
}
