import Link from 'next/link';
import type { Metadata } from 'next';
import ReportActions from './_components/ReportActions';

const incidentEmail = 'csirt@unuja.ac.id';
const reportSubject = '[LAPOR-INSIDEN] [Jenis Insiden] - [Unit/Sistem] - [Tanggal]';

const reportTemplate = [
  'Halo Tim CSIRT UNUJA,',
  '',
  'Saya melaporkan insiden:',
  '1) Nama + unit + kontak aktif:',
  '2) Waktu kejadian (WIB):',
  '3) Layanan/akun/sistem terdampak:',
  '4) Kronologi singkat (2-3 kalimat):',
  '5) Dampak saat ini:',
  '6) Bukti terlampir (screenshot/log/notifikasi):',
  '',
  'Mohon tindak lanjut. Terima kasih.',
].join('\n');

const reportMailto = `mailto:${incidentEmail}?subject=${encodeURIComponent('[LAPOR-INSIDEN] Laporan Awal')}&body=${encodeURIComponent(reportTemplate)}`;
const reportChecklist = [
  'Saya sudah isi nama, unit, dan kontak aktif.',
  'Saya sudah tulis waktu dan kronologi singkat.',
  'Saya sudah lampirkan bukti minimal 1 file.',
];

const faqItems = [
  {
    q: 'Berapa lama isi laporan?',
    a: 'Sekitar 2-3 menit jika data inti dan bukti sudah siap.',
  },
  {
    q: 'Kalau data belum lengkap bagaimana?',
    a: 'Kirim dulu laporan awal, lalu tambah bukti dengan balas email yang sama.',
  },
  {
    q: 'Boleh kirim selain email?',
    a: 'Untuk saat ini kanal resmi pelaporan adalah email ke csirt@unuja.ac.id.',
  },
];

export const metadata: Metadata = {
  title: 'Lapor Insiden',
  description: 'Halaman lapor insiden yang mudah dan cepat untuk pemula.',
};

export default function LaporInsidenPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-linear-to-r from-blue-50 via-white to-indigo-50 px-6 py-8 md:px-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Lapor Insiden Cepat</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Mudah, Ringkas, dan Langsung Kirim</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Isi format singkat, lampirkan bukti, lalu kirim ke <span className="font-semibold text-slate-800">{incidentEmail}</span>.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
              Estimasi: 2-3 menit
            </div>
          </div>

          <div className="px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">3 Langkah Cepat</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { title: '1. Isi Data Inti', desc: 'Nama, waktu, sistem terdampak, kronologi singkat.' },
                { title: '2. Lampirkan Bukti', desc: 'Minimal 1 screenshot/log/notifikasi yang jelas.' },
                { title: '3. Kirim Email', desc: 'Klik tombol kirim di bawah.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">Template Laporan Singkat</h2>
            <p className="mt-2 text-sm text-slate-600">Gunakan subjek berikut agar laporan cepat masuk triase:</p>
            <code className="mt-2 block rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700">{reportSubject}</code>

            <ReportActions
              mailto={reportMailto}
              template={reportTemplate}
              tone="blue"
              emailLabel="Kirim Laporan Sekarang"
              checklistItems={reportChecklist}
              checklistTitle="Cek cepat sebelum kirim"
            />

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Jangan kirim password, OTP, token, atau private key.
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-6 md:px-10">
            <h3 className="text-lg font-bold text-slate-900">FAQ Singkat</h3>
            <div className="mt-3 space-y-2">
              {faqItems.map((item) => (
                <details key={item.q} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <summary className="cursor-pointer text-sm font-bold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/layanan"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Lihat Layanan
              </Link>
              <Link
                href="/panduan"
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Baca Panduan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
