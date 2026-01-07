import React from "react";

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = React.useState(false);
  const [showTuitionToast, setShowTuitionToast] = React.useState(false);
  const tuitionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Auto-hide after 3 seconds
    if (showTuitionToast) {
      const timer = setTimeout(() => {
        setShowTuitionToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTuitionToast]);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tuitionRef.current && !tuitionRef.current.contains(event.target as Node)) {
        setShowTuitionToast(false);
      }
    }

    if (showTuitionToast) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showTuitionToast]);

  const privacyPolicyContent = (
    <div className="space-y-6 text-slate-700 dark:text-slate-300">
      <p>
        <strong>[더달콤영어] 개인정보 처리방침</strong>
        <br />
        더달콤영어(&#39;이하 학원&#39;이라 함)는 이용자의 개인정보를 중요시하며, &quot;개인정보 보호법&quot;을 준수하고 있습니다. 학원은 개인정보 처리방침을 통하여 이용자께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보 보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
      </p>
      <p>본 방침은 2026년 1월 6일부터 시행됩니다.</p>

      <div>
        <h4 className="font-bold mb-2">1. 개인정보의 수집 및 이용 목적</h4>
        <p>학원은 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>학습 상담 및 문의 관리: 입학 문의, 레벨 테스트 예약, 교육 프로그램 안내, 문의에 대한 답변 및 결과 통보</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">2. 수집하는 개인정보 항목 및 수집 방법</h4>
        <p>학원은 상담 신청 및 문의 응대를 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>수집항목:
            <ul className="list-circle pl-5 mt-1">
              <li>(필수) 이름, 휴대전화 번호</li>
              <li>(선택) 학생 학년, 문의 내용</li>
              <li>(자동 수집) 서비스 이용기록, 접속 로그, 쿠키, 접속 IP 정보</li>
            </ul>
          </li>
          <li>수집방법: 홈페이지 내 상담 문의 작성 폼</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">3. 개인정보의 보유 및 이용 기간</h4>
        <p>학원은 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>보존 항목: 이름, 휴대전화 번호, 상담 이력</li>
          <li>보존 근거: 상담 문의 이력 관리 및 중복 상담 방지, 고객 응대</li>
          <li>보존 기간: [1년] (※ 또는 &#39;상담 완료 후 즉시 파기&#39; 등 학원 내부 방침에 따라 수정 가능)</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">4. 개인정보의 파기 절차 및 방법</h4>
        <p>학원은 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체 없이 해당 개인정보를 파기합니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>파기절차: 상담을 위해 입력하신 정보는 목적이 달성된 후 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.</li>
          <li>파기방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">5. 이용자 및 법정대리인의 권리와 그 행사 방법</h4>
        <p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며, 개인정보의 삭제를 요청할 수 있습니다. 개인정보 보호책임자에게 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
      </div>

      <div>
        <h4 className="font-bold mb-2">6. 개인정보 보호책임자</h4>
        <p>학원은 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보 보호책임자를 지정하고 있습니다.</p>
        <ul className="list-disc pl-5 mt-1">
          <li>개인정보 보호책임자: [원장님 또는 관리자 성함]</li>
          <li>전화번호: [학원 전화번호 입력]</li>
          <li>이메일: [학원 이메일 입력]</li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-background-dark py-16 text-slate-400 font-footer border-t border-primary/10">
        <div className="mx-auto max-w-7xl pl-8 pr-4 sm:px-6 lg:px-8">
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
                  {
                    label: "Instagram",
                    url: "https://www.instagram.com/thesweetenglish",
                    icon: "instagram.png"
                  },
                  {
                    label: "Naver Blog",
                    url: "https://blog.naver.com/goodchef",
                    icon: "naver.png"
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-slate-400 transition hover:bg-accent hover:text-white group"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.label}</span>
                    <img
                      src={import.meta.env.BASE_URL + social.icon}
                      alt={social.label}
                      className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100"
                    />
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
                    <a href="tel:050713388444" className="text-white text-xl font-bold hover:text-accent transition-colors">
                      0507-1338-8444
                    </a>
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
                  <a
                    className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPrivacyOpen(true);
                    }}
                  >
                    <span className="material-symbols-outlined text-accent text-[16px]">
                      chevron_right
                    </span>{" "}
                    개인정보처리방침
                  </a>
                  <div className="relative w-fit" ref={tuitionRef}>
                    <a
                      className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowTuitionToast(prev => !prev);
                      }}
                    >
                      <span className="material-symbols-outlined text-accent text-[16px]">
                        chevron_right
                      </span>{" "}
                      교습비 안내
                    </a>
                    {showTuitionToast && (
                      <div className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 z-[100] animate-fade-in-up w-max max-w-[280px] sm:max-w-xs">
                        <div className="bg-slate-900/95 backdrop-blur text-white px-4 py-2.5 rounded-xl shadow-xl flex items-start gap-2 text-xs font-medium border border-slate-700/50">
                          <span className="material-symbols-outlined text-accent text-sm shrink-0 mt-0.5">info</span>
                          <span className="break-keep leading-relaxed">학생의 상황 및 교육 횟수에 따라 금액은 변경됩니다.</span>
                        </div>
                        {/* Little triangle arrow */}
                        <div className="absolute -top-1 left-4 sm:left-auto sm:right-10 w-2 h-2 bg-slate-900/95 rotate-45 border-l border-t border-slate-700/50"></div>
                      </div>
                    )}
                  </div>
                  <a
                    className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400"
                    href="#location"
                  >
                    <span className="material-symbols-outlined text-accent text-[16px]">
                      chevron_right
                    </span>{" "}
                    오시는 길
                  </a>
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
                  <a
                    href="#"
                    className="hover:text-slate-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsPrivacyOpen(true);
                    }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPrivacyOpen(false)}
          />
          <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
            <div className="flex items-center justify-between border-b p-6">
              <h3 className="text-xl font-bold text-slate-900">
                개인정보처리방침
              </h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-500 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto p-6 text-sm leading-relaxed">
              {privacyPolicyContent}
            </div>
            <div className="bg-slate-50 px-6 py-4 flex justify-end">
              <button
                type="button"
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
                onClick={() => setIsPrivacyOpen(false)}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}


    </>
  );
};

export default Footer;
