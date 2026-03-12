'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  label,
  title,
  description,
  className = '',
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wider text-xs uppercase mb-3"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-4 text-slate-600 dark:text-slate-400 max-w-2xl word-keep-all ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
