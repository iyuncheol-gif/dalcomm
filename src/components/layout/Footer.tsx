'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { CONTACT, BUSINESS_INFO, HOURS, SOCIAL } from '@/constants';
import { handleScrollClick } from '@/lib/scroll';
import PrivacyModal from '@/components/ui/PrivacyModal';

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [showTuitionToast, setShowTuitionToast] = useState(false);
  const tuitionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showTuitionToast) {
      const timer = setTimeout(() => {
        setShowTuitionToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showTuitionToast]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tuitionRef.current && !tuitionRef.current.contains(event.target as Node)) {
        setShowTuitionToast(false);
      }
    }

    if (showTuitionToast) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTuitionToast]);

  return (
    <>
      <footer className="bg-background-dark py-16 text-slate-400 font-footer border-t border-primary/10">
        <div className="mx-auto max-w-7xl pl-8 pr-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            {/* Branding Section */}
            <div className="max-w-md">
              <div className="flex items-center gap-5 mb-6">
                <Image
                  src="/logo.png"
                  alt="THE달콤플러스 로고"
                  width={64}
                  height={64}
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
                  { label: 'Instagram', url: SOCIAL.INSTAGRAM, icon: 'instagram.png' },
                  { label: 'Naver Blog', url: SOCIAL.NAVER_BLOG, icon: 'naver.png' },
                ].map((social, i) => (
                  <a
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-dark text-slate-400 transition hover:bg-accent hover:text-white group"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.label}</span>
                    <Image
                      src={`/${social.icon}`}
                      alt={social.label}
                      width={24}
                      height={24}
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
                    <a
                      href={CONTACT.PHONE_HREF}
                      className="text-white text-xl font-bold hover:text-accent transition-colors"
                    >
                      {CONTACT.PHONE}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-accent text-[18px]">
                      schedule
                    </span>
                    <div className="text-slate-400">
                      <p className="text-xs">평일: {HOURS.WEEKDAY}</p>
                      <p className="text-xs">토요일: {HOURS.WEEKEND}</p>
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
                    </span>{' '}
                    개인정보처리방침
                  </a>
                  <div className="relative w-fit" ref={tuitionRef}>
                    <a
                      className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowTuitionToast((prev) => !prev);
                      }}
                    >
                      <span className="material-symbols-outlined text-accent text-[16px]">
                        chevron_right
                      </span>{' '}
                      교습비 안내
                    </a>
                    {showTuitionToast && (
                      <div className="absolute top-full left-0 sm:left-auto sm:right-0 mt-2 z-[100] animate-fade-in-up w-max max-w-[280px] sm:max-w-xs">
                        <div className="bg-slate-900/95 backdrop-blur text-white px-4 py-2.5 rounded-xl shadow-xl flex items-start gap-2 text-xs font-medium border border-slate-700/50">
                          <span className="material-symbols-outlined text-accent text-sm shrink-0 mt-0.5">
                            info
                          </span>
                          <span className="break-keep leading-relaxed">
                            학생의 상황 및 교육 횟수에 따라 금액은 변경됩니다.
                          </span>
                        </div>
                        <div className="absolute -top-1 left-4 sm:left-auto sm:right-10 w-2 h-2 bg-slate-900/95 rotate-45 border-l border-t border-slate-700/50"></div>
                      </div>
                    )}
                  </div>
                  <a
                    className="flex items-center gap-1.5 hover:text-accent transition-colors w-fit text-slate-400 cursor-pointer"
                    href="#location"
                    onClick={(e) => handleScrollClick(e, 'location', 100)}
                  >
                    <span className="material-symbols-outlined text-accent text-[16px]">
                      chevron_right
                    </span>{' '}
                    오시는 길
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Technical Info Area */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">상호명</span>
                  <span>{BUSINESS_INFO.NAME}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">대표</span>
                  <span>{BUSINESS_INFO.REPRESENTATIVE}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">등록번호</span>
                  <span>{BUSINESS_INFO.REGISTRATION}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-400">주소</span>
                  <span>
                    {CONTACT.ADDRESS}, {CONTACT.ADDRESS_DETAIL}
                  </span>
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

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
