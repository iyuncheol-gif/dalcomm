
import React from 'react';

const Problems: React.FC = () => {
  const problems = [
    {
      title: '시간은 쓰는데 성적이 제자리?',
      desc: '학원은 오래 다녔지만 기초가 부족해 구멍난 실력으로 진도만 나가고 있습니다.',
      solution: '개별 약점 진단 리포트로 정확한 문제 파악',
      icon: 'sentiment_stressed'
    },
    {
      title: '서술형에서 무너지는 점수',
      desc: '본문 암기는 했지만 응용 문법과 영작 실력이 부족해 감점을 당합니다.',
      solution: '감점 요인 집중 케어 및 실전 작문 훈련',
      icon: 'edit_note'
    },
    {
      title: '고등 독해의 높은 벽',
      desc: '긴 지문과 추상적인 내용 앞에서 해석조차 못하고 시간 부족을 호소합니다.',
      solution: '실전 모의고사 루틴으로 시간 관리 능력 향상',
      icon: 'trending_up'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="problems">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary font-bold tracking-wider text-xs uppercase mb-3 dark:bg-blue-900/20">Problem & Solution</span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl word-keep-all">학부모님들의 가장 큰 고민,<br className="block sm:hidden" /> 무엇인가요?</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {problems.map((p, i) => (
            <div key={i} className="flex flex-col rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white dark:bg-slate-800 dark:border-slate-700 group hover:-translate-y-1 transition-transform duration-300">
              <div className="p-8 bg-slate-50 dark:bg-slate-800/50 flex-1 relative">
                <div className="mb-4 inline-flex rounded-2xl bg-red-100 p-3 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white word-keep-all">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed word-keep-all text-sm mb-4">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm font-bold">check</span>
                    </div>
                    <p className="text-primary font-bold text-sm leading-snug word-keep-all whitespace-pre-line">{p.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Feature Bar */}
        <div className="mt-16 p-10 bg-gradient-to-r from-primary to-primary-dark rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(26,67,50,0.3)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-20 -mb-20"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center relative z-10">
            {[
              { icon: 'person_check', label: '1:1 밀착 관리' },
              { icon: 'monitoring', label: '취약점 분석' },
              { icon: 'quiz', label: '오답 완벽 제거' },
              { icon: 'emoji_events', label: '확실한 성적 향상' }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group/item">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shadow-inner border border-white/20 group-hover/item:bg-accent group-hover/item:scale-110 transition-all duration-300">
                  <span className="material-symbols-outlined text-white text-3xl group-hover/item:text-primary transition-colors">{feat.icon}</span>
                </div>
                <span className="font-bold text-white text-base tracking-tight lg:text-lg">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
