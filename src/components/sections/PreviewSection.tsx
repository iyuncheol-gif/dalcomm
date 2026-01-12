'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

export default function PreviewSection() {
  const galleryItems = [
    {
      id: 1,
      title: '자습실 (Study Zone)',
      desc: '수업 전후 자유롭게 이용 가능한 자기주도 학습실',
      image: 'ja.jpeg',
      icon: 'storefront',
    },
    {
      id: 2,
      title: '아늑한 공간',
      desc: '깨끗하고 청결한 실내 인테리어',
      image: 'floor.jpeg',
      icon: 'school',
    },
    {
      id: 3,
      title: '도서관',
      desc: '원서가 비치된 프리미엄 영어 도서관',
      image: '3.jpeg',
      icon: 'meeting_room',
    },
    {
      id: 4,
      title: '아늑한 공간',
      desc: '깨끗하고 청결한 실내 인테리어',
      image: '4.jpeg',
      icon: 'menu_book',
    },
    {
      id: 5,
      title: '강의실',
      desc: '최신 시청각 장비가 완비된 강의 공간',
      image: '5.jpeg',
      icon: 'support_agent',
    },
  ];

  const getItemSize = (index: number) => {
    return index % 5 === 0
      ? 'col-span-1 md:col-span-2 row-span-2'
      : 'col-span-1 md:col-span-1 row-span-1';
  };

  return (
    <section
      id="preview"
      className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wider text-xs uppercase mb-3"
          >
            Facility Tour
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
          >
            학습에 최적화된
            <br className="sm:hidden" /> 프리미엄 교육 공간
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto word-keep-all"
          >
            학생들이 오직 공부에만 집중할 수 있도록 설계된 달콤플러스만의 공간을
            미리 둘러보세요.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${getItemSize(
                index
              )} bg-slate-200`}
            >
              <Image
                src={getImagePath(`/${item.image}`)}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Preview
                </span>
                <h3 className="text-white text-xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
