'use client';

import { useEffect } from 'react';
import { type Alert, type AlertSeverity, useAlerts, useGlobalStore } from '@/store/useGlobalStore';

type AlertItemProps = {
  alert: Alert;
  onDismiss: (id: string) => void;
};

function getAlertTone(severity: AlertSeverity) {
  switch (severity) {
    case 'success':
      return 'border-emerald-200 bg-emerald-50 text-emerald-800';
    case 'warning':
      return 'border-amber-200 bg-amber-50 text-amber-800';
    case 'error':
      return 'border-red-200 bg-red-50 text-red-800';
    default:
      return 'border-blue-200 bg-blue-50 text-blue-800';
  }
}

function AlertItem({ alert, onDismiss }: AlertItemProps) {
  useEffect(() => {
    const timerId = window.setTimeout(() => {
      onDismiss(alert.id);
    }, 6000);

    return () => window.clearTimeout(timerId);
  }, [alert.id, onDismiss]);

  return (
    <div className={`pointer-events-auto rounded-xl border px-4 py-3 shadow-sm backdrop-blur-md ${getAlertTone(alert.severity)}`}>
      <div className="flex items-start gap-3">
        <p className="text-sm font-semibold leading-relaxed">{alert.message}</p>
        <button
          type="button"
          onClick={() => onDismiss(alert.id)}
          className="ml-auto rounded-md px-2 py-0.5 text-xs font-bold text-slate-500 transition-colors hover:bg-white/70 hover:text-slate-800"
          aria-label="Tutup notifikasi"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

export default function AlertTray() {
  const alerts = useAlerts();
  const dismissAlert = useGlobalStore((s) => s.dismissAlert);

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed top-20 right-4 z-[70] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2 sm:right-6">
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} onDismiss={dismissAlert} />
      ))}
    </div>
  );
}
