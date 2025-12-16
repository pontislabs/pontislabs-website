// Background Section - Team Credentials
export default function BackgroundSection() {
  const companies = ['TOSS', 'NAVER', 'ABLY', 'LEVIT'];
  const expertise = ['Product', 'Backend', 'MLOps', 'Data', 'DevOps'];

  return (
    <section className="section-padding border-y border-gray-800/50">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Label */}
          <div className="inline-block px-4 py-2 bg-white/5 border border-gray-800 rounded-full">
            <span className="text-gray-400 text-sm font-medium tracking-wide">OUR BACKGROUND</span>
          </div>

          {/* Main Text */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">수천억원 거래액 · 초당 10만 요청</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              MAU 1,000만 · DAU 150만
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
            토스, 네이버, 에이블리, 레브잇에서<br />
            <span className="text-gray-300 font-semibold">실제로 이 규모를 운영한 팀입니다.</span>
          </p>

          {/* Companies */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
            {companies.map((company) => (
              <div
                key={company}
                className="px-6 py-3 bg-secondary border border-gray-800 rounded-lg"
              >
                <span className="text-lg font-semibold text-gray-300">{company}</span>
              </div>
            ))}
          </div>

          {/* Expertise Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {expertise.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="text-sm font-medium text-accent">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
