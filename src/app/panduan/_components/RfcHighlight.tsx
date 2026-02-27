import Link from 'next/link';
import { getPdfRoute } from '@/lib/pdf-docs';

export default function RfcHighlight() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16 relative z-20">
      <div className="flex flex-col items-center gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-lg md:flex-row md:p-10 dark:border-slate-700 dark:bg-slate-900">
        <div className="h-16 w-16 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center dark:bg-blue-900/50 dark:text-blue-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        </div>
        <div className="grow text-center md:text-left">
          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-slate-100">Dokumen Resmi RFC 2350 UNUJA-CSIRT</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">Standar deskripsi CSIRT berdasarkan IETF, mencakup kewenangan, jam operasional, dan spesifikasi layanan. Dokumen ini wajib dibaca oleh seluruh PIC Unit IT Fakultas.</p>
        </div>
        <Link
          href={getPdfRoute('rfc-2350-unuja')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Unduh PDF RFC
        </Link>
      </div>
    </div>
  );
}
