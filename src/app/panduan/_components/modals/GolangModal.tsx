import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const golangCases: IssueMatrixItem[] = [
  {
    kondisi: 'Race condition muncul acak di produksi',
    indikasi: 'Data mismatch, panic sporadis, hasil request inkonsisten',
    dampak: 'Korupsi data dan bug sulit direproduksi',
    responCepat: 'Jalankan build/test -race, isolate rilis terakhir, rollback jika perlu',
    pencegahan: 'Synchronous access via mutex/channel dan mandatory race test di CI',
  },
  {
    kondisi: 'Goroutine menumpuk terus',
    indikasi: 'Memori bertambah, goroutine count naik tanpa turun',
    dampak: 'Memory leak dan service crash',
    responCepat: 'Profiling pprof, pastikan context cancel terpanggil, stop worker idle',
    pencegahan: 'Standard timeout pada I/O dan pattern worker pool dengan shutdown hook',
  },
  {
    kondisi: 'Endpoint melambat karena query berat',
    indikasi: 'p95 latency tinggi, query timeout, DB CPU spike',
    dampak: 'Degradasi performa lintas layanan',
    responCepat: 'Optimasi query/index, batasi result set, caching untuk read endpoint',
    pencegahan: 'Observability query dan load test berkala sebelum release',
  },
  {
    kondisi: 'Secret bocor dari binary/config',
    indikasi: 'Credential hardcoded ditemukan saat review/security scan',
    dampak: 'Akses tidak sah ke DB, message broker, atau API eksternal',
    responCepat: 'Rotate secret segera, re-build binary, audit akses pasca kebocoran',
    pencegahan: 'Secret manager/env-only policy dan scanning secret di repositori',
  },
];

export default function GolangModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-slate-600">
        Go sering dipakai untuk service performa tinggi. Risiko utamanya adalah race condition, goroutine leak,
        input tidak tervalidasi, dan penggunaan query raw yang rentan injection.
      </p>

      <h4 className="font-bold text-slate-800">1. Race Condition dan Goroutine Leak</h4>
      <p className="mb-2 text-xs text-slate-500">
        Jalankan mode race detector di tahap testing dan build untuk endpoint kritis.
      </p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-green-400">$ go test -race ./...</p>
        <p className="text-green-400">$ go build -race ./cmd/api</p>
        <p className="text-slate-500 mt-2"># Gunakan context timeout agar goroutine tidak menggantung</p>
        <p>{`ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)`}</p>
        <p>defer cancel()</p>
      </div>

      <h4 className="font-bold text-slate-800">2. SQL Injection Prevention</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-red-400">{`// [X] String concat rentan SQL injection`}</p>
        <p>{`db.Raw("SELECT * FROM users WHERE name = '" + userName + "'").Scan(&result)`}</p>
        <p className="mt-2 text-green-400">{`// [OK] Parameterized query`}</p>
        <p>{`db.Where("name = ?", userName).First(&user)`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. Input Validation dan HTTP Hardening</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p>{`import "github.com/go-playground/validator/v10"`}</p>
        <p>{`type LoginRequest struct {`}</p>
        <p className="ml-4">{`Username string ` + "`json:\"username\" validate:\"required,min=3,max=50\"`"}</p>
        <p className="ml-4">{`Password string ` + "`json:\"password\" validate:\"required,min=8\"`"}</p>
        <p>{`}`}</p>
        <p className="text-slate-500 mt-2"># Terapkan read/write timeout server</p>
        <p>{`srv := &http.Server{ ReadTimeout: 10 * time.Second, WriteTimeout: 15 * time.Second }`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. TLS dan Secrets Management</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p>{`tlsConfig := &tls.Config{ MinVersion: tls.VersionTLS12 }`}</p>
        <p>{`dbPass := os.Getenv("DB_PASSWORD")`}</p>
        <p>{`jwtSecret := os.Getenv("JWT_SECRET")`}</p>
      </div>

      <h4 className="font-bold text-slate-800">5. Security Scan di Pipeline</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-green-400">$ go install github.com/securego/gosec/v2/cmd/gosec@latest</p>
        <p className="text-green-400">$ gosec ./...</p>
        <p className="text-green-400">$ go install golang.org/x/vuln/cmd/govulncheck@latest</p>
        <p className="text-green-400">$ govulncheck ./...</p>
      </div>

      <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm text-cyan-800">
        <strong>Checklist Lulus SOP:</strong> race test dijalankan, query diparameterisasi, input tervalidasi,
        TLS minimum 1.2, secret dari env, dan gosec/govulncheck aktif di CI.
      </div>

      <IssueMatrix
        title="Kondisi Masalah pada Service Golang"
        items={golangCases}
      />
    </div>
  );
}
