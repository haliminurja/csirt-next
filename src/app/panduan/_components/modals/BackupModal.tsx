export default function BackupModal() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded text-sm text-red-900"><strong>Peringatan:</strong> Server Fisik bisa meledak kebakaran atau di-enkripsi oleh Ransomware. Tanpa backup off-site, data akademik hilang <strong>PERMANEN</strong>.</div>
      <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
        <h4 className="font-bold text-orange-900 mb-3">Aturan Kebijakan Basis 3-2-1 BSSN:</h4>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 font-medium">
          <li><strong>Simpan 3 Salinan:</strong> 1 Data Aktif + 2 Salinan pasif (lokal &amp; remote).</li>
          <li><strong>Gunakan 2 Media Berbeda:</strong> SSD/SAN Storage + HDD External / NAS terpisah.</li>
          <li><strong>Sisihkan 1 Lokasi Tertutup (Offsite/Offline):</strong> Tidak tersambung jaringan utama, idealnya di gedung berbeda.</li>
        </ul>
      </div>
      <h4 className="font-bold text-slate-800">1. Backup Database Otomatis (Crontab)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Crontab: backup daily jam 1 pagi</p>
        <p className="text-green-400">{`0 1 * * * /usr/bin/mysqldump -u root -p db_siakad > /tmp/db_siakad_$(date +%F).sql && \\`}</p>
        <p className="text-green-400">scp /tmp/db_siakad_$(date +%F).sql user_backup@10.0.99.100:/mnt/nas/backup_zone/</p>
        <p className="text-slate-500 mt-2"># Backup PostgreSQL (e-Learning Moodle):</p>
        <p className="text-green-400">{`0 2 * * * pg_dump -U postgres moodle_db | gzip > /tmp/moodle_$(date +%F).sql.gz`}</p>
      </div>
      <h4 className="font-bold text-slate-800">2. Backup Filesystem (rsync + Enkripsi)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Sinkronisasi file esensial ke NAS dengan rsync:</p>
        <p className="text-green-400">{`$ rsync -avz --delete /var/www/siakad/ backup@10.0.99.100:/mnt/nas/www_siakad/`}</p>
        <p className="text-slate-500 mt-2"># Enkripsi backup sebelum kirim ke offsite:</p>
        <p className="text-green-400">{`$ gpg --symmetric --cipher-algo AES256 /tmp/db_siakad_$(date +%F).sql`}</p>
        <p className="text-green-400">{`$ scp /tmp/db_siakad_$(date +%F).sql.gpg offsite@remote.backup.co.id:/vault/`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. Jadwal Pengujian Restore (Wajib!)</h4>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Mingguan</p><p className="text-xs text-slate-500 mt-1">Verifikasi integritas file backup (checksum MD5)</p></div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Bulanan</p><p className="text-xs text-slate-500 mt-1">Restore penuh ke server staging &amp; validasi data</p></div>
        <div className="bg-white border border-orange-100 rounded-xl p-4 text-center"><p className="text-2xl font-extrabold text-orange-600">Semester</p><p className="text-xs text-slate-500 mt-1">Simulasi DRP penuh (failover ke offsite backup)</p></div>
      </div>
      <h4 className="font-bold text-slate-800">4. Kebijakan Retensi Data</h4>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li><strong>Daily backup:</strong> Disimpan selama 30 hari terakhir.</li>
        <li><strong>Weekly backup:</strong> Disimpan selama 3 bulan terakhir.</li>
        <li><strong>Monthly backup:</strong> Disimpan selama 1 tahun (arsip wajib SPBE).</li>
        <li><strong>Backup sebelum update major:</strong> Disimpan permanen di cold storage.</li>
      </ul>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800"><strong>Prinsip Emas:</strong> Backup yang tidak pernah di-test restore = <strong>tidak ada backup</strong>. Pastikan setiap bulan dilakukan uji pemulihan di environment staging.</div>
    </div>
  );
}
