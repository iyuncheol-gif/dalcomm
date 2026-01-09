'use client';

import { useState, useEffect, useRef } from 'react';

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const moreReviews = [
    {
      id: 1,
      content:
        '이곳만의 커리큘럼도 좋은 점이지만 아이들 잘 파악하셔서 관리잘해주시고 학습습관까지 잘 배울 수 있는곳이기에 만족합니다. 다른데 거쳐오면서 영어시작할 때부터 다녔으면 더욱 좋았겠다라는 아쉬움도 있지만 제대로 공부 할 나이에 늦지않게 알게되어 안도하는 면도 있네요~',
      author: '중등 학부모님',
      date: '2023.11.05',
    },
    {
      id: 2,
      content:
        '초등아이 늦게 영어를 시작한 편이라 걱정이 많았는데 원서리딩에 감동♡ 매일매일 녹음숙제에, 단어시험부터 문장까지 꼼꼼하고 탄탄히 가르쳐주십니다. 습관을 잘 만들어주셔서 이제는 아이가 스스로 녹음을 합니다^^',
      author: '초6 학부모님',
      date: '2023.12.12',
    },
    {
      id: 3,
      content:
        '고등 중등 두아이 달콤플러스영어 다니고있어요 단어시험부터 관리해주고 원장님 직강이 있어 학습태도나 학생지도 점검해주셔서 늘감사합니다~~ 이사와서 다니는데 정말 감사합니다 🙏',
      author: '고등/중등 학부모님',
      date: '2024.01.10',
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            성과로 증명합니다
          </h2>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            수강 3개월 만에 달라진 변화를 확인하세요.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Comparison Card */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700">
            <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex justify-between items-center backdrop-blur-sm dark:bg-slate-700/50 dark:border-slate-600">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-primary dark:bg-slate-600 dark:text-blue-300">
                  <span className="material-symbols-outlined text-lg">school</span>
                </div>
                <span className="font-bold text-slate-800 text-sm dark:text-white">
                  고1 김OO 학생
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-500 shadow-sm dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300">
                6개월 수강
              </span>
            </div>
            <div className="p-6 flex flex-col h-full justify-between gap-8">
              <div className="flex items-center justify-between px-2 pt-4">
                <div className="text-center">
                  <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                    3월 모고
                  </p>
                  <p className="text-2xl font-bold text-slate-400/80 line-through decoration-slate-300 dark:text-slate-500 dark:decoration-slate-600">
                    4등급
                  </p>
                </div>

                {/* Animated Arrow & Line Path */}
                <div className="flex-1 mx-4 relative h-10 flex items-center" ref={animationRef}>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-200 dark:border-slate-700"></div>
                  <div className={`absolute inset-y-0 left-0 overflow-visible ${isVisible ? 'animate-reveal-success' : 'invisible'}`}>
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-primary shadow-[0_0_12px_rgba(26,67,50,0.2)] dark:border-accent"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center">
                      <span className="material-symbols-outlined text-primary dark:text-accent font-black text-2xl drop-shadow-md">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full animate-bounce inline-block dark:bg-red-900/50 dark:text-red-300 shadow-sm">
                      1등급 달성!
                    </span>
                  </div>
                  <p className="text-xs font-bold text-primary dark:text-accent mb-1 uppercase tracking-wider">
                    9월 모고
                  </p>
                  <p className="text-3xl font-black text-primary dark:text-white">
                    1등급
                  </p>
                </div>
              </div>

              <div className="relative bg-slate-50 rounded-2xl p-5 border border-slate-100 dark:bg-slate-700/30 dark:border-slate-600">
                <span className="absolute -top-3 left-4 bg-white text-blue-300 px-1 dark:bg-slate-800 dark:text-slate-500">
                  <span className="material-symbols-outlined text-2xl">format_quote</span>
                </span>
                <p className="text-sm text-slate-700 leading-relaxed pt-1 font-medium dark:text-slate-300 word-keep-all">
                  빈칸 추론 문제 푸는 스킬을 배우고 나서 시간이 부족하지 않게
                  되었습니다. 등급이 오르니 자신감이 생겨요.
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
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined fill-current text-lg"
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm border border-white/10">
                  만족도 100%
                </span>
              </div>
              <blockquote className="flex-1">
                <p className="text-lg font-medium leading-relaxed opacity-90 word-keep-all">
                  &quot;아이가 영어 학원 가는 걸 싫어했는데, 여기 다니고 나서는
                  선생님이 좋다고 먼저 가려고 해요. 성적도 많이 올라서 너무
                  만족스럽습니다.&quot;
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

        {/* More Reviews */}
        {showMore && (
          <div className="mt-12 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto animate-fade-in-up pb-12 px-2">
            {moreReviews.map((review, index) => {
              // Zigzag & Rotation Logic
              const rotateClass =
                index % 3 === 0
                  ? '-rotate-[2deg]'
                  : index % 3 === 1
                    ? 'rotate-[1deg]'
                    : '-rotate-[1deg]';
              const translateClass =
                index % 2 === 0 ? 'translate-y-0' : 'md:translate-y-8';

              return (
                <div
                  key={review.id}
                  className={`group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden ${rotateClass} ${translateClass}`}
                >
                  <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-700 -z-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-6xl">
                      format_quote
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 text-[#FFD700] mb-6">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined fill-current text-sm"
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-loose mb-8 flex-1 word-keep-all text-[15px]">
                      &quot;{review.content}&quot;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50 dark:border-slate-700/50">
                      <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 dark:bg-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined text-xl">
                          person
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">
                          {review.author}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">
                          {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:text-white"
          >
            <span>{showMore ? '후기 접기' : '실제 수강 후기 더보기'}</span>
            <span
              className={`material-symbols-outlined text-lg transition-transform duration-300 ${showMore ? 'rotate-45' : ''
                }`}
            >
              add
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
