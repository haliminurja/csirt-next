export default function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-white py-24 lg:py-32 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900" />
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-blue-50/60 opacity-70 dark:bg-blue-900/30" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-50/60 opacity-70 dark:bg-indigo-900/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-slate-700 uppercase shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <span className="relative flex h-3 w-3 mr-3"><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600" /></span>
          Katalog Layanan Resmi Sesuai Standar BSSN
        </div>
        <h1 className="mb-8 max-w-5xl text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:text-6xl lg:text-7xl dark:text-slate-100">
          Pengamanan <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-700">Arsitektur SPBE &amp; Akademik</span>
        </h1>
        <p className="mx-auto mb-10 max-w-4xl text-lg font-light leading-relaxed text-slate-600 md:text-xl dark:text-slate-300">
          Pusat operasional dan koordinasi keamanan siber (Security Operations Center) yang didedikasikan untuk mengawal Sistem Informasi Terintegrasi, Server Fakultas, Pusat Data, dan Endpoint Manajemen di seluruh lingkungan Universitas Nurul Jadid.
        </p>
      </div>
    </div>
  );
}
