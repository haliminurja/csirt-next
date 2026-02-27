export type Category = 'all' | 'sysadmin' | 'developer' | 'user';

export interface GuideCard {
  id: string;
  category: Category[];
  title: string;
  desc: string;
  color: string;
  icon: string;
  badge: string;
  pdfUrl?: string;
}

export const guideCards: GuideCard[] = [
  { id: 'hardening', category: ['sysadmin'], title: 'Hardening Server (Nginx & PHP)', desc: 'Menutup header HTTP versi, menyembunyikan identitas Server, dan meblokir fungsi Shell berbahaya.', color: 'slate', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', badge: 'SOP Sysadmin' },
  { id: 'ssh', category: ['sysadmin'], title: 'Perlindungan Akses Remote (SSH)', desc: 'Mengamankan akses terminal jarak jauh dengan nonaktifkan Root Login, SSH Key only, dan Fail2Ban.', color: 'slate', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', badge: 'SOP Sysadmin' },
  { id: 'backup', category: ['sysadmin'], title: 'Pencadangan Sistem & Data (DRP)', desc: 'Kebijakan cadangan 3-2-1 BSSN, crontab otomatis, dan off-site backup.', color: 'orange', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', badge: 'SOP Sysadmin' },
  { id: 'db-hard', category: ['sysadmin', 'developer'], title: 'Database Hardening SOP', desc: 'Proteksi MySQL/PostgreSQL: bind address, custom port, least privilege user, dan firewall rule.', color: 'blue', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', badge: 'SOP Sysadmin' },
  { id: 'headers', category: ['sysadmin'], title: 'HTTP Security Headers', desc: 'Konfigurasi X-Frame-Options, CSP, HSTS, dan header keamanan penting lainnya.', color: 'teal', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', badge: 'SOP Sysadmin' },
  { id: 'laravel', category: ['developer'], title: 'Secure Coding Laravel / PHP', desc: 'Mencegah IDOR, CSRF, Mass-Assignment, dan kerentanan logis lainnya pada aplikasi Laravel kampus.', color: 'indigo', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'upload', category: ['developer'], title: 'Keamanan Upload File (RCE)', desc: 'Standar validasi MIME-Type dan Nginx Directory Execution Disable untuk mencegah RCE via WebShell.', color: 'indigo', icon: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12', badge: 'SOP Developer' },
  { id: 'python', category: ['developer'], title: 'Panduan Security Python', desc: 'Bahaya Pickle Deserialization, Django ORM safety, production settings, dan SECRET_KEY management.', color: 'sky', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'nodejs', category: ['developer'], title: 'Standar Keamanan API Node.js', desc: 'Proteksi NoSQL Injection (MongoDB), Helmet Security Headers, dan Rate Limiting Express.', color: 'emerald', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'golang', category: ['developer'], title: 'Standar Konkurensi Golang', desc: 'Race condition detection, GORM parameterized queries, dan goroutine leak prevention.', color: 'cyan', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', badge: 'SOP Developer' },
  { id: 'frontend', category: ['developer'], title: 'Pengamanan Frontend (React/Vue)', desc: 'XSS via dangerouslySetInnerHTML/v-html, DOMPurify sanitizer, dan HttpOnly cookie storage.', color: 'purple', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', badge: 'SOP Developer' },
  { id: 'phishing', category: ['user'], title: 'Menghindari Phishing & Social Engineering', desc: 'Cara mengenali email palsu, URL jebakan, dan melindungi akun SSO kampus dari pencurian.', color: 'green', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', badge: 'Edukasi User' },
  { id: 'privacy', category: ['user'], title: 'Perlindungan Data Pribadi', desc: 'Instruksi Dosen & Mahasiswa terkait UU PDP: watermark KTP, password policy, dan 2FA activation.', color: 'rose', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', badge: 'Edukasi User' },
];

export const tabs: { key: Category; label: string }[] = [
  { key: 'all', label: 'Semua Panduan' },
  { key: 'sysadmin', label: 'SOP Sysadmin' },
  { key: 'developer', label: 'SOP Developer' },
  { key: 'user', label: 'Dosen & Mahasiswa' },
];
