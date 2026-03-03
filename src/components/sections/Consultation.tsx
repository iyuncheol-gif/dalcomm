'use client';

import { CONTACT } from '@/constants';

export default function Consultation() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark" id="consultation">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col min-h-[400px]">
          {/* Main Integrated Card */}
          <div className="bg-[#0f291e] p-6 lg:p-8 md:p-10 text-white rounded-[2rem] flex flex-col relative overflow-hidden shadow-2xl border border-primary/20 gap-8">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-48 w-48 rounded-full bg-accent opacity-10 blur-3xl"></div>

            {/* Top Section: Intro & Features */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 w-full">
              <div className="flex-1 w-full text-center md:text-left">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-accent text-[9px] font-bold tracking-widest uppercase mb-3 border border-white/10">
                  Free Level Test
                </span>
                <h2 className="text-xl lg:text-3xl font-black leading-tight mb-3 word-keep-all">
                  지금 무료 레벨테스트를
                  <br className="hidden md:block" /> 신청하세요!
                </h2>
                <p className="text-xs lg:text-sm text-slate-300 leading-relaxed word-keep-all opacity-80 max-w-xl mx-auto md:mx-0">
                  정확한 영어 실력을 확인하고, 맞춤형 학습
                  로드맵을 받아보세요.
                </p>
              </div>

              <div className="flex-1 w-full space-y-2 max-w-lg">
                {[
                  {
                    icon: 'analytics',
                    text: '4대 영역 정밀 진단 리포트 무료',
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
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-3 lg:p-4 border border-white/5 backdrop-blur-sm transition-colors"
                  >
                    <div
                      className={`h-10 w-10 md:h-12 md:w-12 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <span className="material-symbols-outlined text-white text-lg md:text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <span className={`font-semibold text-sm lg:text-[15px] leading-snug word-keep-all`}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 relative z-10 hidden md:block" />

            {/* Bottom Section: Contact Buttons */}
            <div className="flex flex-col md:flex-row gap-4 relative z-10 w-full mt-2 md:mt-0">
              {/* Phone Button */}
              <a
                href={CONTACT.PHONE_HREF}
                className="flex-1 bg-white p-5 lg:p-6 rounded-2xl shadow-xl flex items-center justify-center sm:justify-start gap-4 hover:shadow-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-500 mb-0.5 uppercase tracking-wide">상담 전화</p>
                  <p className="text-base lg:text-[17px] leading-snug font-black text-slate-900 group-hover:text-primary transition-colors">
                    {CONTACT.PHONE}
                  </p>
                </div>
              </a>

              {/* Kakao Button */}
              <a
                href={CONTACT.KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FAE100] p-5 lg:p-6 rounded-2xl shadow-xl flex items-center justify-center sm:justify-start gap-4 hover:bg-[#F4D900] hover:shadow-[#FAE100]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3A1D1D] flex items-center justify-center text-[#FAE100] transition-transform shrink-0">
                  <span className="material-symbols-outlined text-2xl">chat_bubble</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#3A1D1D]/70 mb-0.5 uppercase tracking-wide">카카오톡 채널</p>
                  <p className="text-base lg:text-[17px] leading-snug font-black text-[#3A1D1D]">
                    1:1 실시간 상담
                  </p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
