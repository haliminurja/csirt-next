'use client';

import { useState } from 'react';

interface ReportActionsProps {
  mailto: string;
  template: string;
  tone?: 'blue' | 'slate';
  emailLabel: string;
  checklistItems: string[];
  checklistTitle?: string;
}

function getEmailButtonClassName(tone: 'blue' | 'slate') {
  if (tone === 'blue') {
    return 'bg-blue-600 hover:bg-blue-700';
  }
  return 'bg-slate-900 hover:bg-slate-800';
}

export default function ReportActions({
  mailto,
  template,
  tone = 'blue',
  emailLabel,
  checklistItems,
  checklistTitle = 'Checklist sebelum kirim email',
}: ReportActionsProps) {
  const [copied, setCopied] = useState(false);
  const [checks, setChecks] = useState<boolean[]>(() => checklistItems.map(() => false));
  const allChecked = checks.length > 0 && checks.every(Boolean);

  function handleToggleCheck(index: number) {
    setChecks((prev) => prev.map((value, i) => (i === index ? !value : value)));
  }

  async function handleCopyTemplate() {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(template);
      } else {
        const el = document.createElement('textarea');
        el.value = template;
        el.setAttribute('readonly', 'true');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 space-y-2">
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-600">{checklistTitle}</p>
        <div className="mt-2 space-y-2">
          {checklistItems.map((item, index) => (
            <label key={item} className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={checks[index] ?? false}
                onChange={() => handleToggleCheck(index)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          if (allChecked) {
            window.location.href = mailto;
          }
        }}
        disabled={!allChecked}
        className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${getEmailButtonClassName(tone)}`}
      >
        {emailLabel}
      </button>
      <button
        type="button"
        onClick={handleCopyTemplate}
        className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700"
      >
        {copied ? 'Template Tersalin' : 'Salin Template Laporan'}
      </button>
      {!allChecked && (
        <p className="text-xs text-slate-500">Lengkapi checklist agar tombol kirim email aktif.</p>
      )}
    </div>
  );
}
