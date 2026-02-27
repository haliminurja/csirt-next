'use client';

import Link from 'next/link';

type ActionLink = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
};

type HttpErrorPageProps = {
  code?: number;
  status?: number;
  title: string;
  message: string;
  description: string;
  helperText?: string;
  onRetry?: () => void;
  retryLabel?: string;
  links?: ActionLink[];
};

const defaultLinks: ActionLink[] = [
  { href: '/', label: 'Kembali ke Beranda', variant: 'primary' },
  { href: '/panduan', label: 'Baca Panduan Keamanan', variant: 'secondary' },
];

function getToneClasses(code: number) {
  if (code >= 500) {
    return {
      badge: 'border-amber-200 bg-amber-50 text-amber-700',
      dot: 'bg-amber-500',
      accent: 'text-amber-600',
      panel: 'from-amber-100/70 via-orange-100/70 to-white',
    };
  }

  if (code === 404) {
    return {
      badge: 'border-blue-200 bg-blue-50 text-blue-700',
      dot: 'bg-blue-500',
      accent: 'text-blue-600',
      panel: 'from-blue-100/70 via-indigo-100/70 to-white',
    };
  }

  return {
    badge: 'border-indigo-200 bg-indigo-50 text-indigo-700',
    dot: 'bg-indigo-500',
    accent: 'text-indigo-600',
    panel: 'from-indigo-100/70 via-blue-100/70 to-white',
  };
}

export default function HttpErrorPage({
  code,
  status,
  title,
  message,
  description,
  helperText,
  onRetry,
  retryLabel,
  links = defaultLinks,
}: HttpErrorPageProps) {
  const resolvedCode = code ?? status ?? 500;
  const tone = getToneClasses(resolvedCode);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 sm:py-24 min-h-[72vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/70 via-white to-indigo-50/70" />
        <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-100/40" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-indigo-100/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.22)] sm:p-10">
            <div className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${tone.badge}`}>
              <span className={`mr-2 h-2 w-2 rounded-full ${tone.dot}`} />
              HTTP {resolvedCode}
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {message}
            </h1>
            <p className="mt-3 text-lg font-semibold text-slate-700">{title}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {description}
            </p>

            {helperText ? (
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                {helperText}
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {onRetry ? (
                <button
                  type="button"
                  onClick={onRetry}
                  className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
                >
                  {retryLabel ?? 'Coba Lagi'}
                </button>
              ) : null}

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={
                    link.variant === 'secondary'
                      ? 'inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50'
                      : 'inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700'
                  }
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/lapor-insiden"
                prefetch={false}
                className="inline-flex items-center rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold text-red-700 transition-colors hover:border-red-300 hover:bg-red-100"
              >
                Lapor Insiden
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`rounded-3xl border border-white/80 bg-linear-to-br p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.25)] ${tone.panel}`}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Status Code</p>
              <p className={`mt-2 text-6xl font-extrabold tracking-tight sm:text-7xl ${tone.accent}`}>{resolvedCode}</p>
              <p className="mt-3 text-sm font-semibold text-slate-700">{title}</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.25)]">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Langkah Rekomendasi</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                <li>Periksa ulang URL, metode, dan data request.</li>
                <li>Refresh halaman setelah beberapa saat bila layanan sedang padat.</li>
                <li>Hubungi tim CSIRT jika error berulang di endpoint yang sama.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
