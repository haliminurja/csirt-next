'use client';

export default function ExternalLinks() {
  const handlePdfClick = (fileUrl: string) => {
    window.open(fileUrl, '_blank', 'noopener,noreferrer');
  };

  const externalDocs = [
    {
      title: 'Panduan Keamanan AI & ML 2026',
      sender: 'BSSN & CSIRT Update',
      iconUrl: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      fileUrl: '/dist/pdf/Panduan-Keamanan-AI-ML-2026.pdf',
      bgClass: 'bg-emerald-50',
      textClass: 'text-emerald-600',
      hoverClass: 'group-hover:bg-emerald-600',
    },
    {
      title: 'Arsitektur Zero Trust & SSE 2026',
      sender: 'Standar Global',
      iconUrl: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      fileUrl: '/dist/pdf/Arsitektur-Zero-Trust-2026.pdf',
      bgClass: 'bg-blue-50',
      textClass: 'text-blue-600',
      hoverClass: 'group-hover:bg-blue-600',
    },
    {
      title: 'Mitigasi Ransomware Lanjut 2026',
      sender: 'SOP Darurat Terkini',
      iconUrl: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      fileUrl: '/dist/pdf/Mitigasi-Ransomware-Lanjut-2026.pdf',
      bgClass: 'bg-rose-50',
      textClass: 'text-rose-600',
      hoverClass: 'group-hover:bg-rose-600',
    },
    {
      title: 'Keamanan Cloud Native (K8s) 2026',
      sender: 'BSSN Cloud Security',
      iconUrl: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      fileUrl: '/dist/pdf/Keamanan-Cloud-Native-2026.pdf',
      bgClass: 'bg-cyan-50',
      textClass: 'text-cyan-600',
      hoverClass: 'group-hover:bg-cyan-600',
    },
    {
      title: 'Pedoman Microservice & API',
      sender: 'BSSN Keamanan',
      iconUrl: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      fileUrl: '/dist/pdf/Pedoman-Keamanan-Microservice-dan-API.pdf',
      bgClass: 'bg-purple-50',
      textClass: 'text-purple-600',
      hoverClass: 'group-hover:bg-purple-600',
    },
    {
      title: 'Keamanan Twitter',
      sender: 'Panduan Eksternal',
      iconUrl: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      fileUrl: '/dist/pdf/Panduan-Twitter.pdf',
      bgClass: 'bg-sky-50',
      textClass: 'text-sky-500',
      hoverClass: 'group-hover:bg-sky-500',
    },
    {
      title: 'Keamanan Youtube',
      sender: 'BSSN Keamanan',
      iconUrl: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      fileUrl: '/dist/pdf/PANDUAN-KEAMANAN-YOUTUBE1.pdf',
      bgClass: 'bg-red-50',
      textClass: 'text-red-500',
      hoverClass: 'group-hover:bg-red-500',
    },
    {
      title: 'Pengujian Aplikasi (OWASP)',
      sender: 'Panduan Standar',
      iconUrl: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      fileUrl: '/dist/pdf/OWASP_Versi_Indonesia.pdf',
      bgClass: 'bg-teal-50',
      textClass: 'text-teal-600',
      hoverClass: 'group-hover:bg-teal-600',
    },
    {
      title: 'Penanganan Web Defacement',
      sender: 'SOP Insiden',
      iconUrl: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      fileUrl: '/dist/pdf/Panduan-Penanganan-Insiden-Web-Defacement.pdf',
      bgClass: 'bg-orange-50',
      textClass: 'text-orange-500',
      hoverClass: 'group-hover:bg-orange-500',
    },
    {
      title: 'Keamanan Siber Bisnis Kecil',
      sender: 'Panduan Eksternal',
      iconUrl: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      fileUrl: '/dist/pdf/PANDUAN-KEAMANAN-SIBER-UNTUK-BISNIS-KECIL-ANDA.pdf',
      bgClass: 'bg-blue-50',
      textClass: 'text-blue-600',
      hoverClass: 'group-hover:bg-blue-600',
    },
    {
      title: 'Penanganan SQL Injection',
      sender: 'SOP Insiden',
      iconUrl: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7C20 4.79 16.418 3 12 3S4 4.79 4 7z',
      fileUrl: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-SQL-Injection-1.pdf',
      bgClass: 'bg-indigo-50',
      textClass: 'text-indigo-500',
      hoverClass: 'group-hover:bg-indigo-500',
    },
    {
      title: 'Penanganan Phishing',
      sender: 'SOP Insiden',
      iconUrl: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      fileUrl: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-Phishing.pdf',
      bgClass: 'bg-emerald-50',
      textClass: 'text-emerald-500',
      hoverClass: 'group-hover:bg-emerald-500',
    },
    {
      title: 'Penanganan Serangan DDoS',
      sender: 'SOP Insiden',
      iconUrl: 'M13 10V3L4 14h7v7l9-11h-7z',
      fileUrl: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-DDoS.pdf',
      bgClass: 'bg-rose-50',
      textClass: 'text-rose-500',
      hoverClass: 'group-hover:bg-rose-500',
    },
    {
      title: 'Keamanan Facebook',
      sender: 'Panduan Eksternal',
      iconUrl: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
      fileUrl: '/dist/pdf/PANDUAN-KEAMANAN-FACEBOOK-ORIGIN.pdf',
      bgClass: 'bg-cyan-50',
      textClass: 'text-cyan-600',
      hoverClass: 'group-hover:bg-cyan-600',
    },
    {
      title: 'Penanganan Malware',
      sender: 'SOP Darurat',
      iconUrl: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      fileUrl: '/dist/pdf/Panduan-Penanganan-Insiden-Malware.pdf',
      bgClass: 'bg-red-50',
      textClass: 'text-red-600',
      hoverClass: 'group-hover:bg-red-600',
    },
  ];

  return (
    <section className="bg-slate-50 relative py-16 sm:py-24 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3 bg-blue-100/50 px-4 py-1.5 rounded-full border border-blue-200">Referensi Lanjutan</span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Dokumen Eksternal & BSSN
          </h2>
          <p className="max-w-2xl text-lg text-slate-500">
            Kumpulan panduan teknis PDF dan instruksi keamanan siber yang bersumber langsung dari ahli dan BSSN (Badan Siber dan Sandi Negara).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {externalDocs.map((doc, idx) => (
            <div 
              key={idx}
              onClick={() => handlePdfClick(doc.fileUrl)}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col items-start relative overflow-hidden h-full z-10"
            >
              {/* Decorative gradient blob */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 rounded-full ${doc.bgClass} opacity-50 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10`}></div>

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${doc.bgClass} ${doc.textClass} ${doc.hoverClass} group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-100`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={doc.iconUrl} /></svg>
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">{doc.sender}</span>
                <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{doc.title}</h3>
              </div>
              
              <div className="mt-auto pt-5 w-full flex items-center justify-between text-sm">
                <span className="text-slate-500 font-medium group-hover:text-slate-700 flex items-center">
                  <svg className="w-4 h-4 mr-1.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  Format PDF
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-slate-400 transition-all">
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
