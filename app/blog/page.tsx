"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BlogCard, { BlogPostMeta } from "@/components/BlogCard";
import { categoryLabels } from "@/lib/constants";

// Static blog data for client-side rendering
const blogPosts: BlogPostMeta[] = [
  {
    slug: "ai-development-trends-2025",
    title: "2025년 AI 개발 트렌드: 기업이 주목해야 할 5가지",
    description:
      "2025년 AI 개발 시장의 핵심 트렌드와 기업들이 준비해야 할 전략을 소개합니다.",
    category: "tech",
    thumbnail: "",
    date: "2025-01-15",
  },
  {
    slug: "pontislabs-story",
    title: "Pontislabs 창업 스토리: AI 전문 개발 스튜디오가 되기까지",
    description:
      "토스, 네이버, 에이블리 출신 팀이 AI 스튜디오를 시작하게 된 이유와 비전을 공유합니다.",
    category: "news",
    thumbnail: "",
    date: "2025-01-10",
  },
  {
    slug: "llm-integration-guide",
    title: "LLM 통합 가이드: 기업 서비스에 AI 챗봇 도입하기",
    description:
      "기업 서비스에 LLM 기반 AI 챗봇을 도입하는 방법과 주의사항을 상세히 안내합니다.",
    category: "tech",
    thumbnail: "",
    date: "2025-01-05",
  },
];

type CategoryType = "all" | "tech" | "news";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const categories: CategoryType[] = ["all", "tech", "news"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Header Spacer */}
      <div className="h-20" />

      <main className="section-container pt-8 pb-16 md:pt-12 md:pb-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
            <span className="text-gray-400 text-sm font-medium tracking-wide">
              BLOG
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">인사이트</h1>
          <p className="text-xl text-gray-400">
            AI 개발 트렌드와 Pontislabs의 이야기를 공유합니다
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">아직 게시글이 없습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
}
