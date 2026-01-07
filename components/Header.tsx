import React from "react";

const Header: React.FC = () => {
  const navItems = [
    { name: "커리큘럼", href: "#curriculum" },
    { name: "학습시스템", href: "#system" },
    { name: "성적/후기", href: "#reviews" },
    { name: "강사진", href: "#teachers" },
    { name: "수강안내", href: "#classes" },
    { name: "오시는길", href: "#location" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-background-dark/95 transition-all duration-300">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center group">
          <div className="flex items-center gap-4">
            <img
              src={import.meta.env.BASE_URL + "logo.png"}
              alt="THE달콤플러스 로고"
              className="h-16 w-auto object-contain transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-tight text-primary dark:text-white leading-none">
                THE달콤플러스
              </span>
              <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mt-1.5 opacity-80">
                Premium English Academy
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden sm:flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span className="hidden lg:inline">상담톡</span>
          </a>
          <a
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 border border-transparent hover:border-accent/30 active:scale-95"
            href="#consultation"
          >
            <span>상담 신청</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
