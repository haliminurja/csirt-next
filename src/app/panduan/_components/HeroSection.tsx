export default function HeroSection() {
  return (
    <div className="relative bg-white border-b border-slate-200 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-teal-50/50 via-white to-blue-50/50" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-teal-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-semibold tracking-wide mb-8">
          <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
          Repositori Panduan &amp; Edukasi Keamanan
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
          Basis Pengetahuan{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600">Keamanan Siber</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-10">
          Panduan teknis komprehensif dan materi edukasi keamanan digital untuk seluruh sivitas akademika. Disesuaikan berdasarkan peran pengguna: Sysadmin, Developer, Dosen &amp; Mahasiswa.
        </p>
      </div>
    </div>
  );
}
