'use client';

import Image from 'next/image';
import { CONTACT, BUSINESS_INFO, SOCIAL } from '@/constants';
import { getImagePath } from '@/lib/utils';
import VisitorCounter from '@/components/VisitorCounter';

export default function Footer() {
  return (
    <>
      <footer className="bg-background-dark py-6 text-slate-400 font-footer border-t border-primary/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 상단: 로고 + 연락처/링크 + SNS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-4">
              <Image
                src={getImagePath('/logo.png')}
                alt="달콤플러스 로고"
                width={40}
                height={40}
                className="h-10 w-10 object-cover rounded-full"
              />
              <span className="font-sans text-lg font-black text-white">달콤플러스</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium">
              <a
                href={CONTACT.PHONE_HREF}
                className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
              >
                <span className="material-symbols-outlined text-accent text-[16px]">call</span>
                {CONTACT.PHONE}
              </a>
              <a
                href={CONTACT.KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-accent transition-colors"
              >
                <span className="material-symbols-outlined text-accent text-[16px]">chat_bubble</span>
                카카오톡 문의
              </a>
              <div className="flex items-center gap-2">
                {[
                  { label: 'Instagram', url: SOCIAL.INSTAGRAM, icon: 'instagram.png' },
                  { label: 'Naver Blog', url: SOCIAL.NAVER_BLOG, icon: 'naver.png' },
                ].map((social, i) => (
                  <a
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-dark transition hover:bg-accent group"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.label}</span>
                    <Image
                      src={getImagePath(`/${social.icon}`)}
                      alt={social.label}
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 하단: 사업자 정보 + 저작권 + 카운터 */}
          <div className="pt-4 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex flex-col gap-0.5 text-[11px] text-slate-400">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-0.5">
                  <span>{BUSINESS_INFO.NAME}</span>
                  <span>대표 {BUSINESS_INFO.REPRESENTATIVE}</span>
                  <span className="break-keep">{CONTACT.ADDRESS}, {CONTACT.ADDRESS_DETAIL}</span>
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">&copy; 2024 DALKOM PLUS ACADEMY. ALL RIGHTS RESERVED.</p>
              </div>
              <VisitorCounter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
