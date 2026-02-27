import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';

export type AlertSeverity = 'info' | 'success' | 'warning' | 'error';

export interface Alert {
  id: string;
  message: string;
  severity: AlertSeverity;
}

interface GlobalState {
  alerts: Alert[];
  isSidebarOpen: boolean;
  darkMode: boolean;
  pushAlert: (message: string, severity?: AlertSeverity) => void;
  dismissAlert: (id: string) => void;
  setSidebar: (open: boolean) => void;
  toggleDarkMode: () => void;
}

function createStoreId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      alerts: [],
      isSidebarOpen: false,
      darkMode: false,
      pushAlert: (message, severity = 'info') =>
        set((state) => ({
          alerts: [...state.alerts.slice(-4), { id: createStoreId(), message, severity }],
        })),
      dismissAlert: (id) =>
        set((state) => ({
          alerts: state.alerts.filter((alert) => alert.id !== id),
        })),
      setSidebar: (isSidebarOpen) => set({ isSidebarOpen }),
      toggleDarkMode: () =>
        set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: 'app-store',
      version: 2,
      partialize: (state) => ({
        darkMode: state.darkMode,
        isSidebarOpen: state.isSidebarOpen,
      }),
    },
  ),
);

const selectAlerts = (state: GlobalState) => state.alerts;

export const useDarkMode = () => useGlobalStore((state) => state.darkMode);
export const useAlerts = () => useGlobalStore(useShallow(selectAlerts));
export const useSidebarOpen = () => useGlobalStore((state) => state.isSidebarOpen);
