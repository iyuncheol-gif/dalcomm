import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/utils';
import { stories } from '@/data/stories';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface StoryPageProps {
    params: {
        id: string;
    };
}

// Generate static params for build time
export function generateStaticParams() {
    return stories.map((story) => ({
        id: story.id.toString(),
    }));
}

export default function StoryDetail({ params }: StoryPageProps) {
    const storyId = parseInt(params.id, 10);
    const story = stories.find((s) => s.id === storyId);

    if (!story) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
            <Header />

            <main className="flex-1 w-full pt-4">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-10 md:pb-16">

                    {/* Header Section */}
                    <header className="mb-12 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider">
                                {story.category}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400 font-medium">
                                {story.date}
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8 word-keep-all tracking-tight">
                            {story.title}
                        </h1>

                        {/* Hero Image */}
                        <div className="relative aspect-[21/9] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src={getImagePath(story.image)}
                                alt={story.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </header>

                    {/* Content Section */}
                    <div className="prose prose-lg dark:prose-invert prose-slate max-w-none prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-2xl mx-auto sm:px-4 leading-loose word-keep-all">
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {story.content}
                        </ReactMarkdown>
                    </div>

                    {/* Footer & Back Button */}
                    <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                        <Link
                            href="/#story"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
                        >
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                            목록으로 돌아가기
                        </Link>
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
}
