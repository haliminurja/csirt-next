import { OFFICIAL_RFC2350_PATH } from '@/lib/official-documents';

export const PDF_DOCS = {
  'microservice-api': {
    title: 'Pedoman Microservice & API',
    publicPath: '/dist/pdf/Pedoman-Keamanan-Microservice-dan-API.pdf',
  },
  'owasp-indonesia': {
    title: 'Pengujian Aplikasi (OWASP)',
    publicPath: '/dist/pdf/OWASP_Versi_Indonesia.pdf',
  },
  'penanganan-web-defacement': {
    title: 'Penanganan Web Defacement',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Web-Defacement.pdf',
  },
  'keamanan-siber-bisnis-kecil': {
    title: 'Keamanan Siber Bisnis Kecil',
    publicPath: '/dist/pdf/PANDUAN-KEAMANAN-SIBER-UNTUK-BISNIS-KECIL-ANDA.pdf',
  },
  'penanganan-sql-injection': {
    title: 'Penanganan SQL Injection',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-SQL-Injection.pdf',
  },
  'penanganan-phishing': {
    title: 'Penanganan Phishing',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-Phishing.pdf',
  },
  'penanganan-ddos': {
    title: 'Penanganan Serangan DDoS',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-DDoS.pdf',
  },
  'penanganan-malware': {
    title: 'Penanganan Malware',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Malware.pdf',
  },
  'rfc-2350-unuja': {
    title: 'Dokumen RFC 2350 UNUJA-CSIRT',
    publicPath: '/rfc2350.pdf',
  },
} as const;

export type PdfDocSlug = keyof typeof PDF_DOCS;

export function getPdfDoc(slug: string) {
  return PDF_DOCS[slug as PdfDocSlug] ?? null;
}

export function getPdfRoute(slug: PdfDocSlug) {
  if (slug === 'rfc-2350-unuja') {
    return OFFICIAL_RFC2350_PATH;
  }

  return `/docs/${slug}`;
}
