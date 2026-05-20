import { Handshake, Users, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Button, Container, Section, SectionHeading } from '../atoms';
import { FeatureCard } from '../molecules';
import { services as servicesBase, collaborationPath as collaborationPathBase } from '../../data';
import { LINKS } from '../../constants/site';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n';

/** Gradient call-to-action panel at the bottom of the collaboration section. */
function ContactCTA({ t }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 sm:p-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t.ctaTitle}
        </h3>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          {t.ctaDescription}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={LINKS.whatsapp} variant="primary" icon={MessageCircle} external>
            {t.btnWhatsapp}
          </Button>
          <Button href={LINKS.emailDiscuss} variant="secondary" icon={Mail}>
            {t.btnEmail}
          </Button>
          <Button href={LINKS.calendar} variant="outline" icon={ArrowRight}>
            {t.btnCalendar}
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-6 font-mono">
          {t.replyNote}
        </p>
      </div>
    </div>
  );
}

/** "Kolaborasi" - services offered, the working process, and the contact CTA. */
export default function CollaborationSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const services = servicesBase.map((s, i) => ({ ...s, ...t.services[i] }));
  const collaborationPath = collaborationPathBase.map((s, i) => ({ ...s, ...t.collaborationPath[i] }));

  return (
    <Section id="kolaborasi" className="py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow={t.collaboration.eyebrow}
          eyebrowIcon={Handshake}
          title={t.collaboration.title}
          description={t.collaboration.description}
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <FeatureCard key={service.title} item={service} iconSize="md" />
          ))}
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-10 mb-12">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> {t.collaboration.howWeWork}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {collaborationPath.map((step) => (
              <FeatureCard key={step.title} item={step} layout="plain" />
            ))}
          </div>
        </div>

        <ContactCTA t={t.collaboration} />
      </Container>
    </Section>
  );
}
