import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import forumBackground from "../assets/img/bg-caio-full.png";

type OrganizationCard = {
  eyebrow: string;
  title: string;
  description: string;
  secondary?: string;
};

const whyForumCards = [
  {
    title: "AI 거버넌스",
    description: "기업과 기관의 책임 있는 AI 도입과 운영 방향을 논의합니다.",
  },
  {
    title: "자율 규제",
    description: "AI 활용 확산에 따른 윤리적·기술적 이슈에 대응합니다.",
  },
  {
    title: "정책 제언",
    description: "AI 관련 법안과 정책 수립 과정에서 산업계의 의견을 전달합니다.",
  },
  {
    title: "산·학·연 네트워크",
    description: "산업계, 학계, 공공기관의 AI 의사결정권자를 연결합니다.",
  },
  {
    title: "C-Level 리더십",
    description: "AI 전환을 이끌 차세대 리더의 역량 강화를 지원합니다.",
  },
] as const;

const purposeCards = [
  {
    title: "민간 주도 AI 거버넌스",
    description: "AI 도입 확산에 따른 윤리적·기술적 이슈에 대응하고, CAIO 중심의 자율 규제 체계와 가이드라인 수립을 논의합니다.",
  },
  {
    title: "산·학·연 협의체 구축",
    description: "산업계, 학계, 공공기관의 AI 의사결정권자를 결집해 대한민국 AI 산업의 주요 의제를 논의하는 대표 협의체를 지향합니다.",
  },
  {
    title: "차세대 AI 리더십 양성",
    description: "기업의 디지털 전환을 넘어 AI 전환을 주도할 전문 CAIO의 역량 강화와 지속적인 성장을 지원합니다.",
  },
  {
    title: "정책 파트너십 강화",
    description: "AI 관련 법안과 국가 정책 수립 과정에서 산업 현장의 목소리를 대변하는 공식 소통 창구 역할을 합니다.",
  },
  {
    title: "지식 생태계 활성화",
    description: "최신 AI 트렌드와 산업별 현안을 공유하고, 실질적인 해결 방안을 모색하는 고도화된 네트워킹 장을 제공합니다.",
  },
] as const;

const organizationCards: readonly OrganizationCard[] = [
  {
    eyebrow: "공동의장",
    title: "최재식 KAIST 교수",
    description: "공동의장단은 포럼의 비전과 대외 대표성을 이끌며, 산·학·연 AI 리더십 네트워크의 방향성을 제시합니다.",
    secondary: "삼일PwC",
  },
  {
    eyebrow: "정책고문단",
    title: "국회 및 정부 유관 부처 인사",
    description: "국가 정책 및 제도 논의와 연계되는 자문 체계를 구축합니다.",
  },
  {
    eyebrow: "운영위원회",
    title: "운영위원장: 권영우 인공지능연수원장",
    description: "위원진: 이창길 GK Korea 대표 등 산업계 주요 인사 10명 내외가 참여 예정이며, 포럼의 핵심 사업과 예산을 심의·의결합니다.",
  },
  {
    eyebrow: "사무국",
    title: "한국인공지능협회 · 삼일PwC 공동 운영",
    description: "전문적인 행정과 전략 지원을 담당하며 포럼 운영의 실행 허브 역할을 맡습니다.",
  },
] as const;

const programCards = [
  {
    title: "멤버십 제도",
    description: "연회비 기반의 정예 멤버십으로 운영되며, 소속감과 네트워킹 품질을 유지합니다. CAIO 최고위과정 수료자는 당연직 멤버십으로 참여할 수 있습니다.",
  },
  {
    title: "조찬 포럼",
    description: "분기별 1회, 국내외 AI 핵심 인사를 초청해 C-Level 리더를 위한 프라이빗 네트워킹 세션을 운영합니다.",
  },
  {
    title: "세미나 및 컨퍼런스",
    description: "연 2회, 국제인공지능대전 및 한국인공지능협회 기업인의 밤과 연계해 AI 거버넌스, 산업 적용, 정책 대응을 주제로 한 성과 공유 세미나를 개최합니다.",
  },
] as const;

const timelineItems = [
  {
    date: "2026.05.07",
    title: "한국 CAIO포럼 발족식 및 기념 세미나",
    description: "코엑스 3층 300호",
  },
  {
    date: "2026.07",
    title: "조찬 포럼",
    description: "분기별 핵심 의제 논의 및 멤버 교류",
  },
  {
    date: "2026.10",
    title: "조찬 포럼",
    description: "산업별 AI 전환 사례 및 정책 이슈 공유",
  },
  {
    date: "2026.12",
    title: "하반기 세미나 및 송년 네트워킹",
    description: "한국인공지능협회 기업인의 밤 연계",
  },
] as const;

const seminarRows = [
  { time: "14:00-14:30", topic: "등록 및 입장", speaker: "" },
  { time: "14:30-14:40", topic: "개회사 및 포럼 발족 선언", speaker: "공동의장" },
  { time: "14:40-14:50", topic: "축사", speaker: "황정아 국회의원" },
  { time: "14:50-15:00", topic: "CAIO 포럼 운영 로드맵 발표", speaker: "권영우 부회장" },
  { time: "15:00-15:20", topic: "AI 시대의 기업 운영체계 재설계: 조직, 책임, AX 전략", speaker: "PwC 조홍래 파트너" },
  { time: "15:20-15:40", topic: "AI 기본법 규제 대응 가이드", speaker: "법무법인 디코드 조정희 변호사" },
  { time: "15:40-16:00", topic: "중소기업 AI 지원 제도 소개", speaker: "중소벤처기업부 AI단 이상영 사무관" },
  { time: "16:00-16:20", topic: "중소기업 AI 지원사업 소개", speaker: "기술정보진흥원 AI실 송치평 실장" },
  { time: "16:20", topic: "폐회", speaker: "" },
] as const;

const effectCards = [
  {
    title: "AI 리더십 확립",
    description: "국내 주요 기업 CAIO들이 결집해 대한민국 AI 산업을 선도하는 대표 협의체로 자리매김합니다.",
  },
  {
    title: "산업 경쟁력 제고",
    description: "산업별 AI 성공 사례와 정책 정보를 공유해 기업의 시행착오를 줄이고 실질적인 AI 전환을 가속화합니다.",
  },
  {
    title: "신뢰 기반 AI 생태계 조성",
    description: "자율 규제와 윤리 가이드라인 논의를 통해 사회적으로 신뢰받는 AI 비즈니스 환경을 만들어갑니다.",
  },
] as const;

export default function ForumPage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToHeroNextSection = () => {
    document.getElementById("forum-next-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    const timeoutIds: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          const styles = window.getComputedStyle(target);
          const transitionDelays = styles.transitionDelay.split(",").map((value) => Number.parseFloat(value) * 1000);
          const transitionDurations = styles.transitionDuration.split(",").map((value) => Number.parseFloat(value) * 1000);
          const maxDelay = Math.max(...transitionDelays, 0);
          const maxDuration = Math.max(...transitionDurations, 0);
          timeoutIds.push(
            window.setTimeout(() => {
              target.style.transitionDelay = "0ms";
            }, maxDelay + maxDuration),
          );
          observer.unobserve(target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Header />

      <main>
        <section className="relative min-h-screen overflow-hidden bg-[#05070b] pt-16 text-white md:pt-[106px] lg:h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${forumBackground})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(81,115,255,0.18),transparent_32%),linear-gradient(180deg,rgba(5,7,11,0.18),rgba(5,7,11,0.72))]" />

          <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1180px] items-center justify-center px-5 py-12 sm:px-8 sm:py-16 md:min-h-[calc(100svh-106px)] lg:px-10">
            <div className="reveal-on-scroll reveal-soft max-w-[920px] text-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.26em] text-[#d7cdaa]">KOREA CAIO FORUM</p>
              <h1 className="mb-6 text-[36px] font-bold leading-[1.04] tracking-[-0.05em] sm:text-[48px] lg:text-[64px]">
                한국 CAIO 포럼
              </h1>
              <p className="mx-auto max-w-[760px] text-[22px] font-semibold leading-[1.22] tracking-[-0.035em] text-white/94 sm:text-[28px] lg:text-[34px]">
                대한민국 AI 전환을 이끄는
                  C-Level 리더십 네트워크
              </p>
              <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-7 text-white/72 sm:mt-8 sm:text-lg sm:leading-8">
                  산업계, 학계, 공공기관의 AI 의사결정권자가 함께 모여
                  AI 거버넌스, 정책, 산업 적용 전략을 논의하는
                  민간 주도 AI 리더십 협의체입니다.
              </p>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={() => scrollToSection("forum-overview")}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e0d7b9] cursor-pointer"
                >
                  포럼 소개 보기
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("forum-launch")}
                  className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 cursor-pointer"
                >
                  발족식 안내
                </button>
              </div>

              <div className="mt-12 grid gap-5 border-t border-white/10 px-0 pt-8 text-center sm:mt-14 sm:grid-cols-3 sm:px-6 lg:px-16">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/46">Network</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">산업계, 학계, 공공기관 AI 리더를 연결하는 공식 협의체</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/46">Agenda</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">거버넌스, 정책, 산업 전략을 함께 다루는 지속 운영 구조</p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/46">Membership</p>
                  <p className="mt-2 text-sm leading-7 text-white/72">정예 멤버십과 정기 포럼을 기반으로 한 고급 네트워크</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={scrollToHeroNextSection}
              className="hero-scroll-indicator border-0 bg-transparent p-0"
              aria-label="다음 섹션으로 스크롤"
            >
              <span className="hero-scroll-mouse">
                <span className="hero-scroll-wheel" />
              </span>
              <span className="hero-scroll-text">SCROLL</span>
            </button>
          </div>
        </section>

        <section id="forum-next-section" className="border-t border-white/6 bg-[#080b12] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
            <div className="reveal-on-scroll max-w-[520px]">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Why Forum</p>
              <h2 className="mb-6 text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                왜 CAIO 포럼인가
              </h2>
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                AI 도입이 확산되면서 기업과 기관은 기술 활용을 넘어 윤리, 규제, 책임, 조직 운영의 문제까지 함께
                마주하고 있습니다.
              </p>
              <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                개별 기업의 대응만으로는 부족한 시점에서, 산·학·연의 AI 의사결정권자가 함께 논의하고 실행 방향을
                제시하는 공식 협의의 장이 필요합니다.
              </p>
            </div>

            <div className="grid gap-4">
              {whyForumCards.map((card, index) => (
                <article
                  key={card.title}
                  className="reveal-on-scroll group border-l border-[#d7cdaa]/50 bg-white/[0.02] px-5 py-5 transition-all duration-300 ease-out hover:border-[#d7cdaa] hover:bg-white/[0.035] hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-6"
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <h3 className="text-[20px] font-semibold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#f3e8c5] sm:text-[22px]">
                    {card.title}
                  </h3>
                  <p className="mt-3 max-w-[560px] text-sm leading-7 text-white/66 transition-colors duration-300 group-hover:text-white/82 sm:text-base">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="forum-overview" className="border-t border-white/6 bg-[#0b0f17] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="reveal-on-scroll mb-10 max-w-[720px] sm:mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Purpose</p>
              <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                포럼의 목적
              </h2>
            </div>

            <div className="border-t border-white/12 bg-transparent">
              {purposeCards.map((card, index) => (
                <article
                  key={card.title}
                  className="reveal-on-scroll group grid gap-3 border-b border-white/12 py-7 transition-all duration-300 ease-out hover:bg-white/[0.025] hover:shadow-[0_18px_50px_rgba(0,0,0,0.14)] sm:grid-cols-[96px_minmax(0,260px)_1fr] sm:gap-6 lg:grid-cols-[110px_minmax(0,300px)_1fr] lg:gap-8"
                  style={{ transitionDelay: `${100 + index * 70}ms` }}
                >
                  <p className="text-[28px] font-semibold tracking-[-0.04em] text-white/28 transition-colors duration-300 group-hover:text-[#d7cdaa] sm:text-[36px] lg:text-[42px]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#f3e8c5] sm:text-[24px]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/66 transition-colors duration-300 group-hover:text-white/82 sm:text-base sm:leading-8">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/6 bg-[#07090e] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="reveal-on-scroll mb-10 max-w-[760px] sm:mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Organization</p>
              <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                조직 구성
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="reveal-on-scroll reveal-soft mx-auto max-w-[680px] rounded-[22px] border border-white/12 bg-white/[0.03] p-6 text-center sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{organizationCards[0].eyebrow}</p>
                <div className="mt-3 space-y-2">
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">{organizationCards[0].title}</p>
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">{organizationCards[0].secondary}</p>
                </div>
                <p className="mt-5 text-sm leading-7 text-white/66">{organizationCards[0].description}</p>
              </div>

              <div className="reveal-on-scroll flex justify-center" style={{ transitionDelay: "120ms" }}>
                <div className="rounded-full border border-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  Advisory & Operations
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {organizationCards.slice(1, 3).map((card, index) => (
                  <article
                    key={card.eyebrow}
                    className="reveal-on-scroll rounded-[20px] border border-white/12 bg-white/[0.02] p-6 text-center sm:p-7"
                    style={{ transitionDelay: `${160 + index * 90}ms` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{card.eyebrow}</p>
                    <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.025em] text-white sm:text-[24px]">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">{card.description}</p>
                  </article>
                ))}
              </div>

              <div className="reveal-on-scroll flex justify-center" style={{ transitionDelay: "220ms" }}>
                <div className="h-8 w-px bg-white/12" />
              </div>

              <article
                className="reveal-on-scroll mx-auto max-w-[640px] rounded-[20px] border border-white/12 bg-white/[0.03] p-6 text-center sm:p-7"
                style={{ transitionDelay: "280ms" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{organizationCards[3].eyebrow}</p>
                <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.025em] text-white sm:text-[24px]">{organizationCards[3].title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/66">{organizationCards[3].description}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="forum-programs" className="bg-[#0d1730] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="reveal-on-scroll mb-10 max-w-[820px] sm:mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d1c49a]">Programs</p>
              <h2 className="mb-6 text-[30px] font-bold leading-tight tracking-[-0.035em] sm:text-[44px]">
                주요 운영 프로그램
              </h2>
              <p className="text-base leading-8 text-white/68 sm:text-lg">
                포럼은 단발성 행사가 아니라, 멤버십 기반의 정기 운영 프로그램을 통해 지속적인 의제 발굴과 교류를
                이어갑니다.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {programCards.map((card, index) => (
                <article
                  key={card.title}
                  className="reveal-on-scroll flex flex-col justify-between rounded-[20px] border border-white/10 bg-white/[0.045] p-6 sm:p-7 lg:min-h-[280px]"
                  style={{ transitionDelay: `${120 + index * 90}ms` }}
                >
                  <div>
                    <p className="text-[12px] font-semibold tracking-[0.24em] text-[#d1c49a]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-white sm:text-[28px]">{card.title}</h3>
                  </div>
                  <p className="mt-8 text-sm leading-7 text-white/72">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/6 bg-[#09101a] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="reveal-on-scroll mb-10 max-w-[760px] sm:mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Timeline</p>
              <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                주요 일정
              </h2>
            </div>

            <div className="relative">
              <div className="absolute bottom-0 left-[182px] top-0 hidden w-px bg-white/12 md:block" />
              <div className="grid gap-8 sm:gap-10">
                {timelineItems.map((item, index) => (
                  <article
                    key={`${item.date}-${item.title}`}
                    className="reveal-on-scroll relative grid gap-3 md:grid-cols-[190px_1fr] md:gap-8"
                    style={{ transitionDelay: `${100 + index * 80}ms` }}
                  >
                    <div className="relative">
                      <p className="text-[20px] font-semibold tracking-[-0.03em] text-white sm:text-[24px]">{item.date}</p>
                    </div>
                    <div className="relative border-l border-white/12 pl-6 md:border-l-0 md:pl-0">
                      <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#d7cdaa] md:left-[-40px]" />
                      <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-white sm:text-[24px]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/66 sm:text-base">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="forum-launch" className="border-t border-white/6 bg-[#0a0d14] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
              <div className="reveal-on-scroll">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Launch Seminar</p>
                <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                  한국 CAIO포럼
                  <br />
                  발족식 및 기념 세미나
                </h2>
                <div className="mt-8 border-t border-white/12 pt-8">
                  <p className="text-[20px] font-semibold tracking-[-0.05em] text-white sm:text-[34px]">2026.05.07 (목)</p>
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="border-l border-white/12 pl-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">Venue</p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">COEX 3F 300</p>
                    </div>
                    <div className="border-l border-white/12 pl-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">Time</p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">14:30-16:00</p>
                    </div>
                    <div className="border-l border-white/12 pl-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">Host</p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-white">KORAIA · PwC</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="reveal-on-scroll reveal-soft rounded-[20px] border border-white/12 bg-white/[0.03] p-6 sm:p-8"
                style={{ transitionDelay: "140ms" }}
              >
                <p className="text-sm leading-8 text-white/70 sm:text-base">
                  산·학·연 AI 최고책임자 간 자율적 규제 및 협의체를 구성하고, AI 관련 법안과 정책 수립을 위한 민간
                  의견을 수렴·전달합니다.
                </p>
                <div className="mt-8 grid gap-5 border-t border-white/12 pt-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">공동 주최</p>
                    <p className="mt-2 text-base font-semibold text-white">한국인공지능협회 · 삼일PwC</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/48">참석 대상</p>
                    <p className="mt-2 text-base font-semibold text-white">산·학·연 CAIO 등 C-Level 및 관련 전문가 100여 명</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div className="hidden md:block">
                <div className="border-t border-white/12">
                  {seminarRows.map((row, index) => (
                    <article
                      key={`${row.time}-${row.topic}`}
                      className="reveal-on-scroll grid grid-cols-[160px_minmax(0,1fr)_220px] gap-6 border-b border-white/12 py-6 lg:grid-cols-[180px_minmax(0,1fr)_240px] lg:gap-8"
                      style={{ transitionDelay: `${80 + index * 45}ms` }}
                    >
                      <p className="text-sm font-semibold tracking-[0.04em] text-[#d7cdaa]">{row.time}</p>
                      <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white">{row.topic}</h3>
                      <p className="text-sm leading-7 text-white/66">{row.speaker || "-"}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:hidden">
                {seminarRows.map((row, index) => (
                  <article
                    key={`${row.time}-${row.topic}`}
                    className="reveal-on-scroll rounded-[18px] border border-white/12 bg-white/[0.03] p-5"
                    style={{ transitionDelay: `${80 + index * 45}ms` }}
                  >
                    <p className="text-sm font-semibold tracking-[0.04em] text-[#d7cdaa]">{row.time}</p>
                    <h3 className="mt-3 text-[18px] font-semibold leading-7 tracking-[-0.02em] text-white">{row.topic}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/66">{row.speaker || "-"}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/6 bg-[#07090e] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="reveal-on-scroll mb-10 max-w-[760px] sm:mb-12">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d7cdaa]">Impact</p>
              <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[44px]">
                기대 효과
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {effectCards.map((card, index) => (
                <article
                  key={card.title}
                  className="reveal-on-scroll rounded-[18px] border border-white/12 bg-white/[0.03] p-6 sm:p-7"
                  style={{ transitionDelay: `${120 + index * 90}ms` }}
                >
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white sm:text-[24px]">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/66">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#091224] px-5 py-20 text-white sm:px-8 sm:py-24">
          <div className="reveal-on-scroll reveal-soft mx-auto max-w-[1180px] border border-white/10 px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#d1c49a]">Membership & Contact</p>
            <h2 className="max-w-[860px] text-[30px] font-bold leading-tight tracking-[-0.035em] sm:text-[40px] lg:text-[48px]">
              CAIO 포럼과 함께 대한민국 AI 전환의 다음 의제를 만들어가세요.
            </h2>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-white/72 sm:text-lg">
              멤버십, 발족식, 조찬 포럼, 세미나 참여와 관련한 문의는 한국인공지능협회 사무국으로 연락해 주세요.
            </p>
            <div className="mt-10 flex justify-start sm:justify-start">
              <div
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#d1c49a]"
              >
                info@koraia.org
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
