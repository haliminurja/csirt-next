import { ComponentType } from 'react';
import HardeningModal from './HardeningModal';
import SshModal from './SshModal';
import BackupModal from './BackupModal';
import DbHardeningModal from './DbHardeningModal';
import HeadersModal from './HeadersModal';
import LaravelModal from './LaravelModal';
import UploadModal from './UploadModal';
import PythonModal from './PythonModal';
import NodejsModal from './NodejsModal';
import GolangModal from './GolangModal';
import FrontendModal from './FrontendModal';
import PhishingModal from './PhishingModal';
import PrivacyModal from './PrivacyModal';
import RansomwareModal from './RansomwareModal';

export interface ModalConfig {
  title: string;
  headerBg: string;
  headerBorder: string;
  titleColor: string;
  Content: ComponentType;
  footerLabel: string;
  footerClassName: string;
}

export const modalRegistry: Record<string, ModalConfig> = {
  hardening: {
    title: 'Hardening Server (Nginx & PHP-FPM)',
    headerBg: 'bg-slate-100',
    headerBorder: 'border-slate-200',
    titleColor: 'text-slate-900',
    Content: HardeningModal,
    footerLabel: 'Tutup Panduan Server',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  ssh: {
    title: 'Perlindungan Akses Remote Server (SSH & Fail2Ban)',
    headerBg: 'bg-slate-100',
    headerBorder: 'border-slate-200',
    titleColor: 'text-slate-900',
    Content: SshModal,
    footerLabel: 'Tutup Panduan SSH',
    footerClassName: 'px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-lg shadow-sm',
  },
  backup: {
    title: 'Pencadangan Sistem & Data (Disaster Recovery Plan)',
    headerBg: 'bg-orange-50',
    headerBorder: 'border-orange-200',
    titleColor: 'text-orange-800',
    Content: BackupModal,
    footerLabel: 'Tutup DRP',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  'db-hard': {
    title: 'Database Hardening SOP',
    headerBg: 'bg-blue-50',
    headerBorder: 'border-blue-200',
    titleColor: 'text-blue-900',
    Content: DbHardeningModal,
    footerLabel: 'Tutup Panduan',
    footerClassName: 'px-6 py-2.5 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-sm',
  },
  headers: {
    title: 'HTTP Security Headers Configuration',
    headerBg: 'bg-teal-50',
    headerBorder: 'border-teal-200',
    titleColor: 'text-teal-900',
    Content: HeadersModal,
    footerLabel: 'Tutup Panduan',
    footerClassName: 'px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-sm',
  },
  laravel: {
    title: 'Prinsip Aman Pengerjaan Laravel / PHP',
    headerBg: 'bg-indigo-50',
    headerBorder: 'border-indigo-200',
    titleColor: 'text-indigo-800',
    Content: LaravelModal,
    footerLabel: 'Tutup Panduan Pemrograman',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  upload: {
    title: 'Menutup Celah Unggah File Bypass (RCE)',
    headerBg: 'bg-indigo-50',
    headerBorder: 'border-indigo-200',
    titleColor: 'text-indigo-800',
    Content: UploadModal,
    footerLabel: 'Tutup Panduan Unggah',
    footerClassName: 'px-6 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg shadow-sm',
  },
  python: {
    title: 'Panduan Security Python (Django/FastAPI)',
    headerBg: 'bg-sky-50',
    headerBorder: 'border-sky-200',
    titleColor: 'text-sky-800',
    Content: PythonModal,
    footerLabel: 'Tutup Panduan Python',
    footerClassName: 'px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-sm',
  },
  nodejs: {
    title: 'Standar Keamanan API Node.js/Typescript',
    headerBg: 'bg-emerald-50',
    headerBorder: 'border-emerald-200',
    titleColor: 'text-emerald-800',
    Content: NodejsModal,
    footerLabel: 'Tutup Panduan API',
    footerClassName: 'px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm',
  },
  golang: {
    title: 'Standard Konkurensi & Keamanan Golang',
    headerBg: 'bg-cyan-50',
    headerBorder: 'border-cyan-200',
    titleColor: 'text-cyan-800',
    Content: GolangModal,
    footerLabel: 'Tutup Panduan Go',
    footerClassName: 'px-6 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-sm',
  },
  frontend: {
    title: 'Pengamanan Frontend (DOM) Klien',
    headerBg: 'bg-purple-50',
    headerBorder: 'border-purple-200',
    titleColor: 'text-purple-800',
    Content: FrontendModal,
    footerLabel: 'Tutup Panduan Frontend',
    footerClassName: 'px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-sm',
  },
  phishing: {
    title: 'Menghindari Teknik Rekayasa Sosial Phishing',
    headerBg: 'bg-green-50',
    headerBorder: 'border-green-200',
    titleColor: 'text-green-800',
    Content: PhishingModal,
    footerLabel: 'Pahami Prosedur',
    footerClassName: 'px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-sm',
  },
  privacy: {
    title: 'Edukasi: Perlindungan Data Pribadi (Sivitas Akademika)',
    headerBg: 'bg-rose-50',
    headerBorder: 'border-rose-200',
    titleColor: 'text-rose-800',
    Content: PrivacyModal,
    footerLabel: 'Terapkan Sadar Privasi',
    footerClassName: 'px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg shadow-sm',
  },
  ransomware: {
    title: 'Instruksi Darurat: Tanggap Insiden Malware Berbahaya',
    headerBg: 'bg-red-50',
    headerBorder: 'border-red-200',
    titleColor: 'text-red-800',
    Content: RansomwareModal,
    footerLabel: 'Pahami SOP Darurat',
    footerClassName: 'px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-sm',
  },
};
