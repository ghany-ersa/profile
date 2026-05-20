import { Handshake, Users, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { Button, Container, Section, SectionHeading } from '../atoms';
import { FeatureCard } from '../molecules';
import { services, collaborationPath } from '../../data';
import { LINKS } from '../../constants/site';

/** Gradient call-to-action panel at the bottom of the collaboration section. */
function ContactCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-8 sm:p-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
      <div className="relative">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Siap memulai percakapan?
        </h3>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Ceritakan kebutuhan, target, atau bahkan ide kasar Anda. Saya akan balas
          dengan langkah konkret yang bisa kita ambil bersama.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={LINKS.whatsapp} variant="primary" icon={MessageCircle} external>
            Chat via WhatsApp
          </Button>
          <Button href={LINKS.emailDiscuss} variant="secondary" icon={Mail}>
            Email Saya
          </Button>
          <Button href={LINKS.calendar} variant="outline" icon={ArrowRight}>
            Jadwalkan Diskusi
          </Button>
        </div>
        <p className="text-xs text-slate-500 mt-6 font-mono">
          Biasa membalas dalam 1–2 hari kerja · Usually replies within 1–2 business days
        </p>
      </div>
    </div>
  );
}

/** "Kolaborasi" - services offered, the working process, and the contact CTA. */
export default function CollaborationSection() {
  return (
    <Section id="kolaborasi" className="py-24">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Let's move faster together"
          eyebrowIcon={Handshake}
          title="Siap Mulai Proyek Bersama?"
          description="Ada proses yang terasa lambat, sistem yang belum terintegrasi, atau peluang otomasi yang belum tersentuh? Saya terbuka untuk diskusi - proyek penuh waktu, kontrak, freelance, atau konsultasi jangka pendek."
          className="mb-16"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <FeatureCard key={service.title} item={service} iconSize="md" />
          ))}
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 sm:p-10 mb-12">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" /> Cara Kerja Sama
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {collaborationPath.map((step) => (
              <FeatureCard key={step.title} item={step} layout="plain" />
            ))}
          </div>
        </div>

        <ContactCTA />
      </Container>
    </Section>
  );
}
