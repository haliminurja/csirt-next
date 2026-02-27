import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat dan ketentuan penggunaan layanan resmi UNUJA-CSIRT.',
};

const sections = [
  {
    title: '1. Ruang Lingkup Layanan',
    items: [
      'UNUJA-CSIRT menyediakan layanan tanggap insiden, advisori keamanan, dan dukungan koordinasi teknis bagi sivitas akademika serta unit resmi universitas.',
      'Layanan diberikan sesuai prioritas risiko, tingkat dampak, dan ketersediaan tim operasional.',
    ],
  },
  {
    title: '2. Kewajiban Pengguna',
    items: [
      'Memberikan informasi insiden secara benar, lengkap, dan dapat diverifikasi.',
      'Menjaga kerahasiaan akses, kredensial, dan bukti digital selama proses investigasi berlangsung.',
      'Mengikuti instruksi mitigasi yang dikeluarkan tim CSIRT untuk mencegah eskalasi dampak.',
    ],
  },
  {
    title: '3. Larangan Penggunaan',
    items: [
      'Dilarang mengirimkan laporan palsu, manipulatif, atau mengandung niat merugikan pihak lain.',
      'Dilarang menggunakan layanan CSIRT untuk aktivitas yang melanggar hukum atau kebijakan institusi.',
      'Dilarang menyebarluaskan detail teknis insiden sensitif tanpa izin pihak berwenang.',
    ],
  },
  {
    title: '4. Batas Tanggung Jawab',
    items: [
      'UNUJA-CSIRT berupaya maksimal melakukan penanganan, namun tidak menjamin seluruh gangguan dapat dipulihkan secara instan.',
      'Keberhasilan pemulihan juga dipengaruhi kesiapan sistem pelapor, kelengkapan data, dan dukungan unit terkait.',
      'Pengguna tetap bertanggung jawab atas penerapan kontrol keamanan dasar pada sistem masing-masing.',
    ],
  },
  {
    title: '5. Perubahan Ketentuan',
    items: [
      'Syarat & ketentuan dapat diperbarui sewaktu-waktu untuk menyesuaikan kebijakan institusi, regulasi, dan dinamika ancaman siber.',
      'Perubahan akan berlaku sejak tanggal pembaruan ditampilkan pada halaman ini.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50/80 via-white to-blue-50/80" />
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/4 translate-y-1/4 rounded-full bg-indigo-100/40" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-indigo-700">Dokumen Legal</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Syarat &amp; Ketentuan</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Dengan menggunakan layanan UNUJA-CSIRT, Anda menyetujui ketentuan penggunaan berikut sebagai dasar
            koordinasi, investigasi, dan pemulihan insiden keamanan siber.
          </p>
          <p className="mt-4 text-sm font-medium text-slate-500">Terakhir diperbarui: 27 Februari 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-slate-900">{section.title}</h2>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">Butuh Klarifikasi?</h3>
          <p className="mt-2 text-slate-700">
            Untuk pertanyaan operasional layanan, hubungi{' '}
            <a className="font-semibold text-indigo-700 hover:text-indigo-800" href="mailto:csirt@unuja.ac.id">
              csirt@unuja.ac.id
            </a>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/lapor-insiden"
              prefetch={false}
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-indigo-700"
            >
              Lapor Insiden
            </Link>
            <Link
              href="/kebijakan-privasi"
              prefetch={false}
              className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-100"
            >
              Lihat Kebijakan Privasi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
