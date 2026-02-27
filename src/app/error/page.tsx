import type { Metadata } from 'next';
import Link from 'next/link';
import { SUPPORTED_HTTP_ERROR_CODES, getHttpErrorInfo } from '@/lib/http-errors';

export const metadata: Metadata = {
  title: 'Pusat Kode Error HTTP',
};

function resolveErrorInfo(status: number) {
  const errorInfo = getHttpErrorInfo(status);

  if (!errorInfo) {
    throw new Error(`HTTP status ${status} is not configured.`);
  }

  return errorInfo;
}

const clientErrorCodes = SUPPORTED_HTTP_ERROR_CODES.filter((status) => status >= 400 && status < 500);
const serverErrorCodes = SUPPORTED_HTTP_ERROR_CODES.filter((status) => status >= 500 && status < 600);

export default function ErrorCodeIndexPage() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/70 via-white to-indigo-50/70" />
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-indigo-100/50 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            HTTP Error Center
          </span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Halaman Penanganan Error HTTP
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Gunakan daftar ini untuk meninjau tampilan error code yang didukung aplikasi, termasuk seluruh kategori
            4xx dan 5xx yang umum digunakan.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">Client Errors (4xx)</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {clientErrorCodes.map((status) => {
                const errorInfo = resolveErrorInfo(status);

                return (
                  <Link
                    key={status}
                    href={`/error/${status}`}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-lg font-extrabold text-slate-900">{status}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-blue-700">{errorInfo.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md sm:p-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">Server Errors (5xx)</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {serverErrorCodes.map((status) => {
                const errorInfo = resolveErrorInfo(status);

                return (
                  <Link
                    key={status}
                    href={`/error/${status}`}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:bg-white hover:shadow-sm"
                  >
                    <p className="text-lg font-extrabold text-slate-900">{status}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-700 group-hover:text-amber-700">{errorInfo.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
