'use client';

import { useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';
import HeroSection from './_components/HeroSection';
import { modalRegistry } from './_components/LayananModals';

export default function LayananPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const close = () => setOpenModal(null);

  return (
    <div className="dark:bg-slate-950">
      <HeroSection />

      {/* Main Content */}
      <div className="min-h-screen bg-white py-20 md:py-28 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-20 md:mb-28 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Kerangka Kerja Tata Kelola Keamanan TI</h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 leading-relaxed text-lg md:text-xl font-light">
              Setiap layanan dirancang dengan mengacu pada <strong>Kerangka Kerja NIST Cybersecurity Framework (CSF) v2.0</strong> dan <strong>Indeks KAMI BSSN</strong>, mencakup ranah aplikasi inti (SIAKAD, e-Learning, Keuangan), manajemen identitas (SSO/Active Directory), hingga tata kelola server/hosting di masing-masing unit kerja fakultas.
            </p>
          </div>

          {/* Pilar 1: Reaktif */}
          <div className="mb-32 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center mb-16 relative z-10 border-b border-slate-100 pb-8">
              <div className="w-20 h-20 bg-white border border-red-100 text-red-600 rounded-[20px] flex items-center justify-center shadow-xl shadow-red-500/10 mb-6 md:mb-0 md:mr-8 shrink-0">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="text-center md:text-left">
                <span className="text-sm font-bold text-red-600 uppercase tracking-widest block mb-2">Pilar Reaktif 01</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Penanganan Insiden &amp; Kedaruratan (Incident Response)</h2>
                <p className="text-slate-600 mt-4 text-lg max-w-3xl leading-relaxed">Layanan taktis 24/7 (Emergency) untuk memutus rantai serangan (Kill-Chain) saat infrastruktur TI kampus sedang/telah dieksploitasi oleh ancaman siber aktif.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(239,68,68,0.15)] hover:border-red-200 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden group cursor-pointer" onClick={() => setOpenModal('incident')}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 bg-white border-2 border-slate-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">Triase &amp; Forensik Digital</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-red-600 transition-colors">Incident Response: Aplikasi &amp; Server Akademik</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow relative z-10">Eskalasi darurat atas insiden peretasan yang mencakup: Web Defacement, penyusupan WebShell/Backdoor, Database Injection, dan DDoS terhadap gateway universitas.</p>
                <div className="mt-auto relative z-10 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400 font-medium">SLA: Maks 1 Jam Kedaruratan</span>
                  <span className="text-red-600 text-sm font-semibold group-hover:underline flex items-center">Baca Prosedur <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(249,115,22,0.15)] hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden group cursor-pointer" onClick={() => setOpenModal('malware')}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className="w-14 h-14 bg-white border-2 border-slate-50 text-orange-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wider">Containment (Isolasi)</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-orange-600 transition-colors">Penanganan Artefak Malware &amp; Ransomware</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 grow relative z-10">Respon teknis mendalam jika ditemukan terminal/PC yang terkompromi/terinfeksi virus berbahaya jenis Ransomware, Cryptominer, atau Spyware/Trojan.</p>
                <div className="mt-auto relative z-10 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-400 font-medium">Bantuan Isolasi Jaringan</span>
                  <span className="text-orange-600 text-sm font-semibold group-hover:underline flex items-center">Lihat Prosedur <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 2: Proaktif */}
          <div className="mb-32 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center mb-16 relative z-10 border-b border-slate-100 pb-8">
              <div className="w-20 h-20 bg-white border border-indigo-100 text-indigo-600 rounded-[20px] flex items-center justify-center shadow-xl shadow-indigo-500/10 mb-6 md:mb-0 md:mr-8 shrink-0">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div className="text-center md:text-left">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-widest block mb-2">Pilar Proaktif 02</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Audit, Asesmen &amp; Pemantauan Sistem</h2>
                <p className="text-slate-600 mt-4 text-lg max-w-3xl leading-relaxed">Identifikasi celah kerentanan (Vulnerability) pada aplikasi yang sedang dibangun (DevSecOps) dan pengawasan (Monitoring) trafik NOC berkelanjutan.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 'vapt',
                  title: 'Vulnerability Assessment (VAPT) Sistem Baru',
                  desc: 'Wajib bagi Developer Internal/Vendor Eksternal yang mengembangkan sistem informasi baru atau API terpusat, pengujian penetrasi mandiri ini mengevaluasi OWASP Top 10.',
                  cta: 'Syarat Audit Sistem',
                  icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  cardHover: 'hover:border-indigo-200',
                  iconTone: 'border-indigo-50 text-indigo-600',
                  iconHover: 'group-hover:border-indigo-600 group-hover:bg-indigo-600',
                  titleHover: 'group-hover:text-indigo-700',
                  ctaTone: 'border-indigo-50 text-indigo-600',
                },
                {
                  id: 'advisory',
                  title: 'Notifikasi & Peringatan Keamanan Terpusat',
                  desc: 'Pemantauan Threat Intelligence untuk mengawal versi Framework (Laravel), CMS (Wordpress Fakultas), OS Linux, & Servis Aplikasi dari ancaman baru.',
                  cta: 'Distribusi Advisory',
                  icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
                  cardHover: 'hover:border-blue-200',
                  iconTone: 'border-blue-50 text-blue-600',
                  iconHover: 'group-hover:border-blue-600 group-hover:bg-blue-600',
                  titleHover: 'group-hover:text-blue-700',
                  ctaTone: 'border-blue-50 text-blue-600',
                },
                {
                  id: 'vdp',
                  title: 'Vulnerability Disclosure Program (Etis)',
                  desc: 'Fasilitas legal (jalur aman) untuk memproses laporan temuan celah yang ditemui secara tidak sengaja oleh Pengguna Umum atau Peneliti White Hat.',
                  cta: 'SOP Pelaporan (PoC)',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                  cardHover: 'hover:border-emerald-200',
                  iconTone: 'border-emerald-50 text-emerald-600',
                  iconHover: 'group-hover:border-emerald-600 group-hover:bg-emerald-600',
                  titleHover: 'group-hover:text-emerald-700',
                  ctaTone: 'border-emerald-50 text-emerald-600',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${item.cardHover}`}
                  onClick={() => setOpenModal(item.id)}
                >
                  <div
                    className={`relative z-10 mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 group-hover:text-white dark:bg-slate-900 ${item.iconTone} ${item.iconHover}`}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                  </div>
                  <h3 className={`relative z-10 mb-4 text-xl font-bold leading-tight text-slate-900 transition-colors dark:text-slate-100 ${item.titleHover}`}>{item.title}</h3>
                  <p className="relative z-10 mb-8 grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
                  <span className={`relative z-10 mt-auto flex items-center border-t pt-5 text-sm font-bold group-hover:underline ${item.ctaTone}`}>{item.cta} <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              ))}
            </div>
          </div>

          {/* Pilar 3: Kebijakan SPBE */}
          <div className="mb-32 relative">
            <div className="flex flex-col md:flex-row items-center mb-16 relative z-10 border-b border-slate-100 pb-8">
              <div className="w-20 h-20 bg-white border border-teal-100 text-teal-600 rounded-[20px] flex items-center justify-center shadow-xl shadow-teal-500/10 mb-6 md:mb-0 md:mr-8 shrink-0">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div className="text-center md:text-left">
                <span className="text-sm font-bold text-teal-600 uppercase tracking-widest block mb-2">Pilar Kebijakan SPBE 03</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Konsultasi Arsitektur IT &amp; Literasi Lanjut</h2>
                <p className="text-slate-600 mt-4 text-lg max-w-3xl leading-relaxed">Penempatan kontrol tata kelola pengamanan (Governance), arsitektur pemenuhan ISO 27001/SPBE, dan Security Awareness untuk Admin Jaringan maupun Dosen/Tenaga Kependidikan.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-4xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] border-l-[6px] border-l-teal-500 flex flex-col relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Literasi Akademik &amp; Keamanan Pribadi (Awareness)</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 grow">Menyelenggarakan Bimbingan Teknis (Bimtek) &amp; Sosialisasi berkesinambungan bagi seluruh Dosen, Tendik, dan Mahasiswa dalam mencegah pencurian kredensial Sistem Akademik Kampus (SSO/E-Learning) via Serangan Phishing, OTP Fraud.</p>
                <Link href="/panduan" prefetch={false} className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all shadow-sm w-full sm:w-auto mt-auto group">
                  Akses Dokumen &amp; Panduan Penuh
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
              <div className="bg-white rounded-4xl p-8 md:p-10 border border-slate-100 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] border-l-[6px] border-l-blue-600 flex flex-col relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Konsultansi Keamanan Skema Integrasi (API/Sistem Terpusat)</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 grow">Sesi pendampingan perancangan (Secure Architecture) khusus Tim Pusat Data &amp; Pengembang Sistem Informasi Baru perihal: Penguatan Topologi LAN (DMZ Node Server), Integrasi SSO (SAML/OpenID), Proteksi Database via Enkripsi At-Rest.</p>
                <button onClick={() => setOpenModal('consult')} className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-50 border border-blue-200 text-blue-700 font-bold rounded-2xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm w-full sm:w-auto mt-auto group">
                  Prosedur &amp; Formulasi Pengajuan
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Pilar 4: Kepatuhan */}
          <div className="mb-32 relative">
            <div className="flex flex-col md:flex-row items-center mb-16 relative z-10 border-b border-slate-100 pb-8">
              <div className="w-20 h-20 bg-white border border-emerald-100 text-emerald-600 rounded-[20px] flex items-center justify-center shadow-xl shadow-emerald-500/10 mb-6 md:mb-0 md:mr-8 shrink-0">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div className="text-center md:text-left">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest block mb-2">Pilar Kepatuhan 04</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Kepercayaan Digital &amp; Kepatuhan Audit</h2>
                <p className="text-slate-600 mt-4 text-lg max-w-3xl leading-relaxed">Menjamin keabsahan dokumen elektronik melalui sertifikasi digital dan audit pematuhan standar BSSN/ISO guna menjaga kredibilitas institusi.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  id: 'esign',
                  title: 'Sertifikat Elektronik (e-Sign) & SSL',
                  desc: 'Fasilitasi integrasi Tanda Tangan Elektronik (TTE) Tersertifikasi BSRE untuk ijazah/surat digital serta pengelolaan SSL/TLS seluruh sub-domain.',
                  cta: 'Layanan Sertifikasi',
                  icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
                  cardHover: 'hover:border-emerald-200',
                  iconTone: 'border-emerald-50 text-emerald-600',
                  iconHover: 'group-hover:border-emerald-600 group-hover:bg-emerald-600',
                  titleHover: 'group-hover:text-emerald-700',
                  ctaTone: 'border-emerald-50 text-emerald-600',
                },
                {
                  id: 'audit-kami',
                  title: 'Audit Indeks KAMI & Keamanan SPBE',
                  desc: 'Pendampingan evaluasi tingkat kematangan keamanan informasi institusi berdasarkan framework Indeks KAMI BSSN.',
                  cta: 'Prosedur Audit SPBE',
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                  cardHover: 'hover:border-blue-200',
                  iconTone: 'border-blue-50 text-blue-600',
                  iconHover: 'group-hover:border-blue-600 group-hover:bg-blue-600',
                  titleHover: 'group-hover:text-blue-700',
                  ctaTone: 'border-blue-50 text-blue-600',
                },
                {
                  id: 'drill',
                  title: 'Cyber Security Drill & Simulation',
                  desc: 'Latihan simulasi serangan siber (Red-Teaming vs Blue-Teaming) untuk menguji kesiapan tim IT Fakultas dan Pusat.',
                  cta: 'Jadwal Drill Tahunan',
                  icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
                  cardHover: 'hover:border-red-200',
                  iconTone: 'border-red-50 text-red-600',
                  iconHover: 'group-hover:border-red-600 group-hover:bg-red-600',
                  titleHover: 'group-hover:text-red-700',
                  ctaTone: 'border-red-50 text-red-600',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_25px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 dark:border-slate-800 dark:bg-slate-900 ${item.cardHover}`}
                  onClick={() => setOpenModal(item.id)}
                >
                  <div
                    className={`relative z-10 mb-8 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 bg-white shadow-sm transition-all duration-300 group-hover:text-white dark:bg-slate-900 ${item.iconTone} ${item.iconHover}`}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                  </div>
                  <h3 className={`relative z-10 mb-4 text-xl font-bold leading-tight text-slate-900 transition-colors dark:text-slate-100 ${item.titleHover}`}>{item.title}</h3>
                  <p className="relative z-10 mb-8 grow text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
                  <span className={`relative z-10 mt-auto flex items-center border-t pt-5 text-sm font-bold group-hover:underline ${item.ctaTone}`}>{item.cta} <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Modals */}
      {Object.entries(modalRegistry).map(([id, config]) => (
        <Modal
          key={id}
          isOpen={openModal === id}
          onClose={close}
          title={config.title}
          badge={config.badge}
          headerBg={config.headerBg}
          headerBorder={config.headerBorder}
          titleColor={config.titleColor}
          badgeBg={config.badgeBg}
          footerContent={
            <button onClick={close} className={config.footerClassName}>
              {config.footerLabel}
            </button>
          }
        >
          <config.Content />
        </Modal>
      ))}
    </div>
  );
}
