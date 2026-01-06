import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark py-16 text-slate-400 font-footer border-t border-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Branding Section */}
          <div className="max-w-md">
            <div className="flex items-center gap-5 mb-6">
              <img
                src={import.meta.env.BASE_URL + "logo.png"}
                alt="THE달콤플러스 로고"
                className="h-16 w-16 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-sans text-2xl font-black text-white leading-none">
                  THE달콤플러스
                </span>
                <span className="text-xs font-bold text-accent tracking-[0.2em] mt-1.5 opacity-80 uppercase">
                  Premium English Academy
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-8 font-sans font-medium text-slate-300 word-keep-all">
              변화하는 입시 환경 속에서 흔들리지 않는 실력을 만듭니다.
              <br className="hidden md:block" />
              결과로 증명하는 프리미엄 영어 교육, THE달콤플러스.
            </p>
            <div className="flex gap-4">
              {[
                { label: "KakaoTalk", icon: "chat_bubble" },
                { label: "Blog", icon: "rss_feed" },
                { label: "Instagram", icon: "photo_camera" },
              ].map((social, i) => (
                <a
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-slate-400 transition hover:bg-accent hover:text-white"
                  href="#"
                >
                  <span className="sr-only">{social.label}</span>
                  <span className="material-symbols-outlined text-lg">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Links Section */}
          <div className="flex flex-col sm:flex-row gap-10 lg:gap-20">
            <div>
              <h4 className="mb-6 font-bold text-white text-base tracking-tight border-l-2 border-accent pl-3">
                상담 및 안내
              </h4>
              <ul className="space-y-4 text-[13px] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-accent text-[18px]">
                    call
                  </span>
                  <span className="text-white text-xl font-bold">
                    0507-1338-8444
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-accent text-[18px]">
                    schedule
                  </span>
                  <div className="text-slate-400">
                    <p className="text-xs">평일: 14:00 - 22:00</p>
                    <p className="text-xs">토요일: 10:00 - 17:00</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 font-bold text-white text-base tracking-tight border-l-2 border-accent pl-3">
                고객 서비스
              </h4>
              <div className="flex flex-col gap-3.5 text-[13px] font-medium">
                {[
                  { text: "개인정보처리방침", href: "#" },
                  { text: "교습비 안내", href: "#" },
                  { text: "오시는 길", href: "#location" },
                ].map((link, i) => (
                  <a
                    key={i}
                    className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400"
                    href={link.href}
                  >
                    <span className="material-symbols-outlined text-accent text-[16px]">
                      chevron_right
                    </span>{" "}
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Info Area - Re-arranged to prevent multi-line wrapping */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400">상호명</span>
                <span>THE달콤플러스 어학원</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400">대표</span>
                <span>김달콤</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400">등록번호</span>
                <span>교육청 등록 제1234호</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-400">주소</span>
                <span>경기 용인시 처인구 고림로200번길 5, 201-204호 2층</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-medium text-slate-600 uppercase tracking-widest">
              <p>© 2024 THE DALKOM PLUS ACADEMY. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-slate-400 transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="hover:text-slate-400 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
