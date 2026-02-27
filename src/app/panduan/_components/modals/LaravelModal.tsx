import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const laravelCases: IssueMatrixItem[] = [
  {
    kondisi: 'User dapat membaca data milik user lain',
    indikasi: 'ID/NIM di URL bisa diubah lalu data tetap tampil',
    dampak: 'Kebocoran data akademik dan potensi pelanggaran privasi',
    responCepat: 'Nonaktifkan endpoint rentan, paksa akses berbasis auth user, audit log akses 24 jam terakhir',
    pencegahan: 'Gunakan policy/authorization di setiap resource sensitif, hindari trust pada parameter client',
  },
  {
    kondisi: 'Database error aneh saat input karakter khusus',
    indikasi: 'Input seperti quote/simbol membuat query gagal atau mengembalikan data berlebih',
    dampak: 'Risiko SQL injection dan kebocoran isi tabel',
    responCepat: 'Blok endpoint, cek query raw, ganti ke parameterized/Eloquent, rotate kredensial DB',
    pencegahan: 'Larangan query concat, code review wajib untuk query SQL, SAST di pipeline CI',
  },
  {
    kondisi: 'Script tak dikenal tampil di halaman profil/forum',
    indikasi: 'Terdapat alert popup atau request eksternal yang tidak dikenal',
    dampak: 'Pencurian session, deface konten, akun admin diambil alih',
    responCepat: 'Sanitasi konten tersimpan, logout semua sesi aktif, pasang CSP ketat, audit input HTML',
    pencegahan: 'Escape output by default, whitelist HTML jika perlu rich text, gunakan sanitizer tepercaya',
  },
  {
    kondisi: 'Perubahan data terjadi tanpa aksi user',
    indikasi: 'Ada request POST/PUT dari origin asing namun user merasa tidak klik apa pun',
    dampak: 'Aksi ilegal pada akun pengguna melalui CSRF',
    responCepat: 'Pastikan middleware CSRF aktif, validasi origin/referer pada endpoint kritis',
    pencegahan: 'Semua form pakai token CSRF, gunakan SameSite cookie, pisahkan endpoint public/private',
  },
  {
    kondisi: '.env atau config sensitif bisa diakses publik',
    indikasi: 'URL /.env menampilkan isi variabel aplikasi',
    dampak: 'Kebocoran password DB, APP_KEY, API key dan pengambilalihan sistem',
    responCepat: 'Segera blok akses di web server, rotate semua secret, invalidate session dan token',
    pencegahan: 'Hardening Nginx/Apache, deploy check otomatis untuk file sensitif, secret manager terpusat',
  },
];

export default function LaravelModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Fokus SOP Laravel:</strong> mencegah OWASP Top 10 yang paling sering terjadi pada aplikasi kampus
        (IDOR, injection, XSS, CSRF, dan salah konfigurasi production).
      </div>

      <h4 className="font-bold text-slate-800">1. Cegah IDOR (Insecure Direct Object Reference)</h4>
      <p className="mb-2 text-xs text-slate-500">
        Jangan ambil identitas objek sensitif dari query string jika objek terkait akun pengguna aktif.
      </p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] Rentan: user bisa ganti NIM di URL`}</p>
        <p>{`$nim = $request->query('nim');`}</p>
        <p>{`$krs = KrsModel::where('nim', $nim)->get();`}</p>
        <p className="mt-3 text-green-400">{`// [OK] Gunakan identitas dari sesi login`}</p>
        <p>{`$nim = auth()->user()->nim;`}</p>
        <p>{`$krs = KrsModel::where('nim', $nim)->get();`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Cegah SQL Injection</h4>
      <p className="mb-2 text-xs text-slate-500">Gunakan Query Builder atau Eloquent, hindari string concat SQL.</p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] Raw query rentan`}</p>
        <p>{`DB::select("SELECT * FROM mahasiswa WHERE nim = '$nim'");`}</p>
        <p className="mt-3 text-green-400">{`// [OK] Parameterized query`}</p>
        <p>{`DB::select("SELECT * FROM mahasiswa WHERE nim = ?", [$nim]);`}</p>
        <p className="text-green-400">{`// [OK] Eloquent`}</p>
        <p>{`Mahasiswa::where('nim', $nim)->firstOrFail();`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. XSS, CSRF, dan Mass Assignment</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] Output mentah berisiko XSS`}</p>
        <p>{`{!! $user->bio !!}`}</p>
        <p className="mt-2 text-green-400">{`// [OK] Gunakan escape default Blade`}</p>
        <p>{`{{ $user->bio }}`}</p>
        <p className="mt-3 text-green-400">{`// [OK] Form wajib CSRF token`}</p>
        <p>{`<form method="POST">@csrf ... </form>`}</p>
        <p className="mt-3 text-green-400">{`// [OK] Batasi kolom yang bisa diisi massal`}</p>
        <p>{`protected $fillable = ['nama', 'email', 'nilai'];`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Konfigurasi Production Wajib</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p>APP_ENV=production</p>
        <p>APP_DEBUG=false</p>
        <p>LOG_LEVEL=warning</p>
        <p>{`APP_URL=https://siakad.unuja.ac.id`}</p>
        <p className="mt-2 text-green-400">{`# Nginx blok akses file rahasia`}</p>
        <p>{`location ~ /(\\.env|composer\\.(json|lock)|artisan) { deny all; return 404; }`}</p>
      </div>

      <h4 className="font-bold text-slate-800">5. Rate Limit, Audit, dan CI Security</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-green-400">{`RateLimiter::for('api', function (Request $request) {`}</p>
        <p className="ml-4">{`return Limit::perMinute(60)->by($request->ip());`}</p>
        <p className="text-green-400">{`});`}</p>
        <p className="mt-2 text-slate-500"># Tambahkan ke pipeline CI:</p>
        <p className="text-green-400">$ composer audit</p>
        <p className="text-green-400">$ php artisan test</p>
      </div>

      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-800">
        <strong>Checklist Sebelum Deploy:</strong> APP_DEBUG mati, CSRF aktif, model pakai fillable, rate limit aktif,
        file rahasia tidak dapat diakses publik, dan audit dependency sudah dijalankan.
      </div>

      <IssueMatrix
        title="Kondisi Masalah yang Sering Terjadi di Laravel/PHP"
        items={laravelCases}
      />
    </div>
  );
}
