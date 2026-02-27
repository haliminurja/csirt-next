'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useDarkMode, useGlobalStore, useSidebarOpen } from '@/store/useGlobalStore';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/panduan', label: 'Panduan' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const darkMode = useDarkMode();
  const isSidebarOpen = useSidebarOpen();
  const setSidebar = useGlobalStore((s) => s.setSidebar);
  const toggleDarkMode = useGlobalStore((s) => s.toggleDarkMode);
  const pushAlert = useGlobalStore((s) => s.pushAlert);

  function handleDarkModeToggle() {
    toggleDarkMode();
    pushAlert(darkMode ? 'Mode terang aktif.' : 'Mode gelap aktif.', 'info');
  }

  function handleOpsPanelToggle() {
    const nextOpenState = !isSidebarOpen;
    setSidebar(nextOpenState);
    pushAlert(nextOpenState ? 'Ops Panel dibuka.' : 'Ops Panel ditutup.', 'info');
  }

  return (
    <header className="glass-premium sticky top-0 z-50 border-b border-white/20 text-slate-800 shadow-sm dark:border-slate-700/80 dark:text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center space-x-3">
            <Image
              src="/logo_unuja.png"
              alt="UNUJA Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
            >
              UNUJA<span className="text-blue-600 font-light ml-1">CSIRT</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8 text-sm font-semibold items-center">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors ${
                    isActive ? 'text-blue-700 dark:text-blue-300' : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-md" />
                  )}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={handleOpsPanelToggle}
              className="ml-2 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              Ops Panel
            </button>

            <button
              type="button"
              onClick={handleDarkModeToggle}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              {darkMode ? 'Mode Terang' : 'Mode Gelap'}
            </button>

            <a
              href="mailto:csirt@unuja.ac.id"
              className="ml-2 rounded-lg bg-slate-900 px-4 py-2 text-white shadow-sm transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Lapor Insiden
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 py-4 space-y-2 dark:border-slate-700">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-semibold ${
                    isActive ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => {
                handleOpsPanelToggle();
                setMobileOpen(false);
              }}
              className="mx-4 mt-2 block w-[calc(100%-2rem)] rounded-lg border border-slate-200 bg-white px-4 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Ops Panel
            </button>
            <button
              type="button"
              onClick={() => {
                handleDarkModeToggle();
                setMobileOpen(false);
              }}
              className="mx-4 mt-2 block w-[calc(100%-2rem)] rounded-lg border border-slate-200 bg-white px-4 py-2 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {darkMode ? 'Aktifkan Mode Terang' : 'Aktifkan Mode Gelap'}
            </button>
            <a
              href="mailto:csirt@unuja.ac.id"
              className="mx-4 mt-2 block rounded-lg bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Lapor Insiden
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
