export default function GolangModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Go digunakan untuk service berkinerja tinggi. Isu utama: race condition pada goroutine dan SQL injection saat menggunakan raw query.</p>
      <h4 className="font-bold text-slate-800">1. Goroutine Leaks &amp; Race Detection</h4>
      <p className="text-slate-500 text-xs mb-2">Race condition menyebabkan data korup yang sulit di-debug. Selalu test dengan flag <code>-race</code>.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-green-400">$ go test -race ./...</p>
        <p className="text-green-400">$ go build -race main.go</p>
        <p className="text-slate-500 mt-2"># Gunakan context untuk timeout goroutine:</p>
        <p>{`ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)`}</p>
        <p>defer cancel()</p>
      </div>
      <h4 className="font-bold text-slate-800">2. SQL Injection Prevention (GORM)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ FATAL SQLI (string concat):`}</p>
        <p>{`db.Raw("SELECT * FROM users WHERE name = '" + userName + "'").Scan(&result)`}</p>
        <p className="mt-2 text-green-400">{`// ✅ AMAN (Parameterized):`}</p>
        <p>{`db.Where("name = ?", userName).First(&user)`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. Input Validation &amp; TLS Config</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500">{`// Gunakan validator untuk struct:`}</p>
        <p>{`import "github.com/go-playground/validator/v10"`}</p>
        <p>{`type LoginRequest struct {`}</p>
        <p className="ml-4">{`Username string \`json:"username" validate:"required,min=3,max=50"\``}</p>
        <p className="ml-4">{`Password string \`json:"password" validate:"required,min=8"\``}</p>
        <p>{`}`}</p>
        <p className="text-slate-500 mt-2">{`// TLS minimum version:`}</p>
        <p>{`tlsConfig := &tls.Config{ MinVersion: tls.VersionTLS12 }`}</p>
      </div>
      <h4 className="font-bold text-slate-800">4. Security Scanning</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Static analysis untuk kerentanan:</p>
        <p className="text-green-400">$ go install github.com/securego/gosec/v2/cmd/gosec@latest</p>
        <p className="text-green-400">$ gosec ./...</p>
        <p className="text-slate-500 mt-2"># Audit dependency:</p>
        <p className="text-green-400">$ go install golang.org/x/vuln/cmd/govulncheck@latest</p>
        <p className="text-green-400">$ govulncheck ./...</p>
      </div>
    </div>
  );
}
