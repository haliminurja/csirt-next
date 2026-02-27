import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type AlertSeverity    = 'info' | 'success' | 'warning' | 'error';
export type IncidentSeverity = 'low' | 'medium' | 'high' | 'critical';

export interface Alert {
  id:       string;
  message:  string;
  severity: AlertSeverity;
}

export interface Incident {
  id:          string;
  title:       string;
  severity:    IncidentSeverity;
  createdAt:   number;
  resolvedAt?: number;
}
interface GlobalState {
  alerts:               Alert[];
  isSidebarOpen:        boolean;
  darkMode:             boolean;
  incidents:            Incident[];
  pushAlert:   (message: string, severity?: AlertSeverity) => void;
  dismissAlert:(id: string) => void;
  setSidebar:  (open: boolean) => void;

  toggleDarkMode: () => void;

  addIncident:     (incident: Omit<Incident, 'id' | 'createdAt'>) => void;
  resolveIncident: (id: string) => void;
  removeIncident:  (id: string) => void;
}

const IS_DEV = process.env.NODE_ENV === 'development';

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        alerts:        [],
        isSidebarOpen: true,
        darkMode:      false,
        incidents:     [],

        pushAlert: (message, severity = 'info') =>
          set(
            (s) => ({ alerts: [...s.alerts, { id: crypto.randomUUID(), message, severity }] }),
            false, 'ui/pushAlert',
          ),

        dismissAlert: (id) =>
          set(
            (s) => ({ alerts: s.alerts.filter((a) => a.id !== id) }),
            false, 'ui/dismissAlert',
          ),

        setSidebar: (isSidebarOpen) =>
          set({ isSidebarOpen }, false, 'ui/setSidebar'),

        toggleDarkMode: () =>
          set((s) => ({ darkMode: !s.darkMode }), false, 'prefs/toggleDarkMode'),

        addIncident: (incident) =>
          set(
            (s) => ({ incidents: [...s.incidents, { ...incident, id: crypto.randomUUID(), createdAt: Date.now() }] }),
            false, 'incidents/add',
          ),

        resolveIncident: (id) =>
          set(
            (s) => ({ incidents: s.incidents.map((i) => i.id === id ? { ...i, resolvedAt: Date.now() } : i) }),
            false, 'incidents/resolve',
          ),

        removeIncident: (id) =>
          set(
            (s) => ({ incidents: s.incidents.filter((i) => i.id !== id) }),
            false, 'incidents/remove',
          ),
      }),

      {
        name: 'app-store',
        version: 1,
        partialize: (s) => ({
          darkMode:      s.darkMode,
          isSidebarOpen: s.isSidebarOpen,
        }),
      },
    ),
    { name: 'GlobalStore', enabled: IS_DEV },
  ),
);

export const useDarkMode         = () => useGlobalStore((s) => s.darkMode);
export const useAlerts           = () => useGlobalStore((s) => s.alerts);
export const useSidebarOpen      = () => useGlobalStore((s) => s.isSidebarOpen);
export const useActiveIncidents  = () => useGlobalStore((s) => s.incidents.filter((i) => !i.resolvedAt));
export const useIncidentCount    = () => useGlobalStore((s) => s.incidents.filter((i) => !i.resolvedAt).length);