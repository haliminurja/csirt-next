import Link from 'next/link';
import type { Metadata } from 'next';

const incidentEmail = 'csirt@unuja.ac.id';
const nonTechnicalSubject = '[NON-TEKNIS] Laporan Insiden - [Unit] - [Tanggal]';
const technicalSubject = '[TEKNIS] Laporan Insiden - [Sistem] - [Tanggal]';

const nonTechnicalTemplate = [
  'Halo Tim CSIRT UNUJA,',
  '',
  'Saya ingin melaporkan insiden NON-TEKNIS dengan data berikut:',
  '1) Nama pelapor dan jabatan:',
  '2) Unit/Fakultas:',
  '3) Kontak aktif (email/WA):',
  '4) Jenis kejadian (contoh: akun diambil alih, phishing, akses ditolak):',
  '5) Waktu kejadian (WIB):',
  '6) Kronologi singkat (apa yang terjadi, kapan, dan pada layanan apa):',
  '7) Dampak yang dirasakan (contoh: tidak bisa login, email mencurigakan, data berubah):',
  '8) Bukti terlampir (screenshot/foto/notifikasi):',
  '',
  'Terima kasih.',
].join('\n');

const technicalTemplate = [
  'Halo Tim CSIRT UNUJA,',
  '',
  'Saya melaporkan insiden TEKNIS dengan data awal berikut:',
  '1) Nama sistem + URL/IP/hostname terdampak:',
  '2) Lingkungan sistem (production/staging) dan stack (OS/web server/framework):',
  '3) Waktu kejadian pertama terdeteksi (WIB) dan waktu bukti log:',
  '4) Indikator kompromi (IOC): IP, domain, path, hash file, user account, atau process anomali:',
  '5) Potongan log penting (web/app/db/waf/auth) beserta rentang waktu:',
  '6) Dampak layanan saat ini (service down, defacement, data leak, slowdown, dll):',
  '7) Tindakan awal yang sudah dilakukan (isolasi host, revoke akun, block IP, restore backup):',
  '8) Bukti terlampir (log, screenshot, file IOC, timeline):',
  '',
  'Catatan: jika ada data sensitif, mohon samarkan data pribadi yang tidak relevan.',
  'Terima kasih.',
].join('\n');

const nonTechnicalMailto = `mailto:${incidentEmail}?subject=${encodeURIComponent('[NON-TEKNIS] Laporan Insiden')}&body=${encodeURIComponent(nonTechnicalTemplate)}`;
const technicalMailto = `mailto:${incidentEmail}?subject=${encodeURIComponent('[TEKNIS] Laporan Insiden')}&body=${encodeURIComponent(technicalTemplate)}`;

export const metadata: Metadata = {
  title: 'Lapor Insiden',
  description:
    'Panduan pelaporan insiden non-teknis dan teknis yang mudah dipahami, lengkap dengan checklist bukti wajib sebelum kirim email.',
};

export default function LaporInsidenPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-linear-to-r from-blue-50 via-white to-indigo-50 px-6 py-8 md:px-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Panduan Pelaporan Resmi</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Lapor Insiden dengan Benar dan Lengkap</h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              Halaman ini dibuat agar pengguna mudah melapor tanpa istilah yang membingungkan. Ikuti alur di bawah,
              siapkan bukti minimum, lalu kirim ke email resmi <span className="font-semibold text-slate-800">{incidentEmail}</span>.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
              Estimasi isi laporan: 3-7 menit
            </div>
          </div>

          <div className="border-b border-slate-200 bg-white px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">Alur Singkat (4 Langkah)</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
              {[
                { title: '1. Pilih Jalur', desc: 'Tentukan laporan Non-Teknis atau Teknis.' },
                { title: '2. Siapkan Bukti', desc: 'Kumpulkan bukti sesuai checklist wajib.' },
                { title: '3. Kirim Email', desc: 'Klik tombol email sesuai jenis laporan.' },
                { title: '4. Tunggu Triase', desc: 'Tim CSIRT menilai prioritas dan tindak lanjut.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
            <section className="rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-bold tracking-wide text-blue-700 uppercase">
                Non-Teknis
              </div>
              <h2 className="text-xl font-bold text-slate-900">Untuk Dosen, Tendik, Mahasiswa, dan Pengguna Umum</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Pilih jalur ini jika Anda melihat gejala mencurigakan tetapi tidak memiliki log teknis.
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">Data Minimum Wajib</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Nama pelapor, unit, dan kontak aktif.</li>
                <li>Waktu kejadian (WIB) dan kronologi singkat.</li>
                <li>Layanan/akun yang terdampak.</li>
                <li>Bukti screenshot/notifikasi yang relevan.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">Format subjek email:</p>
              <code className="mt-1 block rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">{nonTechnicalSubject}</code>
              <a
                href={nonTechnicalMailto}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                Kirim Laporan Non-Teknis via Email
              </a>
            </section>

            <section className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6">
              <div className="mb-4 inline-flex items-center rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-bold tracking-wide text-indigo-700 uppercase">
                Teknis
              </div>
              <h2 className="text-xl font-bold text-slate-900">Untuk PIC IT, Sysadmin, Developer, dan Tim Infrastruktur</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Pilih jalur ini jika Anda dapat menyertakan log, IOC, dan detail mitigasi awal.
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">Data Minimum Wajib</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>Nama sistem + URL/IP/hostname + lingkungan.</li>
                <li>Waktu kejadian dan rentang log (WIB).</li>
                <li>IOC: IP/domain/path/hash/user/process anomali.</li>
                <li>Dampak layanan dan langkah mitigasi awal.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">Format subjek email:</p>
              <code className="mt-1 block rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">{technicalSubject}</code>
              <a
                href={technicalMailto}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
              >
                Kirim Laporan Teknis via Email
              </a>
            </section>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-10">
            <h3 className="text-lg font-bold text-slate-900">Checklist Bukti Wajib Sebelum Kirim Email</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-900">Bukti Dasar (Semua Jalur)</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Waktu kejadian (tanggal + jam WIB).</li>
                  <li>Screenshot/foto kejadian yang jelas dan tidak blur.</li>
                  <li>Layanan/akun/perangkat yang terdampak.</li>
                  <li>Kronologi singkat: sebelum dan saat insiden muncul.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-bold text-slate-900">Tambahan Wajib (Jalur Teknis)</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  <li>Potongan log penting beserta rentang waktu.</li>
                  <li>IOC: IP/domain/hash/path/proses mencurigakan.</li>
                  <li>Status layanan: down/normal/intermiten.</li>
                  <li>Langkah mitigasi awal yang sudah dilakukan.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-bold">Jangan kirim data ini lewat email:</p>
              <p className="mt-1 leading-relaxed">password, OTP, private key, token rahasia, dan data pribadi yang tidak relevan. Samarkan data sensitif jika perlu.</p>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Jika layanan kampus kritikal sedang down total, tulis awalan <strong>[DARURAT]</strong> pada subjek email agar prioritas triase meningkat.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/layanan"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Lihat Alur Layanan
              </Link>
              <Link
                href="/panduan"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Baca Panduan Keamanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
