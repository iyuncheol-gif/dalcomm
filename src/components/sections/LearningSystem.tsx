export default function LearningSystem() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="system">
      <div className="mx-auto max-w-7xl pl-8 pr-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">
              Learning System
            </span>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white leading-tight">
              빈틈없는
              <br />
              학습 관리 시스템
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed word-keep-all">
              데이터 기반으로 학생의 학습 현황을 분석하고, 학부모님께 투명하게
              공유합니다.
            </p>
            <div className="mt-10 space-y-8">
              {[
                {
                  step: 1,
                  title: 'Daily Test & Review',
                  desc: '매 수업 시작 시 단어/리뷰 테스트 진행 (통과 못할 시 재시험)',
                },
                {
                  step: 2,
                  title: '1:1 Coaching Clinic',
                  desc: '수업 직후 담당 강사와 1:1로 오답 체크 및 질의응답',
                },
                {
                  step: 3,
                  title: 'Feedback and Report',
                  desc: '학습 태도, 과제 수행도, 시험 점수등을 개별피드백 발송 및 주기적 온라인 테스트 실시로 체계적인 분석 Report 전달',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-white text-primary font-bold text-xl shadow-md border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-800 border border-slate-100 dark:border-slate-700 transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:bg-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      face
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-slate-900 dark:text-white">
                      김달콤 학생 <br className="sm:hidden" />
                      NELT Report
                    </p>
                    <p className="text-sm text-slate-500">2025년 10월 3주차</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold text-green-700 tracking-wide whitespace-nowrap">
                  양호
                </span>
              </div>
              <div className="mt-8 space-y-6">
                {[
                  {
                    label: '어휘 (Vocabulary)',
                    score: '96/100',
                    width: '96%',
                    animate: true,
                  },
                  { label: '문법 (Grammar)', score: '88/100', width: '88%' },
                  { label: '독해 (Reading)', score: '92/100', width: '92%' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-700 dark:text-slate-300">
                        {stat.label}
                      </span>
                      <span className="text-primary">{stat.score}</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-primary ${stat.animate ? 'animate-pulse' : ''
                          }`}
                        style={{ width: stat.width }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-blue-50/80 p-5 text-sm text-blue-900 dark:bg-blue-900/30 dark:text-blue-200 leading-relaxed border border-blue-100 dark:border-blue-800">
                <strong>👨‍🏫 선생님 코멘트:</strong> 김달콤 학생은 이번 주 단어 암기가 매우
                우수합니다. 관계대명사 파트에서 실수가 있었으나 1:1 클리닉을 통해
                보완했습니다. 다음 주엔 독해 속도에 집중할 예정입니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
