
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Location: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // 주소로 좌표 검색
      const geocoder = new window.kakao.maps.services.Geocoder();
      const address = '경기 용인시 처인구 고림로200번길 5';

      geocoder.addressSearch(address, (result: any, status: any) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const position = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          const options = {
            center: position,
            level: 2, // 확대 레벨
          };

          const map = new window.kakao.maps.Map(mapRef.current, options);

          // 마커 생성
          const marker = new window.kakao.maps.Marker({
            position: position,
            map: map,
          });

          // 인포윈도우 생성
          const infowindow = new window.kakao.maps.InfoWindow({
            content: '<div style="padding:5px;font-size:12px;font-weight:bold;">THE달콤플러스</div>',
          });
          infowindow.open(map, marker);

          // 지도 컨트롤 추가
          const zoomControl = new window.kakao.maps.ZoomControl();
          map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        }
      });
    };

    const checkKakao = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(initMap);
      } else {
        // SDK가 아직 로드되지 않았으면 100ms 후 재시도
        setTimeout(checkKakao, 100);
      }
    };

    checkKakao();
  }, []);

  return (
    <section className="py-20 bg-background-light dark:bg-background-dark" id="location">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">오시는 길</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div
            ref={mapRef}
            className="h-80 w-full rounded-3xl bg-slate-200 overflow-hidden shadow-lg relative border-4 border-white dark:border-slate-700"
          ></div>
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
