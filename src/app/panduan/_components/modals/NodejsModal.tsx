import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const nodeCases: IssueMatrixItem[] = [
  {
    kondisi: 'Lonjakan request menyebabkan API tidak responsif',
    indikasi: 'Event loop delay meningkat, latency tinggi, banyak 429/5xx',
    dampak: 'Downtime layanan akademik dan antrian job gagal',
    responCepat: 'Aktifkan emergency rate limit, scale instance, aktifkan cache endpoint read-heavy',
    pencegahan: 'Load test rutin, circuit breaker, proteksi bot dan cache layer',
  },
  {
    kondisi: 'Token JWT dicuri dari sisi klien',
    indikasi: 'Login dari lokasi/IP asing dengan token yang sama',
    dampak: 'Account takeover dan akses ilegal data pengguna',
    responCepat: 'Revoke token aktif, rotate JWT secret, paksa login ulang semua sesi',
    pencegahan: 'Simpan token di HttpOnly cookie, expiry pendek, device/session binding',
  },
  {
    kondisi: 'Error stack internal muncul ke browser',
    indikasi: 'Response 500 mengandung path source code atau query',
    dampak: 'Information disclosure dan mempermudah eksploitasi lanjutan',
    responCepat: 'Aktifkan error handler production-safe, masking response error',
    pencegahan: 'Pisahkan log internal dan response publik, review middleware error',
  },
  {
    kondisi: 'Package npm yang dipakai ternyata malicious',
    indikasi: 'Perubahan perilaku build/runtime setelah update dependency kecil',
    dampak: 'Backdoor supply chain dan kebocoran secret environment',
    responCepat: 'Rollback lockfile, isolate pipeline, audit semua package baru',
    pencegahan: 'Pin lockfile, allowlist vendor, review maintainer/package health',
  },
];

export default function NodejsModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-slate-600">
        Node.js banyak digunakan untuk API dan microservice. SOP ini menekankan sanitasi input, proteksi header,
        rate limiting, validasi token, dan kontrol dependency.
      </p>

      <h4 className="font-bold text-slate-800">1. Cegah NoSQL/SQL Injection</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] Rentan NoSQL injection`}</p>
        <p>{`db.users.find({ username: req.body.username, password: req.body.password })`}</p>
        <p className="text-slate-500">{`// Attacker dapat kirim operator seperti { "$gt": "" }`}</p>
        <p className="mt-2 text-green-400">{`// [OK] Sanitizer + validasi skema`}</p>
        <p>{`const mongoSanitize = require('express-mongo-sanitize');`}</p>
        <p>{`app.use(mongoSanitize());`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Helmet, CORS, dan Rate Limiting</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p>{`const helmet = require('helmet');`}</p>
        <p>{`const cors = require('cors');`}</p>
        <p>{`const rateLimit = require('express-rate-limit');`}</p>
        <p className="mt-2 text-green-400">app.use(helmet());</p>
        <p className="text-green-400">{`app.use(cors({ origin: ['https://siakad.unuja.ac.id'], credentials: true }));`}</p>
        <p>{`const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });`}</p>
        <p className="text-green-400">{`app.use('/api/', apiLimiter);`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. JWT dan Session Security</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] Secret hardcoded`}</p>
        <p>{`jwt.sign(payload, 'rahasia123')`}</p>
        <p className="mt-2 text-green-400">{`// [OK] Secret dari env + expiry pendek`}</p>
        <p>{`jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' })`}</p>
        <p className="text-green-400">{`jwt.verify(token, process.env.JWT_SECRET, { algorithms: ['HS256'] })`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Error Handling dan Logging Aman</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Jangan expose stack trace ke client saat production.</li>
        <li>Masking data sensitif (token, email, NIK) pada log.</li>
        <li>Pisahkan log audit keamanan dan log aplikasi biasa.</li>
        <li>Set alert untuk burst login failure dan 5xx spike.</li>
      </ul>

      <h4 className="font-bold text-slate-800">5. Dependency Audit di CI</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-green-400">$ npm ci</p>
        <p className="text-green-400">$ npm audit --audit-level=high</p>
        <p className="text-green-400">$ npx snyk test</p>
      </div>

      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        <strong>Checklist Lulus SOP:</strong> sanitasi input aktif, CORS ketat, rate limit aktif, JWT aman,
        logging terkontrol, dan audit dependency dijalankan di pipeline.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada API Node.js"
        items={nodeCases}
      />
    </div>
  );
}
