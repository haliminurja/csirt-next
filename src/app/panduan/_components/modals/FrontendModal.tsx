export default function FrontendModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Serangan XSS (Cross-Site Scripting) memungkinkan penyerang menyisipkan kode JavaScript berbahaya yang berjalan di browser korban — mencuri cookie, session, dan data pribadi.</p>
      <h4 className="font-bold text-slate-800">1. Waspadai XSS via DOM (React/Vue)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-red-400">{`// ❌ REACT (SANGAT BERBAHAYA):`}</p>
        <p>{`<div dangerouslySetInnerHTML={{ __html: userInput }} />`}</p>
        <p className="text-red-400 mt-2">{`// ❌ VUE (SAMA BERBAHAYANYA):`}</p>
        <p>{`<div v-html="userInput"></div>`}</p>
        <p className="mt-3 text-emerald-500">{`// ✅ WAJIB gunakan DOMPurify:`}</p>
        <p>{`import DOMPurify from 'dompurify';`}</p>
        <p>{`const clean = DOMPurify.sanitize(userInput);`}</p>
        <p>{`<div dangerouslySetInnerHTML={{ __html: clean }} />`}</p>
      </div>
      <h4 className="font-bold text-slate-800">2. Token Storage: HttpOnly Cookie, Bukan LocalStorage!</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <p className="text-sm font-bold text-red-800 mb-2">{`❌ LocalStorage (Rentan XSS)`}</p>
          <ul className="text-xs text-red-700 space-y-1">
            <li>Bisa dibaca oleh JavaScript manapun</li>
            <li>Satu XSS = semua token tercuri</li>
            <li>Tidak ada expiry otomatis</li>
          </ul>
        </div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <p className="text-sm font-bold text-green-800 mb-2">{`✅ HttpOnly Cookie (Aman)`}</p>
          <ul className="text-xs text-green-700 space-y-1">
            <li>Tidak bisa diakses JavaScript</li>
            <li>Otomatis dikirim oleh browser</li>
            <li>Mendukung SameSite &amp; Secure flag</li>
          </ul>
        </div>
      </div>
      <h4 className="font-bold text-slate-800">3. Content Security Policy (CSP) di Frontend</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500">{`<!-- Meta tag CSP untuk SPA: -->`}</p>
        <p className="text-green-400">{`<meta http-equiv="Content-Security-Policy"`}</p>
        <p className="text-green-400 ml-4">{`content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;">`}</p>
      </div>
      <h4 className="font-bold text-slate-800">4. Hindari Dependency Berbahaya</h4>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
        <li>Audit <code>package.json</code> secara rutin dengan <code>npm audit</code>.</li>
        <li>Jangan install package npm yang tidak terverifikasi atau memiliki download rendah.</li>
        <li>Pin versi dependency di <code>package-lock.json</code> untuk mencegah supply chain attack.</li>
        <li>Gunakan <strong>Subresource Integrity (SRI)</strong> untuk semua CDN external.</li>
      </ul>
    </div>
  );
}
