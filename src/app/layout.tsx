import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://csirt.unuja.ac.id'),
  title: {
    default: 'UNUJA-CSIRT | Universitas Nurul Jadid',
    template: '%s | Universitas Nurul Jadid',
  },
  description:
    'Layanan resmi Pusat Data dan Sistem Informasi Universitas Nurul Jadid (CSIRT) untuk melindungi ekosistem akademik digital.',
  keywords: ['CSIRT', 'UNUJA', 'Cybersecurity', 'Nurul Jadid', 'Keamanan Informasi'],
  authors: [{ name: 'Pusat Data dan Sistem Informasi UNUJA' }],
  openGraph: {
    title: 'UNUJA-CSIRT | Universitas Nurul Jadid',
    description: 'Layanan Tanggap Insiden Siber resmi Universitas Nurul Jadid.',
    url: 'https://csirt.unuja.ac.id',
    siteName: 'UNUJA-CSIRT',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white"
        style={{ fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif' }}
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
