
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const letters = "THESWEETENGLISH".split("");
  const [isMerged, setIsMerged] = useState(false);

  // Generate stable random initial positions
  const letterInitials = useMemo(() => {
    return letters.map(() => ({
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 100,
      r: (Math.random() - 0.5) * 360,
      dx: (Math.random() - 0.5) * 10,
      dy: (Math.random() - 0.5) * 10,
      dr: (Math.random() - 0.5) * 20,
      duration: 3 + Math.random() * 2
    }));
  }, []);

  useEffect(() => {
    // Start merging after 2 seconds
    const timer = setTimeout(() => {
      setIsMerged(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white dark:bg-background-dark">
      <div className="absolute inset-0 w-full h-full bg-[#fdfdfd] dark:bg-background-dark overflow-hidden">
        <div className="absolute -top-[20%] left-[10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[100px] mix-blend-multiply dark:bg-primary/10 dark:mix-blend-screen opacity-70"></div>
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[80px] mix-blend-multiply dark:bg-accent/5 dark:mix-blend-screen opacity-60"></div>

        {/* Scattered Text Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <div className="w-full flex justify-between px-4 font-black text-slate-900 dark:text-white whitespace-nowrap select-none" style={{ fontSize: '6.5vw' }}>
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{
                  x: `${letterInitials[i].x}vw`,
                  y: `${letterInitials[i].y}vh`,
                  opacity: 0,
                  rotate: letterInitials[i].r
                }}
                animate={isMerged ? {
                  x: 0,
                  y: 0,
                  opacity: 0.05,
                  rotate: 0
                } : {
                  x: [`${letterInitials[i].x}vw`, `${letterInitials[i].x + letterInitials[i].dx}vw`, `${letterInitials[i].x}vw`],
                  y: [`${letterInitials[i].y}vh`, `${letterInitials[i].y + letterInitials[i].dy}vh`, `${letterInitials[i].y}vh`],
                  rotate: [letterInitials[i].r, letterInitials[i].r + letterInitials[i].dr, letterInitials[i].r],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={isMerged ? {
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring",
                  damping: 20
                } : {
                  duration: letterInitials[i].duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 lg:gap-10">
          <div className="flex flex-wrap justify-center gap-2">
            {['프리미엄 소수정예', '1:1 밀착 학습 관리', '내신/수능 1등급 목표'].map((label, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-4 py-2 text-xs font-bold text-primary ring-1 ring-primary/10 dark:bg-surface-dark dark:text-accent dark:ring-accent/20 backdrop-blur-sm shadow-sm">
                <span className="material-symbols-outlined text-[16px]">
                  {i === 0 ? 'stars' : i === 1 ? 'person_check' : 'emoji_events'}
                </span>
                {label}
              </span>
            ))}
          </div>

          <h1 className="font-display text-4xl font-black leading-[1.3] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl word-keep-all max-w-4xl">
            결과가 다른 프리미엄!<br />
            <span className="text-primary dark:text-accent relative inline-block">
              THE달콤플러스
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent/30 rounded-full"></span>
            </span> 영어
          </h1>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 word-keep-all lg:text-xl lg:leading-8 max-w-2xl font-medium">
            단순 암기를 넘어선 논리적 독해와 문법 완성.<br className="hidden sm:block" />
            <span className="text-primary dark:text-accent font-bold">THE달콤플러스만의 학습 시스템</span>이 상위권으로 가는 지름길을 제시합니다.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#consultation"
              className="flex h-16 items-center justify-center rounded-2xl bg-primary px-12 text-lg font-bold text-white shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all hover:-translate-y-1 w-full sm:w-auto"
              onClick={(e) => handleScroll(e, 'consultation')}
            >
              무료 학습진단 신청
            </a>
            <a
              href="#curriculum"
              className="flex h-16 items-center justify-center rounded-2xl bg-white/80 backdrop-blur border-2 border-slate-200 px-12 text-lg font-bold text-slate-700 hover:bg-white hover:border-primary transition-all dark:bg-surface-dark dark:border-slate-700 dark:text-white w-full sm:w-auto"
              onClick={(e) => handleScroll(e, 'curriculum')}
            >
              커리큘럼 안내
            </a>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-white/95 backdrop-blur-sm p-5 shadow-[0_20px_50px_rgba(26,67,50,0.12)] ring-1 ring-slate-100 dark:bg-surface-dark dark:ring-accent/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '초등 정규반', icon: 'auto_stories', desc: '영어적 사고력 확장 및\n기초 문법 체계 정립' },
              { title: '중등 내신반', icon: 'workspace_premium', desc: '학교별 맞춤 내신 전략과\n고등 영어 선행 학습' },
              { title: '고등 수능반', icon: 'military_tech', desc: '킬러 문항 정복을 위한\n심화 독해 및 실전 훈련' },
            ].map((box, idx) => (
              <div
                key={idx}
                className={`group relative flex cursor-pointer flex-col gap-3 rounded-2xl p-7 transition-all duration-300 text-center md:text-left border border-transparent bg-white hover:bg-primary/5 hover:border-primary/10 dark:bg-background-dark/50 dark:hover:bg-primary/10 shadow-sm hover:shadow-md`}
              >
                <div className="flex items-center justify-center md:justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                    {box.title}
                  </h3>
                  <span className="material-symbols-outlined text-accent group-hover:scale-110 transition-transform">
                    {box.icon}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 word-keep-all whitespace-pre-line group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
