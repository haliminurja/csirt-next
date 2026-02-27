export default function PrivacyModal() {
  return (
    <div className="space-y-6">
      <div className="bg-rose-50 border-l-4 border-rose-500 p-4 rounded text-sm text-rose-900"><strong>UU PDP No. 27 Tahun 2022:</strong> Pelanggaran perlindungan data pribadi dapat dikenakan sanksi pidana penjara hingga 5 tahun dan/atau denda hingga Rp 5 miliar.</div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-rose-100 shadow-sm rounded-2xl">
          <h4 className="font-bold text-slate-800 mb-3">Instruksi Dosen / Staff BAAK</h4>
          <ul className="list-disc pl-4 text-sm text-slate-600 space-y-2">
            <li><strong>JANGAN MEMBUKA</strong> Google Form publik yang meminta KTP + KK berbarengan.</li>
            <li>Jangan publikasi NIM bersama Nama &amp; IPK bersamaan di papan pengumuman terbuka.</li>
            <li>Hapus File Excel ujian dari laptop pribadi setelah terekam di sistem.</li>
            <li>Gunakan fitur &quot;Restrict Access&quot; di Google Drive untuk dokumen sensitif.</li>
            <li>Enkripsi file yang mengandung data mahasiswa sebelum kirim via email.</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-slate-100 shadow-sm rounded-2xl">
          <h4 className="font-bold text-slate-800 mb-3">Instruksi Mahasiswa</h4>
          <ul className="list-disc pl-4 text-sm text-slate-600 space-y-2">
            <li><strong>Wajib Beri Watermark</strong> pada foto KTP saat upload (tulis &quot;Untuk Pendaftaran X&quot;).</li>
            <li>Gunakan Password unik minimal 12 Karakter + huruf besar + simbol.</li>
            <li>Aktifkan <strong>2-Factor Authentication (2FA)</strong> di akun SSO kampus.</li>
            <li>Jangan share akun SSO/e-Learning ke teman/siapapun.</li>
            <li>Gunakan <strong>Password Manager</strong> (Bitwarden/1Password) untuk mengelola password unik per-akun.</li>
          </ul>
        </div>
      </div>
      <h4 className="font-bold text-slate-800">Klasifikasi Data Kampus</h4>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center"><p className="text-sm font-bold text-red-700">RAHASIA</p><p className="text-xs text-slate-600 mt-1">KTP, KK, Nilai, Data Keuangan</p></div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-center"><p className="text-sm font-bold text-amber-700">TERBATAS</p><p className="text-xs text-slate-600 mt-1">NIM, Jadwal, Absensi, Email</p></div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-center"><p className="text-sm font-bold text-green-700">PUBLIK</p><p className="text-xs text-slate-600 mt-1">Nama Prodi, Kalender Akademik</p></div>
      </div>
      <h4 className="font-bold text-slate-800">Cara Setup 2FA di Akun SSO</h4>
      <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li>Login ke portal SSO kampus → klik &quot;Keamanan Akun&quot; → &quot;Verifikasi 2 Langkah&quot;.</li>
        <li>Install aplikasi <strong>Google Authenticator</strong> atau <strong>Microsoft Authenticator</strong> di HP.</li>
        <li>Scan QR Code yang ditampilkan oleh portal SSO.</li>
        <li>Masukkan 6-digit kode dari aplikasi untuk konfirmasi.</li>
        <li>Simpan <strong>backup codes</strong> di tempat aman (bukan di HP yang sama).</li>
      </ol>
    </div>
  );
}
