"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import BlogCard, { BlogPostMeta } from "@/components/BlogCard";
import { categoryLabels } from "@/lib/constants";

// Static blog data for client-side rendering
const blogPosts: BlogPostMeta[] = [
  {
    slug: "ddangit-hr-chatbot",
    title: "ddangit - RAG 기반 HR 챗봇",
    description:
      "사내 문의 자동화 | 응답 정확도 95%+ | 2.3초 응답",
    category: "portfolio",
    thumbnail: "/images/blog/ddangit/chatbot-interface.png",
    date: "2025-01-14",
  },
];

type CategoryType = "all" | "tech" | "news" | "portfolio";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const categories: CategoryType[] = ["all", "tech", "news", "portfolio"];

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
