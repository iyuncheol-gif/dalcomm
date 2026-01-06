
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: '레벨테스트는 꼭 받아야 하나요?',
      a: '네, 학생의 정확한 현재 실력을 파악하여 가장 효율적인 반 배정과 커리큘럼을 제공하기 위해 필수입니다. 테스트는 무료로 진행되며 약 30~40분 소요됩니다.'
    },
    {
      q: '숙제 양은 얼마나 되나요?',
      a: '학년과 레벨에 따라 다르지만, 보통 수업 시간 외 하루 1시간 정도 투자하면 해결할 수 있는 분량입니다. 단순히 많은 양보다는 복습과 오답 정리에 집중하도록 지도합니다.'
    },
    {
      q: '결석 시 보강이 가능한가요?',
      a: '네, 사전에 연락 주신 결석에 한하여 1:1 보강 또는 동영상 강의를 통해 진도 공백이 없도록 관리해 드립니다.'
    },
    {
      q: '내신 대비 기간에는 어떻게 수업하나요?',
      a: '시험 4주 전부터 정규 커리큘럼을 멈추고 학교별 교과서 및 외부 지문 집중 분석 수업으로 전환됩니다. 기출 문제 풀이와 서술형 대비가 포함됩니다.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-10 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl bg-slate-50 p-6 [&_summary::-webkit-details-marker]:hidden border border-slate-100 dark:bg-slate-800 dark:border-slate-700 transition-colors hover:bg-slate-100 dark:hover:bg-slate-750">
              <summary className="flex cursor-pointer items-center justify-between text-slate-900 dark:text-white font-bold text-lg">
                {faq.q}
                <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition duration-300 group-open:-rotate-180 dark:bg-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined">expand_more</span>
                </span>
              </summary>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed pl-1 word-keep-all">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
