export default function NodejsModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Node.js/Express banyak digunakan untuk REST API dan microservices kampus. Berikut standar keamanan wajib yang harus diterapkan.</p>
      <h4 className="font-bold text-slate-800">1. NoSQL Injection Prevention (MongoDB)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ Rentan NoSQL Injection:`}</p>
        <p>{`db.users.find({ username: req.body.username, password: req.body.password })`}</p>
        <p className="text-slate-500">{`// Attacker bisa kirim: { "$gt": "" } sebagai password`}</p>
        <p className="mt-2 text-green-400">{`// ✅ WAJIB GUNAKAN SANITIZER:`}</p>
        <p>{`const mongoSanitize = require('express-mongo-sanitize');`}</p>
        <p>app.use(mongoSanitize());</p>
      </div>
      <h4 className="font-bold text-slate-800">2. Helmet, CORS &amp; Rate Limiting</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p>{`const helmet = require('helmet');`}</p>
        <p>{`const cors = require('cors');`}</p>
        <p>{`const rateLimit = require('express-rate-limit');`}</p>
        <p className="mt-2 text-green-400">app.use(helmet());</p>
        <p className="text-green-400">{`app.use(cors({ origin: 'https://siakad.unuja.ac.id', credentials: true }));`}</p>
        <p className="mt-2">{`const apiLimiter = rateLimit({`}</p>
        <p className="ml-4">{`windowMs: 15 * 60 * 1000, // 15 menit`}</p>
        <p className="ml-4">{`max: 100, // Maks 100 request per IP`}</p>
        <p className="ml-4">{`message: 'Too many requests, silakan coba lagi nanti'`}</p>
        <p>{`});`}</p>
        <p className="text-green-400">{`app.use('/api/', apiLimiter);`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. JWT Best Practices</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ JANGAN simpan secret di kode:`}</p>
        <p>{`jwt.sign(payload, 'rahasia123') // Hardcoded!`}</p>
        <p className="mt-2 text-green-400">{`// ✅ Gunakan env variable + expiry pendek:`}</p>
        <p>{`jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '15m' })`}</p>
        <p className="text-green-400 mt-2">{`// ✅ Verifikasi algorithm (cegah 'none' attack):`}</p>
        <p>{`jwt.verify(token, secret, { algorithms: ['HS256'] })`}</p>
      </div>
      <h4 className="font-bold text-slate-800">4. Dependency Audit</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Cek kerentanan dependency:</p>
        <p className="text-green-400">$ npm audit</p>
        <p className="text-green-400">$ npm audit fix</p>
        <p className="text-slate-500 mt-2"># Gunakan Snyk untuk scanning mendalam:</p>
        <p className="text-green-400">$ npx snyk test</p>
      </div>
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-sm text-emerald-800"><strong>Environment:</strong> Gunakan <code>dotenv</code> untuk konfigurasi, jangan commit file <code>.env</code> ke Git, dan pastikan <code>NODE_ENV=production</code> saat deploy.</div>
    </div>
  );
}
