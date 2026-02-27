'use client';

import type { ComponentType } from 'react';

export function IncidentModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">SOP Ini dikhususkan pada skenario kebocoran data (Data Breach pada SIAKAD/Database Keuangan institusi), pengambilalihan hak akses server (Root Access Compromised), Web Defacement berskala besar lintas sub-domain, dan Distributed Denial of Service (DDoS) yang menargetkan bandwidth Data Center Kampus.</p>
      <div className="bg-slate-50 flex flex-col gap-4 rounded-2xl p-6 border border-slate-200 font-mono text-sm overflow-x-auto text-slate-800 shadow-inner">
        <p className="font-bold border-b border-slate-300 pb-2 mb-3">Persyaratan Administratif &amp; Teknis Pelaporan (Khusus PIC Unit)</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Pelapor <strong>DIWAJIBKAN</strong> merupakan Admin Sistem, Staf Infrastruktur Resmi Pusat Data, atau pejabat berwenang (Dekan/Kepala Biro IT). Mahasiswa/Pihak Umum gunakan kanal VDP.</li>
          <li>Jangan lakukan RESTART server atau menghapus Log/File PHP hasil retasan (WebShell). Memusnahkan file retasan akan menghilangkan jejak forensik.</li>
          <li>Hubungi Hotline Emergency Tim Respon Siber Universitas: <strong>+62 (Ops Center) EXT. 301</strong> (Hanya untuk Eskalasi Level Merah)</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-lg">Alur Eksekusi Forensik (Timeline Mitigasi / Kill-Chain)</h4>
        <div className="relative border-l-2 border-slate-200 ml-4 space-y-6 py-2 mt-4">
          {[
            { color: 'bg-red-500', title: 'Fase 1: Triase Insiden & Analisis Awal Darurat (< 30 Menit)', desc: 'CSIRT bertugas menganalisis log HTTP/s Access (dari Nginx/Apache maupun WAF Cloudflare/BigIP institusi) & Log Autentikasi Sistem yang dilaporkan untuk memastikan insiden ini sah atau sekedar False-Positive.' },
            { color: 'bg-orange-500', title: 'Fase 2: Containment (Isolasi Lateral) Terpadu', desc: 'CSIRT pusat berkoordinasi dengan NOC (Jaringan) akan mematikan Static Routing IP Publik menuju Server Bermasalah (Route Nulling) dan memindahkan Domain ke mode \'Maintenance Static HTML\' tanpa menyentuh server aslinya.' },
            { color: 'bg-indigo-500', title: 'Fase 3: Disk & Memory Forensics (Root Cause Hunt)', desc: 'Pengambilan Image Disk dari VM (Virtual Machine/Proxmox/VMWare) atau Container (Docker). Melokalisir celah dan mencadangkan log ke brankas barang bukti digital (Evidence Retention).' },
            { color: 'bg-green-500', title: 'Fase 4: Eradikasi & Recovery Sistem', desc: 'Pembersihan Total: Reset paksa kredensial database & akses FTP/SSH. Penambalan kode (Hot-Fixing). Data dikembalikan dari jadwal Off-Site Backup Terakhir. Aplikasi di-deploy ulang lewat pipeline server yang di-hardening.' },
          ].map((phase) => (
            <div key={phase.title} className="relative pl-6">
              <div className={`absolute -left-[9px] top-1 w-4 h-4 ${phase.color} rounded-full border-2 border-white`} />
              <h5 className="font-bold text-slate-800 text-base">{phase.title}</h5>
              <p className="text-sm text-slate-600 mt-1">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MalwareModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Instruksi darurat jika ditemukan Endpoint (PC Desktop Administrasi Keuangan/Siakad Fakultas, Laboratorium Praktikum Mahasiswa, atau Server File Storage/Samba) yang secara tiba-tiba Data didalamnya tidak bisa dibuka atau muncul program meminta uang/ransom di layar komputer.</p>
      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded font-bold text-red-900 text-sm">
        ! PERATURAN MUTLAK KAMPUS PUSAT (NO-RANSOM POLICY) !<br />
        Universitas Nurul Jadid MENGHARAMKAN dengan keras segala bentuk negosiasi/pembayaran tebusan Crypto (Bitcoin) kepada pelaku kejahatan Ransomware.
      </div>
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-inner space-y-4">
        <h4 className="font-bold text-orange-900 border-b border-orange-200 pb-2 mb-2">Tindakan Cepat Staf / Laboran (Dalam 1 Menit Awal):</h4>
        <ol className="list-decimal pl-5 text-sm text-orange-800 space-y-3 font-medium">
          <li><strong>CABUT FISIK KABEL JARINGAN (LAN):</strong> Segera lepaskan kabel UTP dari PC yang bersangkutan. Jika tersambung via WiFi, matikan paksa WiFi adapter (AirPlane Mode).</li>
          <li><strong>JANGAN MEMATIKAN SISTEM KOMPUTER (DO NOT SHUTDOWN):</strong> Biarkan PC dalam keadaan HIDUP namun TERPUTUS jaringan. Malware Ransomware menyimpan Kunci Enkripsi dalam memori (Volatile RAM).</li>
          <li><strong>Lapor ke Grup IT Fakultas atau Call-Center CSIRT sekarang juga.</strong></li>
          <li>Cabut Flashdisk/Hardisk External jika menancap (JANGAN DIPASANGKAN ke PC LAIN).</li>
        </ol>
      </div>
    </div>
  );
}

export function VaptModalContent() {
  return (
    <div className="space-y-6">
      <div><h4 className="font-extrabold text-slate-900 border-b-2 border-slate-200 pb-2 mb-4 text-xl">Latar Belakang Ketidakpatuhan Kode</h4><p className="text-slate-600 text-sm leading-relaxed">Sebagian besar eksfiltrasi/peretasan data universitas disebabkan oleh aplikasi PHP/Laravel kuno, fungsi unggah file tanpa validasi MIME, atau Business Logic Flaw. VAPT wajib dilakukan sebelum sistem baru go-live.</p></div>
      <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100"><h4 className="font-bold text-indigo-900 mb-4">Syarat Administratif Pra-Audit (Mutlak):</h4><ul className="list-disc pl-5 text-sm text-slate-700 space-y-2"><li>Mengajukan surat resmi ke Direktur IT Pusat <strong>H-14</strong> sebelum launching.</li><li>Sistem yang diaudit HARUS di server Staging, <strong>BUKAN</strong> Production.</li><li>Menyerahkan akses Dummy Account minimal 2 Role (Admin + User).</li><li>Dokumentasi API (Swagger/Postman Collection) jika ada endpoint REST.</li><li>Menyertakan diagram arsitektur sistem dan flow data.</li></ul></div>
      <h4 className="font-bold text-slate-800">Metodologi Pengujian (5 Fase):</h4>
      <div className="relative border-l-2 border-indigo-200 ml-4 space-y-5 py-2">
        {[
          { num: '01', title: 'Reconnaissance & Information Gathering', desc: 'Pemetaan endpoint, teknologi stack, subdomain enumeration, dan port scanning.' },
          { num: '02', title: 'Vulnerability Scanning (Automated)', desc: 'OWASP ZAP, Nuclei, Burp Suite Scanner untuk deteksi kerentanan umum.' },
          { num: '03', title: 'Manual Exploitation & Validation', desc: 'Pengujian manual: SQL Injection, XSS, IDOR, SSRF, Business Logic Flaw.' },
          { num: '04', title: 'Post-Exploitation Analysis', desc: 'Evaluasi dampak: data exposure, privilege escalation, lateral movement.' },
          { num: '05', title: 'Reporting & Remediation Advisory', desc: 'Laporan CVSS scoring, bukti PoC, rekomendasi perbaikan prioritas.' },
        ].map((phase) => (
          <div key={phase.num} className="relative pl-8">
            <div className="absolute -left-[13px] top-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold">{phase.num}</div>
            <h5 className="font-bold text-slate-800 text-sm">{phase.title}</h5>
            <p className="text-xs text-slate-600 mt-1">{phase.desc}</p>
          </div>
        ))}
      </div>
      <h4 className="font-bold text-slate-800">Contoh Output Laporan VAPT:</h4>
      <div className="font-mono bg-slate-900 text-green-400 p-4 rounded-xl text-xs overflow-x-auto shadow-inner"><p>Vulnerability Discovered:</p><p>[CRITICAL - CVSS 9.4] Unauthenticated SQL Injection at Search API</p><p>[HIGH - CVSS 8.1] Server-Side Request Forgery on Export PDF Route</p><p>[MEDIUM - CVSS 5.3] Lack of Rate Limiting in OTP SMS Generator</p><p>[LOW - CVSS 2.1] Missing X-Content-Type-Options Header</p><p className="mt-2 text-red-400">&gt; Status Release: REJECTED — Perbaiki semua CRITICAL &amp; HIGH</p></div>
      <h4 className="font-bold text-slate-800">Skala Severity CVSS:</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-red-50 border border-red-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-red-700">9.0-10</p><p className="text-xs text-slate-600">CRITICAL</p></div>
        <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-orange-700">7.0-8.9</p><p className="text-xs text-slate-600">HIGH</p></div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-amber-700">4.0-6.9</p><p className="text-xs text-slate-600">MEDIUM</p></div>
        <div className="bg-green-50 border border-green-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-green-700">0.1-3.9</p><p className="text-xs text-slate-600">LOW</p></div>
      </div>
    </div>
  );
}

export function AdvisoryModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Layanan peringatan dini (Cyber Threat Intelligence) menyiarkan notifikasi bahaya yang disesuaikan dengan inventaris aplikasi &amp; server kampus. Kami memonitor CVE database, vendor security bulletin, dan BSSN advisory secara aktif.</p>
      <h4 className="font-bold text-slate-800">Klasifikasi Tingkat Keparahan Advisory:</h4>
      <div className="space-y-3">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded"><p className="text-sm font-bold text-red-900">🔴 KRITIS — Tindakan Segera (H+0)</p><p className="text-xs text-red-700 mt-1">Zero-day aktif dieksploitasi. Contoh: RCE di Apache/Nginx tanpa autentikasi.</p></div>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded"><p className="text-sm font-bold text-orange-900">🟠 TINGGI — Tindakan Cepat (H+24)</p><p className="text-xs text-orange-700 mt-1">CVE kritis pada framework kampus (Laravel, WordPress, Moodle).</p></div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded"><p className="text-sm font-bold text-amber-900">🟡 SEDANG — Terjadwal (H+72)</p><p className="text-xs text-amber-700 mt-1">Patch keamanan rutin OS Linux/Windows Server, update minor framework.</p></div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded"><p className="text-sm font-bold text-blue-900">🔵 INFORMASI — Edukasi</p><p className="text-xs text-blue-700 mt-1">Tren ancaman baru, awareness phishing, best practice update.</p></div>
      </div>
      <div className="bg-slate-50 p-6 rounded-xl border border-blue-100">
        <h4 className="font-bold text-blue-900 border-b border-blue-200 pb-2 mb-3">Distribusi Komunikasi Advisory:</h4>
        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2 font-medium">
          <li><strong>Jalur Kritis (H+0):</strong> Notifikasi langsung via Telegram tertutup Sysadmin + telepon PIC.</li>
          <li><strong>Jalur Tinggi (H+24):</strong> Email enkripsi ke seluruh admin server fakultas.</li>
          <li><strong>Jalur Sedang:</strong> Newsletter IT Keamanan bulanan ke seluruh PIC unit.</li>
          <li><strong>Jalur Informasi:</strong> Publikasi di portal CSIRT + media sosial universitas.</li>
        </ul>
      </div>
      <h4 className="font-bold text-slate-800">Frekuensi Distribusi:</h4>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white border border-blue-100 rounded-xl p-3 text-center"><p className="text-2xl font-extrabold text-blue-600">Real-time</p><p className="text-xs text-slate-500">Kritis &amp; Tinggi</p></div>
        <div className="bg-white border border-blue-100 rounded-xl p-3 text-center"><p className="text-2xl font-extrabold text-blue-600">Mingguan</p><p className="text-xs text-slate-500">Ringkasan CVE</p></div>
        <div className="bg-white border border-blue-100 rounded-xl p-3 text-center"><p className="text-2xl font-extrabold text-blue-600">Bulanan</p><p className="text-xs text-slate-500">Newsletter</p></div>
      </div>
    </div>
  );
}

export function VdpModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Kami menghargai kontribusi Mahasiswa Informatika, Dosen, dan Peneliti Independen (White Hat) untuk melaporkan kerentanan secara bertanggung jawab (Responsible Disclosure).</p>
      <h4 className="font-bold text-slate-800 border-b border-slate-200 pb-2">Aturan Keterikatan (Rules of Engagement)</h4>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-100 rounded-xl p-4">
          <p className="text-sm font-bold text-green-800 mb-2">{`✅ Dalam Scope (Diizinkan)`}</p>
          <ul className="text-xs text-green-700 space-y-1.5 font-medium">
            <li>Subdomain *.unuja.ac.id</li>
            <li>Aplikasi web kampus (SIAKAD, e-Learning, PMB)</li>
            <li>API endpoint yang terdokumentasi</li>
            <li>Misconfiguration server publik</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <p className="text-sm font-bold text-red-800 mb-2">{`❌ Di Luar Scope (Dilarang)`}</p>
          <ul className="text-xs text-red-700 space-y-1.5 font-medium">
            <li>Serangan DDoS / volumetric attack</li>
            <li>Social Engineering (phishing ke Dosen)</li>
            <li>Modifikasi data (nilai, NIM, keuangan)</li>
            <li>Scanning agresif (lebih dari 10 req/detik)</li>
          </ul>
        </div>
      </div>
      <h4 className="font-bold text-slate-800">Timeline Respon VDP:</h4>
      <div className="relative border-l-2 border-green-200 ml-4 space-y-4 py-2">
        {[
          { time: 'H+1', action: 'Konfirmasi penerimaan laporan via email.' },
          { time: 'H+3', action: 'Triase awal dan validasi reproduksi temuan.' },
          { time: 'H+7', action: 'Notifikasi status kepada pelapor (Valid/Invalid).' },
          { time: 'H+30', action: 'Target remediasi untuk temuan Valid.' },
          { time: 'H+45', action: 'Publikasi kredit di Hall of Fame (jika diizinkan).' },
        ].map((step) => (
          <div key={step.time} className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            <p className="text-sm"><span className="font-bold text-green-700">{step.time}:</span> <span className="text-slate-600">{step.action}</span></p>
          </div>
        ))}
      </div>
      <h4 className="font-bold text-slate-800">Apresiasi (Hall of Fame):</h4>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li><strong>Critical/High:</strong> Nama di Hall of Fame + Sertifikat Apresiasi Rektor.</li>
        <li><strong>Medium:</strong> Nama tercantum di Hall of Fame portal CSIRT.</li>
        <li><strong>Low/Info:</strong> Ucapan terima kasih resmi via email.</li>
      </ul>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800"><strong>Kirim Laporan:</strong> Email ke <strong>csirt@unuja.ac.id</strong> dengan subjek <code>[VDP] Judul Temuan</code>. Sertakan: URL endpoint, langkah reproduksi, screenshot/video PoC, dan dampak.</div>
    </div>
  );
}

export function ConsultModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">SPBE harus dirancang dengan pondasi anti-rapuh (Secure-By-Design dan Secure-By-Default). Tim CSIRT membantu menyelaraskan pengembangan perangkat lunak pada kaidah keamanan formal ISO 27001.</p>
      <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
        <h4 className="font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">Ranah Konsultasi yang Tersedia:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Keamanan Jaringan & Topologi', desc: 'Desain DMZ, segmentasi VLAN, firewall rules, dan VPN site-to-site antar kampus.' },
            { title: 'Manajemen Identitas (IAM)', desc: 'Implementasi SSO (SAML/OpenID), Active Directory, dan kebijakan RBAC.' },
            { title: 'Disaster Recovery Plan (DRP)', desc: 'Failover planning, backup strategy, RTO/RPO definition, simulasi pemulihan.' },
            { title: 'Kontrak SLA Vendor', desc: 'Penyusunan SLA, NDA, penetration testing clause, audit hak akses vendor.' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-4 border border-blue-50 rounded-xl">
              <p className="text-sm font-bold text-blue-800">{item.title}</p>
              <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <h4 className="font-bold text-slate-800">Prosedur Pengajuan Konsultasi:</h4>
      <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li>Kirim email permohonan ke <strong>csirt@unuja.ac.id</strong> dengan subjek <code>[KONSULTASI] Topik</code>.</li>
        <li>Lampirkan: Latar belakang proyek, diagram arsitektur (jika ada), dan jadwal.</li>
        <li>CSIRT merespon dalam <strong>H+3 hari kerja</strong> untuk penjadwalan sesi.</li>
        <li>Sesi konsultasi <strong>tatap muka atau video call</strong> (maks 2 jam per sesi).</li>
        <li>Deliverable: Dokumen rekomendasi arsitektur + checklist implementasi.</li>
      </ol>
    </div>
  );
}

export function ESignModalContent() {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 text-sm leading-relaxed">Menunjang integritas data akademik dan kepercayaan publik melalui penggunaan identitas digital terverifikasi. Layanan mencakup TTE (Tanda Tangan Elektronik) tersertifikasi dan manajemen sertifikat SSL/TLS.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-emerald-100 rounded-2xl shadow-sm">
          <h4 className="font-bold text-emerald-900 mb-3">Tanda Tangan Elektronik (TTE)</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><strong>Integrasi BSRE:</strong> Terhubung dengan Balai Sertifikasi Elektronik untuk validitas hukum.</li>
            <li><strong>Verifikasi Identitas:</strong> Enrolment dengan verifikasi KTP dan biometrik.</li>
            <li><strong>Validator Dokumen:</strong> Portal QR Code untuk keaslian ijazah/surat digital.</li>
            <li><strong>Jenis Dokumen:</strong> Ijazah, Transkrip, SK Rektor, Surat Tugas, Kontrak.</li>
          </ul>
        </div>
        <div className="bg-white p-6 border border-blue-100 rounded-2xl shadow-sm">
          <h4 className="font-bold text-blue-900 mb-3">Manajemen Sertifikat SSL/TLS</h4>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><strong>Multi-Domain SSL:</strong> Satu sertifikat untuk *.unuja.ac.id.</li>
            <li><strong>Auto-Renewal:</strong> Otomatis via Let&apos;s Encrypt + Certbot.</li>
            <li><strong>Cipher Hardening:</strong> TLS 1.2/1.3 dengan cipher suite kuat.</li>
            <li><strong>Monitoring Expiry:</strong> Notifikasi H-30, H-14, H-7 sebelum expired.</li>
          </ul>
        </div>
      </div>
      <h4 className="font-bold text-slate-800">Alur Pengajuan Sertifikat SSL Baru:</h4>
      <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li>PIC Fakultas mengajukan permohonan subdomain + SSL ke Pusat Data.</li>
        <li>Tim CSIRT melakukan validasi domain ownership (DNS TXT record).</li>
        <li>Sertifikat diterbitkan dan di-install di server target.</li>
        <li>Verifikasi konfigurasi via <strong>SSL Labs</strong> (target: Grade A).</li>
      </ol>
    </div>
  );
}

export function AuditKamiModalContent() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100"><h4 className="font-bold text-blue-900 mb-3">Apa itu Indeks KAMI?</h4><p className="text-sm text-slate-700 leading-relaxed">Indeks Keamanan Informasi (KAMI) adalah alat evaluasi yang dikembangkan oleh BSSN untuk memetakan tingkat kematangan dan kesiapan keamanan informasi di instansi pemerintah dan perguruan tinggi berdasarkan <strong>ISO/IEC 27001:2013</strong>.</p></div>
      <h4 className="font-bold text-slate-800">Area Evaluasi Indeks KAMI:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { area: 'Area 1: Tata Kelola', desc: 'Kebijakan keamanan informasi, struktur organisasi CSIRT, tanggung jawab pengelolaan risiko.' },
          { area: 'Area 2: Pengelolaan Risiko', desc: 'Identifikasi aset kritis, penilaian ancaman dan kerentanan, rencana mitigasi.' },
          { area: 'Area 3: Kerangka Kerja', desc: 'SOP, panduan teknis, dokumentasi kebijakan keamanan informasi.' },
          { area: 'Area 4: Pengelolaan Aset', desc: 'Inventaris aset TI (server, aplikasi, data), klasifikasi informasi, kontrol akses.' },
          { area: 'Area 5: Teknologi & Keamanan', desc: 'Implementasi firewall, IDS/IPS, enkripsi, backup, dan patch management.' },
          { area: 'Area 6: Suplemen', desc: 'Cloud computing, IoT, dan teknologi emerging yang digunakan institusi.' },
        ].map((item) => (
          <div key={item.area} className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl">
            <span className="text-blue-700 font-bold block mb-1 text-sm">{item.area}</span>
            <p className="text-xs text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <h4 className="font-bold text-slate-800">Tingkat Kematangan:</h4>
      <div className="grid grid-cols-5 gap-2">
        {[
          { level: 'I', label: 'Kondisi Awal', color: 'bg-red-100 text-red-800' },
          { level: 'II', label: 'Kerangka Dasar', color: 'bg-orange-100 text-orange-800' },
          { level: 'III', label: 'Terdefinisi', color: 'bg-amber-100 text-amber-800' },
          { level: 'IV', label: 'Terkelola', color: 'bg-blue-100 text-blue-800' },
          { level: 'V', label: 'Optimal', color: 'bg-green-100 text-green-800' },
        ].map((m) => (
          <div key={m.level} className={`${m.color} rounded-xl p-2 text-center`}>
            <p className="text-lg font-extrabold">{m.level}</p>
            <p className="text-[10px]">{m.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800"><strong>Target:</strong> Universitas menargetkan minimal Level III (Terdefinisi &amp; Konsisten) pada evaluasi Indeks KAMI periode berikutnya.</div>
    </div>
  );
}

export function DrillModalContent() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-slate-900 p-8 rounded-3xl text-white">
        <div className="md:w-1/3 text-center"><div className="text-5xl font-extrabold text-red-500 mb-2">RED</div><div className="text-xs uppercase tracking-widest text-slate-400">Team (Attackers)</div><p className="text-xs text-slate-500 mt-2">Simulasi serangan nyata: phishing, exploitation, lateral movement.</p></div>
        <div className="md:w-1/3 text-center border-y md:border-y-0 md:border-x border-slate-700 py-4 md:py-0"><div className="text-2xl font-bold">VS</div></div>
        <div className="md:w-1/3 text-center"><div className="text-5xl font-extrabold text-blue-500 mb-2">BLUE</div><div className="text-xs uppercase tracking-widest text-slate-400">Team (Defenders)</div><p className="text-xs text-slate-500 mt-2">Deteksi, respon, dan pemulihan dari serangan simulasi.</p></div>
      </div>
      <h4 className="font-bold text-slate-900 text-lg">Tujuan &amp; Manfaat Simulasi:</h4>
      <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
        <li>Menguji efektivitas SOP CSIRT dalam kondisi mendekati nyata.</li>
        <li>Mengidentifikasi gap komunikasi antar tim IT Fakultas dan Pusat.</li>
        <li>Melatih kecepatan deteksi dan respon insiden (MTTD &amp; MTTR).</li>
        <li>Validasi kesiapan Disaster Recovery Plan (DRP).</li>
      </ul>
      <h4 className="font-bold text-slate-800">Skenario Drill Tahunan:</h4>
      <div className="space-y-3">
        {[
          { q: 'Q1 (Maret)', scenario: 'Simulasi Phishing Campaign', desc: 'Email phishing terkontrol ke sivitas akademika untuk mengukur awareness.' },
          { q: 'Q2 (Juni)', scenario: 'Simulasi Web Defacement', desc: 'Red team mencoba deface staging. Blue team deteksi dan pulihkan.' },
          { q: 'Q3 (September)', scenario: 'Simulasi Ransomware', desc: 'Skenario ransomware di lab. Uji SOP isolasi, komunikasi, dan recovery.' },
          { q: 'Q4 (Desember)', scenario: 'Tabletop Exercise (TTX)', desc: 'Diskusi simulasi DDoS berskala besar terhadap infrastruktur inti kampus.' },
        ].map((item) => (
          <div key={item.q} className="bg-white border border-slate-100 rounded-xl p-4 flex gap-4 items-start">
            <span className="text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded shrink-0">{item.q}</span>
            <div><p className="text-sm font-bold text-slate-800">{item.scenario}</p><p className="text-xs text-slate-600 mt-1">{item.desc}</p></div>
          </div>
        ))}
      </div>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800"><strong>Partisipasi:</strong> Seluruh PIC IT Unit/Fakultas <strong>WAJIB</strong> mengikuti minimal 2 dari 4 siklus drill tahunan. Absensi drill dicatat dalam laporan kinerja keamanan TI.</div>
    </div>
  );
}

export interface ModalConfig {
  title: string;
  badge: string;
  headerBg: string;
  headerBorder: string;
  titleColor: string;
  badgeBg: string;
  Content: ComponentType;
  footerLabel: string;
  footerClassName: string;
}

export const modalRegistry: Record<string, ModalConfig> = {
  incident: {
    title: 'Incident Response: Aplikasi & Server Akademik',
    badge: 'Standard Operating Procedure',
    headerBg: 'bg-red-50',
    headerBorder: 'border-red-200',
    titleColor: 'text-red-800',
    badgeBg: 'bg-red-600',
    Content: IncidentModalContent,
    footerLabel: 'Tutup Panduan Insiden',
    footerClassName: 'px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm',
  },
  malware: {
    title: 'Penanganan Artefak Malware & Ransomware',
    badge: 'Prosedur Darurat Endpoint',
    headerBg: 'bg-orange-50',
    headerBorder: 'border-orange-200',
    titleColor: 'text-orange-800',
    badgeBg: 'bg-orange-600',
    Content: MalwareModalContent,
    footerLabel: 'Tutup Panduan Malware',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  vapt: {
    title: 'Vulnerability Assessment (VAPT) Sistem Baru',
    badge: 'Prosedur Clearance Standar Audit',
    headerBg: 'bg-indigo-50',
    headerBorder: 'border-indigo-200',
    titleColor: 'text-indigo-800',
    badgeBg: 'bg-indigo-600',
    Content: VaptModalContent,
    footerLabel: 'Tutup Panduan Audit',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  advisory: {
    title: 'Security Advisories Infrastruktur Kampus',
    badge: 'Intelijen Siber (CTI)',
    headerBg: 'bg-blue-50',
    headerBorder: 'border-blue-200',
    titleColor: 'text-blue-800',
    badgeBg: 'bg-blue-600',
    Content: AdvisoryModalContent,
    footerLabel: 'Tutup Advisory',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  vdp: {
    title: 'Vulnerability Disclosure Program (VDP)',
    badge: 'Program Komunitas Etis',
    headerBg: 'bg-green-50',
    headerBorder: 'border-green-200',
    titleColor: 'text-green-800',
    badgeBg: 'bg-green-600',
    Content: VdpModalContent,
    footerLabel: 'Mengerti Kebijakan',
    footerClassName: 'px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-sm',
  },
  consult: {
    title: 'Konsultansi Arsitektur Keamanan Kampus',
    badge: 'Standar Tata Kelola SPBE',
    headerBg: 'bg-blue-50',
    headerBorder: 'border-blue-200',
    titleColor: 'text-blue-800',
    badgeBg: 'bg-blue-600',
    Content: ConsultModalContent,
    footerLabel: 'Tutup Panduan Tata Kelola',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  esign: {
    title: 'Layanan Sertifikat Elektronik & SSL',
    badge: 'Trust & Security',
    headerBg: 'bg-emerald-50',
    headerBorder: 'border-emerald-200',
    titleColor: 'text-emerald-800',
    badgeBg: 'bg-emerald-600',
    Content: ESignModalContent,
    footerLabel: 'Mengerti Layanan',
    footerClassName: 'px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm',
  },
  'audit-kami': {
    title: 'Audit Indeks KAMI & Keamanan SPBE',
    badge: 'Compliance & Regulation',
    headerBg: 'bg-blue-50',
    headerBorder: 'border-blue-200',
    titleColor: 'text-blue-900',
    badgeBg: 'bg-blue-800',
    Content: AuditKamiModalContent,
    footerLabel: 'Tutup Panduan Audit',
    footerClassName: 'px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-sm',
  },
  drill: {
    title: 'Cyber Security Drill & Simulation',
    badge: 'Readiness & Simulation',
    headerBg: 'bg-red-50',
    headerBorder: 'border-red-200',
    titleColor: 'text-red-800',
    badgeBg: 'bg-red-600',
    Content: DrillModalContent,
    footerLabel: 'Mengerti Alur Drill',
    footerClassName: 'px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm',
  },
};
