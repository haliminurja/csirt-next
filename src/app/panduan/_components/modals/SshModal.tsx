import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const sshCases: IssueMatrixItem[] = [
  {
    kondisi: 'Brute-force login meningkat tajam',
    indikasi: 'Failed password di log melonjak dan berasal dari banyak IP',
    dampak: 'Risiko kompromi akun admin jika ada password lemah',
    responCepat: 'Aktifkan fail2ban agresif, batasi source IP, nonaktifkan password auth',
    pencegahan: 'SSH key only, MFA bastion, audit login harian',
  },
  {
    kondisi: 'Admin terkunci setelah ubah config SSH',
    indikasi: 'Tidak bisa login setelah restart sshd',
    dampak: 'Potensi downtime dan kebutuhan akses konsol darurat',
    responCepat: 'Gunakan sesi cadangan/konsol out-of-band untuk rollback config',
    pencegahan: 'Selalu uji sshd -t dan buka sesi kedua sebelum restart',
  },
  {
    kondisi: 'Akun lama masih bisa mengakses server produksi',
    indikasi: 'Terdapat login dari user yang sudah tidak aktif di tim',
    dampak: 'Akses tidak sah oleh eks-user/vendor',
    responCepat: 'Disable account dan revoke authorized_keys segera',
    pencegahan: 'Offboarding checklist wajib dan review authorized_keys bulanan',
  },
  {
    kondisi: 'Tunnel/forwarding disalahgunakan',
    indikasi: 'Terdapat port forwarding asing yang tidak terdokumentasi',
    dampak: 'Pivot lateral movement ke sistem internal',
    responCepat: 'Matikan forwarding, putus sesi aktif, audit host tujuan',
    pencegahan: 'Disable AllowTcpForwarding kecuali benar-benar diperlukan',
  },
];

export default function SshModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-900">
        <strong>Fakta Lapangan:</strong> Server yang membuka SSH default tanpa kontrol akses akan diserang
        brute-force secara terus menerus.
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Target SOP SSH</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Hanya akun admin terotorisasi yang dapat login.</li>
          <li>Tidak ada login root langsung dari jaringan publik.</li>
          <li>Percobaan brute-force diblok otomatis dengan logging yang dapat diaudit.</li>
        </ul>
      </div>

      <h4 className="font-bold text-slate-800">1. Konfigurasi Dasar <code>/etc/ssh/sshd_config</code></h4>
      <p className="mb-2 text-xs text-slate-500">Gunakan port non-default, nonaktifkan root login, dan pakai SSH key.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-green-400">Port 22022 <span className="text-slate-500"># Hindari port 22 default</span></p>
        <p className="text-green-400">PermitRootLogin no</p>
        <p className="text-green-400">AllowUsers sysadmin deployer</p>
        <p className="text-green-400">PasswordAuthentication no</p>
        <p className="text-green-400">PubkeyAuthentication yes</p>
        <p className="text-green-400">MaxAuthTries 3</p>
        <p className="text-green-400">LoginGraceTime 30</p>
        <p className="text-green-400">ClientAliveInterval 300</p>
        <p className="text-green-400">ClientAliveCountMax 2</p>
        <p className="text-green-400">X11Forwarding no</p>
        <p className="text-green-400">AllowTcpForwarding no</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Pembuatan dan Distribusi SSH Key (Ed25519)</h4>
      <p className="mb-2 text-xs text-slate-500">Gunakan Ed25519 dan passphrase kuat untuk kunci privat admin.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Di komputer lokal sysadmin:</p>
        <p className="text-green-400">{`$ ssh-keygen -t ed25519 -C "sysadmin@unuja.ac.id" -f ~/.ssh/id_server_prod`}</p>
        <p className="text-slate-500 mt-2"># Copy key ke server:</p>
        <p className="text-green-400">$ ssh-copy-id -i ~/.ssh/id_server_prod.pub -p 22022 sysadmin@10.10.1.50</p>
        <p className="text-slate-500 mt-2"># Test koneksi tanpa password:</p>
        <p className="text-green-400">$ ssh -i ~/.ssh/id_server_prod -p 22022 sysadmin@10.10.1.50</p>
      </div>

      <h4 className="font-bold text-slate-800">3. Hardening Tambahan: Allowed CIDR dan MFA Bastion</h4>
      <p className="mb-2 text-xs text-slate-500">Untuk server kritis, batasi SSH hanya dari IP kantor atau VPN.</p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-1">
        <p className="text-slate-500"># UFW allow hanya dari subnet admin</p>
        <p className="text-green-400">$ sudo ufw allow from 10.10.10.0/24 to any port 22022 proto tcp</p>
        <p className="text-green-400">$ sudo ufw deny 22022/tcp</p>
        <p className="text-slate-500 mt-2"># Rekomendasi: akses produksi hanya via bastion host + MFA</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Instalasi dan Konfigurasi Fail2Ban</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p>$ sudo apt install fail2ban</p>
        <p className="text-slate-500 mt-2"># /etc/fail2ban/jail.local</p>
        <p className="text-yellow-400">[sshd]</p>
        <p className="text-green-400">enabled = true</p>
        <p className="text-green-400">port = 22022</p>
        <p className="text-green-400">maxretry = 3</p>
        <p className="text-green-400">findtime = 600 <span className="text-slate-500"># Jendela waktu 10 menit</span></p>
        <p className="text-green-400">bantime = 2592000 <span className="text-slate-500"># Ban 30 Hari</span></p>
        <p className="text-green-400">banaction = iptables-multiport</p>
        <p className="text-slate-500 mt-2"># Cek IP yang di-ban:</p>
        <p className="text-green-400">$ sudo fail2ban-client status sshd</p>
      </div>

      <h4 className="font-bold text-slate-800">5. Monitoring Log SSH</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Pantau percobaan login gagal secara real-time:</p>
        <p className="text-green-400">$ sudo tail -f /var/log/auth.log | grep &quot;Failed password&quot;</p>
        <p className="text-slate-500 mt-2"># Hitung total brute-force hari ini:</p>
        <p className="text-green-400">{`$ grep "Failed password" /var/log/auth.log | grep "$(date +%b\\ %d)" | wc -l`}</p>
        <p className="text-slate-500 mt-2"># Lihat IP paling aktif menyerang:</p>
        <p className="text-green-400">{`$ grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -10`}</p>
      </div>

      <h4 className="font-bold text-slate-800">6. SOP Uji Perubahan Aman</h4>
      <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-700">
        <li>Buka sesi SSH kedua sebelum restart service.</li>
        <li>Validasi sintaks: <code>sudo sshd -t</code>.</li>
        <li>Restart: <code>sudo systemctl restart sshd</code>.</li>
        <li>Pastikan login key-based sukses dari jaringan admin.</li>
        <li>Tutup sesi lama hanya jika sesi baru stabil.</li>
      </ol>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Checklist Lulus SOP:</strong> root login mati, password login mati, fail2ban aktif, firewall membatasi
        sumber IP, dan log audit terbaca oleh tim operasi.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Akses SSH"
        items={sshCases}
      />
    </div>
  );
}
