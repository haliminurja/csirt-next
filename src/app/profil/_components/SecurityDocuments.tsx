export default function SecurityDocuments() {
  return (
    <div className="mb-16 bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col lg:flex-row">
      <div className="p-8 md:p-12 lg:w-1/2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50">
        <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Pengamanan Komunikasi (PGP)</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Kami sangat menyarankan pelapor untuk mengenkripsi surel (Email) berisikan *password*, Data Base kotor, atau bukti *Log* injeksi menggunakan Public Key (GPG/PGP) resmi milik CSIRT agar tidak disadap (Man In The Middle).
        </p>
        <div className="bg-slate-900 rounded-xl p-5 text-left border border-slate-800 shadow-inner overflow-x-auto text-sm">
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">User ID / Pemilik:</p>
          <p className="text-green-400 font-mono mb-4">CSIRT Universitas Nurul Jadid &lt;csirt@unuja.ac.id&gt;</p>
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">Key ID:</p>
          <p className="text-white font-mono mb-4">0x4A6B89FD</p>
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">Fingerprint:</p>
          <p className="text-blue-300 font-mono">1A2B 3C4D 5E6F 7G8H 9I0J 1K2L 4A6B 89FD</p>
        </div>
      </div>
      <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Dokumen Resmi RFC 2350</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Standar tata tertib prosedur *Internet Engineering Task Force (IETF)* yang diakui secara global &amp; BSSN RI. Dokumen RFC kami menampung kewenangan, waktu operasional jam layanan, dan spesifikasi bantuan terpusat untuk Fakultas.
        </p>
        <a href="#" className="inline-flex items-center justify-center px-6 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all group w-max">
          <svg className="w-5 h-5 mr-3 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Unduh RFC2350 (PDF) Terkini
        </a>
      </div>
    </div>
  );
}
