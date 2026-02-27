import Link from 'next/link';

export default function ContactSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-blue-600 p-8 text-white shadow-xl md:p-12">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHptLTIwIDBoMjB2MjBIMHYtMjB6bTIwLTIwaDIwdjIwSDIwdjIweiIgZmlsbD0iIzMzNDE1NSIgZmlsbC1vcGFjaXR5PSIwLjE1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-20" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-extrabold mb-4">Lokasi &amp; Operasional Tiket</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <p className="text-blue-50 leading-relaxed font-medium">Pusat Data dan Sistem Informasi, Kampus Utama Universitas Nurul Jadid<br />Karanganyar, Paiton, Probolinggo, Jawa Timur 67291</p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <p className="text-blue-50 font-medium">Email Pelaporan Insiden: <a href="mailto:csirt@unuja.ac.id" className="underline hover:text-white">csirt@unuja.ac.id</a></p>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 mr-3 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-blue-50 text-sm">Waktu Siaga Tiket Biasa: <br />Senin - Jum&apos;at (08:00 - 15:00 WIB).<br />Luar Jam Kerja hanya untuk Insiden Kategori KRISIS.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link href="/lapor-insiden" prefetch={false} className="group flex flex-col items-center rounded-xl bg-white px-8 py-4 text-center font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <svg className="w-8 h-8 mb-2 text-blue-600 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            Lapor Insiden Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
