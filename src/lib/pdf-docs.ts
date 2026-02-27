export const PDF_DOCS = {
  'ai-ml-2026': {
    title: 'Panduan Keamanan AI & ML 2026',
    publicPath: '/dist/pdf/Panduan-Keamanan-AI-ML-2026.pdf',
  },
  'zero-trust-sse-2026': {
    title: 'Arsitektur Zero Trust & SSE 2026',
    publicPath: '/dist/pdf/Arsitektur-Zero-Trust-2026.pdf',
  },
  'mitigasi-ransomware-2026': {
    title: 'Mitigasi Ransomware Lanjut 2026',
    publicPath: '/dist/pdf/Mitigasi-Ransomware-Lanjut-2026.pdf',
  },
  'cloud-native-k8s-2026': {
    title: 'Keamanan Cloud Native (K8s) 2026',
    publicPath: '/dist/pdf/Keamanan-Cloud-Native-2026.pdf',
  },
  'microservice-api': {
    title: 'Pedoman Microservice & API',
    publicPath: '/dist/pdf/Pedoman-Keamanan-Microservice-dan-API.pdf',
  },
  'keamanan-twitter': {
    title: 'Keamanan Twitter',
    publicPath: '/dist/pdf/Panduan-Twitter.pdf',
  },
  'keamanan-youtube': {
    title: 'Keamanan Youtube',
    publicPath: '/dist/pdf/PANDUAN-KEAMANAN-YOUTUBE1.pdf',
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
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-SQL-Injection-1.pdf',
  },
  'penanganan-phishing': {
    title: 'Penanganan Phishing',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-Phishing.pdf',
  },
  'penanganan-ddos': {
    title: 'Penanganan Serangan DDoS',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Serangan-DDoS.pdf',
  },
  'keamanan-facebook': {
    title: 'Keamanan Facebook',
    publicPath: '/dist/pdf/PANDUAN-KEAMANAN-FACEBOOK-ORIGIN.pdf',
  },
  'penanganan-malware': {
    title: 'Penanganan Malware',
    publicPath: '/dist/pdf/Panduan-Penanganan-Insiden-Malware.pdf',
  },
  'rfc-2350-unuja': {
    title: 'Dokumen RFC 2350 UNUJA-CSIRT',
    publicPath: '/dist/pdf/RFC-2350-UNUJA-CSIRT.pdf',
  },
} as const;

export type PdfDocSlug = keyof typeof PDF_DOCS;

export function getPdfDoc(slug: string) {
  return PDF_DOCS[slug as PdfDocSlug] ?? null;
}

export function getPdfRoute(slug: PdfDocSlug) {
  return `/docs/${slug}`;
}
