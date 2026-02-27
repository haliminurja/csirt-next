export default function RansomwareModal() {
  return (
    <div className="space-y-6">
      <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded font-bold text-red-900 text-sm shadow-sm">CABUT LALU-LINTAS, JANGAN CABUT DAYA! (Isolasi Fisik Tanpa Restart)</div>
      <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <h4 className="font-bold border-b border-slate-200 pb-2 text-slate-900">A. Golden Rules Operasi Triase (Menit 0-5):</h4>
        <ol className="list-decimal pl-5 space-y-3 font-medium">
          <li><strong>Disable Network Adapter:</strong> Cabut kabel LAN atau matikan Virtual NIC segera. WiFi → Airplane Mode.</li>
          <li><strong>Dilarang Reboot:</strong> Kunci Dekripsi kadang tersisa di RAM. Forensik membutuhkan RAM Dumping.</li>
          <li><strong>Cabut USB/External:</strong> Flashdisk/HDD External yang menancap harus dicabut. JANGAN pasang ke PC lain.</li>
          <li>Hubungi Escalation Call Center CSIRT pada ekstensi PUSKOM.</li>
        </ol>
      </div>
      <h4 className="font-bold text-slate-800">B. Informasi yang Harus Disiapkan untuk CSIRT:</h4>
      <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2 font-medium">
        <li>Nama komputer / hostname dan lokasi ruangan.</li>
        <li>Screenshot pesan ransomware (jika memungkinkan, foto layar dengan HP).</li>
        <li>IP Address komputer (jalankan <code>ipconfig</code> jika masih bisa).</li>
        <li>Estimasi kapan gejala pertama muncul (file tidak bisa dibuka, popup aneh).</li>
        <li>Apakah ada USB/flashdisk yang sempat dipasang hari ini?</li>
      </ul>
      <h4 className="font-bold text-slate-800">C. Yang TIDAK BOLEH Dilakukan:</h4>
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <ul className="text-sm text-red-800 space-y-2 font-medium">
          <li>❌ <strong>Jangan bayar tebusan</strong> (Bitcoin/crypto) — Universitas menerapkan NO-RANSOM POLICY.</li>
          <li>❌ <strong>Jangan delete file</strong> yang sudah ter-enkripsi — ini bisa menghilangkan jejak forensik.</li>
          <li>❌ <strong>Jangan install antivirus baru</strong> di PC yang terinfeksi — bisa overwrite evidence.</li>
          <li>❌ <strong>Jangan hubungkan ke jaringan lain</strong> — ransomware bisa menyebar lateral.</li>
        </ul>
      </div>
      <h4 className="font-bold text-slate-800">D. Timeline Respon CSIRT:</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-white border border-red-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-red-600">{'<'} 15m</p><p className="text-xs text-slate-500">Triase Awal</p></div>
        <div className="bg-white border border-orange-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-orange-600">{'<'} 1h</p><p className="text-xs text-slate-500">Isolasi Jaringan</p></div>
        <div className="bg-white border border-blue-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-blue-600">{'<'} 4h</p><p className="text-xs text-slate-500">Analisis Forensik</p></div>
        <div className="bg-white border border-green-100 rounded-xl p-3 text-center"><p className="text-lg font-extrabold text-green-600">{'<'} 24h</p><p className="text-xs text-slate-500">Recovery Sistem</p></div>
      </div>
    </div>
  );
}
