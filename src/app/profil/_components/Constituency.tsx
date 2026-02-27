export default function Constituency() {
  return (
    <div className="mb-24">
      <div className="relative overflow-hidden rounded-3xl bg-indigo-900 p-10 shadow-2xl md:p-16 dark:bg-slate-900">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full opacity-40 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-40 -translate-x-1/2 translate-y-1/2" />
        <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ruang Lingkup Konstituensi &amp; Batas Wewenang</h2>
          <p className="text-indigo-200 text-lg">CSIRT Universitas Nurul Jadid memiliki wewenang hukum / administratif yang jelas untuk menyelidiki dan merekomendasikan blokir / isolasi jaringan terhadap entitas berikut:</p>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Infrastruktur AS-Number', desc: 'Seluruh Server (Virtual/Fisik), Router (Gateway), maupun Storage Backup Area yang tercatat mendiami ruang IP Publik atau VLAN internal kampus.' },
            { icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', title: 'Domain & Aplikasi', desc: 'Perangkat lunak (Siakad, Elearning, Sistem Keuangan, Web Fakultas Anak) yang dibungkus oleh nama domain *.unuja.ac.id.' },
            { icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', title: 'Sivitas & Pengguna Akhir', desc: 'Validasi & Pencabutan izin akun SSO (Single Sign-On) Dosen, Tenaga Kependidikan, Mahasiswa jika disinyalir diretas pihak asing.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-indigo-700/50 bg-indigo-800/50 p-6 text-center transition-colors hover:bg-indigo-800 dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-800">
              <div className="w-14 h-14 mx-auto bg-indigo-950/50 text-indigo-300 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h4 className="text-white font-bold mb-2">{item.title}</h4>
              <p className="text-indigo-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
