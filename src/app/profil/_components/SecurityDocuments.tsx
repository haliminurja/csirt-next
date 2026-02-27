import Link from 'next/link';
import { OFFICIAL_PUBLIC_KEY_PATH, OFFICIAL_RFC2350_PATH } from '@/lib/official-documents';

export default function SecurityDocuments() {
  return (
    <div className="mb-16 flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:flex-row dark:border-slate-800 dark:bg-slate-900">
      <div className="border-b border-slate-200 bg-slate-50 p-8 md:p-12 lg:w-1/2 lg:border-r lg:border-b-0 dark:border-slate-800 dark:bg-slate-900/60">
        <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Pengamanan Komunikasi (PGP)</h3>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          Jika laporan memuat data sensitif, gunakan enkripsi PGP sebelum mengirim email ke CSIRT. Ini membantu
          menjaga kerahasiaan bukti insiden saat proses pengiriman.
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <li>Gunakan untuk lampiran sensitif: log mentah, dump basis data, atau konfigurasi internal.</li>
          <li>Verifikasi fingerprint kunci sebelum enkripsi untuk mencegah salah tujuan.</li>
          <li>Jangan kirim password, OTP, token aktif, atau private key dalam bentuk apa pun.</li>
        </ul>
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href={OFFICIAL_PUBLIC_KEY_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-max items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
          >
            Unduh Public Key (.asc)
          </Link>
        </div>
        <div className="bg-slate-900 rounded-xl p-5 text-left border border-slate-800 shadow-inner overflow-x-auto text-sm">
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">User ID / Pemilik:</p>
          <p className="text-green-400 font-mono mb-4">CSIRT UNUJA (UNUJA-CSIRT) &lt;csirt@unuja.ac.id&gt;</p>
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">Key ID:</p>
          <p className="text-white font-mono mb-4">AE293C89ED31483E</p>
          <p className="text-slate-400 font-mono mb-1 text-xs uppercase tracking-wider">Fingerprint:</p>
          <p className="text-blue-300 font-mono">0008 281F 0293 6456 7BEF  789B AE29 3C89 ED31 483E</p>
        </div>
      </div>
      <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">Dokumen Resmi RFC 2350</h3>
        <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
          RFC 2350 adalah profil resmi layanan CSIRT yang menjelaskan ruang lingkup penanganan, kanal kontak, waktu
          layanan, serta pola koordinasi insiden. Dokumen ini menjadi acuan pelaporan yang sah dan konsisten.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={OFFICIAL_RFC2350_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-max items-center justify-center rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition-all hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <svg className="w-5 h-5 mr-3 text-slate-400 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Unduh RFC 2350 (PDF)
          </Link>
          <Link
            href="/lapor-insiden"
            className="inline-flex w-max items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition-all hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:text-blue-300"
          >
            Lihat Panduan Lapor Insiden
          </Link>
        </div>
      </div>
    </div>
  );
}
