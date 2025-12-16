// Process Section
export default function ProcessSection() {
  const processes = [
    {
      number: '01',
      title: 'Discovery',
      description: '요구사항 인터뷰 & 문제 정의',
      details: '비즈니스 목표와 기술적 제약사항을 함께 파악하고, 해결해야 할 핵심 문제를 명확히 정의합니다.',
    },
    {
      number: '02',
      title: 'Design',
      description: '솔루션 설계 & UX 플로우 설계',
      details: 'AI 모델 아키텍처부터 사용자 경험까지, 전체 시스템을 설계하고 검증합니다.',
    },
    {
      number: '03',
      title: 'Build',
      description: '모델/백엔드/프론트 개발 & 테스트',
      details: '프로토타입부터 프로덕션 레벨까지, 실제로 작동하는 시스템을 구축합니다.',
    },
    {
      number: '04',
      title: 'Launch & Iterate',
      description: '배포, 모니터링, 지속 개선',
      details: '안정적인 배포와 실시간 모니터링을 통해 서비스를 개선해나갑니다.',
    },
  ];

  return (
    <section id="process" className="section-padding bg-secondary/20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full mb-6">
            <span className="text-gray-400 text-sm font-medium tracking-wide">HOW WE WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">진행 방식</h2>
          <p className="text-xl text-gray-400">
            체계적인 프로세스로 안정적인 결과물을 만듭니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (hidden on last item) */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
              )}

              <div className="relative bg-background border border-gray-800 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-full mb-6">
                  <span className="text-2xl font-bold text-accent">{process.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-300 font-medium mb-3">{process.description}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{process.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
