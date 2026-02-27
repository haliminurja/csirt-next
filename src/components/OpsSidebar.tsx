'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { useDarkMode, useGlobalStore, useSidebarOpen } from '@/store/useGlobalStore';

const severityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'critical', label: 'Critical' },
] as const;

type SeverityOption = (typeof severityOptions)[number]['value'];

function buildMailtoLink({
  title,
  severity,
  reporter,
  contact,
  unit,
  description,
}: {
  title: string;
  severity: SeverityOption;
  reporter: string;
  contact: string;
  unit: string;
  description: string;
}) {
  const now = new Date().toLocaleString('id-ID', { hour12: false });
  const subject = `[LAPOR INSIDEN][${severity.toUpperCase()}] ${title}`;
  const body = [
    'Halo Tim CSIRT UNUJA,',
    '',
    'Saya ingin melaporkan insiden keamanan dengan detail berikut:',
    '',
    `Judul Insiden : ${title}`,
    `Severity      : ${severity.toUpperCase()}`,
    `Pelapor       : ${reporter}`,
    `Kontak        : ${contact}`,
    `Unit/Fakultas : ${unit}`,
    `Waktu Lapor   : ${now}`,
    '',
    'Deskripsi Singkat:',
    description,
    '',
    'Lampiran bukti (jika ada): screenshot, log, dan URL terdampak.',
    '',
    'Terima kasih.',
  ].join('\n');

  return `mailto:csirt@unuja.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function OpsSidebar() {
  const isSidebarOpen = useSidebarOpen();
  const darkMode = useDarkMode();
  const setSidebar = useGlobalStore((s) => s.setSidebar);
  const toggleDarkMode = useGlobalStore((s) => s.toggleDarkMode);
  const pushAlert = useGlobalStore((s) => s.pushAlert);

  const [title, setTitle] = useState('');
  const [severity, setSeverity] = useState<SeverityOption>('medium');
  const [reporter, setReporter] = useState('');
  const [contact, setContact] = useState('');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');

  function handlePanelToggle(open: boolean) {
    setSidebar(open);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanReporter = reporter.trim();
    const cleanContact = contact.trim();
    const cleanUnit = unit.trim();
    const cleanDescription = description.trim();

    if (cleanTitle.length < 4 || cleanDescription.length < 10) {
      pushAlert('Judul minimal 4 karakter dan deskripsi minimal 10 karakter.', 'warning');
      return;
    }

    const mailtoLink = buildMailtoLink({
      title: cleanTitle,
      severity,
      reporter: cleanReporter || '-',
      contact: cleanContact || '-',
      unit: cleanUnit || '-',
      description: cleanDescription,
    });

    window.location.href = mailtoLink;
    pushAlert('Draft email laporan insiden dibuka di email client.', 'success');

    setTitle('');
    setReporter('');
    setContact('');
    setUnit('');
    setDescription('');
    setSeverity('medium');
  }

  function handleToggleDarkMode() {
    toggleDarkMode();
    pushAlert(darkMode ? 'Mode terang aktif.' : 'Mode gelap aktif.', 'info');
  }

  return (
    <>
      <button
        type="button"
        onClick={() => handlePanelToggle(!isSidebarOpen)}
        className="fixed bottom-6 right-6 z-[65] inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-[0_12px_30px_-14px_rgba(15,23,42,0.35)] hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        Ops Panel
      </button>

      <aside
        className={`fixed top-20 right-4 bottom-4 z-[64] w-[calc(100%-2rem)] max-w-md transform overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)] backdrop-blur-md transition-all duration-300 dark:border-slate-700 dark:bg-slate-900/95 ${
          isSidebarOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-[120%] opacity-0'
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">CSIRT Ops</p>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-slate-100">Command Center</h2>
            </div>
            <button
              type="button"
              onClick={() => handlePanelToggle(false)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Tutup
            </button>
          </div>

          <div className="border-b border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
              <p className="text-xs font-semibold text-blue-700">Kanal Laporan</p>
              <p className="mt-1 text-sm font-bold text-blue-800">Full via Email: csirt@unuja.ac.id</p>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={handleToggleDarkMode}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {darkMode ? 'Mode Terang' : 'Mode Gelap'}
              </button>
              <button
                type="button"
                onClick={() => pushAlert('Sistem notifikasi aktif dan berjalan normal.', 'info')}
                className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 hover:bg-blue-100"
              >
                Tes Alert
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-600 dark:text-slate-300">Form Lapor Insiden</h3>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Judul insiden (contoh: Defacement subdomain)"
                className="mt-3 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
              />
              <div className="mt-2 flex gap-2">
                <select
                  value={severity}
                  onChange={(event) => setSeverity(event.target.value as SeverityOption)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                >
                  {severityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2 grid grid-cols-1 gap-2">
                <input
                  value={reporter}
                  onChange={(event) => setReporter(event.target.value)}
                  placeholder="Nama pelapor / PIC"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <input
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  placeholder="Kontak (email/telepon)"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <input
                  value={unit}
                  onChange={(event) => setUnit(event.target.value)}
                  placeholder="Unit/Fakultas"
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
                <textarea
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Deskripsi insiden, URL terdampak, waktu kejadian, dan dampak yang terlihat"
                  rows={5}
                  className="resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none ring-blue-300 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <button
                type="submit"
                className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-bold text-white hover:bg-blue-700"
              >
                Buka Draft Email Laporan
              </button>
            </form>

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              Gunakan channel email sebagai satu-satunya jalur resmi pelaporan. Untuk kasus kritis, sertakan bukti log
              dan screenshot agar triase tim CSIRT lebih cepat.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
