export default function RfcHighlight() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-20">
      <div className="bg-white rounded-3xl border border-blue-100 shadow-lg p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <div className="grow text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Dokumen Resmi RFC 2350 UNUJA-CSIRT</h3>
          <p className="text-slate-600 text-sm leading-relaxed">Standar deskripsi CSIRT berdasarkan IETF, mencakup kewenangan, jam operasional, dan spesifikasi layanan. Dokumen ini wajib dibaca oleh seluruh PIC Unit IT Fakultas.</p>
        </div>
        <a href="#" className="shrink-0 inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors text-sm shadow-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Unduh PDF RFC
        </a>
      </div>
    </div>
  );
}
