'use client';

import { CONTACT } from '@/constants';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-[4.5rem] items-center border-t border-slate-200 bg-white px-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden pb-safe">
      <a
        className="flex flex-1 flex-col items-center justify-center text-slate-600 active:text-primary transition-colors gap-0.5"
        href={CONTACT.PHONE_HREF}
      >
        <span className="material-symbols-outlined text-2xl">call</span>
        <span className="text-[11px] font-medium">전화</span>
      </a>
      <a
        className="flex flex-1 flex-col items-center justify-center text-slate-600 active:text-primary transition-colors gap-0.5"
        href="#"
      >
        <span className="material-symbols-outlined text-2xl">chat_bubble</span>
        <span className="text-[11px] font-medium">카톡</span>
      </a>
      <a
        className="ml-2 flex flex-[2.5] items-center justify-center rounded-xl bg-primary h-12 text-base font-bold text-white shadow-lg active:scale-95 transition-transform"
        href="#consultation"
      >
        상담 신청하기
      </a>
    </div>
  );
}
