import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beranda',
};

export default function Home() {
  return (
    <div className="dark:bg-slate-950">
      {/* Premium Hero Section */}
      <div className="relative flex min-h-[85vh] items-center overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        {/* Elegant subtle background pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-br from-blue-50/80 via-white to-indigo-50/80" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 -translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHptLTIwIDBoMjB2MjBIMHYtMjB6bTIwLTIwaDIwdjIwSDIwdjIweiIgZmlsbD0iIzMzNDE1NSIgZmlsbC1vcGFjaXR5PSIwLjAzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-16 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-white/60 backdrop-blur-md shadow-sm text-blue-700 text-sm font-bold tracking-wide uppercase mb-8">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-3 animate-pulse" />
                Status Keamanan: Aman Aktif
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
                Resiliensi Siber{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                  Universitas Nurul Jadid
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Pusat komando pertahanan insiden siber resmi (CSIRT) untuk melindungi ekosistem akademik,
                menjamin ketersediaan sistem, dan melindungi kerahasiaan data seluruh sivitas akademika.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <a
                  href="mailto:csirt@unuja.ac.id"
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="mr-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Lapor Insiden (Darurat)
                </a>
                <Link
                  href="/panduan"
                  className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white/80 backdrop-blur-md hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  Baca Panduan Keamanan
                </Link>
              </div>
            </div>

            {/* Right Visual/Graphic */}
            <div className="lg:w-1/2 relative w-full max-w-lg lg:max-w-none mx-auto hidden md:block">
              <div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
                {/* Card 1: Shield */}
                <div className="absolute top-10 right-10 w-64 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white z-20 animate-[float_6s_ease-in-out_infinite]">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">Firewall</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full rounded-full" />
                    </div>
                    <p className="text-xs font-semibold text-slate-500 text-right uppercase tracking-wider">
                      Perlindungan 100%
                    </p>
                  </div>
                </div>

                {/* Card 2: Server Monitor */}
                <div className="absolute bottom-10 left-10 w-72 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white z-10 animate-[float_8s_ease-in-out_infinite_reverse]">
                  <div className="flex items-center mb-5 justify-between">
                    <h3 className="font-bold text-slate-900 text-lg">Monitor Server</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-md">Live</span>
                  </div>
                  <div className="flex items-end space-x-2 h-16 w-full opacity-80">
                    <div className="w-1/6 bg-blue-200 h-1/2 rounded-t-md" />
                    <div className="w-1/6 bg-blue-300 h-3/4 rounded-t-md" />
                    <div className="w-1/6 bg-indigo-400 h-full rounded-t-md" />
                    <div className="w-1/6 bg-blue-400 h-2/3 rounded-t-md" />
                    <div className="w-1/6 bg-indigo-300 h-4/5 rounded-t-md" />
                    <div className="w-1/6 bg-blue-200 h-1/3 rounded-t-md" />
                  </div>
                </div>

                {/* Central Decor Circle */}
                <div className="absolute inset-0 m-auto w-80 h-80 border-[0.5rem] border-blue-50/50 rounded-full border-dashed animate-[spin_40s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-0 m-auto w-64 h-64 border-[1rem] border-indigo-50/50 rounded-full border-dotted animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Peta Layanan Section */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-3">
              Portfolio Operasional
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Fokus Layanan Utama CSIRT</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-600 font-light leading-relaxed">
              Kami tidak hanya merespon serangan, namun secara aktif memastikan seluruh celah tertutup melalui
              pendekatan Triase yang terukur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm text-red-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Manajemen Insiden (Reaktif)</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Triase cepat untuk mengisolasi server yang terinfeksi Malware, Ransomware, atau defacement web
                agar tidak menyebar ke jaringan fakultas lain.
              </p>
              <Link href="/layanan" className="text-blue-600 font-bold inline-flex items-center group-hover:text-blue-800">
                Lihat Alur Investigasi
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm text-indigo-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Audit &amp; VAPT (Proaktif)</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Assessment keamanan wajib sebelum aplikasi mahasiswa atau fakultas dideploy ke produksi
                (Go-Live) untuk memblokir celah injeksi/RCE.
              </p>
              <Link href="/layanan" className="text-blue-600 font-bold inline-flex items-center group-hover:text-blue-800">
                Kebijakan Audit
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm text-teal-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Advisory</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Edukasi sivitas akademika terkait Zero-Day ancaman tren, program Vulnerability Disclosure
                Program (VDP), dan panduan literasi digital.
              </p>
              <Link href="/panduan" className="text-blue-600 font-bold inline-flex items-center group-hover:text-blue-800">
                Lihat Repositori Edukasi
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
