'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';
import { stories } from '@/data/stories';

export default function Story() {
    return (
        <section id="story" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-wider text-xs uppercase mb-3"
                        >
                            Education Story
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-black text-slate-900 dark:text-white sm:text-4xl"
                        >
                            달콤플러스
                            <br className="sm:hidden" /> 교육 이야기
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl word-keep-all"
                        >
                            달콤플러스가 전하는 올바른 영어 학습법과 교육 철학을 만나보세요.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <button className="hidden sm:flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors">
                            전체보기
                            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <Link href={`/story/${story.id}`} key={story.id}>
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group cursor-pointer flex flex-col h-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                                    <Image
                                        src={getImagePath(story.image)}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {story.isNew && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                NEW
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-col flex-1 p-6 lg:p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-primary font-bold text-sm">
                                            {story.category}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                                            {story.date}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                        {story.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3 text-[15px] leading-relaxed mb-6 flex-1">
                                        {story.desc}
                                    </p>

                                    <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                        <span className="relative">
                                            자세히 보기
                                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        <span className="material-symbols-outlined text-base ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                                            east
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-10 flex justify-center sm:hidden">
                    <button className="flex items-center justify-center w-full max-w-xs gap-2 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                        전체보기
                    </button>
                </div>
            </div>
        </section>
    );
}
