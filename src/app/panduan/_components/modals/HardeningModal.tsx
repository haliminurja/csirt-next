import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const hardeningCases: IssueMatrixItem[] = [
  {
    kondisi: 'Server cepat terdeteksi scanner internet',
    indikasi: 'Lonjakan request probing ke /phpinfo, /wp-admin, /vendor',
    dampak: 'Eksploitasi otomatis pada service yang belum ditambal',
    responCepat: 'Aktifkan WAF/rate-limit, blok pattern scanning, patch service prioritas',
    pencegahan: 'Hardening baseline sebelum publish dan vulnerability scan berkala',
  },
  {
    kondisi: 'Header server menampilkan versi detail',
    indikasi: 'Response HTTP mengandung banner versi Nginx/PHP',
    dampak: 'Attacker mudah mencocokkan exploit sesuai versi',
    responCepat: 'Matikan server_tokens/expose_php dan deploy ulang konfigurasi',
    pencegahan: 'Standarisasi template config + audit header setiap rilis',
  },
  {
    kondisi: 'File aplikasi bisa diubah oleh proses web',
    indikasi: 'Timestamp file source berubah tanpa aktivitas deploy resmi',
    dampak: 'Webshell persistence dan supply chain lokal',
    responCepat: 'Set permission read-only, audit file integrity, isolate host terdampak',
    pencegahan: 'Prinsip least privilege pada filesystem + FIM (file integrity monitoring)',
  },
  {
    kondisi: 'TLS score turun setelah perubahan konfigurasi',
    indikasi: 'Scanner menunjukkan cipher lemah/protokol lawas aktif',
    dampak: 'Risiko downgrade attack dan kelemahan enkripsi',
    responCepat: 'Kembalikan config TLS hardened, restart service, verifikasi ulang scanner',
    pencegahan: 'Gunakan template TLS terstandar dan change control review',
  },
];

export default function HardeningModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-amber-500 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Prioritas Kritis:</strong> Server tanpa hardening dasar adalah target utama botnet otomatis.
        SOP ini wajib dijalankan sebelum layanan dipublikasikan.
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-slate-900">Tujuan SOP</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Menurunkan risiko eksploitasi dari konfigurasi default sistem.</li>
          <li>Meminimalkan informasi sensitif yang bocor melalui response HTTP.</li>
          <li>Menjamin standar minimum keamanan web server sebelum go-live.</li>
        </ul>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">1. Baseline OS dan Paket</h4>
      <p className="mb-2 text-xs text-slate-500">Jalankan update terjadwal dan matikan layanan yang tidak dipakai.</p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner">
        <p className="text-slate-500"># Update paket dan hapus service yang tidak diperlukan</p>
        <p className="text-green-400">$ sudo apt update &amp;&amp; sudo apt upgrade -y</p>
        <p className="text-green-400">$ sudo systemctl list-unit-files --type=service</p>
        <p className="text-green-400">$ sudo ufw default deny incoming</p>
        <p className="text-green-400">$ sudo ufw allow 80,443/tcp</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">2. Sembunyikan Identitas Header HTTP Nginx</h4>
      <p className="mb-2 text-xs text-slate-500">Hilangkan versi Nginx dan metadata server dari response HTTP.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Edit berkas: /etc/nginx/nginx.conf</p>
        <p>{'http {'}</p>
        <p className="text-green-400 ml-4">server_tokens off;</p>
        <p className="text-green-400 ml-4">{`more_set_headers 'Server: Restricted';`}</p>
        <p className="text-green-400 ml-4">{`add_header X-Frame-Options "SAMEORIGIN";`}</p>
        <p className="text-green-400 ml-4">{`add_header X-XSS-Protection "1; mode=block";`}</p>
        <p className="text-green-400 ml-4">{`add_header X-Content-Type-Options "nosniff";`}</p>
        <p>{'}'}</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">3. Batasi Fungsi Berbahaya PHP-FPM</h4>
      <p className="mb-2 text-xs text-slate-500">Nonaktifkan fungsi shell dan fitur yang sering dipakai webshell.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Edit berkas: /etc/php/*/fpm/php.ini</p>
        <p className="text-green-400">expose_php = Off</p>
        <p className="text-green-400">disable_functions = exec, passthru, shell_exec, system, proc_open, popen, curl_multi_exec, parse_ini_file, show_source</p>
        <p className="text-green-400">allow_url_fopen = Off</p>
        <p className="text-green-400">allow_url_include = Off</p>
        <p className="text-green-400">session.cookie_httponly = 1</p>
        <p className="text-green-400">session.cookie_secure = 1</p>
        <p className="text-green-400">session.use_strict_mode = 1</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">4. Izin File dan Isolasi Direktori</h4>
      <p className="mb-2 text-xs text-slate-500">Pastikan file aplikasi tidak writable oleh user web server secara bebas.</p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner">
        <p className="text-slate-500"># Ownership dan permission minimum</p>
        <p className="text-green-400">$ sudo chown -R root:www-data /var/www/app</p>
        <p className="text-green-400">$ sudo find /var/www/app -type d -exec chmod 750 {'{}'} \\;</p>
        <p className="text-green-400">$ sudo find /var/www/app -type f -exec chmod 640 {'{}'} \\;</p>
        <p className="text-green-400">$ sudo chmod -R 770 /var/www/app/storage /var/www/app/bootstrap/cache</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">5. Hardening TLS/SSL</h4>
      <p className="mb-2 text-xs text-slate-500">Izinkan hanya protokol modern untuk mencegah downgrade attack.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># /etc/nginx/conf.d/ssl-hardening.conf</p>
        <p className="text-green-400">ssl_protocols TLSv1.2 TLSv1.3;</p>
        <p className="text-green-400">{`ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384';`}</p>
        <p className="text-green-400">ssl_prefer_server_ciphers on;</p>
        <p className="text-green-400">ssl_session_timeout 1d;</p>
        <p className="text-green-400">ssl_session_cache shared:SSL:50m;</p>
        <p className="text-green-400">ssl_stapling on;</p>
        <p className="text-green-400">ssl_stapling_verify on;</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">6. Nonaktifkan Directory Listing dan Batasi Request</h4>
      <p className="mb-2 text-xs text-slate-500">Cegah listing direktori dan batasi request untuk menekan risiko abuse.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Dalam blok server {'{ }'}</p>
        <p className="text-green-400">autoindex off;</p>
        <p className="text-green-400">client_max_body_size 10M;</p>
        <p className="text-green-400">client_body_timeout 12;</p>
        <p className="text-green-400">client_header_timeout 12;</p>
        <p className="text-green-400">keepalive_timeout 15;</p>
        <p className="text-green-400">send_timeout 10;</p>
      </div>

      <h4 className="mb-2 mt-6 font-bold text-slate-800">7. Verifikasi Hasil Hardening</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Cek header response</p>
        <p className="text-green-400">$ curl -I https://siakad.unuja.ac.id</p>
        <p className="text-slate-500 mt-2"># Scan SSL grade (harus A/A+)</p>
        <p className="text-green-400">$ nmap --script ssl-enum-ciphers -p 443 siakad.unuja.ac.id</p>
        <p className="text-slate-500 mt-2"># Online: https://www.ssllabs.com/ssltest/</p>
      </div>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Checklist Operasional:</strong>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Header versi server tidak muncul.</li>
          <li>Root login shell dan fungsi PHP berbahaya nonaktif.</li>
          <li>Firewall hanya membuka port yang diperlukan.</li>
          <li>Nilai SSL Labs minimal A.</li>
          <li>Validasi ulang setelah patch mingguan.</li>
        </ul>
      </div>

      <IssueMatrix
        title="Kondisi Masalah Umum pada Hardening Server"
        items={hardeningCases}
      />
    </div>
  );
}
