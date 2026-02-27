export default function SshModal() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded text-sm text-red-900"><strong>Fakta:</strong> Setiap detiknya, mesin server terpublikasi diserang oleh botnet yang mencoba menebak password Root (Brute-Force SSH port 22). Rata-rata 10.000+ percobaan login per hari per server.</div>
      <h4 className="font-bold text-slate-800">1. Konfigurasi Dasar <code>/etc/ssh/sshd_config</code></h4>
      <p className="text-slate-500 text-xs mb-2">Ubah port default, nonaktifkan root login, dan hanya izinkan autentikasi berbasis kunci publik.</p>
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
      <h4 className="font-bold text-slate-800">2. Membuat SSH Key Pair (Ed25519)</h4>
      <p className="text-slate-500 text-xs mb-2">Gunakan algoritma Ed25519 yang lebih aman dan cepat dibanding RSA.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Di komputer lokal sysadmin:</p>
        <p className="text-green-400">{`$ ssh-keygen -t ed25519 -C "sysadmin@unuja.ac.id" -f ~/.ssh/id_server_prod`}</p>
        <p className="text-slate-500 mt-2"># Copy key ke server:</p>
        <p className="text-green-400">$ ssh-copy-id -i ~/.ssh/id_server_prod.pub -p 22022 sysadmin@10.10.1.50</p>
        <p className="text-slate-500 mt-2"># Test koneksi tanpa password:</p>
        <p className="text-green-400">$ ssh -i ~/.ssh/id_server_prod -p 22022 sysadmin@10.10.1.50</p>
      </div>
      <h4 className="font-bold text-slate-800">3. Instalasi &amp; Konfigurasi Fail2Ban</h4>
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
      <h4 className="font-bold text-slate-800">4. Monitoring Log SSH</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-1">
        <p className="text-slate-500"># Pantau percobaan login gagal secara real-time:</p>
        <p className="text-green-400">$ sudo tail -f /var/log/auth.log | grep &quot;Failed password&quot;</p>
        <p className="text-slate-500 mt-2"># Hitung total brute-force hari ini:</p>
        <p className="text-green-400">{`$ grep "Failed password" /var/log/auth.log | grep "$(date +%b\\ %d)" | wc -l`}</p>
        <p className="text-slate-500 mt-2"># Lihat IP paling aktif menyerang:</p>
        <p className="text-green-400">{`$ grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -rn | head -10`}</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800"><strong>Restart Service:</strong> Setelah mengubah konfigurasi, jalankan <code>sudo systemctl restart sshd</code> dan pastikan koneksi baru berjalan normal sebelum menutup sesi SSH aktif.</div>
    </div>
  );
}
