export default function HeroSection() {
  return (
    <div className="relative bg-white border-b border-slate-200 py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-slate-50 to-white" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-50/80 rounded-full mix-blend-multiply filter blur-[80px] opacity-70" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-indigo-50/80 rounded-full mix-blend-multiply filter blur-[80px] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-semibold tracking-wide uppercase mb-8">
          <span className="relative flex h-3 w-3 mr-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" /><span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600" /></span>
          Katalog Layanan Resmi Sesuai Standar BSSN
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1] max-w-5xl">
          Pengamanan <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-indigo-700">Arsitektur SPBE &amp; Akademik</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-10">
          Pusat operasional dan koordinasi keamanan siber (Security Operations Center) yang didedikasikan untuk mengawal Sistem Informasi Terintegrasi, Server Fakultas, Pusat Data, dan Endpoint Manajemen di seluruh lingkungan Universitas Nurul Jadid.
        </p>
      </div>
    </div>
  );
}
