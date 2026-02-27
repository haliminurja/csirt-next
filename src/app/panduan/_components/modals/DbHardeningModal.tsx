import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const dbCases: IssueMatrixItem[] = [
  {
    kondisi: 'Akun aplikasi memiliki hak terlalu tinggi',
    indikasi: 'User app memiliki DROP/ALTER/GRANT atau akses ke seluruh database',
    dampak: 'Eksploitasi aplikasi dapat menghancurkan schema/data',
    responCepat: 'Revoke privilege berlebih, buat user baru least privilege, rotate password',
    pencegahan: 'Template role DB standar dan audit privilege berkala',
  },
  {
    kondisi: 'Database terekspos ke internet',
    indikasi: 'Port DB dapat diakses dari IP publik acak',
    dampak: 'Brute-force dan exfiltration data skala besar',
    responCepat: 'Tutup port via firewall, ubah bind address, evaluasi kompromi',
    pencegahan: 'Network segmentation dan allowlist IP ketat',
  },
  {
    kondisi: 'Koneksi app ke DB tidak terenkripsi',
    indikasi: 'Traffic DB terlihat plaintext pada network capture',
    dampak: 'Kredensial dan data transit dapat disadap',
    responCepat: 'Paksa require_secure_transport/sslmode, redeploy app config',
    pencegahan: 'TLS mandatory policy untuk semua koneksi DB lintas host',
  },
  {
    kondisi: 'Lonjakan query anomali di jam tidak wajar',
    indikasi: 'Query massal SELECT/EXPORT dari akun non-operasional',
    dampak: 'Potensi kebocoran data atau abuse akun',
    responCepat: 'Lock akun terkait, isolate source host, audit log query detail',
    pencegahan: 'Enable audit trail, alert perilaku query anomali, MFA admin DB',
  },
];

export default function DbHardeningModal() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-slate-600">
        Database menyimpan aset utama kampus seperti data mahasiswa, nilai, dan keuangan. Hardening database
        adalah lapisan pertahanan terakhir ketika aplikasi web berhasil ditembus.
      </p>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
        <strong>Ruang Lingkup SOP:</strong> kontrol jaringan, kontrol privilege, konfigurasi engine DB, audit akses,
        dan prosedur respons saat akun basis data disalahgunakan.
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-blue-100 bg-white p-5">
          <h4 className="mb-3 font-bold text-slate-800">1. Network and Access Control</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Bind Address:</strong> gunakan <code>127.0.0.1</code>, bukan <code>0.0.0.0</code>.</li>
            <li><strong>Custom Port:</strong> ubah 3306 ke 3307 untuk menekan scanning dasar.</li>
            <li><strong>Firewall:</strong> izinkan hanya IP web server melalui UFW/iptables.</li>
            <li><strong>TLS:</strong> paksa koneksi terenkripsi dari aplikasi ke DB.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-5">
          <h4 className="mb-3 font-bold text-slate-800">2. User and Privilege Management</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li><strong>Least Privilege:</strong> jangan pakai user <code>root</code> untuk aplikasi.</li>
            <li><strong>Privilege Ketat:</strong> cabut hak <code>FILE</code>, <code>PROCESS</code>, dan <code>SUPER</code>.</li>
            <li><strong>Per-App User:</strong> setiap aplikasi punya akun DB sendiri.</li>
            <li><strong>Password Rotation:</strong> ganti password DB setiap 90 hari.</li>
          </ul>
        </div>
      </div>

      <h4 className="font-bold text-slate-800">3. Pembuatan User Aplikasi (Least Privilege)</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-6 font-mono text-xs text-emerald-400">
        <p className="text-slate-500">-- MySQL/MariaDB contoh user aplikasi SIAKAD:</p>
        <p>{`CREATE USER 'app_siakad'@'10.10.1.5' IDENTIFIED BY 'K0mpl3ks!P@ssw0rd#2025';`}</p>
        <p>{`GRANT SELECT, INSERT, UPDATE, DELETE ON sim_akademik.* TO 'app_siakad'@'10.10.1.5';`}</p>
        <p className="mt-2 text-red-400">-- Jangan beri hak DDL ke user aplikasi:</p>
        <p>{`-- REVOKE DROP, ALTER, CREATE, GRANT OPTION ON *.* FROM 'app_siakad'@'10.10.1.5';`}</p>
        <p className="mt-2 text-emerald-400">FLUSH PRIVILEGES;</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Konfigurasi Keamanan MySQL/MariaDB</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-6 font-mono text-xs text-emerald-400">
        <p className="text-slate-500"># /etc/mysql/mysql.conf.d/security.cnf</p>
        <p>[mysqld]</p>
        <p>bind-address = 127.0.0.1</p>
        <p>port = 3307</p>
        <p>local-infile = 0</p>
        <p>symbolic-links = 0</p>
        <p>log-error = /var/log/mysql/error.log</p>
        <p>slow_query_log = 1</p>
        <p>require_secure_transport = ON</p>
      </div>

      <h4 className="font-bold text-slate-800">5. Baseline PostgreSQL (Jika Digunakan)</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-6 font-mono text-xs text-emerald-400">
        <p className="text-slate-500"># postgresql.conf</p>
        <p>listen_addresses = &apos;127.0.0.1&apos;</p>
        <p>password_encryption = scram-sha-256</p>
        <p>ssl = on</p>
        <p className="mt-2 text-slate-500"># pg_hba.conf contoh ketat</p>
        <p>{`hostssl app_db app_user 10.10.1.5/32 scram-sha-256`}</p>
        <p>{`host all all 0.0.0.0/0 reject`}</p>
      </div>

      <h4 className="font-bold text-slate-800">6. Audit dan Monitoring</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-6 font-mono text-xs text-emerald-400">
        <p className="text-slate-500">-- Cek user dengan privilege tinggi:</p>
        <p>{`SELECT user, host, Super_priv, File_priv, Grant_priv FROM mysql.user WHERE Super_priv = 'Y';`}</p>
        <p className="mt-2 text-slate-500">-- Cek koneksi aktif mencurigakan:</p>
        <p>SHOW PROCESSLIST;</p>
        <p className="mt-2 text-slate-500">-- Hapus database test bawaan:</p>
        <p>DROP DATABASE IF EXISTS test;</p>
      </div>

      <div className="rounded border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Checklist Lulus SOP:</strong> <code>mysql_secure_installation</code> sudah dijalankan, user aplikasi
        least privilege, TLS aktif, dan review privilege dilakukan minimal bulanan.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Database"
        items={dbCases}
      />
    </div>
  );
}
