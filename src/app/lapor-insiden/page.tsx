import Link from 'next/link';
import type { Metadata } from 'next';

const incidentEmail = 'csirt@unuja.ac.id';
const essentialData = [
  'Nama pelapor, unit, dan nomor kontak aktif.',
  'Waktu kejadian pertama (tanggal + jam WIB).',
  'Layanan/akun/perangkat yang terdampak.',
  'Kronologi singkat: apa yang terjadi dan kapan.',
  'Dampak saat ini (contoh: tidak bisa login, website berubah, layanan lambat).',
  'Bukti pendukung minimal 1 lampiran yang jelas.',
];

const manualReportSteps = [
  'Buka aplikasi email yang Anda gunakan.',
  'Isi penerima: csirt@unuja.ac.id.',
  'Isi subjek sesuai format standar agar mudah ditriase.',
  'Isi isi email dengan data wajib secara singkat dan jelas.',
  'Lampirkan bukti (screenshot/log/notifikasi).',
  'Kirim email, lalu cek inbox/spam untuk balasan.',
];

const afterSendSteps = [
  'Simpan bukti asli sampai penanganan selesai.',
  'Jika ada bukti baru, balas pada email yang sama (jangan kirim thread baru).',
  'Jika kondisi memburuk atau layanan berhenti total, kirim pembaruan secepatnya.',
];

const faqItems = [
  {
    q: 'Siapa saja yang boleh melapor?',
    a: 'Semua pengguna layanan kampus boleh melapor jika melihat kejadian mencurigakan atau gangguan layanan.',
  },
  {
    q: 'Kalau data belum lengkap bagaimana?',
    a: 'Kirim dulu laporan awal, lalu tambah bukti dengan balas email yang sama.',
  },
  {
    q: 'Apa bukti paling minimal?',
    a: 'Minimal satu bukti yang jelas, misalnya screenshot layar atau notifikasi kejadian.',
  },
  {
    q: 'Apakah laporan harus panjang?',
    a: 'Tidak. Fokus pada data inti: siapa, kapan, apa yang terdampak, dampak, dan bukti.',
  },
  {
    q: 'Boleh kirim selain email?',
    a: 'Kanal resmi pelaporan saat ini adalah email ke csirt@unuja.ac.id.',
  },
];

export const metadata: Metadata = {
  title: 'Lapor Insiden',
  description: 'Informasi cara lapor insiden yang baik, jelas, mudah dipahami, dan dikirim manual via email resmi.',
};

export default function LaporInsidenPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-linear-to-r from-blue-50 via-white to-indigo-50 px-6 py-8 md:px-10">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Lapor Insiden Cepat</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Informasi Cara Lapor Insiden yang Baik</h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Halaman ini fokus pada informasi cara lapor yang baik tanpa istilah membingungkan. Ikuti alur di bawah, lalu kirim manual ke email resmi{' '}
              <span className="font-semibold text-slate-800">{incidentEmail}</span>.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600">
              Estimasi isi laporan: 3-5 menit
            </div>
          </div>

          <div className="px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">Alur Lapor (3 Langkah)</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
              {[
                { title: '1. Catat Data Inti', desc: 'Siapa pelapor, kapan kejadian, apa yang terdampak.' },
                { title: '2. Siapkan Bukti', desc: 'Lampirkan minimal 1 bukti yang jelas dan relevan.' },
                { title: '3. Kirim Email Manual', desc: 'Kirim ke email resmi CSIRT dan tunggu balasan triase.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 md:px-10">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">Data Wajib Dalam Laporan</h2>
            <p className="mt-2 text-sm text-slate-600">
              Isi poin berikut agar laporan cepat dipahami dan diproses:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {essentialData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Email Resmi Pelaporan</p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{incidentEmail}</p>
              <p className="mt-3 text-xs text-slate-600">
                Dengan melanjutkan laporan, Anda menyetujui{' '}
                <Link href="/kebijakan-privasi" prefetch={false} className="font-semibold text-blue-700 hover:text-blue-800">
                  Kebijakan Privasi
                </Link>{' '}
                dan{' '}
                <Link href="/syarat-ketentuan" prefetch={false} className="font-semibold text-blue-700 hover:text-blue-800">
                  Syarat &amp; Ketentuan
                </Link>
                .
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Jangan kirim password, OTP, token, atau private key.
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-6 md:px-10">
            <h3 className="text-lg font-bold text-slate-900">Cara Kirim Laporan Manual</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              {manualReportSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>

            <h3 className="mt-6 text-lg font-bold text-slate-900">Setelah Mengirim, Lakukan Ini</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              {afterSendSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 bg-white px-6 py-6 md:px-10">
            <h3 className="text-lg font-bold text-slate-900">FAQ</h3>
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
                prefetch={false}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Lihat Layanan
              </Link>
              <Link
                href="/panduan"
                prefetch={false}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Baca Panduan
              </Link>
              <Link
                href="/kebijakan-privasi"
                prefetch={false}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                prefetch={false}
                className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
              >
                Syarat &amp; Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
