export default function LaravelModal() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-sm text-amber-900"><strong>Statistik:</strong> Lebih dari 80% peretasan web kampus Indonesia berawal dari kerentanan OWASP Top 10 (Injection, Broken Auth, IDOR). Laravel menyediakan proteksi bawaan — namun sering dilewati oleh developer.</div>
      <h4 className="font-bold text-slate-800">1. Kesalahan IDOR (Insecure Direct Object Reference)</h4>
      <p className="text-slate-500 text-xs mb-2">Penyerang mengubah parameter ID/NIM di URL untuk mengakses data orang lain.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ CONTROLLER SANGAT BURUK (siapa saja bisa ganti NIM)`}</p>
        <p>{`$nim = $request->query('nim');`}</p>
        <p>{`$krs = KrsModel::where('nim', $nim)->get();`}</p>
        <p className="mt-3 text-green-400">{`// ✅ SOLUSI BENAR (identitas dari sesi auth)`}</p>
        <p>{`$nim = auth()->user()->nim;`}</p>
        <p>{`$krs = KrsModel::where('nim', $nim)->get();`}</p>
      </div>
      <h4 className="font-bold text-slate-800">2. SQL Injection Prevention</h4>
      <p className="text-slate-500 text-xs mb-2">Selalu gunakan Eloquent ORM atau Query Builder — JANGAN pernah concat string ke query.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ RAW QUERY TANPA BINDING (SQL Injection!)`}</p>
        <p>{`DB::select("SELECT * FROM mahasiswa WHERE nim = '$nim'");`}</p>
        <p className="mt-3 text-green-400">{`// ✅ PARAMETERIZED QUERY`}</p>
        <p>{`DB::select("SELECT * FROM mahasiswa WHERE nim = ?", [$nim]);`}</p>
        <p className="text-green-400">{`// ✅ ELOQUENT ORM (paling aman)`}</p>
        <p>{`Mahasiswa::where('nim', $nim)->firstOrFail();`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. XSS &amp; Blade Escaping</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ JANGAN (output mentah tanpa escaping)`}</p>
        <p>{`{!! $user->bio !!}`} <span className="text-slate-500">{`// XSS terbuka lebar!`}</span></p>
        <p className="mt-3 text-green-400">{`// ✅ WAJIB (Blade auto-escape)`}</p>
        <p>{`{{ $user->bio }}`} <span className="text-slate-500">{`// aman karena htmlspecialchars()`}</span></p>
      </div>
      <h4 className="font-bold text-slate-800">4. CSRF &amp; Mass-Assignment</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-blue-400">{`// Form WAJIB pakai @csrf token:`}</p>
        <p>{`<form action="/submit-nilai" method="POST">`}</p>
        <p className="text-green-400 ml-4">@csrf</p>
        <p className="ml-4">{`<input type="text" name="nilai">`}</p>
        <p>{`</form>`}</p>
        <p className="mt-4 text-blue-400">{`// Model WAJIB definisikan $fillable (anti Mass-Assignment):`}</p>
        <p className="text-green-400">{`protected $fillable = ['nama', 'email', 'nilai'];`}</p>
        <p className="text-red-400">{`// JANGAN PAKAI: protected $guarded = [];`}</p>
      </div>
      <h4 className="font-bold text-slate-800">5. Proteksi File .env &amp; Rate Limiting</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Blok akses .env di Nginx:</p>
        <p className="text-green-400">{`location ~ /\\.env { deny all; return 404; }`}</p>
        <p className="text-slate-500 mt-3"># Rate Limiting API (app/Providers/RouteServiceProvider.php):</p>
        <p className="text-green-400">{`RateLimiter::for('api', function (Request $request) {`}</p>
        <p className="text-green-400 ml-4">{`return Limit::perMinute(60)->by($request->ip());`}</p>
        <p className="text-green-400">{`});`}</p>
      </div>
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-sm text-indigo-800"><strong>Checklist Wajib Sebelum Deploy:</strong> ✅ APP_DEBUG=false ✅ APP_ENV=production ✅ Rate limiting aktif ✅ CSRF middleware aktif ✅ .env tidak bisa diakses publik ✅ Semua model punya $fillable</div>
    </div>
  );
}
