import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const headerCases: IssueMatrixItem[] = [
  {
    kondisi: 'Header security tidak konsisten antar subdomain',
    indikasi: 'Nilai scanner berbeda jauh antara domain utama dan subdomain',
    dampak: 'Subdomain lemah jadi pintu masuk serangan',
    responCepat: 'Samakan baseline config reverse proxy untuk semua vhost',
    pencegahan: 'Gunakan shared include config dan pipeline config linting',
  },
  {
    kondisi: 'CSP terlalu longgar atau pakai wildcard',
    indikasi: "script-src 'unsafe-inline' atau * dipakai permanen",
    dampak: 'Proteksi XSS melemah signifikan',
    responCepat: 'Turunkan policy ke whitelist domain yang valid, aktifkan report-only sementara',
    pencegahan: 'CSP rollout bertahap dengan monitoring laporan pelanggaran',
  },
  {
    kondisi: 'HSTS aktif sebelum semua endpoint HTTPS siap',
    indikasi: 'Beberapa subdomain masih mixed content/sertifikat invalid',
    dampak: 'Akses user gagal dan layanan tidak dapat dibuka',
    responCepat: 'Perbaiki TLS endpoint terdampak sebelum preload policy permanen',
    pencegahan: 'Validasi seluruh subdomain HTTPS sebelum enable includeSubDomains/preload',
  },
  {
    kondisi: 'Header dobel saling bertentangan',
    indikasi: 'Respons memuat beberapa nilai CSP/HSTS berbeda',
    dampak: 'Perilaku browser tidak konsisten dan proteksi tidak efektif',
    responCepat: 'Normalisasi header di satu layer (reverse proxy utama)',
    pencegahan: 'Hindari mendefinisikan header yang sama di banyak layer aplikasi',
  },
];

export default function HeadersModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-slate-600">
        HTTP security headers adalah lapisan proteksi pertama yang dibaca browser dan scanner keamanan. Konfigurasi
        yang tepat membantu menurunkan risiko clickjacking, XSS, MIME sniffing, dan downgrade HTTPS.
      </p>

      <div className="rounded-xl border border-teal-200 bg-teal-50 p-4 text-sm text-teal-900">
        <strong>Tujuan SOP:</strong> semua aplikasi web kampus harus lolos baseline header keamanan sebelum
        dipublikasikan ke internet.
      </div>

      <div className="bg-slate-900 rounded-xl p-6 text-teal-400 font-mono text-xs overflow-x-auto">
        <p className="text-slate-500"># Nginx Security Headers (/etc/nginx/conf.d/security-headers.conf)</p>
        <p>{`add_header X-Frame-Options "SAMEORIGIN";`}</p>
        <p>{`add_header X-XSS-Protection "1; mode=block";`}</p>
        <p>{`add_header X-Content-Type-Options "nosniff";`}</p>
        <p>{`add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;`}</p>
        <p>{`add_header Content-Security-Policy "default-src 'self'; script-src 'self'";`}</p>
        <p>{`add_header Referrer-Policy "strict-origin-when-cross-origin";`}</p>
        <p>{`add_header Permissions-Policy "camera=(), microphone=(), geolocation=()";`}</p>
      </div>

      <h4 className="font-bold text-slate-800">Penjelasan Tiap Header:</h4>
      <div className="space-y-3">
        {[
          { header: 'X-Frame-Options: SAMEORIGIN', desc: 'Mencegah halaman di-embed dalam iframe situs lain (anti-Clickjacking). Iframe hanya diizinkan dari domain yang sama.' },
          { header: 'X-Content-Type-Options: nosniff', desc: 'Mencegah browser menebak MIME type. File .txt tidak akan di-eksekusi sebagai HTML/JS.' },
          { header: 'Strict-Transport-Security (HSTS)', desc: 'Memaksa browser selalu menggunakan HTTPS. Satu tahun cache (31536000 detik). Wajib sebelum masuk HSTS Preload List.' },
          { header: 'Content-Security-Policy (CSP)', desc: 'Mengontrol sumber daya apa saja yang boleh dimuat. Mencegah inline script dan resource dari domain luar yang tidak sah.' },
          { header: 'Referrer-Policy', desc: 'Membatasi informasi URL yang dikirim saat berpindah halaman. Melindungi token/parameter sensitif di URL.' },
          { header: 'Permissions-Policy', desc: 'Menonaktifkan API browser (kamera, mikrofon, geolokasi) yang tidak diperlukan oleh aplikasi kampus.' },
        ].map((item) => (
          <div key={item.header} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
            <p className="text-sm font-bold text-teal-800 font-mono">{item.header}</p>
            <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      <h4 className="font-bold text-slate-800">Implementasi CSP Bertahap (Disarankan)</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
        <li>Mulai dari mode pelaporan: <code>Content-Security-Policy-Report-Only</code>.</li>
        <li>Analisa pelanggaran di endpoint report CSP selama 7-14 hari.</li>
        <li>Kunci domain script/style satu per satu hingga stabil.</li>
        <li>Aktifkan CSP enforcement penuh pada production.</li>
      </ol>

      <h4 className="font-bold text-slate-800">Verifikasi dan Scoring:</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Test header via terminal:</p>
        <p className="text-green-400">$ curl -I https://siakad.unuja.ac.id</p>
        <p className="text-slate-500 mt-2"># Online security header scanner:</p>
        <p className="text-green-400"># https://securityheaders.com (target: grade A)</p>
        <p className="text-green-400"># https://observatory.mozilla.org (target: score 80+)</p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Checklist Lulus SOP:</strong> HSTS aktif, CSP minimal default-src/script-src jelas, tidak ada header
        duplikat konflik, dan nilai scanner minimal grade A.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Security Headers"
        items={headerCases}
      />
    </div>
  );
}
