import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { categoryLabels } from '@/lib/constants';

// Blog post data
const blogPostsData: Record<string, {
  title: string;
  description: string;
  category: 'tech' | 'news' | 'portfolio';
  thumbnail: string;
  date: string;
  content: string;
  // Portfolio specific fields
  metrics?: { label: string; value: string; subtext?: string }[];
  techStack?: string[];
  images?: { src: string; caption: string }[];
  comparison?: { feature: string; before: string; after: string }[];
  domains?: { name: string; items: string[] }[];
}> = {
  'ddangit-hr-chatbot': {
    title: 'ddangit',
    description: 'RAG 기반 Enterprise HR 챗봇 시스템',
    category: 'portfolio',
    thumbnail: '/images/blog/ddangit/chatbot-interface.png',
    date: '2025-01-14',
    metrics: [
      { label: '응답 정확도', value: '95%+', subtext: 'Human Evaluation 기준' },
      { label: '응답 시간', value: '2.3초', subtext: '평균 응답 속도' },
      { label: 'HR 업무 감소', value: '80%', subtext: '반복 문의 자동화' },
      { label: '서비스 가용성', value: '24/7', subtext: '무중단 운영' },
    ],
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'GPT-4', 'LangChain', 'Pinecone', 'PostgreSQL', 'AWS'],
    images: [
      { src: '/images/blog/ddangit/chatbot-response.png', caption: 'AI 챗봇 인터페이스' },
      { src: '/images/blog/ddangit/admin-documents.png', caption: '문서 관리' },
      { src: '/images/blog/ddangit/admin-qna.png', caption: 'Q&A 관리' },
      { src: '/images/blog/ddangit/admin-users.png', caption: '사용자 관리' },
      { src: '/images/blog/ddangit/admin-logs.png', caption: '대화 로그 분석' },
    ],
    comparison: [
      { feature: '검색 방식', before: '키워드 매칭', after: 'Semantic Vector Search' },
      { feature: '응답 시간', before: '5-10초+', after: '2.3초' },
      { feature: '정확도', before: '60-70%', after: '95%+' },
      { feature: '출처 표시', before: '불가능', after: '문서명 + 페이지' },
      { feature: '관리 도구', before: '없음', after: '전용 Dashboard' },
    ],
    domains: [
      { name: 'Legal', items: ['계약서 검토', '컴플라이언스'] },
      { name: 'Support', items: ['고객 응대', '기술 지원'] },
      { name: 'Finance', items: ['회계 기준', '정산 규정'] },
      { name: 'Healthcare', items: ['의료 가이드', '약품 정보'] },
    ],
    content: `
## 프로젝트 소개

사내 HR 문의를 AI가 자동으로 응대하는 시스템입니다. 직원들의 반복적인 질문(연차, 재택근무, 경조사 등)에 **사내 규정 문서를 기반으로 정확한 답변**을 제공합니다.

## 핵심 기능

**AI 챗봇**: 자연어 질문에 사내 규정 기반 답변 + 출처(문서명, 페이지) 제공

**관리자 대시보드**: 문서 업로드, Q&A 관리, 사용자 권한, 대화 로그 분석
    `,
  },
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({
    slug,
  }));
}

// Parse markdown-like content to HTML
function parseContent(content: string): string {
  return content
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold mt-8 mb-4 text-white">${line.slice(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-10 mb-4 text-white">${line.slice(3)}</h2>`;
      }
      let processedLine = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>');
      if (processedLine.startsWith('- ')) {
        return `<li class="ml-4 text-gray-300">${processedLine.slice(2)}</li>`;
      }
      if (processedLine.trim() === '') {
        return '<br />';
      }
      return `<p class="text-gray-300 mb-4 leading-relaxed">${processedLine}</p>`;
    })
    .join('\n');
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  // Portfolio layout
  if (post.category === 'portfolio') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="h-20" />

        <main className="section-container py-12">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            블로그로 돌아가기
          </Link>

          {/* Hero Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                PORTFOLIO
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                {post.description}
              </p>
            </div>

            {/* Key Metrics */}
            {post.metrics && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {post.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-white font-medium mb-1">{metric.label}</div>
                    {metric.subtext && (
                      <div className="text-sm text-gray-500">{metric.subtext}</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Main Screenshot */}
            <div className="relative rounded-2xl overflow-hidden mb-16 border border-gray-800 shadow-2xl">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto mb-16">
              <div
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: parseContent(post.content) }}
              />
            </div>

            {/* Comparison Table - GPT+Notion vs ddangit */}
            {post.comparison && (
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                  왜 단순 GPT + Notion이 아닌가?
                </h2>
                <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-3 bg-gray-800/50 p-4 font-medium">
                    <div className="text-gray-400">비교 항목</div>
                    <div className="text-center text-gray-400">GPT + Notion</div>
                    <div className="text-center text-primary">ddangit</div>
                  </div>
                  {post.comparison.map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-3 p-4 border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
                    >
                      <div className="text-white font-medium">{row.feature}</div>
                      <div className="text-center text-gray-500">{row.before}</div>
                      <div className="text-center text-primary font-medium">{row.after}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {post.images && (
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                  주요 화면
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {post.images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all"
                    >
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-medium">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            {post.techStack && (
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {post.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:border-primary/50 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Domain Expansion */}
            {post.domains && (
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
                  다양한 도메인 확장 가능
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  HR뿐 아니라 문서 기반 Q&A가 필요한 모든 영역에 적용
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {post.domains.map((domain, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-primary/50 transition-colors"
                    >
                      <h3 className="text-white font-bold mb-3">{domain.name}</h3>
                      <ul className="space-y-1">
                        {domain.items.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                우리 회사에도 도입하고 싶다면?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                귀사의 상황에 맞는 AI 챗봇 솔루션을 제안해 드립니다.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-primary hover:bg-accent text-white px-8 py-4 rounded-xl transition-colors font-medium text-lg"
              >
                프로젝트 문의하기
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Default blog layout
  const contentHtml = parseContent(post.content);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="h-20" />

      <main className="section-container py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          블로그로 돌아가기
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
              {categoryLabels[post.category]}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="text-gray-400">
              <time>
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          {post.thumbnail && (
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-12 overflow-hidden">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              AI 프로젝트를 시작하고 싶으신가요?
            </h3>
            <p className="text-gray-400 mb-6">
              Pontislabs와 함께 AI 솔루션을 구축해 보세요.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg transition-colors font-medium"
            >
              문의하기
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
