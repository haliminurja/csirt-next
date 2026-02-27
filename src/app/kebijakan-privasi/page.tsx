import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi layanan resmi UNUJA-CSIRT terkait pengelolaan data pengguna.',
};

const sections = [
  {
    title: '1. Data yang Dikumpulkan',
    items: [
      'Data identitas dasar (nama, email institusi, unit kerja, atau informasi lain yang Anda kirimkan melalui formulir pelaporan).',
      'Data teknis insiden (alamat IP, log kejadian, domain, bukti tangkapan layar, dan artefak keamanan lain yang diperlukan untuk investigasi).',
      'Data komunikasi tindak lanjut untuk proses verifikasi, mitigasi, dan penutupan insiden.',
    ],
  },
  {
    title: '2. Tujuan Penggunaan Data',
    items: [
      'Menangani laporan insiden keamanan siber secara cepat, tepat, dan terukur.',
      'Melakukan analisis, pemulihan, dan rekomendasi pencegahan insiden berulang.',
      'Memenuhi kebutuhan audit keamanan, kepatuhan internal, dan kewajiban hukum yang berlaku.',
    ],
  },
  {
    title: '3. Penyimpanan dan Perlindungan Data',
    items: [
      'Data disimpan secara terbatas berdasarkan kebutuhan operasional tanggap insiden.',
      'Kami menerapkan kontrol akses berlapis, pencatatan aktivitas, dan mekanisme perlindungan sistem.',
      'Data sensitif hanya diakses oleh personel berwenang pada lingkup kerja penanganan insiden.',
    ],
  },
  {
    title: '4. Pembagian Data',
    items: [
      'Data tidak diperjualbelikan kepada pihak mana pun.',
      'Pembagian data hanya dilakukan bila diperlukan untuk penanganan insiden, proses hukum, atau perintah regulator yang sah.',
      'Jika memungkinkan, data akan diminimalkan/diagregasi sebelum dibagikan untuk tujuan koordinasi teknis.',
    ],
  },
  {
    title: '5. Hak Pengguna',
    items: [
      'Anda dapat meminta klarifikasi mengenai data yang dikirimkan dalam laporan.',
      'Anda dapat meminta koreksi informasi yang tidak akurat sepanjang tidak mengganggu proses investigasi.',
      'Permintaan terkait data dapat dikirim ke kanal resmi kontak CSIRT.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/80 via-white to-cyan-50/80" />
        <div className="absolute top-0 right-0 h-80 w-80 translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-700">Dokumen Legal</p>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Kebijakan Privasi</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Kebijakan ini menjelaskan bagaimana UNUJA-CSIRT mengumpulkan, menggunakan, menyimpan, dan melindungi
            informasi yang disampaikan melalui layanan kami.
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

        <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-bold text-slate-900">Kontak Privasi</h3>
          <p className="mt-2 text-slate-700">
            Pertanyaan terkait privasi dan perlindungan data dapat disampaikan ke{' '}
            <a className="font-semibold text-blue-700 hover:text-blue-800" href="mailto:csirt@unuja.ac.id">
              csirt@unuja.ac.id
            </a>
            .
          </p>
          <div className="mt-6">
            <Link
              href="/lapor-insiden"
              className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700"
            >
              Lapor Insiden
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
