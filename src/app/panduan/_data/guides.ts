import type { PdfDocSlug } from '@/lib/pdf-docs';

export type Category = 'all' | 'sysadmin' | 'developer' | 'user';

export interface GuideCard {
  id: string;
  category: Category[];
  title: string;
  desc: string;
  color: string;
  icon: string;
  badge: string;
  pdfSlug?: PdfDocSlug;
}

export const guideCards: GuideCard[] = [
  { id: 'hardening', category: ['sysadmin'], title: 'SOP: Hardening Server (Nginx & PHP-FPM)', desc: 'Panduan komprehensif menutup Information Disclosure, menyembunyikan identitas Server, dan memblokir fungsi shell berbahaya untuk mencegah eksploitasi otomatis.', color: 'slate', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', badge: 'SOP Sysadmin' },
  { id: 'ssh', category: ['sysadmin'], title: 'SOP: Perlindungan Akses Remote (SSH)', desc: 'Prosedur pengamanan akses terminal jarak jauh melalui autentikasi SSH Key, penonaktifan Root Login, dan implementasi Fail2Ban untuk mitigasi brute-force.', color: 'slate', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', badge: 'SOP Sysadmin' },
  { id: 'backup', category: ['sysadmin'], title: 'SOP: Pencadangan Sistem & Data (DRP)', desc: 'Implementasi kebijakan cadangan 3-2-1 standar BSSN, otomasi melalui crontab, dan prosedur off-site backup untuk memastikan ketersediaan data.', color: 'orange', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', badge: 'SOP Sysadmin' },
  { id: 'db-hard', category: ['sysadmin', 'developer'], title: 'SOP: Database Hardening (MySQL/PostgreSQL)', desc: 'Pengamanan lapisan basis data melalui konfigurasi bind address, penggunaan custom port, prinsip least privilege user, dan aturan firewall yang ketat.', color: 'blue', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', badge: 'SOP Sysadmin' },
  { id: 'headers', category: ['sysadmin'], title: 'SOP: HTTP Security Headers Configuration', desc: 'Implementasi X-Frame-Options, Content Security Policy (CSP), HSTS, dan header keamanan kritis lainnya untuk melindungi aplikasi dari serangan berbasis browser.', color: 'teal', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', badge: 'SOP Sysadmin' },
  { id: 'laravel', category: ['developer'], title: 'SOP: Secure Coding Laravel / PHP', desc: 'Standar penulisan kode aman untuk mencegah kerentanan IDOR, CSRF, Mass-Assignment, dan celah logika pada aplikasi sistem informasi akademik.', color: 'indigo', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'upload', category: ['developer'], title: 'SOP: Mitigasi RCE pada Fitur Unggah File', desc: 'Prosedur validasi ketat MIME-Type, pengamanan direktori penyimpanan, dan penonaktifan eksekusi script di folder unggahan untuk mencegah WebShell.', color: 'indigo', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12', badge: 'SOP Developer' },
  { id: 'python', category: ['developer'], title: 'SOP: Keamanan Framework Python (Django/FastAPI)', desc: 'Penanganan Pickle Deserialization, keamanan ORM, manajemen SECRET_KEY, dan konfigurasi environment produksi yang aman.', color: 'sky', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'nodejs', category: ['developer'], title: 'SOP: Standar Keamanan API Node.js', desc: 'Implementasi proteksi NoSQL Injection, penggunaan Helmet.js untuk security headers, dan mekanisme Rate Limiting pada endpoint API.', color: 'emerald', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'golang', category: ['developer'], title: 'SOP: Keamanan dan Konkurensi Golang', desc: 'Deteksi Race Condition, penggunaan parameterized queries pada GORM, dan pencegahan Memory/Goroutine Leak pada aplikasi performa tinggi.', color: 'cyan', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'frontend', category: ['developer'], title: 'SOP: Pengamanan Frontend (React/Vue)', desc: 'Mitigasi XSS melalui sanitasi DOMPurify, penggunaan HttpOnly cookies, dan pengamanan state management dari manipulasi sisi klien.', color: 'purple', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', badge: 'SOP Developer' },
  { id: 'phishing', category: ['user'], title: 'Edukasi: Mitigasi Phishing & Social Engineering', desc: 'Panduan praktis mengenali email palsu, URL jebakan, dan teknik rekayasa sosial untuk melindungi akun SSO sivitas akademika.', color: 'green', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', badge: 'Edukasi User' },
  { id: 'privacy', category: ['user'], title: 'Edukasi: Perlindungan Data Pribadi (PDP)', desc: 'Implementasi UU PDP bagi Dosen & Mahasiswa: penggunaan watermark pada identitas digital, kebijakan password kuat, dan aktivasi 2FA.', color: 'rose', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', badge: 'Edukasi User' },
];

export const tabs: { key: Category; label: string }[] = [
  { key: 'all', label: 'Semua Panduan' },
  { key: 'sysadmin', label: 'SOP Sysadmin' },
  { key: 'developer', label: 'SOP Developer' },
  { key: 'user', label: 'Dosen & Mahasiswa' },
];
