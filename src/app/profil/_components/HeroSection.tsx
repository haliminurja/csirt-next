export default function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-28 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/40 opacity-70 dark:bg-blue-900/30" />\n        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-100/40 opacity-70 dark:bg-indigo-900/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase shadow-sm dark:border-blue-800/70 dark:bg-slate-900 dark:text-blue-300">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          Computer Security Incident Response Team
        </div>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:text-5xl lg:text-7xl dark:text-slate-100">
          Tentang <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">UNUJA-CSIRT</span>
        </h1>
        <p className="mx-auto mb-10 max-w-4xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
          Garda terdepan dalam menjaga keandalan Sistem Pemerintahan Berbasis Elektronik (SPBE), mengelola insiden
          keamanan siber, dan memastikan ekosistem akademik digital Universitas Nurul Jadid tetap beroperasi dengan aman.
        </p>
      </div>
    </div>
  );
}
