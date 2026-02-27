export default function PhishingModal() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-sm text-amber-900"><strong>Statistik:</strong> Lebih dari 60% kerugian kredensial berawal dari manipulasi psikologis via email palsu. Phishing tetap menjadi vektor serangan #1 di Indonesia.</div>
      <h4 className="font-bold text-slate-800">1. Cara Mengenali Email Phishing</h4>
      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded text-sm shadow-sm">
        <p className="font-bold text-red-900 mb-3">Jangan Tertipu Perbedaan URL!</p>
        <span className="block font-mono text-xs">
          Asli: <span className="bg-green-200 px-1 rounded text-green-800">https://akademik.unuja.ac.id</span><br />
          Palsu: <span className="bg-red-200 px-1 rounded text-red-800">http://unuja-akademik.blogspot.com</span><br />
          Palsu: <span className="bg-red-200 px-1 rounded text-red-800">https://unuja.ac.id.login-secure.xyz</span>
        </span>
      </div>
      <h4 className="font-bold text-slate-800">2. Tanda-Tanda Email Mencurigakan</h4>
      <ul className="list-disc pl-5 font-medium space-y-2 text-sm text-slate-700">
        <li>Pengirim dari domain gratis (@gmail.com / @yahoo.com) yang mengaku petugas TI kampus.</li>
        <li>Subjek mendesak: &quot;AKUN AKAN DIBLOKIR&quot;, &quot;SEGERA VERIFIKASI&quot;.</li>
        <li>Link yang disingkat (bit.ly, tinyurl) atau domain asing.</li>
        <li>Lampiran file .exe, .scr, .bat, atau Office macro yang meminta &quot;Enable Content&quot;.</li>
        <li>Tata bahasa buruk dan logo kampus resolusi rendah.</li>
      </ul>
      <h4 className="font-bold text-slate-800">3. Langkah Verifikasi Sebelum Klik</h4>
      <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li><strong>Hover link:</strong> Arahkan mouse ke link tanpa klik. Periksa URL yang muncul di status bar browser.</li>
        <li><strong>Cek pengirim:</strong> Pastikan domain email sesuai (@unuja.ac.id), bukan @gmail atau domain mirip.</li>
        <li><strong>Konfirmasi langsung:</strong> Hubungi pengirim melalui jalur resmi (telepon/WhatsApp grup IT) untuk verifikasi.</li>
        <li><strong>Jangan unduh:</strong> Lampiran dari email tak dikenal TIDAK BOLEH dibuka.</li>
      </ol>
      <h4 className="font-bold text-slate-800">4. Jika Terlanjur Klik</h4>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
        <ol className="list-decimal pl-4 space-y-1 font-medium">
          <li>Segera ubah password akun SSO/email kampus.</li>
          <li>Aktifkan 2FA jika belum aktif.</li>
          <li>Laporkan ke CSIRT melalui email csirt@unuja.ac.id atau ekstensi PUSKOM.</li>
          <li>Screenshot halaman phishing sebagai bukti.</li>
        </ol>
      </div>
    </div>
  );
}
