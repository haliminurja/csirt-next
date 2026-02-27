'use client';

import { useEffect } from 'react';
import { useDarkMode } from '@/store/useGlobalStore';

export default function AppStateHydrator() {
  const darkMode = useDarkMode();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return null;
}
