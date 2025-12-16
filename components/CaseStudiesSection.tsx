// Case Studies Section
export default function CaseStudiesSection() {
  const caseStudies = [
    {
      category: 'E-commerce',
      title: '이커머스 A사',
      challenge: '폭증하는 고객 문의 처리',
      solution: 'LLM 기반 자동 응답 시스템 구축',
      result: '고객 문의 40% 자동응답',
      metrics: [
        { label: '응답 시간', value: '90% 단축' },
        { label: '고객 만족도', value: '15% 향상' },
      ],
    },
    {
      category: 'B2B SaaS',
      title: 'B2B SaaS B사',
      challenge: '반복적인 리포트 작성 업무',
      solution: 'AI 기반 리포트 자동 생성 시스템',
      result: '리포트 작성 시간 60% 단축',
      metrics: [
        { label: '생산성', value: '2.5배 증가' },
        { label: '인력 재배치', value: '3명' },
      ],
    },
    {
      category: 'Healthcare',
      title: '헬스케어 C사',
      challenge: '의료 데이터 분석 및 인사이트 도출',
      solution: 'AI 데이터 분석 파이프라인 구축',
      result: '데이터 처리 속도 80% 개선',
      metrics: [
        { label: '처리 속도', value: '5배 향상' },
        { label: '정확도', value: '95%+' },
      ],
    },
  ];

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
            <span className="text-gray-400 text-sm font-medium tracking-wide">CASE STUDIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">프로젝트 사례</h2>
          <p className="text-xl text-gray-400">
            실제 비즈니스 임팩트를 만든 프로젝트들
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-secondary border border-gray-800 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                  {study.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">{study.title}</h3>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Challenge</p>
                <p className="text-gray-300">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Solution</p>
                <p className="text-gray-300">{study.solution}</p>
              </div>

              {/* Result Highlight */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-4">
                <p className="text-accent font-bold text-lg">{study.result}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-background/50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                    <p className="text-white font-semibold">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
