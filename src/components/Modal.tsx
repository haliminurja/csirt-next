'use client';

import { useEffect, useRef, useCallback } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  badge?: string;
  headerBg?: string;
  headerBorder?: string;
  titleColor?: string;
  badgeBg?: string;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  badge,
  headerBg = 'bg-slate-50',
  headerBorder = 'border-slate-200',
  titleColor = 'text-slate-900',
  badgeBg = 'bg-slate-600',
  children,
  footerContent,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      requestAnimationFrame(() => {
        modalRef.current?.classList.remove('opacity-0');
        modalRef.current?.classList.add('opacity-100');
        contentRef.current?.classList.remove('scale-95');
        contentRef.current?.classList.add('scale-100');
      });
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleEsc]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/60 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={contentRef}
        className="flex max-h-[90vh] w-full max-w-4xl scale-95 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl transition-transform duration-300 dark:bg-slate-900"
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-6 border-b ${headerBorder} ${headerBg}`}>
          <div className="flex items-center flex-wrap gap-2">
            {badge && (
              <span className={`${badgeBg} text-white text-xs font-bold px-2 py-1 rounded uppercase mr-1`}>
                {badge}
              </span>
            )}
            <h3 className={`text-xl font-bold ${titleColor}`}>{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-slate-400 transition-colors hover:bg-white hover:text-red-500 dark:hover:bg-slate-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-8 text-slate-700 dark:text-slate-300">{children}</div>

        {/* Footer */}
        {footerContent && (
          <div className="flex justify-end border-t border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/70">
            {footerContent}
          </div>
        )}
      </div>
    </div>
  );
}
