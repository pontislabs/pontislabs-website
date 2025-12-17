"use client";

// Hero Section
export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-background to-background" />

      <div className="section-container relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-accent text-sm font-medium">
                AI Development Studio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                대규모 프로덕션을 실제로 운영한 팀
              </span>
              <br />
              <span className="whitespace-nowrap">당신의 AI를 만듭니다.</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              토스, 네이버, 에이블리에서{" "}
              <span className="text-gray-300 font-medium">
                실제 대규모 서비스
              </span>
              를 운영한 팀.
              <br />
              <span className="text-gray-300 font-medium">
                데모가 아닌, 프로덕션 레벨의 AI를 만듭니다.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-primary hover:bg-accent text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                프로젝트 상담하기
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-gray-700 hover:border-gray-600 rounded-lg font-semibold transition-all"
              >
                최근 작업 보기
              </button>
            </div>
          </div>

          {/* Right Content - Abstract UI Card */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-secondary to-background border border-gray-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <div className="w-5 h-5 bg-primary rounded" />
                      </div>
                      <div>
                        <div className="h-3 w-24 bg-gray-700 rounded" />
                        <div className="h-2 w-16 bg-gray-800 rounded mt-2" />
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-start space-x-3 animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="w-8 h-8 bg-accent/20 rounded-lg flex-shrink-0 mt-1" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-gray-700 rounded w-3/4" />
                          <div className="h-2 bg-gray-800 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-32 bg-gray-700 rounded" />
                      <div className="h-8 w-20 bg-primary/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
