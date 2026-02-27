import IssueMatrix, { IssueMatrixItem } from './IssueMatrix';

const uploadCases: IssueMatrixItem[] = [
  {
    kondisi: 'File gambar ternyata berisi payload script',
    indikasi: 'File lolos upload tetapi memicu request/process mencurigakan di server',
    dampak: 'Remote code execution atau webshell aktif',
    responCepat: 'Karantina direktori upload, blok eksekusi script, scan massal seluruh file terbaru',
    pencegahan: 'Validasi MIME berbasis konten, storage private, whitelist ekstensi ketat',
  },
  {
    kondisi: 'Server melambat saat banyak upload bersamaan',
    indikasi: 'CPU/disk tinggi, antrean request menumpuk, timeout meningkat',
    dampak: 'DoS parsial dan layanan lain ikut terganggu',
    responCepat: 'Aktifkan rate limiting upload, turunkan max body size, pisahkan worker upload',
    pencegahan: 'Quota per akun, asynchronous processing, monitoring kapasitas storage',
  },
  {
    kondisi: 'File berbahaya lolos karena antivirus mati/usang',
    indikasi: 'Log menunjukkan daemon scan tidak aktif atau database signature lama',
    dampak: 'Malware tersimpan di sistem dan berpotensi menyebar',
    responCepat: 'Aktifkan ulang daemon, update signature, rescan file pada rentang waktu terdampak',
    pencegahan: 'Health check antivirus harian dan alert otomatis ketika signature expired',
  },
  {
    kondisi: 'Nama file mengandung karakter path traversal',
    indikasi: 'Upload gagal aneh atau file tersimpan di lokasi tidak semestinya',
    dampak: 'Overwrite file penting atau kebocoran data',
    responCepat: 'Abaikan nama asli file, gunakan UUID, validasi path normalization',
    pencegahan: 'Selalu generate nama file server-side dan larang karakter khusus path',
  },
];

export default function UploadModal() {
  return (
    <div className="space-y-6">
      <div className="rounded border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-900">
        <strong>Kritis:</strong> celah unrestricted file upload dapat berubah menjadi remote code execution jika file
        berbahaya lolos validasi dan dapat dieksekusi di server.
      </div>

      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-900">
        <strong>Target SOP:</strong> file tervalidasi berdasarkan konten, disimpan secara terisolasi, discan malware,
        dan semua aktivitas upload tercatat dalam audit log.
      </div>

      <h4 className="font-bold text-slate-800">1. Validasi MIME-Type (Bukan Ekstensi Saja)</h4>
      <p className="mb-2 text-xs text-slate-500">
        Ekstensi dapat dimanipulasi (contoh: foto.php.jpg). Validasi harus berbasis MIME asli.
      </p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-2">
        <p className="text-green-400">{`// Validasi server-side di Laravel`}</p>
        <p>{`$request->validate([`}</p>
        <p className="ml-4">{`'foto' => 'required|file|mimetypes:image/jpeg,image/png|max:2048',`}</p>
        <p className="ml-4">{`'dokumen' => 'required|file|mimes:pdf,doc,docx|max:5120',`}</p>
        <p>{`]);`}</p>
      </div>

      <h4 className="font-bold text-slate-800">2. Rename File dan Isolasi Storage</h4>
      <p className="mb-2 text-xs text-slate-500">
        Jangan simpan nama asli file. Simpan dengan UUID/hash di storage private.
      </p>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-2">
        <p className="text-green-400">{`// Simpan dengan disk private`}</p>
        <p>{`$path = $request->file('foto')->store('uploads/foto', 'private');`}</p>
        <p className="text-slate-500">{`// Manual rename`}</p>
        <p>{`$filename = Str::uuid() . '.' . $file->extension();`}</p>
        <p>{`$file->storeAs('uploads', $filename, 'private');`}</p>
      </div>

      <h4 className="font-bold text-slate-800">3. Nonaktifkan Eksekusi Script di Folder Upload</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-2">
        <p className="text-slate-500"># Contoh Nginx</p>
        <p>{`location ^~ /storage/uploads/ {`}</p>
        <p className="ml-4">autoindex off;</p>
        <p className="ml-4">types { }</p>
        <p className="ml-4">default_type application/octet-stream;</p>
        <p className="ml-4">add_header Content-Disposition &quot;attachment&quot;;</p>
        <p>{`}`}</p>
      </div>

      <h4 className="font-bold text-slate-800">4. Scanning Malware (ClamAV)</h4>
      <div className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-slate-300 shadow-inner space-y-2">
        <p className="text-green-400">$ sudo apt install clamav clamav-daemon</p>
        <p className="text-green-400">$ sudo freshclam</p>
        <p className="text-slate-500"># Scan file sesudah upload</p>
        <p className="text-green-400">{`$ clamscan --no-summary /var/www/app/storage/uploads/file.pdf`}</p>
      </div>

      <h4 className="font-bold text-slate-800">5. Logging dan Verifikasi Berkala</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
        <li>Catat user, IP, timestamp, hash SHA-256, dan hasil scan antivirus.</li>
        <li>Tolak file double extension dan MIME mismatch.</li>
        <li>Tetapkan batas ukuran file sesuai kebutuhan bisnis.</li>
        <li>Lakukan sample review mingguan terhadap file upload.</li>
      </ul>

      <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <strong>Aturan Emas:</strong> validasi sisi klien tidak cukup. Semua kontrol upload wajib dilakukan
        di server-side dan dicatat untuk kebutuhan audit.
      </div>

      <IssueMatrix
        title="Kondisi Masalah Pada Fitur Unggah File"
        items={uploadCases}
      />
    </div>
  );
}
