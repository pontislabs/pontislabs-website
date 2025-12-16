# Pontislabs - AI 전문 개발 스튜디오 랜딩 페이지

토스, 네이버, 에이블리, 레브잇 출신 프로덕트 중심 AI 전문가들의 외주 에이전시 소개 랜딩 페이지입니다.

## 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **폰트**: Inter (Google Fonts)

## 프로젝트 구조

```
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 전역 스타일
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── BackgroundSection.tsx   # 팀 출신 배경 섹션
│   ├── ServicesSection.tsx     # 서비스 소개 섹션
│   ├── ProcessSection.tsx      # 진행 방식 섹션
│   ├── CaseStudiesSection.tsx  # 프로젝트 사례 섹션
│   ├── AboutSection.tsx        # 팀 소개 섹션
│   ├── ContactSection.tsx      # 프로젝트 문의 폼
│   └── Footer.tsx              # 푸터
├── public/                 # 정적 파일
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.js
```

## 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 주요 기능

### 섹션 구성

1. **Hero Section**: 메인 메시지와 CTA 버튼
2. **Background Section**: 팀 출신 회사 강조 (토스, 네이버, 에이블리, 레브잇)
3. **Services Section**: 4가지 주요 서비스 소개
4. **Process Section**: 4단계 진행 방식 (Discovery → Design → Build → Launch)
5. **Case Studies Section**: 3가지 프로젝트 사례
6. **About Section**: 팀 철학 및 구성원 소개
7. **Contact Section**: 프로젝트 문의 폼
8. **Footer**: 연락처 및 소셜 링크

### 디자인 특징

- **다크 테마**: 깔끔한 다크 네이비/그레이 배경
- **포인트 컬러**: 블루 계열 (#3b82f6, #60a5fa)
- **미니멀 디자인**: 여백 많고, 그림자 최소화
- **반응형**: 모바일, 태블릿, 데스크톱 대응
- **스크롤 인터랙션**: 부드러운 섹션 이동

## 커스터마이징

### 색상 변경

`tailwind.config.ts` 파일에서 색상을 수정할 수 있습니다:

```typescript
colors: {
  background: "#0a0e1a",      // 배경색
  foreground: "#f8fafc",      // 텍스트색
  primary: "#3b82f6",         // 메인 컬러
  secondary: "#1e293b",       // 보조 배경
  accent: "#60a5fa",          // 강조 컬러
}
```

### Contact 폼 API 연결

`components/ContactSection.tsx`의 `handleSubmit` 함수에서 API를 연결할 수 있습니다:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  // TODO: API 연결
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};
```

## 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼

- Netlify
- AWS Amplify
- Cloudflare Pages

## 라이선스

© 2025 PONTISLABS. All rights reserved.
# pontislabs-website
