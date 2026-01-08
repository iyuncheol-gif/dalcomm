import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a4332',
        'primary-dark': '#123024',
        accent: '#c5a059',
        'accent-dark': '#b08d4a',
        'background-light': '#f8f9f8',
        'background-dark': '#0d1a15',
        'surface-light': '#ffffff',
        'surface-dark': '#16251f',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Pretendard', 'sans-serif'],
        display: ['var(--font-pretendard)', 'Pretendard', 'sans-serif'],
        body: ['var(--font-pretendard)', 'Pretendard', 'sans-serif'],
        footer: ['var(--font-noto-sans-kr)', 'Noto Sans KR', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        full: '9999px',
      },
      animation: {
        'reveal-success': 'reveal-success 3s infinite cubic-bezier(0.65, 0, 0.35, 1)',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
      keyframes: {
        'reveal-success': {
          '0%': { width: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '40%': { width: '100%', opacity: '1' },
          '80%': { width: '100%', opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
