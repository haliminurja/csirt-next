export default function DbHardeningModal() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Database menyimpan aset paling berharga kampus: data mahasiswa, nilai, keuangan. Hardening database adalah lini pertahanan terakhir jika aplikasi web berhasil di-bypass.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-5 border border-blue-100 rounded-2xl">
          <h4 className="font-bold text-slate-800 mb-3">1. Network &amp; Access Control</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><strong>Bind Address:</strong> Gunakan <code>127.0.0.1</code>, bukan <code>0.0.0.0</code>.</li>
            <li><strong>Custom Port:</strong> Ubah 3306 → 3307 (menghindari scanner).</li>
            <li><strong>Firewall:</strong> Izinkan hanya IP Web Server via UFW/iptables.</li>
            <li><strong>SSL Connection:</strong> Wajibkan koneksi ter-enkripsi.</li>
          </ul>
        </div>
        <div className="bg-white p-5 border border-blue-100 rounded-2xl">
          <h4 className="font-bold text-slate-800 mb-3">2. User &amp; Privilege Management</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><strong>Least Privilege:</strong> Jangan pernah gunakan user <code>root</code> untuk aplikasi.</li>
            <li><strong>Revoke FILE:</strong> Cabut hak <code>FILE</code> &amp; <code>PROCESS</code> privilege.</li>
            <li><strong>Per-App User:</strong> Setiap aplikasi punya akun DB sendiri.</li>
            <li><strong>Password Rotation:</strong> Ganti password DB tiap 90 hari.</li>
          </ul>
        </div>
      </div>
      <h4 className="font-bold text-slate-800">3. Pembuatan User Aplikasi (Least Privilege)</h4>
      <div className="bg-slate-900 rounded-xl p-6 text-emerald-400 font-mono text-xs overflow-x-auto">
        <p className="text-slate-500">-- Buat user khusus untuk aplikasi SIAKAD:</p>
        <p>{`CREATE USER 'app_siakad'@'10.10.1.5' IDENTIFIED BY 'K0mpl3ks!P@ssw0rd#2025';`}</p>
        <p>{`GRANT SELECT, INSERT, UPDATE, DELETE ON sim_akademik.* TO 'app_siakad'@'10.10.1.5';`}</p>
        <p className="text-red-400 mt-2">-- JANGAN berikan hak berikut ke user aplikasi:</p>
        <p>{`-- REVOKE DROP, ALTER, CREATE, GRANT OPTION ON *.* FROM 'app_siakad'@'10.10.1.5';`}</p>
        <p className="text-emerald-400 mt-2">FLUSH PRIVILEGES;</p>
      </div>
      <h4 className="font-bold text-slate-800">4. Konfigurasi Keamanan MySQL/MariaDB</h4>
      <div className="bg-slate-900 rounded-xl p-6 text-emerald-400 font-mono text-xs overflow-x-auto">
        <p className="text-slate-500"># /etc/mysql/mysql.conf.d/security.cnf</p>
        <p className="text-green-400">[mysqld]</p>
        <p className="text-green-400">bind-address = 127.0.0.1</p>
        <p className="text-green-400">port = 3307</p>
        <p className="text-green-400">local-infile = 0 <span className="text-slate-500"># Cegah LOAD DATA LOCAL</span></p>
        <p className="text-green-400">symbolic-links = 0</p>
        <p className="text-green-400">log-error = /var/log/mysql/error.log</p>
        <p className="text-green-400">general_log = 0 <span className="text-slate-500"># Aktifkan saat audit saja</span></p>
        <p className="text-green-400">slow_query_log = 1</p>
        <p className="text-green-400">require_secure_transport = ON <span className="text-slate-500"># Wajib SSL</span></p>
      </div>
      <h4 className="font-bold text-slate-800">5. Audit &amp; Monitoring</h4>
      <div className="bg-slate-900 rounded-xl p-6 text-emerald-400 font-mono text-xs overflow-x-auto">
        <p className="text-slate-500">-- Cek user dengan privilege terlalu tinggi:</p>
        <p>{`SELECT user, host, Super_priv, File_priv, Grant_priv FROM mysql.user WHERE Super_priv = 'Y';`}</p>
        <p className="text-slate-500 mt-2">-- Cek koneksi aktif yang mencurigakan:</p>
        <p>SHOW PROCESSLIST;</p>
        <p className="text-slate-500 mt-2">-- Hapus database test bawaan:</p>
        <p>DROP DATABASE IF EXISTS test;</p>
      </div>
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-sm text-amber-900"><strong>Wajib:</strong> Jalankan <code>mysql_secure_installation</code> pada setiap server MySQL baru untuk menghapus anonymous user, database test, dan menonaktifkan remote root login.</div>
    </div>
  );
}
