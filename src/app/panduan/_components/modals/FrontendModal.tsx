import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const frontendCases: IssueMatrixItem[] = [
  {
    kondisi: 'Input user menampilkan script aktif di browser',
    indikasi: 'Muncul popup aneh, request ke domain asing, atau redirect tanpa aksi user',
    dampak: 'Pencurian session/token dan pengambilalihan akun',
    responCepat: 'Sanitasi konten tersimpan, invalidate session, aktifkan CSP ketat',
    pencegahan: 'Larangan innerHTML mentah, sanitasi terstandar, uji XSS sebelum rilis',
  },
  {
    kondisi: 'Token auth bocor lewat JavaScript',
    indikasi: 'Token terlihat di localStorage/sessionStorage saat inspeksi',
    dampak: 'Akun dapat diambil alih lewat serangan XSS',
    responCepat: 'Migrasi token ke HttpOnly cookie, rotate token semua user',
    pencegahan: 'Session policy berbasis cookie aman dan expiry pendek',
  },
  {
    kondisi: 'Dependency frontend membawa script berbahaya',
    indikasi: 'Bundle berubah drastis atau request eksternal tak dikenal saat runtime',
    dampak: 'Supply chain compromise dan exfiltration data',
    responCepat: 'Rollback lockfile, audit package terbaru, rebuild artifact bersih',
    pencegahan: 'Pin versi, review package health, aktifkan audit di pipeline',
  },
  {
    kondisi: 'Data sensitif ikut masuk ke bundle client',
    indikasi: 'Env key/server secret terlihat di source map atau JS bundle',
    dampak: 'Kredensial bocor dan penyalahgunaan API',
    responCepat: 'Rotate key, hapus env sensitif dari client config, redeploy',
    pencegahan: 'Pisah env server/client dan checklist security di build production',
  },
];

export default function FrontendModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-slate-600">
        Serangan frontend umumnya memanfaatkan XSS dan penyimpanan token yang tidak aman. SOP ini memastikan data
        sesi pengguna tidak mudah dicuri dari browser.
      </p>

      <h4 className="font-bold text-slate-800">1. Hindari DOM Injection Berbahaya</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] React berisiko jika tanpa sanitasi`}</p>
        <p>{`<div dangerouslySetInnerHTML={{ __html: userInput }} />`}</p>
        <p className="text-red-400 mt-2">{`// [X] Vue berisiko jika input mentah`}</p>
        <p>{`<div v-html="userInput"></div>`}</p>
        <p className="mt-3 text-emerald-400">{`// [OK] Sanitasi HTML`}</p>
        <p>{`import DOMPurify from 'dompurify';`}</p>
        <p>{`const clean = DOMPurify.sanitize(userInput);`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Penyimpanan Token Sesi</h4>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-red-100 bg-red-50 p-4">
          <p className="mb-2 text-sm font-bold text-red-800">[X] LocalStorage (Rentan XSS)</p>
          <ul className="space-y-1 text-xs text-red-700">
            <li>Dapat dibaca JavaScript yang disisipkan attacker.</li>
            <li>Satu XSS dapat membocorkan token akses.</li>
            <li>Tidak ada kontrol HttpOnly.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-100 bg-green-50 p-4">
          <p className="mb-2 text-sm font-bold text-green-800">[OK] HttpOnly Secure Cookie</p>
          <ul className="space-y-1 text-xs text-green-700">
            <li>Tidak dapat dibaca JavaScript di browser.</li>
            <li>Dapat dikombinasikan dengan SameSite dan Secure.</li>
            <li>Lebih aman untuk autentikasi sesi.</li>
          </ul>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">3. CSP dan Security Headers Frontend</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-slate-500">{`<!-- Contoh CSP untuk SPA -->`}</p>
        <p>{`default-src 'self';`}</p>
        <p>{`script-src 'self';`}</p>
        <p>{`style-src 'self' 'unsafe-inline';`}</p>
        <p>{`img-src 'self' data:;`}</p>
        <p>{`frame-ancestors 'none';`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Dependency dan Supply Chain</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Audit package dengan <code>npm audit</code> pada setiap merge request.</li>
        <li>Pin versi dependency pada lockfile.</li>
        <li>Hindari package tanpa maintainer jelas atau repo yang tidak aktif.</li>
        <li>Gunakan Subresource Integrity (SRI) untuk script eksternal.</li>
      </ul>

      <h4 className="font-bold text-slate-800">5. Checklist Build Production</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700">
        <li>Source map publik dimatikan jika tidak dibutuhkan.</li>
        <li>Environment variable sensitif tidak dikirim ke bundle client.</li>
        <li>Semua endpoint API dipanggil melalui HTTPS.</li>
        <li>Uji XSS pada field input utama sebelum rilis.</li>
      </ol>

      <IssueMatrix
        title="Kondisi Masalah Umum di Frontend"
        items={frontendCases}
      />
    </div>
  );
}
