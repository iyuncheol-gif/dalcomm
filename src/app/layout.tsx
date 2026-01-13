import type { Metadata } from 'next';
import { Noto_Sans_KR, Playfair_Display } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/seo/JsonLd';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // TODO: Replace with actual domain
  title: {
    default: '달콤플러스 - 결과가 다른 프리미엄 영어 교육',
    template: '%s | 달콤플러스',
  },
  description:
    '결과가 다른 프리미엄 영어 교육. 프리미엄 소수정예, 1:1 밀착 학습 관리, 내신/수능 1등급 목표. 달콤플러스만의 학습 시스템이 상위권으로 가는 지름길을 제시합니다.',
  keywords: ['달콤플러스', '영어학원', '수능영어', '내신영어', '영어1등급', '소수정예영어', '프리미엄영어', '용인영어학원'],
  openGraph: {
    title: '달콤플러스 - 프리미엄 영어 교육',
    description: '결과가 다른 프리미엄 영어 교육. 상위권으로 가는 가장 확실한 선택.',
    url: 'https://example.com', // TODO: Replace with actual domain
    siteName: '달콤플러스',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '달콤플러스 - 프리미엄 영어 교육',
    description: '결과가 다른 프리미엄 영어 교육. 상위권으로 가는 가장 확실한 선택.',
  },
  icons: {
    icon: '/logo.png',
  },
  verification: {
    google: 'verification_token', // TODO: Add actual Google verification token
    other: {
      'naver-site-verification': 'verification_token', // TODO: Add actual Naver verification token
    },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${notoSansKr.className} ${playfair.variable} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden`}>
        <JsonLd />
        {children}
      </body>
    </html >
  );
}
