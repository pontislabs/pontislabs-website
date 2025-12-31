import Link from 'next/link';
import { categoryLabels } from '@/lib/constants';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  category: 'tech' | 'news';
  thumbnail: string;
  date: string;
}

interface BlogCardProps {
  post: BlogPostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-secondary border border-gray-800 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 group">
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
