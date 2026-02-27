export default function VisiMisi() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
      <div>
        <span className="text-sm font-bold text-blue-600 uppercase tracking-widest block mb-2">Sejarah &amp; Mandat</span>
        <h2 className="mb-6 text-3xl font-extrabold text-slate-900 lg:text-4xl dark:text-slate-100">Pembentukan Satuan Tugas Siber Kampus</h2>
        <p className="mb-6 text-justify text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          <strong>UNUJA-CSIRT (Universitas Nurul Jadid Computer Security Incident Response Team)</strong> dibentuk berlandaskan Surat Keputusan Rektor sebagai mandat perlindungan data privasi di era transformasi digital. Mengacu pada Peraturan BSSN, tim ini bertugas sentral menerima, meninjau, serta menanggulangi anomali (serangan siber) yang ditujukan ke pusat data maupun aplikasi di bawah payung domain utama institusi.
        </p>
        <p className="text-justify text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Fokus utama kami bukan hanya pada penanggulangan (Reaktif) yang cepat, tetapi pada audit <em>Secure-by-Design</em> dan pendampingan <em>Cyber Security Awareness</em> (Proaktif) bagi seluruh komponen akademik.
        </p>
      </div>
      <div className="space-y-6">
        {/* Visi Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-100 border-l-4 border-l-blue-600 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 h-24 w-24 rounded-bl-full bg-blue-50 transition-transform group-hover:scale-110 dark:bg-blue-900/30" />
          <h3 className="relative z-10 mb-3 flex items-center text-xl font-bold text-slate-900 dark:text-slate-100">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            Visi
          </h3>
          <p className="relative z-10 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Mewujudkan ruang siber Universitas Nurul Jadid yang aman, tangguh, dan tepercaya untuk menopang ketahanan informasi akademik berstandar nasional.</p>
        </div>
        {/* Misi Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-slate-100 border-l-4 border-l-indigo-600 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 h-24 w-24 rounded-bl-full bg-indigo-50 transition-transform group-hover:scale-110 dark:bg-indigo-900/30" />
          <h3 className="relative z-10 mb-3 flex items-center text-xl font-bold text-slate-900 dark:text-slate-100">
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            Misi Utama
          </h3>
          <ul className="relative z-10 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            <li>Mengendalikan penanganan insiden siber secara terstruktur melalui prosedur triase, isolasi, dan pemulihan Cepat.</li>
            <li>Membangun kapasitas literasi keamanan (Awareness) sivitas akademika anti-phishing/social-engineering.</li>
            <li>Menjalin kordinasi kolaboratif dengan CSIRT regional, BSSN RI, dan aparat penegak hukum (digital forensic).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
