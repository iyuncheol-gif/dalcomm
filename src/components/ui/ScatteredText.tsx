'use client';

import { motion } from 'framer-motion';

export type LetterInitial = {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  dr: number;
  duration: number;
};

interface ScatteredTextProps {
  isClient: boolean;
  isMerged: boolean;
  letters: string[];
  letterInitials: LetterInitial[];
  containerClassName?: string;
  textClassName?: string;
}

export default function ScatteredText({
  isClient,
  isMerged,
  letters,
  letterInitials,
  containerClassName = '',
  textClassName = '',
}: ScatteredTextProps) {
  if (!isClient || letterInitials.length === 0) return null;

  return (
    <div className={containerClassName}>
      <div className={`w-full flex justify-between px-4 font-black text-slate-900 dark:text-white whitespace-nowrap select-none overflow-hidden ${textClassName}`}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{
              x: `${letterInitials[i].x}vw`,
              y: `${letterInitials[i].y}vh`,
              opacity: 0,
              rotate: letterInitials[i].r,
            }}
            animate={
              isMerged
                ? {
                    x: 0,
                    y: 0,
                    opacity: 0.15,
                    rotate: 0,
                  }
                : {
                    x: [
                      `${letterInitials[i].x}vw`,
                      `${letterInitials[i].x + letterInitials[i].dx}vw`,
                      `${letterInitials[i].x}vw`,
                    ],
                    y: [
                      `${letterInitials[i].y}vh`,
                      `${letterInitials[i].y + letterInitials[i].dy}vh`,
                      `${letterInitials[i].y}vh`,
                    ],
                    rotate: [
                      letterInitials[i].r,
                      letterInitials[i].r + letterInitials[i].dr,
                      letterInitials[i].r,
                    ],
                    opacity: [0.1, 0.3, 0.1],
                  }
            }
            transition={
              isMerged
                ? {
                    duration: 1.5,
                    ease: 'easeOut',
                    type: 'spring',
                    damping: 20,
                  }
                : {
                    duration: letterInitials[i].duration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }
            }
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
