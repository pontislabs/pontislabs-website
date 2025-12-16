// About Section
export default function AboutSection() {
  const teamRoles = [
    {
      role: "Product Manager",
      description: "토스 결제/송금 시스템 설계 · 7년 경력",
      impact: "일 거래액 수천억원 시스템 운영",
    },
    {
      role: "Backend Engineer",
      description: "네이버 AI 서비스 백엔드 개발 · 10년 경력",
      impact: "초당 10만+ 요청 처리 시스템 구축",
    },
    {
      role: "Frontend Engineer",
      description: "에이블리 MAU 1,000만 앱 개발 · 8년 경력",
      impact: "모바일 성능 최적화 & A/B 테스트 시스템",
    },
    {
      role: "DevOps Engineer",
      description: "레브잇 DAU 150만 인프라 설계 · 8년 경력",
      impact: "99.9% 가용성, 비용 최적화 50% 달성",
    },
  ];

  const values = [
    {
      title: "실제로 굴러가는 것",
      description: "멋진 데모보다, 릴리즈 가능한 결과물을 만듭니다",
    },
    {
      title: "비즈니스 임팩트",
      description: "기술을 위한 기술이 아닌, 실제 가치를 만드는 AI",
    },
    {
      title: "빠른 실행",
      description: "PoC부터 프로덕션까지, 속도감 있게 진행합니다",
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wide">
                ABOUT US
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              우리가 일하는 방식
            </h2>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-3xl p-12 mb-16">
            <blockquote className="text-center space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                "AI 외주의 90%는{" "}
                <span className="text-accent">데모로 끝납니다.</span>
                <br />
                우리는{" "}
                <span className="text-accent">프로덕션까지 책임집니다.</span>"
              </p>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                수천만 유저가 실제로 사용하는 서비스를 만들어본 팀이기에,
                <br />
                <span className="text-gray-300 font-semibold">
                  배포 후 문제, 확장성, 운영 비용까지
                </span>{" "}
                고려합니다.
              </p>
            </blockquote>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background border border-gray-800 rounded-2xl p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Roles */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">팀 구성</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {teamRoles.map((member, index) => (
                <div
                  key={index}
                  className="bg-secondary border border-gray-800 rounded-xl p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {member.role}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {member.description}
                        </p>
                      </div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Impact</p>
                      <p className="text-sm text-accent font-medium">
                        {member.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
