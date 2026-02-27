import type { Metadata } from 'next';
import HttpErrorPage from '@/components/HttpErrorPage';
import { mustGetHttpErrorInfo } from '@/lib/http-errors';

const notFoundInfo = mustGetHttpErrorInfo(404);

export const metadata: Metadata = {
  title: '404 Not Found',
};

export default function NotFound() {
  return (
    <HttpErrorPage
      {...notFoundInfo}
      links={[
        { href: '/', label: 'Kembali ke Beranda' },
        { href: '/profil', label: 'Lihat Profil CSIRT', variant: 'secondary' },
      ]}
    />
  );
}
