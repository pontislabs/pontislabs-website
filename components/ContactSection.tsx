"use client";

import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false); // 로딩 상태 추가
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    budget: "",
    projectType: [] as string[],
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      company: formData.company || "미입력",
      email: formData.email,
      budget: formData.budget || "미입력",
      types: formData.projectType, // 워커의 data.types와 매칭
      description: formData.message, // 워커의 data.description과 매칭
    };

    try {
      const response = await fetch(
        "https://github-pages-forms.pontislabs.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("문의가 성공적으로 전달되었습니다. 확인 후 곧 연락드리겠습니다!");
        // 폼 초기화
        setFormData({
          name: "",
          company: "",
          email: "",
          budget: "",
          projectType: [],
          message: "",
        });
      } else {
        throw new Error("전송 실패");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "AI 기능 기획 & PoC",
    "LLM 서비스 개발",
    "데이터 파이프라인",
    "기존 서비스 AI 추가",
    "기타",
  ];

  const budgetRanges = [
    "1천만원 미만",
    "1천만원 ~ 3천만원",
    "3천만원 ~ 5천만원",
    "5천만원 ~ 1억원",
    "1억원 이상",
    "협의 필요",
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              프로젝트 문의
            </h2>
            <p className="text-xl text-gray-400">
              AI로 해결하고 싶은 문제가 있으신가요?
              <br />
              편하게 연락 주세요. 24시간 내로 답변드립니다.
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-secondary border border-gray-800 rounded-3xl p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Name & Company */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    disabled={isSubmitting}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                    placeholder="회사명 (선택)"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  예산 범위
                </label>
                <select
                  id="budget"
                  disabled={isSubmitting}
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                >
                  <option value="">선택해주세요</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  프로젝트 유형 (다중 선택 가능)
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projectTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center space-x-3 px-4 py-3 bg-background border border-gray-800 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        disabled={isSubmitting}
                        checked={formData.projectType.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              projectType: [...formData.projectType, type],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              projectType: formData.projectType.filter(
                                (t) => t !== type
                              ),
                            });
                          }
                        }}
                        className="w-4 h-4 text-primary bg-background border-gray-700 rounded focus:ring-primary focus:ring-2 disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  프로젝트 설명 *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                  placeholder="어떤 프로젝트를 진행하고 싶으신지, 해결하고 싶은 문제가 무엇인지 자유롭게 작성해주세요."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? "전송 중..." : "프로젝트 상담 요청하기"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
