export default function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-white py-24 lg:py-32 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-teal-50/50 via-white to-blue-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-teal-100/50 blur-[100px] opacity-70 mix-blend-multiply dark:bg-teal-900/30 dark:mix-blend-normal" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[100px] opacity-70 mix-blend-multiply dark:bg-blue-900/30 dark:mix-blend-normal" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          Repositori Panduan &amp; Edukasi Keamanan
        </div>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:text-6xl lg:text-7xl dark:text-slate-100">
          Basis Pengetahuan{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">Keamanan Siber</span>
        </h1>
        <p className="mx-auto mb-10 max-w-4xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
          Panduan teknis komprehensif dan materi edukasi keamanan digital untuk seluruh sivitas akademika. Disesuaikan berdasarkan peran pengguna: Sysadmin, Developer, Dosen &amp; Mahasiswa.
        </p>
      </div>
    </div>
  );
}
