export default function PythonModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Python banyak digunakan untuk sistem Machine Learning, API backend, dan web scraping di lingkungan kampus. Panduan ini mencakup kerentanan kritis yang sering terabaikan.</p>
      <h4 className="font-bold text-slate-800">1. Bahaya Deserialization (Insecure Pickle)</h4>
      <p className="text-slate-500 text-xs mb-2">Pickle dapat mengeksekusi kode arbitrer saat deserialisasi. Jangan pernah gunakan untuk data dari luar.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400"># SANGAT FATAL (Arbitrary Code Execution):</p>
        <p>import pickle</p>
        <p>data = pickle.loads(request.body) <span className="text-slate-500"># RCE!</span></p>
        <p className="mt-2 text-green-400"># SOLUSI BENAR:</p>
        <p>import json</p>
        <p>{`data = json.loads(request.body.decode('utf-8'))`}</p>
      </div>
      <h4 className="font-bold text-slate-800">2. Django ORM Safety &amp; Raw Query</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400"># SQL Injection via raw query:</p>
        <p>{`User.objects.raw(f"SELECT * FROM users WHERE nim='{nim}'")`}</p>
        <p className="mt-2 text-green-400"># AMAN (parameterized):</p>
        <p>{`User.objects.raw("SELECT * FROM users WHERE nim=%s", [nim])`}</p>
        <p className="text-green-400"># PALING AMAN (ORM):</p>
        <p>{`User.objects.filter(nim=nim).first()`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. Konfigurasi Production Django</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># settings.py (PRODUCTION)</p>
        <p className="text-green-400">DEBUG = False</p>
        <p className="text-green-400">{`ALLOWED_HOSTS = ['siakad.unuja.ac.id']`}</p>
        <p className="text-green-400">SECURE_SSL_REDIRECT = True</p>
        <p className="text-green-400">SESSION_COOKIE_SECURE = True</p>
        <p className="text-green-400">CSRF_COOKIE_SECURE = True</p>
        <p className="text-green-400">SECURE_HSTS_SECONDS = 31536000</p>
        <p className="text-green-400">SECURE_HSTS_INCLUDE_SUBDOMAINS = True</p>
        <p className="text-green-400">{`SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')`} <span className="text-slate-500"># dari .env!</span></p>
      </div>
      <h4 className="font-bold text-slate-800">4. Dependency Scanning &amp; Virtual Environment</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Audit kerentanan dependency:</p>
        <p className="text-green-400">$ pip install safety</p>
        <p className="text-green-400">$ safety check --full-report</p>
        <p className="text-slate-500 mt-2"># Selalu gunakan virtual environment:</p>
        <p className="text-green-400">$ python -m venv venv</p>
        <p className="text-green-400">$ source venv/bin/activate</p>
        <p className="text-green-400">$ pip freeze {'>'} requirements.txt</p>
      </div>
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-800"><strong>FastAPI:</strong> Gunakan <code>Pydantic</code> untuk validasi input otomatis, aktifkan CORS hanya untuk domain kampus, dan jangan expose <code>/docs</code> endpoint di production.</div>
    </div>
  );
}
