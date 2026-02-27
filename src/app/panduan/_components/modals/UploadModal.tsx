export default function UploadModal() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded text-sm text-red-900"><strong>Kritis:</strong> Kelemahan Unrestricted File Upload sangat digemari peretas — cukup mengunggah file PHP (hacker.php) dan server resmi kampus bisa dikuasai total dalam hitungan detik.</div>
      <h4 className="font-bold text-slate-800">1. Validasi MIME-Type (Bukan Ekstensi Saja!)</h4>
      <p className="text-slate-500 text-xs mb-2">Ekstensi file bisa dimanipulasi (foto.php.jpg). Validasi berdasarkan konten MIME yang sebenarnya.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-2">
        <p className="text-green-400">{`// Laravel validation (server-side WAJIB):`}</p>
        <p>{`$request->validate([`}</p>
        <p className="ml-4 text-green-400">{`'foto' => 'required|file|mimetypes:image/jpeg,image/png|max:2048',`}</p>
        <p className="ml-4 text-green-400">{`'dokumen' => 'required|file|mimes:pdf,doc,docx|max:5120',`}</p>
        <p>{`]);`}</p>
      </div>
      <h4 className="font-bold text-slate-800">2. Rename File &amp; Isolasi Storage</h4>
      <p className="text-slate-500 text-xs mb-2">Jangan simpan file dengan nama asli. Gunakan hash random dan simpan di luar web root.</p>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-2">
        <p className="text-green-400">{`// Simpan dengan nama hash random:`}</p>
        <p>{`$path = $request->file('foto')->store('uploads/foto', 'private');`}</p>
        <p className="text-slate-500 mt-2">{`// Atau manual rename:`}</p>
        <p>{`$filename = Str::uuid() . '.' . $file->getClientOriginalExtension();`}</p>
        <p>{`$file->storeAs('uploads', $filename, 'private');`}</p>
      </div>
      <h4 className="font-bold text-slate-800">3. Nginx: Nonaktifkan Eksekusi PHP di Folder Upload</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-2">
        <p className="text-slate-500"># Wajib di setiap virtual host Nginx:</p>
        <p>{`location ^~ /storage/uploads/ {`}</p>
        <p className="ml-4 text-green-400">php_admin_flag engine off;</p>
        <p className="ml-4 text-green-400">add_header Content-Type text/plain;</p>
        <p className="ml-4 text-green-400">add_header Content-Disposition attachment;</p>
        <p>{'}'}</p>
      </div>
      <h4 className="font-bold text-slate-800">4. Scanning Antivirus (ClamAV)</h4>
      <div className="bg-slate-900 text-slate-300 font-mono text-xs p-4 rounded-xl overflow-x-auto shadow-inner space-y-2">
        <p className="text-slate-500"># Instalasi ClamAV di server:</p>
        <p className="text-green-400">$ sudo apt install clamav clamav-daemon</p>
        <p className="text-green-400">$ sudo freshclam</p>
        <p className="text-slate-500 mt-2"># Scan file setelah upload (di Laravel middleware/job):</p>
        <p className="text-green-400">{`$ clamscan --no-summary /var/www/app/storage/uploads/file.pdf`}</p>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800"><strong>Aturan Emas:</strong> Tidak ada validasi di sisi client (JavaScript) yang bisa dipercaya. Semua validasi WAJIB dilakukan di server-side.</div>
    </div>
  );
}
