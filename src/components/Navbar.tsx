'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/profil', label: 'Profil' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/panduan', label: 'Panduan' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="glass-premium text-slate-800 sticky top-0 z-50 shadow-sm border-b border-white/20">
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
              className="text-xl font-extrabold tracking-tight text-slate-900 hover:text-blue-700 transition-colors"
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
                    isActive ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-t-md" />
                  )}
                </Link>
              );
            })}
            <a
              href="mailto:csirt@unuja.ac.id"
              className="ml-4 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Lapor Insiden
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-900"
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
          <div className="lg:hidden border-t border-slate-100 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-semibold ${
                    isActive ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="mailto:csirt@unuja.ac.id"
              className="block mx-4 mt-2 px-4 py-2 bg-slate-900 text-white text-center rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            >
              Lapor Insiden
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
