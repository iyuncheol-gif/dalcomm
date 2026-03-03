'use client';

import { CONTACT } from '@/constants';

export default function Consultation() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:gap-8 min-h-[400px]">
          {/* Main Introduction - Full Width Row */}
          <div className="bg-[#0f291e] p-5 lg:p-6 text-white rounded-[2rem] flex flex-col md:flex-row relative overflow-hidden shadow-2xl border border-primary/20 items-center justify-between gap-5 flex-1">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-primary opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-32 w-32 rounded-full bg-accent opacity-10 blur-3xl"></div>

            <div className="relative z-10 flex-1 w-full text-center md:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-accent text-[9px] font-bold tracking-widest uppercase mb-3 border border-white/10">
                Free Level Test
              </span>
              <h2 className="text-xl lg:text-2xl font-black leading-tight mb-3 word-keep-all">
                지금 무료 레벨테스트를
                <br className="hidden md:block" /> 신청하세요!
              </h2>
              <p className="text-xs lg:text-sm text-slate-300 leading-relaxed word-keep-all opacity-80 max-w-xl mx-auto md:mx-0">
                정확한 영어 실력을 확인하고, 맞춤형 학습
                로드맵을 받아보세요.
              </p>
            </div>

            <div className="relative z-10 flex-1 w-full space-y-2 max-w-lg">
              {[
                {
                  icon: 'analytics',
                  text: '4대 영역 정밀 진단 리포트 무료',
                  color: 'bg-primary',
                },
                {
                  icon: 'savings',
                  text: '상담 당일 등록시 수강료 10% 할인',
                  color: 'bg-primary',
                },
                {
                  icon: 'support_agent',
                  text: '1:1 심층 학습 상담',
                  color: 'bg-primary',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/5 rounded-lg p-2.5 lg:p-3 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <div
                    className={`h-8 w-8 rounded-md ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <span className="material-symbols-outlined text-white text-lg">
                      {item.icon}
                    </span>
                  </div>
                  <span className={`font-semibold text-xs lg:text-[14px] leading-snug word-keep-all`}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Channels - 2 Column Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 2: Phone */}
            <a
              href={CONTACT.PHONE_HREF}
              className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-5 hover:border-primary/50 hover:shadow-primary/10 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-3xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wide">상담 전화</p>
                <p className="text-[17px] leading-snug font-black text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {CONTACT.PHONE}
                </p>
              </div>
            </a>

            {/* Card 3: KakaoTalk */}
            <a
              href={CONTACT.KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAE100] p-6 sm:p-8 rounded-[2rem] shadow-xl border border-[#FAE100]/50 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-5 hover:bg-[#F4D900] hover:shadow-[#FAE100]/30 transition-all group hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-3xl bg-[#3A1D1D] flex items-center justify-center text-[#FAE100] group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined text-3xl">chat_bubble</span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-[#3A1D1D]/70 mb-1 uppercase tracking-wide">카카오톡 채널</p>
                <p className="text-[17px] leading-snug font-black text-[#3A1D1D]">
                  1:1 실시간 상담
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
