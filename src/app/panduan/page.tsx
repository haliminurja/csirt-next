'use client';

import { useState, useMemo } from 'react';
import Modal from '@/components/Modal';
import { guideCards, tabs, Category } from './_data/guides';
import HeroSection from './_components/HeroSection';
import RfcHighlight from './_components/RfcHighlight';
import GuideCardGrid from './_components/GuideCardGrid';
import ExternalLinks from './_components/ExternalLinks';
import { modalRegistry } from './_components/modals';

export default function PanduanPage() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [openModal, setOpenModal] = useState<string | null>(null);
  const close = () => setOpenModal(null);

  const filtered = useMemo(
    () => activeTab === 'all' ? guideCards : guideCards.filter((c) => c.category.includes(activeTab)),
    [activeTab]
  );

  return (
    <div className="dark:bg-slate-950">
      <HeroSection />
      <RfcHighlight />
      <GuideCardGrid
        cards={filtered}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onCardClick={setOpenModal}
      />
      
      <ExternalLinks />

      {/* Dynamic Modals */}
      {Object.entries(modalRegistry).map(([id, config]) => (
        <Modal
          key={id}
          isOpen={openModal === id}
          onClose={close}
          title={config.title}
          headerBg={config.headerBg}
          headerBorder={config.headerBorder}
          titleColor={config.titleColor}
          footerContent={
            <button onClick={close} className={config.footerClassName}>
              {config.footerLabel}
            </button>
          }
        >
          <config.Content />
        </Modal>
      ))}
    </div>
  );
}
