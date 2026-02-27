'use client';

import HttpErrorPage from '@/components/HttpErrorPage';
import { mustGetHttpErrorInfo } from '@/lib/http-errors';

type RootErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const internalServerErrorInfo = mustGetHttpErrorInfo(500);

export default function AppError({ error, reset }: RootErrorProps) {
  const helperText = error.digest
    ? `Referensi insiden: ${error.digest}. Simpan kode ini saat melapor ke tim CSIRT.`
    : 'Gangguan sudah tercatat. Jika masalah tetap muncul, silakan hubungi csirt@unuja.ac.id.';

  return (
    <HttpErrorPage
      {...internalServerErrorInfo}
      helperText={helperText}
      onRetry={reset}
      retryLabel="Coba Muat Ulang Halaman"
      links={[
        { href: '/', label: 'Kembali ke Beranda' },
        { href: '/layanan', label: 'Lihat Alur Layanan', variant: 'secondary' },
      ]}
    />
  );
}
