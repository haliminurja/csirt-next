import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const pythonCases: IssueMatrixItem[] = [
  {
    kondisi: 'API menerima payload lalu service crash/menjalankan perilaku tidak wajar',
    indikasi: 'Terdapat input serialized biner atau object tak dikenal dari client',
    dampak: 'Potensi RCE dan denial of service pada service python',
    responCepat: 'Blok endpoint terkait, disable parser raw berisiko, rollback ke parser aman JSON',
    pencegahan: 'Larangan pickle/yaml unsafe untuk input eksternal, schema validation ketat',
  },
  {
    kondisi: 'Endpoint admin bisa diakses host yang tidak sah',
    indikasi: 'Request admin datang dari origin/domain di luar daftar resmi',
    dampak: 'Penyalahgunaan panel admin dan kebocoran data',
    responCepat: 'Perketat ALLOWED_HOSTS/CORS, batasi akses endpoint admin via VPN/internal',
    pencegahan: 'Pisahkan route admin, enforce authz bertingkat, audit akses rutin',
  },
  {
    kondisi: 'Dependency populer ternyata memiliki CVE kritis',
    indikasi: 'Laporan audit menunjukkan package dengan severity tinggi/kritis',
    dampak: 'Eksploitasi supply chain dan compromise aplikasi',
    responCepat: 'Freeze deployment, patch dependency, jalankan regression test, redeploy',
    pencegahan: 'Audit dependency di CI dan kebijakan update terjadwal dengan changelog review',
  },
  {
    kondisi: 'Dokumentasi API production terekspos publik',
    indikasi: '/docs atau /redoc dapat diakses anonim',
    dampak: 'Endpoint sensitif mudah dipetakan attacker',
    responCepat: 'Batasi docs dengan auth atau nonaktifkan di production',
    pencegahan: 'Pisahkan konfigurasi dev/prod dan checklist release wajib',
  },
];

export default function PythonModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-slate-600">
        Python digunakan luas untuk API, automasi, dan layanan data di kampus. SOP ini fokus pada celah kritis:
        deserialization, injection, salah konfigurasi production, dan dependency rentan.
      </p>

      <h4 className="font-bold text-slate-800">1. Hindari Deserialization Berbahaya</h4>
      <p className="mb-2 text-xs text-slate-500">
        Jangan gunakan <code>pickle.loads</code> untuk input eksternal karena dapat mengeksekusi kode.
      </p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400"># [X] RCE risk</p>
        <p>import pickle</p>
        <p>data = pickle.loads(request.body)</p>
        <p className="mt-2 text-green-400"># [OK] Gunakan JSON aman</p>
        <p>import json</p>
        <p>{`data = json.loads(request.body.decode('utf-8'))`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. SQL Safety Django/FastAPI</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400"># [X] Raw query rentan injection</p>
        <p>{`User.objects.raw(f"SELECT * FROM users WHERE nim='{nim}'")`}</p>
        <p className="mt-2 text-green-400"># [OK] Parameterized query</p>
        <p>{`User.objects.raw("SELECT * FROM users WHERE nim=%s", [nim])`}</p>
        <p className="text-green-400"># [OK] ORM</p>
        <p>{`User.objects.filter(nim=nim).first()`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. Konfigurasi Production Django</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p>DEBUG = False</p>
        <p>{`ALLOWED_HOSTS = ['siakad.unuja.ac.id']`}</p>
        <p>SECURE_SSL_REDIRECT = True</p>
        <p>SESSION_COOKIE_SECURE = True</p>
        <p>CSRF_COOKIE_SECURE = True</p>
        <p>SECURE_HSTS_SECONDS = 31536000</p>
        <p>{`SECRET_KEY = os.environ['DJANGO_SECRET_KEY']`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Dependency dan Supply Chain Control</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-green-400">$ python -m venv venv</p>
        <p className="text-green-400">$ pip install -r requirements.txt</p>
        <p className="text-green-400">$ pip install safety pip-audit</p>
        <p className="text-green-400">$ safety check --full-report</p>
        <p className="text-green-400">$ pip-audit</p>
      </div>

      <h4 className="font-bold text-slate-800">5. FastAPI Baseline</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Gunakan Pydantic model untuk validasi semua input request.</li>
        <li>Batasi CORS hanya ke domain resmi kampus.</li>
        <li>Nonaktifkan endpoint docs publik pada production jika tidak diperlukan.</li>
        <li>Tambahkan rate limiting dan timeout per endpoint sensitif.</li>
      </ul>

      <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-800">
        <strong>Checklist Lulus SOP:</strong> tidak ada pickle pada input eksternal, DEBUG mati, secret dari env,
        dependency diaudit, dan validasi input aktif pada seluruh endpoint.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum di Service Python"
        items={pythonCases}
      />
    </div>
  );
}
