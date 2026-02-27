import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-3 mb-6 relative">
            <Image
              src="/logo_unuja.png"
              alt="UNUJA"
              width={40}
              height={40}
              className="h-10 w-auto opacity-90 drop-shadow-md bg-white rounded-full p-1"
              style={{ backgroundColor: 'white' }}
            />
            <span className="text-2xl font-extrabold text-white tracking-tight">
              UNUJA<span className="text-blue-500 font-light">CSIRT</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm mb-6">
            Tim Tanggap Insiden Siber resmi Universitas Nurul Jadid. Berkomitmen menjaga kedaulatan data dan
            resiliensi SPBE di era integrasi digital.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigasi Peta</h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: '/', label: 'Beranda Utama' },
              { href: '/profil', label: 'Profil & RFC 2350' },
              { href: '/layanan', label: 'Katalog Layanan' },
              { href: '/panduan', label: 'Repositori Panduan' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-400 transition-colors flex items-center">
                  <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Call Center</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <div className="shrink-0 mt-1 mr-3 text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-slate-300">csirt@unuja.ac.id</span>
            </li>
            <li className="flex items-start">
              <div className="shrink-0 mt-1 mr-3 text-red-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-slate-300">Hotline Darurat: +62 332-xxxx EXT. 301</span>
            </li>
            <li className="flex items-start">
              <div className="shrink-0 mt-1 mr-3 text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-slate-300">
                Universitas Nurul Jadid, Paiton,<br />
                Probolinggo, Jatim 67291
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {year} UNUJA-CSIRT Universitas Nurul Jadid. Hak Cipta Dilindungi.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <Link href="/profil" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          <Link href="/panduan" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</Link>
        </div>
      </div>
    </footer>
  );
}
