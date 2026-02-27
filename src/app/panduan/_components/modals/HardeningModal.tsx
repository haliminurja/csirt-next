export default function HardeningModal() {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded text-sm text-amber-900"><strong>Prioritas Kritis:</strong> Server yang tidak di-hardening merupakan target utama botnet otomatis. Lebih dari 70% insiden dimulai dari Information Disclosure &amp; konfigurasi default.</div>
      <p className="text-slate-600 text-sm leading-relaxed">Pengelola infrastruktur diwajibkan menutup detil versi piranti lunak (Information Disclosure) untuk menghindari pengecekan bug otomatis (banner grabbing tools). Panduan ini mencakup hardening Nginx, PHP-FPM, TLS, dan pembatasan akses direktori.</p>
      <h4 className="font-bold text-slate-800 mt-6 mb-2">1. Menyembunyikan Identitas Header HTTP Nginx</h4>
      <p className="text-slate-500 text-xs mb-2">Menghilangkan informasi versi Nginx dan identitas server dari response header HTTP.</p>
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
      <h4 className="font-bold text-slate-800 mt-6 mb-2">2. Limitasi Modul Eksekusi Shell (PHP-FPM)</h4>
      <p className="text-slate-500 text-xs mb-2">Menonaktifkan fungsi PHP berbahaya yang sering dimanfaatkan oleh WebShell untuk menjalankan perintah OS.</p>
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
      <h4 className="font-bold text-slate-800 mt-6 mb-2">3. Hardening TLS/SSL (Cipher Suites)</h4>
      <p className="text-slate-500 text-xs mb-2">Hanya izinkan protokol TLS modern dan cipher suite yang kuat untuk mencegah serangan downgrade.</p>
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
      <h4 className="font-bold text-slate-800 mt-6 mb-2">4. Nonaktifkan Directory Listing &amp; Batasi Request Body</h4>
      <p className="text-slate-500 text-xs mb-2">Mencegah penyerang melihat isi direktori dan membatasi ukuran upload untuk mitigasi DoS.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Dalam blok server {'{ }'}</p>
        <p className="text-green-400">autoindex off;</p>
        <p className="text-green-400">client_max_body_size 10M;</p>
        <p className="text-green-400">client_body_timeout 12;</p>
        <p className="text-green-400">client_header_timeout 12;</p>
        <p className="text-green-400">keepalive_timeout 15;</p>
        <p className="text-green-400">send_timeout 10;</p>
      </div>
      <h4 className="font-bold text-slate-800 mt-6 mb-2">5. Verifikasi Hasil Hardening</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner">
        <p className="text-slate-500"># Cek header response</p>
        <p className="text-green-400">$ curl -I https://siakad.unuja.ac.id</p>
        <p className="text-slate-500 mt-2"># Scan SSL grade (harus A/A+)</p>
        <p className="text-green-400">$ nmap --script ssl-enum-ciphers -p 443 siakad.unuja.ac.id</p>
        <p className="text-slate-500 mt-2"># Online: https://www.ssllabs.com/ssltest/</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800"><strong>Checklist Validasi:</strong> Pastikan <code>server_tokens off</code> tidak menampilkan versi Nginx, <code>expose_php = Off</code> tidak menampilkan header <code>X-Powered-By</code>, dan SSL Labs menampilkan grade minimal <strong>A</strong>.</div>
    </div>
  );
}
