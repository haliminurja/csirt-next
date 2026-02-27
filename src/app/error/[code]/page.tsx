import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HttpErrorPage from '@/components/HttpErrorPage';
import { SUPPORTED_HTTP_ERROR_CODES, getHttpErrorInfo } from '@/lib/http-errors';

type ErrorCodePageProps = {
  params: Promise<{ code: string }>;
};

function parseHttpStatusCode(code: string): number | null {
  if (!/^\d{3}$/.test(code)) {
    return null;
  }

  const parsedCode = Number(code);
  if (!Number.isInteger(parsedCode)) {
    return null;
  }

  return parsedCode;
}

export function generateStaticParams() {
  return SUPPORTED_HTTP_ERROR_CODES.map((status) => ({
    code: String(status),
  }));
}

export async function generateMetadata({ params }: ErrorCodePageProps): Promise<Metadata> {
  const { code } = await params;
  const parsedCode = parseHttpStatusCode(code);
  const errorInfo = parsedCode === null ? null : getHttpErrorInfo(parsedCode);

  return {
    title: errorInfo ? `${errorInfo.status} ${errorInfo.title}` : '404 Not Found',
  };
}

export default async function ErrorCodePage({ params }: ErrorCodePageProps) {
  const { code } = await params;
  const parsedCode = parseHttpStatusCode(code);

  if (parsedCode === null) {
    notFound();
  }

  const errorInfo = getHttpErrorInfo(parsedCode);
  if (!errorInfo) {
    notFound();
  }

  return (
    <HttpErrorPage
      {...errorInfo}
      links={[
        { href: '/', label: 'Kembali ke Beranda' },
        { href: '/error', label: 'Daftar Kode HTTP', variant: 'secondary' },
      ]}
    />
  );
}
