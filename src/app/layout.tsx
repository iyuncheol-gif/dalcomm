import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

const basePath = process.env.NODE_ENV === 'production' ? '/dalcomm' : '';

export const metadata: Metadata = {
  title: 'THE달콤플러스 - 프리미엄 영어 교육',
  description:
    '결과가 다른 프리미엄 영어 교육. 프리미엄 소수정예, 1:1 밀착 학습 관리, 내신/수능 1등급 목표. THE달콤플러스만의 학습 시스템이 상위권으로 가는 지름길을 제시합니다.',
  icons: {
    icon: `${basePath}/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light">
      <head>
        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
        {children}

        {/* Kakao Map SDK */}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
