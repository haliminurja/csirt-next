'use client';

import { useState } from 'react';

interface QuickTemplateCardProps {
  title: string;
  audience: string;
  description: string;
  email: string;
  subject: string;
  body: string;
}

export default function QuickTemplateCard({
  title,
  audience,
  description,
  email,
  subject,
  body,
}: QuickTemplateCardProps) {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  async function handleCopy() {
    const content = `Subjek: ${subject}\n\n${body}`;
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.setAttribute('readonly', 'true');
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold tracking-wide text-blue-700 uppercase">{audience}</p>
      <h4 className="mt-1 text-base font-bold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      <p className="mt-3 text-xs text-slate-500">Subjek rekomendasi:</p>
      <code className="mt-1 block rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">{subject}</code>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <a
          href={mailto}
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-800"
        >
          Gunakan via Email
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700"
        >
          {copied ? 'Template Tersalin' : 'Salin Template'}
        </button>
      </div>
    </article>
  );
}
