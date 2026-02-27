'use client';

import HttpErrorPage from '@/components/HttpErrorPage';
import { mustGetHttpErrorInfo } from '@/lib/http-errors';

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const globalServerErrorInfo = mustGetHttpErrorInfo(500);

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const helperText = error.digest
    ? `Referensi insiden global: ${error.digest}.`
    : 'Aplikasi mengalami gangguan pada tingkat root layout.';

  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <HttpErrorPage
          {...globalServerErrorInfo}
          helperText={helperText}
          onRetry={reset}
          retryLabel="Muat Ulang Aplikasi"
          links={[
            { href: '/', label: 'Kembali ke Beranda' },
            { href: '/panduan', label: 'Buka Panduan Keamanan', variant: 'secondary' },
          ]}
        />
      </body>
    </html>
  );
}
