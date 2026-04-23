# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Coding Rules

- Do not add comments to code under any circumstances

## Communication

- Always respond in Korean

## Commands

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

## Stack

- **React 19 + TypeScript** — Vite 빌드
- **Tailwind CSS v4** — `@tailwindcss/vite` 플러그인 방식 (설정 파일 없음, `index.css`에서 `@import "tailwindcss"`)
- **React Router v7** — `BrowserRouter` + `Routes`
- **Pretendard** — npm 패키지로 설치, `index.css`에서 임포트

## Page Structure

| 경로 | 컴포넌트 |
|------|----------|
| `/` | `src/pages/HomePage.tsx` |
| `/detail/1` | `src/pages/DetailPage1.tsx` |
| `/detail/2` | `src/pages/DetailPage2.tsx` |
| `/detail/3` | `src/pages/DetailPage3.tsx` |

라우터 설정은 `src/App.tsx`에 있음.
