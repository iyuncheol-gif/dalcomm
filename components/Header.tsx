import React from "react";
import { createPortal } from "react-dom";

const Header: React.FC = () => {
  const navItems = [
    { name: "커리큘럼", href: "#curriculum" },
    { name: "학습시스템", href: "#system" },
    { name: "성적/후기", href: "#reviews" },
    { name: "강사진", href: "#teachers" },
    { name: "둘러보기", href: "#preview" },
    { name: "오시는길", href: "#location" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu on click
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/95 transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/dalcomm/" className="flex items-center group relative z-50">
          <div className="flex items-center gap-4">
            <img
              src={import.meta.env.BASE_URL + "logo.png"}
              alt="THE달콤플러스 로고"
              className="h-12 w-auto object-contain transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-110 sm:h-16"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-black tracking-tight text-primary dark:text-white leading-none sm:text-2xl">
                THE달콤플러스
              </span>
              <span className="text-[9px] font-bold text-accent tracking-[0.2em] uppercase mt-1.5 opacity-80 sm:text-[10px]">
                Premium English Academy
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              href={item.href}
              onClick={(e) => handleScroll(e, item.href.replace('#', ''))}
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
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <a
            className="hidden sm:flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 border border-transparent hover:border-accent/30 active:scale-95 cursor-pointer whitespace-nowrap"
            href="#consultation"
            onClick={(e) => handleScroll(e, 'consultation')}
          >
            <span>상담 신청</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[70] flex justify-end">
          {/* Backdrop (Transparent as requested, but clickable to close) */}
          <div
            className="absolute inset-0 bg-black/5"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel (2/3 width) */}
          <div
            className="relative w-[75%] max-w-xs h-full bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col p-6 animate-slide-in-right border-l border-slate-100"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-end mb-8">
              <button
                className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-left">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  className="text-xl font-bold text-slate-800 hover:text-white hover:bg-primary-dark dark:text-slate-200 dark:hover:text-white dark:hover:bg-primary-dark transition-all duration-300 border-b border-slate-100 hover:border-transparent pb-4 pt-2 px-6 rounded-lg w-full block"
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href.replace('#', ''))}
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
                  const element = document.getElementById('consultation');
                  if (element) {
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
                <span>상담 신청</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
