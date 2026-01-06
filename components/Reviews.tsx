
import React from 'react';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">성과로 증명합니다</h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">수강 3개월 만에 달라진 변화를 확인하세요.</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Comparison Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
            <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex justify-between items-center backdrop-blur-sm dark:bg-slate-700/50 dark:border-slate-600">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-primary dark:bg-slate-600 dark:text-blue-300">
                  <span className="material-symbols-outlined text-lg">school</span>
                </div>
                <span className="font-bold text-slate-800 text-sm dark:text-white">고1 김OO 학생</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">6개월 수강</span>
            </div>
            <div className="p-6 flex flex-col h-full justify-between gap-8">
              <div className="flex items-center justify-between px-2 pt-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">3월 모고</p>
                  <p className="text-2xl font-bold text-slate-400/80 line-through decoration-slate-300 dark:text-slate-500 dark:decoration-slate-600">4등급</p>
                </div>
                
                {/* Animated Arrow & Line Path */}
                <div className="flex-1 mx-4 relative h-10 flex items-center">
                  {/* Background Gray Dashed Line (Static) */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-200 dark:border-slate-700"></div>
                  
                  {/* Success Reveal Layer (Key Color Dashed Line + Arrow) */}
                  <div className="absolute inset-y-0 left-0 animate-reveal-success overflow-visible">
                    {/* Primary Color Dashed Line */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-primary shadow-[0_0_12px_rgba(26,67,50,0.2)] dark:border-accent"></div>
                    
                    {/* Arrow at the Tip - Transition to Key Color */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center">
                      <span className="material-symbols-outlined text-primary dark:text-accent font-black text-2xl drop-shadow-md">arrow_forward</span>
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce inline-block dark:bg-red-900/50 dark:text-red-300 shadow-sm">1등급 달성!</span>
                  </div>
                  <p className="text-xs font-bold text-primary dark:text-accent mb-1 uppercase tracking-wider">9월 모고</p>
                  <p className="text-3xl font-black text-primary dark:text-white">1등급</p>
                </div>
              </div>
              
              <div className="relative bg-slate-50 rounded-2xl p-5 border border-slate-100 dark:bg-slate-700/30 dark:border-slate-600">
                <span className="absolute -top-3 left-4 bg-white text-blue-300 px-1 dark:bg-slate-800 dark:text-slate-500">
                  <span className="material-symbols-outlined text-2xl">format_quote</span>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed pt-1 font-medium dark:text-slate-300 word-keep-all">
                  빈칸 추론 문제 푸는 스킬을 배우고 나서 시간이 부족하지 않게 되었습니다. 등급이 오르니 자신감이 생겨요.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Block */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-slate-950">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl -ml-5 -mb-5"></div>
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="material-symbols-outlined fill-current text-lg">star</span>
                  ))}
                </div>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm border border-white/10">만족도 100%</span>
              </div>
              <blockquote className="flex-1">
                <p className="text-lg font-medium leading-relaxed opacity-90 word-keep-all">
                  "아이가 영어 학원 가는 걸 싫어했는데, 여기 다니고 나서는 선생님이 좋다고 먼저 가려고 해요. 성적도 많이 올라서 너무 만족스럽습니다."
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="material-symbols-outlined text-white">person</span>
                </div>
                <div>
                  <p className="font-bold text-sm">초5 학부모님</p>
                  <p className="text-xs text-slate-400">2023.10.15 작성</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white">
            <span>실제 수강 후기 더보기</span>
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;