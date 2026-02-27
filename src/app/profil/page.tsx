import type { Metadata } from 'next';
import HeroSection from './_components/HeroSection';
import VisiMisi from './_components/VisiMisi';
import Constituency from './_components/Constituency';
import Organization from './_components/Organization';
import SecurityDocuments from './_components/SecurityDocuments';
import ContactSection from './_components/ContactSection';

export const metadata: Metadata = {
  title: 'Profil UNUJA-CSIRT',
  description: 'Mengenal Tim Tanggap Insiden Siber (CSIRT) Universitas Nurul Jadid, visi, misi, dan kerangka kerja operasional kami.',
  openGraph: {
    title: 'Profil UNUJA-CSIRT | Universitas Nurul Jadid',
    description: 'Visi, misi, dan struktur organisasi Tim Tanggap Insiden Siber UNUJA.',
    url: 'https://csirt.unuja.ac.id/profil',
    type: 'website',
  },
};

export default function ProfilPage() {
  return (
    <>
      <HeroSection />

      {/* Main Content Area */}
      <div className="min-h-screen bg-slate-50/50 py-16 md:py-24 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VisiMisi />
          <Constituency />
          <Organization />
          <SecurityDocuments />
          <ContactSection />
        </div>
      </div>
    </>
  );
}
