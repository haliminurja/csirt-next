import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const ransomwareCases: IssueMatrixItem[] = [
  {
    kondisi: 'File mendadak berubah ekstensi dan tidak bisa dibuka',
    indikasi: 'Muncul ransom note dan proses enkripsi berjalan cepat',
    dampak: 'Gangguan operasional luas dan potensi kehilangan data',
    responCepat: 'Isolasi endpoint dari jaringan dalam menit pertama, laporkan prioritas tinggi',
    pencegahan: 'Patch rutin, EDR aktif, segmentasi jaringan, backup immutable',
  },
  {
    kondisi: 'Ransomware menyebar ke shared drive',
    indikasi: 'Server file/NAS menunjukkan enkripsi massal lintas folder',
    dampak: 'Layanan lintas unit berhenti bersamaan',
    responCepat: 'Putus akses share, disable akun yang terkompromi, isolate storage terdampak',
    pencegahan: 'Least privilege share, network ACL, monitoring SMB anomali',
  },
  {
    kondisi: 'Pelaku mengekfiltrasi data sebelum enkripsi',
    indikasi: 'Ada transfer outbound besar sebelum kejadian enkripsi',
    dampak: 'Risiko pemerasan ganda (double extortion)',
    responCepat: 'Blok egress mencurigakan, simpan bukti log, jalankan investigasi kebocoran data',
    pencegahan: 'DLP/egress filtering, alert transfer data besar, SOC monitoring aktif',
  },
  {
    kondisi: 'Tim operasional panik dan melakukan tindakan merusak bukti',
    indikasi: 'Perangkat di-reinstall cepat tanpa imaging/forensik',
    dampak: 'Akar penyebab tidak teridentifikasi dan insiden berulang',
    responCepat: 'Bekukan perubahan non-esensial, aktifkan incident commander, jalankan runbook forensik',
    pencegahan: 'Latihan tabletop rutin dan SOP triase yang mudah dipahami semua PIC',
  },
];

export default function RansomwareModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-red-500 bg-red-50 p-5 text-sm font-bold text-red-900 shadow-sm">
        ISOLASI JARINGAN SEGERA, JANGAN RESTART PERANGKAT, JANGAN BAYAR TEBUSAN
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-slate-700">
        <h4 className="border-b border-slate-200 pb-2 font-bold text-slate-900">
          A. Golden Rules Triase (Menit 0-5)
        </h4>
        <ol className="list-decimal space-y-2 pl-5 font-medium">
          <li>Putus jaringan: cabut kabel LAN, matikan Wi-Fi, nonaktifkan VPN.</li>
          <li>Jangan reboot dan jangan shutdown paksa kecuali ada instruksi tim forensik.</li>
          <li>Cabut media eksternal (USB/HDD), simpan sebagai bukti terpisah.</li>
          <li>Laporkan ke CSIRT dengan status <strong>insiden prioritas tinggi</strong>.</li>
        </ol>
      </div>

      <h4 className="font-bold text-slate-800">B. Data yang Harus Disiapkan untuk CSIRT</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Hostname, IP, user aktif, dan lokasi perangkat.</li>
        <li>Waktu awal gejala (perkiraan jam dan tanggal).</li>
        <li>Screenshot ransom note, ekstensi file terenkripsi, dan proses mencurigakan.</li>
        <li>Daftar share folder/network drive yang sempat terhubung.</li>
        <li>Aplikasi atau file terakhir yang dibuka sebelum kejadian.</li>
      </ul>

      <h4 className="font-bold text-slate-800">C. Larangan Kritis</h4>
      <div className="rounded-xl border border-red-200 bg-red-50 p-4">
        <ul className="space-y-2 text-sm font-medium text-red-800">
          <li>[X] Jangan bayar tebusan dalam bentuk apa pun.</li>
          <li>[X] Jangan hapus file terenkripsi atau ransom note.</li>
          <li>[X] Jangan install tool acak yang dapat merusak bukti.</li>
          <li>[X] Jangan sambungkan perangkat ke jaringan lain.</li>
        </ul>
      </div>

      <h4 className="font-bold text-slate-800">D. Timeline Respon Minimum</h4>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="rounded-xl border border-red-100 bg-white p-3 text-center">
          <p className="text-lg font-extrabold text-red-600">&lt; 15 menit</p>
          <p className="text-xs text-slate-500">Triase awal</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-white p-3 text-center">
          <p className="text-lg font-extrabold text-orange-600">&lt; 1 jam</p>
          <p className="text-xs text-slate-500">Isolasi menyeluruh</p>
        </div>
        <div className="rounded-xl border border-blue-100 bg-white p-3 text-center">
          <p className="text-lg font-extrabold text-blue-600">&lt; 4 jam</p>
          <p className="text-xs text-slate-500">Analisis forensik</p>
        </div>
        <div className="rounded-xl border border-green-100 bg-white p-3 text-center">
          <p className="text-lg font-extrabold text-green-600">&lt; 24 jam</p>
          <p className="text-xs text-slate-500">Recovery bertahap</p>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">E. Checklist Pasca Insiden</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Reset seluruh kredensial admin dan service account terkait.</li>
        <li>Patch celah awal infeksi (RDP/SMB/Phishing/Exploit service).</li>
        <li>Restore dari backup bersih yang lolos verifikasi malware.</li>
        <li>Buat laporan akar penyebab dan rencana pencegahan 30 hari.</li>
      </ul>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Insiden Ransomware"
        items={ransomwareCases}
      />
    </div>
  );
}
