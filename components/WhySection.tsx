
import React from 'react';

const WhySection: React.FC = () => {
  const points = [
    {
      icon: 'bar_chart',
      title: '레벨테스트 & 약점 분석',
      desc: '영역별(어휘/문법/독해/청해) 정밀 진단 후 결과 리포트를 제공합니다.'
    },
    {
      icon: 'history_edu',
      title: '오답 관리 & 누적 복습',
      desc: '틀린 문제는 알 때까지. 오답 노트와 유사 유형 반복 훈련으로 빈틈을 채웁니다.'
    },
    {
      icon: 'timer',
      title: '실전 모의고사 루틴',
      desc: '매주 실전과 동일한 환경에서 시험 응시 후 즉각적인 피드백을 진행합니다.'
    },
    {
      icon: 'forum',
      title: '월간 리포트 & 정기 상담',
      desc: '학부모님께 학습 진행 상황과 성취도를 투명하게 공유합니다.'
    }
  ];

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Why THE DALKOM PLUS?</span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-5xl leading-tight word-keep-all mb-6">
              검증된 커리큘럼,<br className="hidden sm:block"/>
              독보적인 성적 향상
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed word-keep-all max-w-2xl mx-auto">
              THE달콤플러스는 단순한 강의 전달을 넘어<br className="hidden sm:block"/>
              학생의 학습 메커니즘을 근본적으로 변화시킵니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {points.map((p, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-accent/10 hover:border-accent/30 transition-all group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary dark:bg-background-dark dark:text-accent group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-background-dark transition-colors">
                    <span className="material-symbols-outlined text-2xl">{p.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-xl mb-2">{p.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed word-keep-all">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
