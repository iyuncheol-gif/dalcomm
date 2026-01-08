declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: MapOptions) => KakaoMap;
        Marker: new (options: MarkerOptions) => KakaoMarker;
        InfoWindow: new (options: InfoWindowOptions) => KakaoInfoWindow;
        ZoomControl: new () => KakaoZoomControl;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        ControlPosition: {
          RIGHT: number;
          LEFT: number;
          TOP: number;
          BOTTOM: number;
        };
        services: {
          Geocoder: new () => KakaoGeocoder;
          Status: {
            OK: string;
            ZERO_RESULT: string;
            ERROR: string;
          };
        };
      };
    };
  }
}

interface MapOptions {
  center: KakaoLatLng;
  level: number;
}

interface MarkerOptions {
  position: KakaoLatLng;
  map: KakaoMap;
}

interface InfoWindowOptions {
  content: string;
}

interface KakaoMap {
  addControl: (control: KakaoZoomControl, position: number) => void;
}

interface KakaoMarker {}

interface KakaoInfoWindow {
  open: (map: KakaoMap, marker: KakaoMarker) => void;
}

interface KakaoZoomControl {}

interface KakaoLatLng {}

interface KakaoGeocoder {
  addressSearch: (
    address: string,
    callback: (result: GeocoderResult[], status: string) => void
  ) => void;
}

interface GeocoderResult {
  x: string;
  y: string;
}

export {};
