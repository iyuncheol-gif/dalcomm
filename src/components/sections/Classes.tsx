'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Classes() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.5 });

  const steps = [
    {
      title: '상담 예약',
      desc: '전화 또는 온라인으로 방문 상담 일정을 예약합니다.',
    },
    {
      title: '레벨테스트 (무료)',
      desc: '학생의 현재 실력을 정확히 진단합니다. (약 40분 소요)',
    },
    {
      title: '결과 상담 및 반 배정',
      desc: '진단 결과를 바탕으로 최적의 반을 배정하고 학습 로드맵을 제시합니다.',
    },
    {
      title: '수강 등록 및 수업 시작',
      desc: '등록 절차 후 첫 수업이 시작됩니다.',
    },
  ];

  useEffect(() => {
    if (isInView) {
      setActiveStep(0);
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView, steps.length]);

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="classes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center lg:text-left">
          수강 안내 및 반 구성
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 border-b pb-3 border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary">school</span>
              클래스 구성
            </h3>
            <div className="space-y-5 flex-1">
              {[
                {
                  title: '초등부 저학년',
                  tags: '주 4회',
                  desc: '학년별/레벨별 최대 6명 정원으로 운영되며, 다양한 그룹활동과 동시에 꼼꼼한 케어가 가능합니다.',
                  icon: 'groups',
                },
                {
                  title: '초고학년 ~ 중등부',
                  tags: '주 3회',
                  desc: '각 혁년 및 레벨에 맞는 맞춤형 커리큘럼을 제공합니다.',
                  icon: 'person',
                },
                {
                  title: '고등부',
                  tags: '주 2회+주말특강',
                  desc: '평소에 모의고사 분석을 통해 실력을 쌓고, 시험기간에는, 학교별 기출 분석과 예상 문제 풀이로 내신을 완벽 대비합니다.',
                  icon: 'event_note',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 p-6 hover:border-primary transition-all cursor-pointer bg-slate-50 dark:bg-slate-800 dark:border-slate-700 shadow-sm hover:shadow-md"
                >
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">
                        {item.icon}
                      </span>{' '}
                      {item.title}
                    </span>
                    <span className="text-xs font-bold text-white bg-primary/80 px-3 py-1 rounded-full shadow-sm dark:bg-accent dark:text-slate-900">
                      {item.tags}
                    </span>
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col h-full justify-center">
            <div
              ref={containerRef}
              className="bg-slate-50/50 dark:bg-primary/5 rounded-[2.5rem] p-10 border border-slate-100 dark:border-primary/10 shadow-sm"
            >
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl font-bold">
                  check_circle
                </span>
                수강 등록 프로세스
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
                {steps.map((step, i) => {
                  const isActive = activeStep === i;
                  return (
                    <div
                      key={i}
                      className={`relative flex gap-6 transition-all duration-500 ${isActive ? 'translate-x-2' : 'opacity-40 grayscale-[0.5]'
                        }`}
                    >
                      <div
                        className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white border-2 transition-all duration-500 shadow-sm dark:bg-slate-800 ${isActive
                          ? 'border-primary text-primary scale-110 ring-4 ring-primary/10'
                          : 'border-slate-300 text-slate-400'
                          }`}
                      >
                        <span className="font-bold text-lg">{i + 1}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4
                          className={`font-black transition-all duration-500 word-keep-all ${isActive
                            ? 'text-primary dark:text-accent text-xl scale-105 origin-left'
                            : 'text-slate-700 dark:text-slate-300 text-lg'
                            }`}
                        >
                          {step.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed mt-1.5 transition-colors duration-500 ${isActive
                            ? 'text-slate-900 dark:text-slate-100 font-medium'
                            : 'text-slate-500 dark:text-slate-400'
                            }`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
