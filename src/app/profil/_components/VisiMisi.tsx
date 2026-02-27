export default function VisiMisi() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
      <div>
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">Sejarah &amp; Mandat</span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">Pembentukan Satuan Tugas Siber Kampus</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify">
          <strong>UNUJA-CSIRT (Universitas Nurul Jadid Computer Security Incident Response Team)</strong> dibentuk berlandaskan Surat Keputusan Rektor sebagai mandat perlindungan data privasi di era transformasi digital. Mengacu pada Peraturan BSSN, tim ini bertugas sentral menerima, meninjau, serta menanggulangi anomali (serangan siber) yang ditujukan ke pusat data maupun aplikasi di bawah payung domain utama institusi.
        </p>
        <p className="text-slate-600 text-lg leading-relaxed text-justify">
          Fokus utama kami bukan hanya pada penanggulangan (Reaktif) yang cepat, tetapi pada audit <em>Secure-by-Design</em> dan pendampingan <em>Cyber Security Awareness</em> (Proaktif) bagi seluruh komponen akademik.
        </p>
      </div>
      <div className="space-y-6">
        {/* Visi Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-l-4 border-l-blue-600 hover:-translate-y-1 transition-transform relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Visi
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm relative z-10">Mewujudkan ruang siber Universitas Nurul Jadid yang aman, tangguh, dan tepercaya untuk menopang ketahanan informasi akademik berstandar nasional.</p>
        </div>
        {/* Misi Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border-l-4 border-l-indigo-600 hover:-translate-y-1 transition-transform relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
          <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            Misi Utama
          </h3>
          <ul className="text-slate-600 leading-relaxed text-sm space-y-2 relative z-10 list-disc pl-5">
            <li>Mengendalikan penanganan insiden siber secara terstruktur melalui prosedur triase, isolasi, dan pemulihan Cepat.</li>
            <li>Membangun kapasitas literasi keamanan (Awareness) sivitas akademika anti-phishing/social-engineering.</li>
            <li>Menjalin kordinasi kolaboratif dengan CSIRT regional, BSSN RI, dan aparat penegak hukum (digital forensic).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
