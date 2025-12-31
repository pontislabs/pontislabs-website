import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import { categoryLabels } from '@/lib/constants';

// Blog post data
const blogPostsData: Record<string, {
  title: string;
  description: string;
  category: 'tech' | 'news';
  thumbnail: string;
  date: string;
  content: string;
}> = {
  'ai-development-trends-2025': {
    title: '2025년 AI 개발 트렌드: 기업이 주목해야 할 5가지',
    description: '2025년 AI 개발 시장의 핵심 트렌드와 기업들이 준비해야 할 전략을 소개합니다.',
    category: 'tech',
    thumbnail: '',
    date: '2025-01-15',
    content: `
AI 기술은 빠르게 발전하고 있으며, 2025년에는 더욱 혁신적인 변화가 예상됩니다. 이번 글에서는 기업들이 주목해야 할 핵심 트렌드를 살펴봅니다.

## 1. AI 에이전트의 부상

단순한 챗봇을 넘어, 복잡한 업무를 자율적으로 수행하는 AI 에이전트가 주목받고 있습니다. 이메일 관리, 일정 조율, 데이터 분석 등 다양한 업무를 AI가 대신 처리하게 됩니다.

## 2. 멀티모달 AI의 보편화

텍스트, 이미지, 음성, 영상을 통합적으로 이해하는 멀티모달 AI가 대중화됩니다. 기업들은 이를 활용해 더욱 풍부한 사용자 경험을 제공할 수 있습니다.

## 3. 온디바이스 AI

클라우드 의존도를 줄이고 기기에서 직접 AI를 실행하는 온디바이스 AI가 확산됩니다. 이를 통해 개인정보 보호와 빠른 응답 속도를 동시에 달성할 수 있습니다.

## 4. AI 거버넌스와 규제

AI 규제가 강화되면서, 기업들은 책임 있는 AI 개발과 운영 체계를 갖춰야 합니다. EU AI Act를 비롯한 글로벌 규제에 대응하는 것이 중요합니다.

## 5. 도메인 특화 AI

범용 AI보다 특정 산업이나 업무에 최적화된 도메인 특화 AI가 실질적인 비즈니스 가치를 창출합니다. 의료, 금융, 법률 등 전문 분야에서 AI의 활용이 확대됩니다.

## 마무리

AI 기술의 발전 속도는 점점 빨라지고 있습니다. 기업들은 이러한 트렌드를 파악하고 선제적으로 대응해야 경쟁 우위를 확보할 수 있습니다.

Pontislabs는 최신 AI 기술을 활용한 솔루션 개발을 전문으로 합니다. AI 도입에 관심이 있으시다면 언제든 문의해 주세요.
    `,
  },
  'pontislabs-story': {
    title: 'Pontislabs 창업 스토리: AI 전문 개발 스튜디오가 되기까지',
    description: '토스, 네이버, 에이블리 출신 팀이 AI 스튜디오를 시작하게 된 이유와 비전을 공유합니다.',
    category: 'news',
    thumbnail: '',
    date: '2025-01-10',
    content: `
안녕하세요, Pontislabs입니다. 오늘은 저희 팀이 AI 전문 개발 스튜디오를 시작하게 된 이야기를 나누고자 합니다.

## 왜 AI 스튜디오인가?

저희 팀은 토스, 네이버, 에이블리 등에서 프로덕션 레벨의 서비스를 개발한 경험이 있습니다. 그 과정에서 AI 기술이 비즈니스에 가져다주는 혁신적인 가치를 직접 경험했습니다.

하지만 많은 기업들이 AI를 도입하고 싶어도 어디서부터 시작해야 할지 막막해하는 경우가 많았습니다. 그래서 저희는 AI 도입의 전 과정을 함께하는 파트너가 되기로 했습니다.

## 우리의 차별점

### 1. 프로덕션 경험
단순한 PoC가 아닌, 실제 서비스에서 검증된 기술력을 보유하고 있습니다.

### 2. 빠른 실행력
스타트업의 속도감으로 빠르게 MVP를 만들고 검증합니다.

### 3. 지속적인 파트너십
프로젝트 완료 후에도 유지보수와 고도화를 함께합니다.

## 앞으로의 비전

Pontislabs는 AI 기술의 민주화에 기여하고자 합니다. 대기업뿐 아니라 중소기업과 스타트업도 AI의 혜택을 누릴 수 있도록, 합리적인 비용과 높은 품질의 서비스를 제공하겠습니다.

AI 서비스 개발에 관심이 있으시다면, 편하게 문의해 주세요. 함께 혁신을 만들어 가겠습니다.
    `,
  },
  'llm-integration-guide': {
    title: 'LLM 통합 가이드: 기업 서비스에 AI 챗봇 도입하기',
    description: '기업 서비스에 LLM 기반 AI 챗봇을 도입하는 방법과 주의사항을 상세히 안내합니다.',
    category: 'tech',
    thumbnail: '',
    date: '2025-01-05',
    content: `
LLM(Large Language Model)을 활용한 AI 챗봇은 고객 서비스의 패러다임을 바꾸고 있습니다. 이번 글에서는 기업 서비스에 LLM을 효과적으로 통합하는 방법을 알아봅니다.

## 목차

- LLM 선택하기
- RAG 아키텍처 구축
- 프롬프트 엔지니어링
- 안전성 확보
- 성능 모니터링

## 1. LLM 선택하기

서비스의 목적과 요구사항에 맞는 LLM을 선택하는 것이 중요합니다.

### 고려 사항
- **응답 속도**: 실시간 서비스라면 응답 지연이 중요합니다
- **비용**: API 호출 비용과 자체 호스팅 비용을 비교해야 합니다
- **한국어 성능**: 한국어 서비스라면 한국어 이해도가 높은 모델을 선택해야 합니다
- **커스터마이징**: 파인튜닝이 필요한지 검토합니다

## 2. RAG 아키텍처 구축

RAG(Retrieval-Augmented Generation)는 외부 지식을 LLM에 제공하여 정확한 답변을 생성하는 기법입니다.

사용자 질문 → 벡터 검색 → 관련 문서 추출 → LLM에 컨텍스트 제공 → 답변 생성

### 핵심 구성 요소
- 벡터 데이터베이스 (Pinecone, Weaviate, Milvus 등)
- 임베딩 모델
- 청킹 전략
- 검색 최적화

## 3. 프롬프트 엔지니어링

좋은 프롬프트는 LLM의 성능을 크게 향상시킵니다.

### 팁
- 명확한 역할과 맥락을 제공하세요
- 출력 형식을 구체적으로 지정하세요
- Few-shot 예제를 활용하세요
- 체인 오브 생각(CoT) 기법을 적용하세요

## 4. 안전성 확보

AI 챗봇의 안전성은 서비스의 신뢰도와 직결됩니다.

### 주의사항
- **환각(Hallucination) 방지**: 확실하지 않은 정보는 "모른다"고 답하도록 설계
- **개인정보 보호**: 민감한 정보가 학습 데이터로 사용되지 않도록 주의
- **유해 콘텐츠 필터링**: 부적절한 응답을 차단하는 가드레일 구축
- **탈옥 방지**: 악의적인 프롬프트 인젝션에 대응

## 5. 성능 모니터링

배포 후 지속적인 모니터링이 필요합니다.

### 핵심 메트릭
- 응답 품질 (사용자 피드백 기반)
- 응답 시간
- 에러율
- 비용 효율성

## 마무리

LLM 통합은 기술적 도전이지만, 제대로 구현하면 비즈니스에 큰 가치를 제공합니다. Pontislabs는 LLM 통합 프로젝트를 다수 수행한 경험이 있습니다.

AI 챗봇 도입을 고민 중이시라면, 저희와 상담해 보세요.
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
      // Headers
      if (line.startsWith('### ')) {
        return `<h3 class="text-xl font-bold mt-8 mb-4 text-white">${line.slice(4)}</h3>`;
      }
      if (line.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mt-10 mb-4 text-white">${line.slice(3)}</h2>`;
      }
      // Bold text
      let processedLine = line.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white">$1</strong>');
      // List items
      if (processedLine.startsWith('- ')) {
        return `<li class="ml-4 text-gray-300">${processedLine.slice(2)}</li>`;
      }
      // Empty lines
      if (processedLine.trim() === '') {
        return '<br />';
      }
      // Regular paragraphs
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

  const contentHtml = parseContent(post.content);

  // Extract headings for table of contents
  const headings = post.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => line.slice(3).trim());

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header Spacer */}
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

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
              {categoryLabels[post.category]}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-400">
              <time>
                {new Date(post.date).toLocaleDateString('ko-KR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </header>

          {/* Thumbnail */}
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-12 overflow-hidden">
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl font-bold text-white/10">
                  {post.title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="bg-secondary border border-gray-800 rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold text-white mb-4">목차</h2>
              <ul className="space-y-2">
                {headings.map((heading, index) => (
                  <li key={index} className="text-gray-400 hover:text-accent transition-colors">
                    <span className="mr-2 text-gray-600">{index + 1}.</span>
                    {heading}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA */}
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
