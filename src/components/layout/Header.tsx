'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { NAV_ITEMS } from '@/constants';
import { handleScrollClick, scrollToElement } from '@/lib/scroll';
import { getImagePath } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    handleScrollClick(e, id, 100, () => setMobileMenuOpen(false));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/95 transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center group relative z-50">
          <div className="flex items-center gap-2">
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
            <span>학습 상담 문의</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[70] bg-slate-900 flex flex-col animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex flex-col">
                <span className="font-black text-lg text-white leading-none">달콤플러스</span>
                <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mt-1 opacity-70">
                  Premium English Academy
                </span>
              </div>
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="메뉴 닫기"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href.replace('#', ''))}
                  className="group flex items-center gap-4 py-4 border-b border-white/10 last:border-none"
                >
                  <span className="text-xs font-bold text-white/30 w-6 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl font-black text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                    {item.name}
                  </span>
                  <span className="material-symbols-outlined text-base text-white/20 group-hover:text-accent ml-auto transition-colors">
                    arrow_forward_ios
                  </span>
                </a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 pb-8 pt-4 flex flex-col gap-3 border-t border-white/10">
              <a
                href="tel:0507-1338-8444"
                className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>전화 상담</span>
              </a>
              <a
                href="#consultation"
                className="flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 active:scale-95 transition-all"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToElement('consultation', 100);
                  e.preventDefault();
                }}
              >
                <span>학습 상담 문의</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
