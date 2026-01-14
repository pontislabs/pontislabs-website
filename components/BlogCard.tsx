import Link from 'next/link';
import { categoryLabels } from '@/lib/constants';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: 'tech' | 'news' | 'portfolio';
  thumbnail: string;
  date: string;
}

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  const isPortfolio = post.category === 'portfolio';

  // Portfolio Card - 더 크고 강조된 스타일
  if (isPortfolio) {
    return (
      <Link href={`/blog/${post.slug}`} className="col-span-full">
        <article className="bg-gradient-to-br from-gray-900 to-gray-800 border border-primary/30 hover:border-primary rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
          {/* Mobile: Horizontal compact / Desktop: Grid */}
          <div className="flex flex-row md:grid md:grid-cols-2 gap-0">
            {/* Thumbnail - Chatbot Icon Design */}
            <div className="w-28 shrink-0 md:w-auto bg-gradient-to-br from-gray-900 via-primary/10 to-accent/10 relative overflow-hidden flex items-center justify-center py-6 md:py-0 md:min-h-[280px]">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-20 md:w-32 h-20 md:h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-4 right-4 w-24 md:w-40 h-24 md:h-40 bg-accent/20 rounded-full blur-3xl" />
              </div>

              {/* Chatbot Icon */}
              <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                {/* Main Bot Icon */}
                <div className="w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-primary to-accent rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl md:shadow-2xl shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
                  <svg className="w-9 h-9 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/70 hidden md:block" />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-8 flex flex-col justify-center">
              {/* Category Badge - Hidden on mobile */}
              <span className="hidden md:inline-block w-fit px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-semibold text-primary uppercase tracking-wide mb-4">
                {categoryLabels[post.category]}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm md:text-base mb-2 md:mb-4 line-clamp-2">
                {post.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-primary text-sm md:text-base font-medium group-hover:gap-2 transition-all">
                <span>자세히 보기</span>
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Default Card
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-secondary border border-gray-800 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] group h-full">
        {/* Thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
          {post.thumbnail ? (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold text-white/20">
                {post.title.charAt(0)}
              </div>
            </div>
          )}
          {/* Category Badge on Image */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-background/80 backdrop-blur-sm border border-gray-700 rounded-full text-xs font-semibold text-accent uppercase tracking-wide">
              {categoryLabels[post.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm line-clamp-2 mb-4">
            {post.description}
          </p>

          {/* Date */}
          <time className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </article>
    </Link>
  );
}
