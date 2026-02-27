import { Category, GuideCard } from '../_data/guides';
import { getPdfRoute } from '@/lib/pdf-docs';

interface Props {
  cards: GuideCard[];
  tabs: { key: Category; label: string }[];
  activeTab: Category;
  onTabChange: (tab: Category) => void;
  onCardClick: (id: string) => void;
  query: string;
  onQueryChange: (value: string) => void;
  totalCards: number;
  tabCounts: Record<Category, number>;
}

export default function GuideCardGrid({
  cards,
  tabs,
  activeTab,
  onTabChange,
  onCardClick,
  query,
  onQueryChange,
  totalCards,
  tabCounts,
}: Props) {
  const colorMap: Record<string, { bg: string; text: string; hoverBg: string; hoverText: string; badgeBg: string; badgeText: string; badgeBorder: string }> = {
    slate: { bg: 'bg-slate-50', text: 'text-slate-600', hoverBg: 'group-hover:bg-slate-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-slate-50', badgeText: 'text-slate-700', badgeBorder: 'border-slate-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-orange-50', badgeText: 'text-orange-700', badgeBorder: 'border-orange-100' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-blue-50', badgeText: 'text-blue-700', badgeBorder: 'border-blue-100' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', hoverBg: 'group-hover:bg-teal-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-teal-50', badgeText: 'text-teal-700', badgeBorder: 'border-teal-100' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', hoverBg: 'group-hover:bg-indigo-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-indigo-50', badgeText: 'text-indigo-700', badgeBorder: 'border-indigo-100' },
    sky: { bg: 'bg-sky-50', text: 'text-sky-600', hoverBg: 'group-hover:bg-sky-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-sky-50', badgeText: 'text-sky-700', badgeBorder: 'border-sky-100' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverBg: 'group-hover:bg-emerald-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-emerald-50', badgeText: 'text-emerald-700', badgeBorder: 'border-emerald-100' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', hoverBg: 'group-hover:bg-cyan-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-cyan-50', badgeText: 'text-cyan-700', badgeBorder: 'border-cyan-100' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-purple-50', badgeText: 'text-purple-700', badgeBorder: 'border-purple-100' },
    green: { bg: 'bg-green-50', text: 'text-green-600', hoverBg: 'group-hover:bg-green-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-green-50', badgeText: 'text-green-700', badgeBorder: 'border-green-100' },
    rose: { bg: 'bg-rose-50', text: 'text-rose-600', hoverBg: 'group-hover:bg-rose-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-rose-50', badgeText: 'text-rose-700', badgeBorder: 'border-rose-100' },
    red: { bg: 'bg-red-50', text: 'text-red-600', hoverBg: 'group-hover:bg-red-600', hoverText: 'group-hover:text-white', badgeBg: 'bg-red-50', badgeText: 'text-red-700', badgeBorder: 'border-red-100' },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Pencarian Panduan</p>
            <p className="mt-1 text-sm text-slate-600">
              Menampilkan <span className="font-bold text-slate-900">{cards.length}</span> dari{' '}
              <span className="font-bold text-slate-900">{totalCards}</span> panduan.
            </p>
          </div>
          <label className="relative w-full md:max-w-md">
            <span className="sr-only">Cari panduan</span>
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Cari: hardening, phishing, backup, laravel..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-slate-900 text-white shadow-md dark:bg-blue-600'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label} ({tabCounts[tab.key]})
          </button>
        ))}
      </div>

      {cards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                if (card.pdfSlug) {
                  window.open(getPdfRoute(card.pdfSlug), '_blank', 'noopener,noreferrer');
                } else {
                  onCardClick(card.id);
                }
              }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorMap[card.color]?.bg || 'bg-slate-50'} ${colorMap[card.color]?.text || 'text-slate-600'} ${colorMap[card.color]?.hoverBg || 'group-hover:bg-slate-600'} ${colorMap[card.color]?.hoverText || 'group-hover:text-white'}`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} /></svg>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${colorMap[card.color]?.badgeBg || 'bg-slate-50'} ${colorMap[card.color]?.badgeText || 'text-slate-700'} ${colorMap[card.color]?.badgeBorder || 'border-slate-100'}`}>{card.badge}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-blue-300">{card.title}</h3>
              <p className="grow text-sm leading-relaxed text-slate-500 dark:text-slate-400">{card.desc}</p>
              <div className="mt-6 flex items-center justify-end border-t border-slate-100 pt-4 dark:border-slate-700">
                <span className={`text-sm font-semibold group-hover:underline flex items-center transition-transform ${card.pdfSlug ? 'text-purple-600' : 'text-blue-600'}`}>
                  {card.pdfSlug ? 'Unduh PDF / Baca' : 'Baca Detail'}
                  {card.pdfSlug ? (
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  ) : (
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-bold text-slate-900">Panduan tidak ditemukan</p>
          <p className="mt-2 text-sm text-slate-600">Coba kata kunci lain atau ubah kategori tab panduan.</p>
        </div>
      )}
    </div>
  );
}
