import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const privacyCases: IssueMatrixItem[] = [
  {
    kondisi: 'Data mahasiswa tersebar di grup publik',
    indikasi: 'Spreadsheet/rekap berisi NIM, nilai, atau dokumen identitas dibagikan bebas',
    dampak: 'Pelanggaran privasi dan potensi penyalahgunaan data',
    responCepat: 'Tarik akses file, hapus salinan publik, laporkan insiden ke PIC data',
    pencegahan: 'Klasifikasi data dan kontrol akses berbasis peran sejak awal',
  },
  {
    kondisi: 'Dokumen identitas digunakan ulang di luar tujuan',
    indikasi: 'Foto KTP tanpa watermark beredar pada proses lain',
    dampak: 'Penyalahgunaan identitas untuk akun/layanan lain',
    responCepat: 'Minta pemilik data ganti dokumen jika perlu, audit alur distribusi dokumen',
    pencegahan: 'Watermark tujuan spesifik pada dokumen identitas dan retensi ketat',
  },
  {
    kondisi: 'Akun bersama dipakai untuk input data sensitif',
    indikasi: 'Banyak operator menggunakan 1 akun yang sama',
    dampak: 'Tidak ada jejak audit jelas dan sulit investigasi',
    responCepat: 'Hentikan akun bersama, buat akun individual, reset credential',
    pencegahan: 'Kebijakan identitas tunggal per petugas + logging aktivitas',
  },
  {
    kondisi: 'Perangkat pribadi menyimpan data sensitif tanpa enkripsi',
    indikasi: 'File data mahasiswa tersimpan di laptop/flashdisk tanpa proteksi',
    dampak: 'Kebocoran jika perangkat hilang/terinfeksi malware',
    responCepat: 'Pindahkan ke repositori aman, enkripsi media, hapus salinan lokal',
    pencegahan: 'Endpoint encryption policy dan larangan penyimpanan lokal tanpa izin',
  },
];

export default function PrivacyModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-rose-500 bg-rose-50 p-4 text-sm text-rose-900">
        <strong>Dasar hukum:</strong> perlindungan data pribadi wajib diterapkan sesuai UU PDP No. 27 Tahun 2022
        dan kebijakan internal universitas.
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h4 className="mb-3 font-bold text-slate-800">Instruksi Dosen dan Staff</h4>
          <ul className="list-disc space-y-2 pl-4 text-sm text-slate-600">
            <li>Jangan membagikan data sensitif mahasiswa di grup publik.</li>
            <li>Gunakan akses berbasis peran pada Drive atau LMS.</li>
            <li>Hindari menyimpan data akademik sensitif di perangkat pribadi tanpa enkripsi.</li>
            <li>Hapus file sementara setelah proses administrasi selesai.</li>
            <li>Verifikasi legal basis sebelum meminta salinan KTP/KK.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <h4 className="mb-3 font-bold text-slate-800">Instruksi Mahasiswa</h4>
          <ul className="list-disc space-y-2 pl-4 text-sm text-slate-600">
            <li>Tambahkan watermark tujuan saat upload identitas (contoh: Untuk Beasiswa 2026).</li>
            <li>Gunakan password unik minimal 12 karakter untuk tiap layanan.</li>
            <li>Aktifkan 2FA pada akun SSO, email, dan aplikasi penting lain.</li>
            <li>Jangan membagikan akun e-learning ke orang lain.</li>
            <li>Gunakan password manager untuk menyimpan kredensial.</li>
          </ul>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">Klasifikasi Data Kampus</h4>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-red-100 bg-red-50 p-3 text-center">
          <p className="text-sm font-bold text-red-700">RAHASIA</p>
          <p className="mt-1 text-xs text-slate-600">KTP, KK, nilai, data keuangan, data kesehatan</p>
        </div>
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-3 text-center">
          <p className="text-sm font-bold text-amber-700">TERBATAS</p>
          <p className="mt-1 text-xs text-slate-600">NIM, absensi, jadwal, email institusi</p>
        </div>
        <div className="rounded-xl border border-green-100 bg-green-50 p-3 text-center">
          <p className="text-sm font-bold text-green-700">PUBLIK</p>
          <p className="mt-1 text-xs text-slate-600">Profil prodi, kalender akademik, pengumuman umum</p>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">SOP Penanganan Dokumen Sensitif</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Kumpulkan data seperlunya (data minimization).</li>
        <li>Simpan di repository yang memiliki kontrol akses.</li>
        <li>Enkripsi dokumen saat dikirim antar unit.</li>
        <li>Tetapkan masa retensi dan lakukan pemusnahan terjadwal.</li>
        <li>Catat siapa yang mengakses data untuk kebutuhan audit.</li>
      </ol>

      <h4 className="font-bold text-slate-800">Cara Setup 2FA Akun SSO</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Login ke portal SSO kampus, lalu buka menu keamanan akun.</li>
        <li>Pilih verifikasi 2 langkah dan scan QR menggunakan aplikasi authenticator.</li>
        <li>Masukkan kode 6 digit dari aplikasi untuk aktivasi.</li>
        <li>Simpan backup codes di lokasi terpisah yang aman.</li>
      </ol>

      <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        <strong>Checklist Lulus SOP:</strong> data sensitif diberi klasifikasi, akses dibatasi per peran, 2FA aktif,
        dan dokumen sensitif tidak dibagikan di kanal publik.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum Perlindungan Data Pribadi"
        items={privacyCases}
      />
    </div>
  );
}
