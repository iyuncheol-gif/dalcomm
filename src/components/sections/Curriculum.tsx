export default function Curriculum() {
  const courses = [
    {
      level: 'Elementary',
      title: '초등부',
      subtitle: '영어의 즐거움과 공부 습관',
      points: [
        { label: 'Premium 교구학습', desc: '고림동 유일, 체계적인 도구와 함께' },
        { label: 'One-Source 원서리딩', desc: '4가지 영역을 원서 하나로!' },
        { label: '꼼꼼한 관리', desc: '중등까지 이어지는 올바른 학습습관 기르기' },
      ],
    },
    {
      level: 'Middle School',
      title: '중등부',
      subtitle: '영어 내공 기르기',
      points: [
        { label: '내신 완벽 대비 어휘력 향상', desc: '꾸준한 어휘 테스트 및 관리시스템으로 어휘력 향상' },
        { label: '중등 문법 완벽 마스터', desc: '고등영어의 초석이 되는 문법을 빈틈없이' },
        { label: '독해력 향상', desc: '요약, 분석 등을 통한 독해력 기르기' },
      ],
    },
    {
      level: 'High School',
      title: '고등부',
      subtitle: '수능 1등급과 입시 성공',
      points: [
        { label: '학교별 내신 맞춤', desc: '매주 Full 모의고사 및 킬러문항 분석' },
        { label: '수능대비 모의고사', desc: '모의고사 - 변형문제 - 변형지문 3단계 심층학습' },
        { label: '고난도 어법/서술학습', desc: '변별력 문제 해결을 위한 심화 학습' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="curriculum">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            학년별 최적화 커리큘럼
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            기초부터 실전까지, 빈틈없는 단계별 학습
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border-2 border-slate-100 bg-white dark:bg-slate-800 dark:border-slate-700 transition-all duration-500 hover:border-primary hover:shadow-[0_20px_50px_rgba(26,67,50,0.15)] hover:scale-[1.03] hover:z-10"
            >
              <div className="bg-blue-50/50 dark:bg-blue-900/10 p-10 text-center border-b border-slate-50 dark:border-slate-700/50 group-hover:bg-primary/5 transition-colors duration-500">
                <span className="inline-block px-4 py-1 rounded-full bg-white dark:bg-slate-800 text-primary font-bold tracking-wider text-[11px] uppercase shadow-sm border border-slate-100 dark:border-slate-700 group-hover:border-primary/20">
                  {course.level}
                </span>
                <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {course.subtitle}
                </p>
              </div>

              <div className="p-10 flex flex-col gap-6 flex-1 bg-white dark:bg-slate-800/50">
                {course.points.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-primary/10 text-primary dark:bg-primary/20 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <span className="material-symbols-outlined text-sm font-bold">
                        check
                      </span>
                    </div>
                    <div className="text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed">
                      <strong className="block mb-1 text-slate-900 dark:text-white">
                        {p.label}
                      </strong>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-slate-50 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/30">
                <a
                  className="flex items-center justify-center gap-2 w-full text-center py-3.5 rounded-2xl text-sm font-bold text-slate-600 bg-white border border-slate-200 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                  href="#consultation"
                >
                  상세 커리큘럼 문의
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
