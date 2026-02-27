import Link from 'next/link';
import type { Metadata } from 'next';
import ReportActions from './_components/ReportActions';
import QuickTemplateCard from './_components/QuickTemplateCard';

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
const nonTechnicalChecklist = [
  'Saya sudah isi identitas pelapor dan unit.',
  'Saya sudah tulis waktu kejadian (WIB).',
  'Saya sudah lampirkan screenshot/notifikasi yang relevan.',
];
const technicalChecklist = [
  'Saya sudah isi URL/IP/hostname dan lingkungan sistem.',
  'Saya sudah sertakan log + rentang waktu kejadian.',
  'Saya sudah tulis IOC dan langkah mitigasi awal.',
];
const faqItems = [
  {
    q: 'Kapan saya pilih jalur Non-Teknis?',
    a: 'Pilih Non-Teknis jika Anda tidak memiliki log teknis, namun mengalami gejala seperti akun bermasalah, email phishing, atau akses layanan tidak normal.',
  },
  {
    q: 'Kapan saya pilih jalur Teknis?',
    a: 'Pilih Teknis jika Anda punya bukti teknis seperti log, IOC, detail host/IP, dan status mitigasi awal dari tim IT/unit.',
  },
  {
    q: 'Boleh kirim ulang laporan?',
    a: 'Boleh. Jika ada bukti baru, balas pada thread email yang sama agar riwayat kasus tetap utuh dan mudah ditelusuri.',
  },
  {
    q: 'Apakah wajib menyertakan screenshot?',
    a: 'Sangat disarankan. Bukti visual mempercepat validasi awal. Untuk jalur teknis, log tetap lebih prioritas dibanding screenshot saja.',
  },
  {
    q: 'Jika saya salah pilih jalur, bagaimana?',
    a: 'Tetap kirim sesuai data yang Anda punya. Tim CSIRT akan mengarahkan klasifikasi kasus saat triase awal.',
  },
  {
    q: 'Bisa kirim lewat selain email?',
    a: 'Untuk saat ini kanal resmi pelaporan adalah email ke csirt@unuja.ac.id agar arsip dan audit trail terjaga rapi.',
  },
];
const quickCaseTemplates = [
  {
    title: 'Email Phishing atau Link Mencurigakan',
    audience: 'Non-Teknis',
    description: 'Untuk laporan email/WA/tautan yang mencurigakan, mengaku admin, atau meminta OTP/password.',
    subject: '[NON-TEKNIS][PHISHING] Laporan Tautan/Email Mencurigakan - [Unit] - [Tanggal]',
    body: [
      'Halo Tim CSIRT UNUJA,',
      '',
      'Saya melaporkan indikasi PHISHING dengan data berikut:',
      '1) Nama pelapor dan unit:',
      '2) Waktu menerima pesan/email (WIB):',
      '3) Kanal asal (email/WA/telegram/dll):',
      '4) Ringkasan isi pesan mencurigakan:',
      '5) Apakah ada link diklik / file diunduh: Ya/Tidak',
      '6) Bukti lampiran: screenshot pesan + header email (jika ada)',
      '',
      'Mohon tindak lanjut. Terima kasih.',
    ].join('\n'),
  },
  {
    title: 'Akun Diambil Alih (Account Takeover)',
    audience: 'Non-Teknis / Teknis',
    description: 'Untuk kasus akun email/sistem login tiba-tiba berubah, tidak bisa diakses, atau ada aktivitas asing.',
    subject: '[DARURAT][AKUN] Dugaan Account Takeover - [Nama Akun] - [Tanggal]',
    body: [
      'Halo Tim CSIRT UNUJA,',
      '',
      'Saya melaporkan dugaan ACCOUNT TAKEOVER:',
      '1) Akun terdampak (username/email):',
      '2) Unit/Fakultas:',
      '3) Waktu mulai gejala (WIB):',
      '4) Gejala yang muncul (password berubah, login asing, OTP tidak dikenal):',
      '5) Langkah awal yang sudah dilakukan (reset password/revoke session):',
      '6) Bukti lampiran (screenshot notifikasi login/riwayat akses):',
      '',
      'Mohon prioritas penanganan. Terima kasih.',
    ].join('\n'),
  },
  {
    title: 'Defacement Website / Perubahan Halaman',
    audience: 'Teknis',
    description: 'Untuk kasus tampilan website berubah, ada file asing, atau indikasi webshell/backdoor.',
    subject: '[TEKNIS][DEFACEMENT] Laporan Website Berubah - [Domain/Host] - [Tanggal]',
    body: [
      'Halo Tim CSIRT UNUJA,',
      '',
      'Saya melaporkan dugaan DEFACE/INTRUSI WEBSITE:',
      '1) Domain/URL/IP/hostname terdampak:',
      '2) Waktu pertama terdeteksi (WIB):',
      '3) Gejala utama (konten berubah/file asing/redirect):',
      '4) Log terkait (web/app/auth) + rentang waktu:',
      '5) IOC awal (IP, path, hash, akun, process):',
      '6) Mitigasi sementara (isolasi host, blokir IP, maintenance mode):',
      '7) Bukti lampiran (screenshot + potongan log):',
      '',
      'Mohon triase lanjutan. Terima kasih.',
    ].join('\n'),
  },
];

export const metadata: Metadata = {
  title: 'Lapor Insiden',
  description:
    'Panduan pelaporan insiden non-teknis dan teknis yang lengkap: checklist interaktif, prioritas triase, FAQ, dan template siap kirim.',
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
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Navigasi Cepat</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <a href="#alur" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Alur</a>
                <a href="#prioritas" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Prioritas</a>
                <a href="#pilih-jalur" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Pilih Jalur</a>
                <a href="#bukti" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Checklist Bukti</a>
                <a href="#contoh-email" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">Contoh Email</a>
                <a href="#faq" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700">FAQ</a>
              </div>
            </div>
          </div>

          <div id="alur" className="border-b border-slate-200 bg-white px-6 py-6 md:px-10">
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
            <p className="mt-4 text-xs text-slate-500">
              Catatan: prioritas diproses berdasarkan bukti yang dikirim, dampak layanan, dan tingkat urgensi insiden.
            </p>
          </div>

          <div id="prioritas" className="border-b border-slate-200 bg-slate-50 px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">Matriks Prioritas Triase (P1 - P4)</h2>
            <p className="mt-2 text-sm text-slate-600">
              Gunakan ini sebagai acuan agar ekspektasi respon lebih jelas.
            </p>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-bold">Prioritas</th>
                    <th className="px-4 py-3 font-bold">Contoh Kondisi</th>
                    <th className="px-4 py-3 font-bold">Estimasi Respons Awal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-bold text-red-600">P1 Kritis</td>
                    <td className="px-4 py-3">Sistem inti down total, data bocor aktif, ransomware aktif, atau defacement layanan utama.</td>
                    <td className="px-4 py-3">Prioritas tertinggi (segera).</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-bold text-orange-600">P2 Tinggi</td>
                    <td className="px-4 py-3">Gangguan besar lintas unit atau indikasi kompromi kuat pada akun/sistem.</td>
                    <td className="px-4 py-3">Maksimal 4 jam kerja triase awal.</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-bold text-blue-600">P3 Sedang</td>
                    <td className="px-4 py-3">Gangguan terbatas pada unit tertentu dengan dampak terbatas.</td>
                    <td className="px-4 py-3">Maksimal 1 hari kerja triase awal.</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-bold text-emerald-600">P4 Rendah</td>
                    <td className="px-4 py-3">Permintaan klarifikasi keamanan, indikasi lemah, atau pertanyaan pencegahan.</td>
                    <td className="px-4 py-3">1-3 hari kerja sesuai antrean.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Estimasi di atas untuk respon awal triase, bukan estimasi pemulihan final.
            </p>
          </div>

          <div id="pilih-jalur" className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
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
              <ReportActions
                mailto={nonTechnicalMailto}
                template={nonTechnicalTemplate}
                tone="blue"
                emailLabel="Kirim Laporan Non-Teknis via Email"
                checklistItems={nonTechnicalChecklist}
                checklistTitle="Validasi cepat laporan non-teknis"
              />
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
              <ReportActions
                mailto={technicalMailto}
                template={technicalTemplate}
                tone="slate"
                emailLabel="Kirim Laporan Teknis via Email"
                checklistItems={technicalChecklist}
                checklistTitle="Validasi cepat laporan teknis"
              />
            </section>
          </div>

          <div id="bukti" className="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-10">
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

            <h3 className="mt-6 text-lg font-bold text-slate-900">Contoh Bukti: Valid vs Kurang Valid</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-bold text-emerald-900">Bukti Valid</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-emerald-900">
                  <li>Screenshot layar penuh, terlihat waktu dan URL/hostname.</li>
                  <li>Log dengan timestamp jelas dan sumber event (web/app/auth).</li>
                  <li>Kronologi berurutan: mulai kejadian sampai dampak saat ini.</li>
                  <li>Lampiran diberi nama jelas: `log-auth-2026-02-27.txt`, `screenshot-login.png`.</li>
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-bold text-red-900">Bukti Kurang Valid</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-red-900">
                  <li>Hanya cerita tanpa screenshot/log.</li>
                  <li>Screenshot dipotong, waktu tidak terlihat, konteks hilang.</li>
                  <li>Log tanpa tanggal/jam atau tanpa sumber sistem.</li>
                  <li>Subjek email umum tanpa jenis insiden.</li>
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

            <div id="contoh-email" className="mt-6">
              <h3 className="text-lg font-bold text-slate-900">Template Cepat Berdasarkan Kasus Umum</h3>
              <p className="mt-2 text-sm text-slate-600">
                Pilih template yang paling dekat dengan kasus Anda. Ini mempercepat validasi awal tim CSIRT.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
                {quickCaseTemplates.map((item) => (
                  <QuickTemplateCard
                    key={item.title}
                    title={item.title}
                    audience={item.audience}
                    description={item.description}
                    email={incidentEmail}
                    subject={item.subject}
                    body={item.body}
                  />
                ))}
              </div>
            </div>

            <h3 id="setelah-kirim" className="mt-6 text-lg font-bold text-slate-900">Setelah Mengirim, Apa Selanjutnya?</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>Cek folder inbox dan spam secara berkala untuk balasan awal tim CSIRT.</li>
              <li>Simpan bukti asli dan jangan dihapus sampai investigasi selesai.</li>
              <li>Jika ada bukti baru, balas di thread email yang sama agar riwayat tetap utuh.</li>
              <li>Untuk insiden kritis, kirim ulang dengan awalan subjek <strong>[DARURAT]</strong> + bukti terbaru.</li>
            </ol>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <p className="font-bold text-slate-900">Status 1: Diterima</p>
                <p className="mt-1">Laporan masuk dan tercatat untuk triase.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <p className="font-bold text-slate-900">Status 2: Divalidasi</p>
                <p className="mt-1">Bukti dinilai, prioritas P1-P4 ditetapkan.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <p className="font-bold text-slate-900">Status 3: Ditindaklanjuti</p>
                <p className="mt-1">Tim CSIRT menjalankan mitigasi dan update status.</p>
              </div>
            </div>

            <h3 className="mt-6 text-lg font-bold text-slate-900">Format Nama Lampiran yang Disarankan</h3>
            <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-bold">Jenis Bukti</th>
                    <th className="px-4 py-3 font-bold">Contoh Nama File</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3">Screenshot error/login</td>
                    <td className="px-4 py-3 font-mono text-xs">screenshot-login-2026-02-27-0830.png</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3">Log autentikasi</td>
                    <td className="px-4 py-3 font-mono text-xs">log-auth-2026-02-27-0700-0900.txt</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3">Log aplikasi/web</td>
                    <td className="px-4 py-3 font-mono text-xs">log-webapp-2026-02-27-incident.txt</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3">Daftar IOC</td>
                    <td className="px-4 py-3 font-mono text-xs">ioc-list-2026-02-27.csv</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="faq" className="mt-6 text-lg font-bold text-slate-900">FAQ Pelaporan</h3>
            <div className="mt-3 space-y-2">
              {faqItems.map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-bold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>

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
