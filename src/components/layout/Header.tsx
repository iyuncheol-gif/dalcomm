'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { NAV_ITEMS } from '@/constants';
import { handleScrollClick, scrollToElement } from '@/lib/scroll';
import { basePath, getImagePath } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleScrollClick(e, id, 100, () => setMobileMenuOpen(false));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/95 transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={basePath} className="flex items-center group relative z-50">
          <div className="flex items-center gap-4">
            <Image
              src={getImagePath('/logo.png')}
              alt="달콤플러스 로고"
              width={64}
              height={64}
              className="h-12 w-auto object-contain transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-110 sm:h-16"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-black tracking-tight text-primary dark:text-white leading-none sm:text-2xl">
                달콤플러스
              </span>
              <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mt-1.5 opacity-80 sm:text-[10px]">
                Premium English Academy
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href.replace('#', ''))}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 relative z-[60]">
          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white transition-all shadow-sm z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <a
            className="hidden sm:flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 border border-transparent hover:border-accent/30 active:scale-95 cursor-pointer whitespace-nowrap"
            href="#consultation"
            onClick={(e) => handleNavClick(e, 'consultation')}
          >
            <span>상담 신청</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[70] flex justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/5"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="relative w-[50%] h-full bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col p-6 animate-slide-in-right border-l border-slate-100">
              {/* Drawer Header */}
              <div className="flex items-center justify-end mb-8">
                <button
                  className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="메뉴 닫기"
                >
                  <span className="material-symbols-outlined text-3xl">close</span>
                </button>
              </div>

              <nav className="flex flex-col gap-4 text-center">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    className="text-xl font-bold text-slate-800 hover:text-white hover:bg-primary-dark dark:text-slate-200 dark:hover:text-white dark:hover:bg-primary-dark transition-all duration-300 border-b border-slate-100 hover:border-transparent py-4 px-6 rounded-lg w-full block"
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.replace('#', ''))}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-3">
                <a
                  href="tel:0507-1338-8444"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-4 text-base font-bold text-slate-700 hover:bg-primary hover:text-white transition-all w-full"
                >
                  <span className="material-symbols-outlined text-xl">call</span>
                  <span>전화 상담</span>
                </a>

                <a
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all active:scale-95 w-full whitespace-nowrap"
                  href="#consultation"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToElement('consultation', 100);
                    e.preventDefault();
                  }}
                >
                  <span>상담 신청</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
