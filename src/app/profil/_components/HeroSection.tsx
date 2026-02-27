export default function HeroSection() {
  return (
    <div className="relative bg-white border-b border-slate-200 py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-indigo-50/50" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHptLTIwIDBoMjB2MjBIMHYtMjB6bTIwLTIwaDIwdjIwSDIwdjIweiIgZmlsbD0iIzMzNDE1NSIgZmlsbC1vcGFjaXR5PSIwLjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-semibold tracking-wide uppercase mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          Computer Security Incident Response Team
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
          Tentang <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">UNUJA-CSIRT</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light mb-10">
          Garda terdepan dalam menjaga keandalan Sistem Pemerintahan Berbasis Elektronik (SPBE), mengelola insiden
          keamanan siber, dan memastikan ekosistem akademik digital Universitas Nurul Jadid tetap beroperasi dengan aman.
        </p>
      </div>
    </div>
  );
}
