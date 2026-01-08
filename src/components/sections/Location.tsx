'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '@/constants';

const KAKAO_MAP_KEY = 'cf7889c611fac8f59e53c3183b893f59';

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      const geocoder = new window.kakao.maps.services.Geocoder();
      const address = CONTACT.ADDRESS;

      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const position = new window.kakao.maps.LatLng(
            Number(result[0].y),
            Number(result[0].x)
          );

          const options = {
            center: position,
            level: 2,
          };

          const map = new window.kakao.maps.Map(mapRef.current!, options);

          const marker = new window.kakao.maps.Marker({
            position: position,
            map: map,
          });

          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="padding:5px;font-size:12px;font-weight:bold;">THE달콤플러스</div>',
          });
          infowindow.open(map, marker);

          const zoomControl = new window.kakao.maps.ZoomControl();
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        }
      });
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
        <div className="grid md:grid-cols-2 gap-10">
          <div
            ref={mapRef}
            className="h-80 w-full rounded-3xl bg-slate-200 overflow-hidden shadow-lg relative border-4 border-white dark:border-slate-700"
          ></div>
          <div className="flex flex-col justify-center gap-8">
            {[
              {
                icon: 'location_on',
                title: '주소',
                text: `${CONTACT.ADDRESS}\n${CONTACT.ADDRESS_DETAIL}`,
              },
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
              <div key={i} className="flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary dark:bg-slate-800">
                  <span className="material-symbols-outlined text-2xl">
                    {info.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">
                    {info.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line word-keep-all">
                    {info.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
