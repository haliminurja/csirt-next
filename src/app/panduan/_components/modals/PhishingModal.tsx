import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const phishingCases: IssueMatrixItem[] = [
  {
    kondisi: 'Email mengatasnamakan rektorat meminta verifikasi akun',
    indikasi: 'Nada sangat mendesak, domain mirip tetapi bukan domain resmi kampus',
    dampak: 'Kredensial SSO bocor dan akun diambil alih',
    responCepat: 'Jangan klik tautan, forward email ke CSIRT, hapus email setelah dilaporkan',
    pencegahan: 'Biasakan verifikasi domain pengirim dan aktifkan 2FA',
  },
  {
    kondisi: 'Link pendaftaran/kuisioner meminta OTP',
    indikasi: 'Form meminta kode OTP/backup code atau password email',
    dampak: 'Bypass autentikasi dan takeover akun',
    responCepat: 'Tutup halaman, ganti password jika sempat input data, logout seluruh sesi',
    pencegahan: 'Tidak pernah membagikan OTP, termasuk ke pihak yang mengaku admin',
  },
  {
    kondisi: 'File lampiran tugas men-trigger macro',
    indikasi: 'Dokumen meminta enable content/enable macro',
    dampak: 'Malware loader berjalan di perangkat pengguna',
    responCepat: 'Jangan aktifkan macro, scan file, laporkan pengirim ke unit TI',
    pencegahan: 'Gunakan viewer aman dan blok macro dari sumber eksternal',
  },
  {
    kondisi: 'Akun sudah terlanjur login di situs palsu',
    indikasi: 'Setelah login diarahkan balik ke situs normal tanpa error',
    dampak: 'Pelaku telah menyimpan username/password korban',
    responCepat: 'Segera ganti password, aktifkan 2FA, laporkan waktu kejadian',
    pencegahan: 'Gunakan password manager yang hanya autofill di domain valid',
  },
];

export default function PhishingModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Kenapa penting:</strong> mayoritas kebocoran akun terjadi karena phishing, bukan karena sistem yang
        langsung dibobol.
      </div>

      <h4 className="font-bold text-slate-800">1. Cara Mengenali Domain Palsu</h4>
      <div className="rounded border-l-4 border-red-500 bg-red-50 p-5 text-sm shadow-sm">
        <p className="mb-3 font-bold text-red-900">Periksa URL asli, bukan hanya tampilan halaman.</p>
        <span className="block font-mono text-xs">
          Asli: <span className="rounded bg-green-200 px-1 text-green-800">https://akademik.unuja.ac.id</span><br />
          Palsu: <span className="rounded bg-red-200 px-1 text-red-800">http://unuja-akademik.blogspot.com</span><br />
          Palsu: <span className="rounded bg-red-200 px-1 text-red-800">https://unuja.ac.id.login-secure.xyz</span>
        </span>
      </div>

      <h4 className="font-bold text-slate-800">2. Tanda Email Mencurigakan</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Pengirim mengaku petugas kampus tetapi memakai domain gratis.</li>
        <li>Subjek panik: akun diblokir, nilai dibatalkan, atau denda segera.</li>
        <li>Meminta password, OTP, atau token secara langsung.</li>
        <li>Tautan dipendekkan (bit.ly/tinyurl) dan tidak transparan.</li>
        <li>Lampiran file executable atau dokumen macro yang meminta enable content.</li>
      </ul>

      <h4 className="font-bold text-slate-800">3. SOP Verifikasi Sebelum Klik</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Hover tautan dan cocokkan domain tujuan.</li>
        <li>Cek header email dan pastikan domain pengirim resmi.</li>
        <li>Validasi ke kanal resmi (helpdesk/WA unit) sebelum membuka link/lampiran.</li>
        <li>Jika ragu, jangan klik dan langsung laporkan ke CSIRT.</li>
      </ol>

      <h4 className="font-bold text-slate-800">4. Jika Terlanjur Klik atau Mengisi Data</h4>
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
        <ol className="list-decimal space-y-1 pl-4 font-medium">
          <li>Ganti password akun SSO/email secepatnya dari perangkat yang bersih.</li>
          <li>Logout paksa seluruh sesi aktif jika fitur tersedia.</li>
          <li>Aktifkan atau reset 2FA.</li>
          <li>Laporkan kronologi ke CSIRT dan lampirkan screenshot bukti.</li>
        </ol>
      </div>

      <h4 className="font-bold text-slate-800">5. Checklist Edukasi Dosen dan Mahasiswa</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Dosen: jangan kirim form publik yang meminta data sensitif tanpa verifikasi unit TI.</li>
        <li>Mahasiswa: jangan pernah bagikan OTP, password, atau kode recovery.</li>
        <li>Keduanya: wajib aktifkan 2FA dan cek aktivitas login secara berkala.</li>
      </ul>

      <IssueMatrix
        title="Kondisi Masalah Umum Terkait Phishing"
        items={phishingCases}
      />
    </div>
  );
}
