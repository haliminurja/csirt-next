import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const backupCases: IssueMatrixItem[] = [
  {
    kondisi: 'Backup sukses tetapi restore gagal',
    indikasi: 'File backup ada, namun proses restore error atau data tidak utuh',
    dampak: 'RTO meleset dan pemulihan layanan terhambat',
    responCepat: 'Pakai backup versi sebelumnya yang valid, aktifkan runbook restore darurat',
    pencegahan: 'Uji restore berkala dan verifikasi checksum di setiap backup',
  },
  {
    kondisi: 'Backup ikut terenkripsi ransomware',
    indikasi: 'File backup berubah ekstensi/ukuran tidak normal pada lokasi online',
    dampak: 'Tidak ada cadangan bersih untuk pemulihan',
    responCepat: 'Putus koneksi storage terdampak, gunakan salinan offline/immutable',
    pencegahan: 'Strategi 3-2-1 + immutable snapshot + segmentasi jaringan backup',
  },
  {
    kondisi: 'Kapasitas storage backup penuh',
    indikasi: 'Job backup gagal dengan error disk full/quota exceeded',
    dampak: 'Backup harian terputus tanpa disadari',
    responCepat: 'Bersihkan retensi sesuai kebijakan, tambah kapasitas sementara',
    pencegahan: 'Monitoring kapasitas + alert threshold minimal 80%',
  },
  {
    kondisi: 'File backup terbaca publik/internal tanpa otorisasi',
    indikasi: 'Permission share terlalu longgar atau link object storage terbuka',
    dampak: 'Kebocoran data pribadi dan dokumen sensitif',
    responCepat: 'Cabut akses publik, rotate kredensial backup, audit akses historis',
    pencegahan: 'Enkripsi backup, IAM least privilege, dan review policy akses rutin',
  },
];

export default function BackupModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-900">
        <strong>Peringatan:</strong> Backup tidak hanya untuk kerusakan hardware, tetapi juga untuk ransomware,
        salah hapus data, dan kegagalan update.
      </div>

      <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6">
        <h4 className="mb-3 font-bold text-orange-900">Kebijakan Dasar 3-2-1</h4>
        <ul className="list-disc space-y-2 pl-5 text-sm font-medium text-slate-700">
          <li><strong>3 salinan:</strong> 1 data aktif + 2 backup.</li>
          <li><strong>2 media:</strong> disk lokal dan storage terpisah (NAS/object storage).</li>
          <li><strong>1 offsite:</strong> backup disimpan di lokasi berbeda, idealnya offline/immutable.</li>
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-orange-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">RPO Target</p>
          <p className="mt-2 text-sm text-slate-700">Maksimal kehilangan data 24 jam untuk sistem akademik umum.</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">RTO Target</p>
          <p className="mt-2 text-sm text-slate-700">Pemulihan layanan prioritas tinggi kurang dari 4 jam.</p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-white p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">Owner</p>
          <p className="mt-2 text-sm text-slate-700">Sysadmin + PIC aplikasi wajib menandatangani hasil uji restore.</p>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">1. Backup Database Otomatis (Crontab)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Crontab: backup daily jam 1 pagi</p>
        <p className="text-green-400">{`0 1 * * * /usr/bin/mysqldump -u root -p db_siakad > /tmp/db_siakad_$(date +%F).sql && \\`}</p>
        <p className="text-green-400">scp /tmp/db_siakad_$(date +%F).sql user_backup@10.0.99.100:/mnt/nas/backup_zone/</p>
        <p className="text-slate-500 mt-2"># Backup PostgreSQL (e-Learning Moodle):</p>
        <p className="text-green-400">{`0 2 * * * pg_dump -U postgres moodle_db | gzip > /tmp/moodle_$(date +%F).sql.gz`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Backup Filesystem dan Enkripsi</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Sinkronisasi file esensial ke NAS dengan rsync:</p>
        <p className="text-green-400">{`$ rsync -avz --delete /var/www/siakad/ backup@10.0.99.100:/mnt/nas/www_siakad/`}</p>
        <p className="text-slate-500 mt-2"># Enkripsi backup sebelum kirim ke offsite:</p>
        <p className="text-green-400">{`$ gpg --symmetric --cipher-algo AES256 /tmp/db_siakad_$(date +%F).sql`}</p>
        <p className="text-green-400">{`$ scp /tmp/db_siakad_$(date +%F).sql.gpg offsite@remote.backup.co.id:/vault/`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. Jadwal Pengujian Restore (Wajib)</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Mingguan</p><p className="text-xs text-slate-500 mt-1">Verifikasi integritas file backup (checksum MD5)</p></div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Bulanan</p><p className="text-xs text-slate-500 mt-1">Restore penuh ke server staging &amp; validasi data</p></div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Semester</p><p className="text-xs text-slate-500 mt-1">Simulasi DRP penuh (failover ke offsite backup)</p></div>
      </div>

      <h4 className="font-bold text-slate-800">4. SOP Restore Minimum</h4>
      <ol className="list-decimal space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li>Siapkan host staging/restore terisolasi dari produksi.</li>
        <li>Ambil backup terbaru yang lolos checksum.</li>
        <li>Restore database dan filesystem, lalu jalankan health check aplikasi.</li>
        <li>Bandingkan data kunci (jumlah user, transaksi, log akademik) sebelum penutupan tiket.</li>
        <li>Dokumentasikan durasi pemulihan untuk evaluasi RTO.</li>
      </ol>

      <h4 className="font-bold text-slate-800">5. Kebijakan Retensi Data</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm font-medium text-slate-700">
        <li><strong>Daily backup:</strong> Disimpan selama 30 hari terakhir.</li>
        <li><strong>Weekly backup:</strong> Disimpan selama 3 bulan terakhir.</li>
        <li><strong>Monthly backup:</strong> Disimpan selama 1 tahun (arsip wajib SPBE).</li>
        <li><strong>Backup sebelum update major:</strong> Disimpan permanen di cold storage.</li>
      </ul>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Checklist Lulus SOP:</strong> ada bukti backup harian, backup terenkripsi, uji restore bulanan,
        dan laporan pemulihan terdokumentasi.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Backup dan Restore"
        items={backupCases}
      />
    </div>
  );
}
