import Image from 'next/image';

export default function Organization() {
  const members = [
    { name: 'Koordinator CSIRT', role: 'Pusat Data dan Sistem Informasi', roleColor: 'text-blue-600', avatar: 'PDSI', avatarBg: '0D8ABC', desc: 'Menjembatani alur komunikasi tingkat eksekutif ke Rektorat, mengambil kebijakan pemutusan jaringan massal berskala kampus dalam skenario darurat Merah.', verified: true },
    { name: 'Analis CTI & Forensik', role: 'Tier-2 (Incident Handler)', roleColor: 'text-indigo-600', avatar: 'CTI', avatarBg: '4F46E5', desc: 'Bertugas terjun langsung ke level Root Linux, menganalisa artefak log Nginx, mencari celah *0-day* dan merekonstruksi serangan *Kill-Chain* yang sukses masuk.' },
    { name: 'Pusat Layanan TI', role: 'Tier-1 (Triase Awal)', roleColor: 'text-green-600', avatar: 'Helpdesk', avatarBg: '10B981', desc: 'Aduan Mahasiswa/Dosen mengenai Phishing, kelupaan Password, pencurian kredensial di media sosial untuk di filter sebelum eskalasi ke L2/L3.' },
  ];

  return (
    <div className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 border-b-2 border-slate-200 inline-block pb-2">Struktur Organisasi (Tim Ahli)</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Susunan fungsional analis keamanan yang siap siaga merespon eskalasi ancaman siber.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div key={member.name} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full bg-slate-100 border-4 border-white shadow-md flex items-center justify-center relative">
              <Image src={`https://ui-avatars.com/api/?name=${member.avatar}&background=${member.avatarBg}&color=fff`} alt="Avatar" width={96} height={96} className="w-full h-full rounded-full" unoptimized />
              {member.verified && (
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center" title="Verified Staff">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
            <p className={`${member.roleColor} text-sm font-semibold mb-3`}>{member.role}</p>
            <p className="text-slate-500 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
