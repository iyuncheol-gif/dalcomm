
import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">오시는 길</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div 
            className="h-80 w-full rounded-3xl bg-slate-200 overflow-hidden shadow-lg relative group border-4 border-white dark:border-slate-700 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAr1JD-6VGv7h7uUEyXNQufQqTjTw2wW_zqQ8W_COCcruoo3utbu-K_WxiBuOnER4awjrDKCgqNioSIBoH2FVjl3HFvqAFKAUqZp0y8ml7gxYdJryghXfqSNAmK1ttPf4ObByzMcJIyp7Gtiu8HMkEbPI_Tq5SH_AZ4CoJ15k_OGhK6AZDb4YC_mqAXGuBufCTtFNplo760COFFoCNOjCHLR1gHP-mnLWst3x06LfI9aVgsBqDtwUBovFG6ycZc8ja78rHzlA4B-8Y')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            {[
              { icon: 'location_on', title: '주소', text: '경기 용인시 처인구 고림로200번길 5\n201, 202, 203, 204호 2층' },
              { icon: 'directions_bus', title: '대중교통', text: "용인경전철 고진역 1번 출구 도보 10분\n'고림동' 인근 정류장 하차" },
              { icon: 'local_parking', title: '주차 안내', text: '건물 내 전용 주차장 이용 가능\n(상담 및 수강생 무료 주차 지원)' }
            ].map((info, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary dark:bg-slate-800">
                  <span className="material-symbols-outlined text-2xl">{info.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{info.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line word-keep-all">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
