'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '@/constants';

const KAKAO_MAP_KEY = 'cf7889c611fac8f59e53c3183b893f59';

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const fullAddress = CONTACT.ADDRESS;
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    // Kakao SDK 스크립트 로드
    if (window.kakao && window.kakao.maps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    const initMap = () => {
      // 실제 위치 좌표 (카카오맵 API 기준)
      const position = new window.kakao.maps.LatLng(
        37.249027007816,
        127.22303837643
      );

      const options = {
        center: position,
        level: 3, // 지도 확대 레벨 (숫자가 작을수록 확대됨)
      };

      const map = new window.kakao.maps.Map(mapRef.current!, options);

      const overlayContent = `
        <div style="
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          border: 1.5px solid #e2e8f0;
          border-radius: 999px;
          padding: 6px 14px 6px 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          font-family: inherit;
          white-space: nowrap;
          transform: translateY(-8px);
        ">
          <span style="
            width: 10px; height: 10px;
            background: #f97316;
            border-radius: 50%;
            display: inline-block;
            flex-shrink: 0;
          "></span>
          <span style="
            font-size: 13px;
            font-weight: 700;
            color: #1e293b;
            letter-spacing: -0.02em;
          ">달콤플러스</span>
          <div style="
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            width: 0; height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid #fff;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
          "></div>
        </div>
      `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        position: position,
        content: overlayContent,
        xAnchor: 0.5,
        yAnchor: 1,
      });
      customOverlay.setMap(map);

      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
    };

    window.kakao.maps.load(initMap);
  }, [isLoaded]);

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            오시는 길
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div
            ref={mapRef}
            className="h-[420px] w-full rounded-3xl bg-slate-200 overflow-hidden shadow-lg relative border-4 border-white dark:border-slate-700"
          ></div>
          <div className="grid sm:grid-cols-3 gap-6">
            {/* 주소 카드 */}
            <div className="group flex items-start gap-4 bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">주소</h4>
                  <button
                    onClick={handleCopyAddress}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary dark:hover:text-primary"
                    title="주소 복사"
                  >
                    <span className="material-symbols-outlined text-base">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line word-keep-all">
                  {`${CONTACT.ADDRESS}\n${CONTACT.ADDRESS_DETAIL}`}
                </p>
              </div>
            </div>
            {/* 나머지 카드 */}
            {[
              {
                icon: 'directions_bus',
                title: '대중교통',
                text: "용인경전철 고진역 1번 출구 도보 10분\n'고림동' 인근 정류장 하차",
              },
              {
                icon: 'local_parking',
                title: '주차 안내',
                text: '건물 내 전용 주차장 이용 가능\n(상담 및 수강생 무료 주차 지원)',
              },
            ].map((info, i) => (
              <div key={i} className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">{info.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1">{info.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line word-keep-all">{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
