"use client";

import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function Teachers() {
  return (
    <section
      className="flex flex-col items-center justify-center px-6 py-12 lg:py-24 w-full bg-[#f6f6f8] dark:bg-background-dark"
      id="teachers"
    >
      <div className="w-full max-w-[1120px] bg-white rounded-[28px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.01)] p-8 md:p-14 lg:p-20 relative overflow-hidden group">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-50 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none opacity-60"></div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center md:items-start relative z-10">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-[320px] lg:w-[380px]">
            <div className="aspect-[3/4] w-full rounded-[20px] overflow-hidden shadow-lg relative group-hover:shadow-xl transition-all duration-500 ease-out ring-1 ring-black/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10"></div>
              <Image
                src={getImagePath("/elly.png")}
                alt="Director Kim Seul-gi"
                fill
                className="object-cover object-top transform transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col flex-1 w-full text-left justify-center md:pt-6">
            <div className="mb-10">
              <p className="text-[#9aa2b1] text-xs font-bold tracking-[0.25em] uppercase mb-5 pl-0.5">Director</p>
              <div className="flex flex-wrap items-baseline gap-6 mb-4">
                <h1 className="text-[#111318] text-[44px] md:text-[56px] font-bold tracking-tight leading-none font-display">김슬기</h1>
                <div className="flex items-center">
                  <span className="font-serif text-3xl italic text-[#9aa2b1] font-normal tracking-wide">Elly</span>
                </div>
              </div>
              <p className="text-[#616f89] text-[19px] font-medium leading-relaxed tracking-tight mt-2">원장 · 학습 설계 & 1:1 코칭</p>
            </div>

            <div className="w-16 h-[1px] bg-gray-200 mb-10"></div>

            <div className="max-w-2xl">
              <p className="text-[#2c323d] text-[17px] md:text-[18px] leading-[1.85] font-normal tracking-[-0.01em] whitespace-pre-line text-justify md:text-left">
                영어는 <span className="font-bold text-[#111318]">‘감’</span>이 아니라 <span className="font-bold text-[#111318]">‘근거’</span>로 성장합니다.{'\n'}
                막연한 느낌으로 푸는 문제는 실력이 아닙니다. 정확한 데이터와 논리적인 분석을 통해 자신의 약점을 파악하고, 체계적인 훈련으로 극복하는 과정만이 진짜 실력을 만듭니다. 학생 한 명 한 명의 성향과 속도에 맞춘 깊이 있는 학습 설계로, 흔들리지 않는 영어 자신감을 심어드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
