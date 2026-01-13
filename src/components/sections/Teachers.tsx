"use client";

import Image from "next/image";
import { handleScrollClick } from "@/lib/scroll";
import { getImagePath } from "@/lib/utils";

export default function Teachers() {
  return (
    <section
      className="py-20 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center px-4"
      id="teachers"
    >
      <div className="w-full max-w-[1120px] min-h-[600px] relative rounded-[28px] overflow-hidden shadow-2xl isolate group bg-[#1a4332]">
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] z-[-2]">
          <Image
            src={getImagePath("/teachers.png")}
            alt="Director Kim Seul-gi"
            fill
            className="object-contain object-center transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/40 to-transparent lg:from-transparent lg:via-[#0f172a]/60 lg:to-[#0f172a]"></div>

        <div className="w-full h-full flex flex-col lg:flex-row min-h-[600px]">
          <div className="hidden lg:block lg:w-[45%]"></div>
          <div className="w-full lg:w-[55%] flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-16 text-left relative z-10 self-stretch">
            <div>
              <div className="mb-6 animate-fade-in-up">
                <p className="text-white/70 text-xs font-bold tracking-[0.15em] uppercase mb-3 drop-shadow-md">
                  Director Profile
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h1 className="text-white text-4xl lg:text-5xl font-bold tracking-tight drop-shadow-lg">
                    김슬기
                  </h1>
                  <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                    <span className="text-white text-sm font-bold tracking-wide">
                      Elly
                    </span>
                  </div>
                </div>
                <p className="text-emerald-100 text-xl font-medium drop-shadow-md">
                  원장 · 학습 설계 & 1:1 코칭
                </p>
              </div>

              <div className="w-16 h-1 bg-white/30 rounded-full mb-8 backdrop-blur-sm"></div>
            </div>

            <div className="max-w-xl">
              <p className="text-gray-300 text-lg leading-[1.7] font-light tracking-wide drop-shadow-md">
                <span className="font-bold text-white block mb-2 text-xl">
                  "진정한 성장은 올바른 습관에서 시작됩니다."
                </span>
                데이터에 기반한 정확한 진단과 체계적인 학습 루틴을 통해, 단순한
                노력이 아닌 눈에 보이는 결과로 만들어드립니다. 당신의 가능성을
                현실로 바꾸는 여정을 함께하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
