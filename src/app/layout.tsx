import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
