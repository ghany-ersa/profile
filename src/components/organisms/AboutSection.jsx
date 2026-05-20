import { BookOpen, Github, Linkedin } from 'lucide-react';
import { Container, Section } from '../atoms';
import { EducationItem } from '../molecules';
import { education } from '../../data';
import { LINKS } from '../../constants/site';

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
  return (
    <Section id="tentang" bordered className="bg-slate-900/50">
      <Container>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Tentang Saya</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              Kebanyakan organisasi tidak lambat karena kurang orang - mereka lambat karena{' '}
              <strong className="text-cyan-400">proses yang belum tersentuh teknologi</strong>.
              Approval manual, data yang tersebar, laporan yang dikerjakan ulang setiap minggu.
              Di situlah saya masuk.
            </p>
            <p>
              Selama 5+ tahun saya membangun{' '}
              <strong className="text-cyan-400">
                sistem internal end-to-end di FIFGROUP (ASTRA)
              </strong>
              , menjaga{' '}
              <strong className="text-cyan-400">
                modul asesmen jutaan kandidat di Sekolah.mu
              </strong>
              , dan memimpin produk dengan{' '}
              <strong className="text-cyan-400">20K+ pengguna aktif</strong>. Pola kerjanya
              selalu sama: temukan hambatan nyata, bangun solusinya, ukur hasilnya.
            </p>
            <p>
              Saya juga mengintegrasikan AI ke dalam workflow sehari-hari - bukan sebagai
              eksperimen, tapi sebagai{' '}
              <strong className="text-cyan-400">multiplier produktivitas tim</strong>. Saat ini
              menempuh Magister Sistem Informasi di Universitas Brawijaya untuk memperdalam
              sisi strategi & transformasi digital.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <ProfileLink href={LINKS.github} icon={Github} label="GitHub" />
              <ProfileLink href={LINKS.linkedin} icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Pendidikan & Latar Belakang
            </h3>
            <div className="space-y-6">
              {education.map((item) => (
                <EducationItem key={item.degree} education={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
