import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronLeft,
    FiChevronRight,
    FiCpu,
    FiDatabase,
    FiLayers,
    FiTarget,
} from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaNetworkWired } from "react-icons/fa";
import { TbCertificate2 } from "react-icons/tb";
import { IoBalloonOutline, IoPeopleSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/img/img-seoul.png";
import caioImage from "../assets/img/bg-caio-01.jpg";
import perksImage from "../assets/img/bg-caio-02.jpg";
import ctaImage from "../assets/img/bg-caio-03.jpg";
import logoKoraia from "../assets/img/logo/logo-koraia.png";
import logoPwc from "../assets/img/logo/logo-pwc.png";

const reasonCardIcons = {
    "01": PiCertificateBold,
    "02": FaNetworkWired,
    "03": TbCertificate2,
    "04": IoBalloonOutline,
    "05": FaChalkboardTeacher,
    "06": IoPeopleSharp,
} as const;

const reasonCards = [
    {
        num: "01",
        title: "CAIO 자격 부여",
        desc: "최고위과정 이수와 함께 공식 자격 체계를 경험할 수 있습니다.",
    },
    {
        num: "02",
        title: "AI 리더 네트워크",
        desc: "광주 지역 리더들과 함께 실행 중심 네트워크를 구축합니다.",
    },
    {
        num: "03",
        title: "수료증 제공",
        desc: "과정 종료 후 협회 명의 수료증이 제공됩니다.",
    },
    {
        num: "04",
        title: "홍보 및 브랜딩 지원",
        desc: "과정 참여 기업과 리더의 대외 노출 기회를 넓혀드립니다.",
    },
    {
        num: "05",
        title: "실전형 커리큘럼",
        desc: "기술 설명보다 실행 기준과 의사결정 관점을 먼저 다룹니다.",
    },
    {
        num: "06",
        title: "수료 후 연결",
        desc: "과정 종료 이후에도 커뮤니티와 협업 접점이 이어집니다.",
    },
];

const perks = [
    {
        title: "CAIO 자격 부여",
        desc: "공식 인증으로 전문성을 증명합니다.",
    },
    {
        title: "협회 프리미엄 혜택",
        desc: "회원사 전용 리소스를 활용할 수 있습니다.",
    },
    {
        title: "원우 네트워크",
        desc: "이수 이후에도 연결은 계속됩니다.",
    },
];

const organizers = [
    {
        name: "한국인공지능협회",
        href: "https://koraia.org/",
        src: logoKoraia,
    },
    {
        name: "PWC",
        href: "https://www.pwc.com/kr",
        src: logoPwc,
    },
];

const curriculumProgressCards = [
    {
        title: "AI 시대와 리더의 역할 변화",
        desc: "AI 도입이 조직과 의사결정 구조에 미치는 영향을 이해하고 리더에게 요구되는 새로운 역할과 관점을 정립합니다.",
        Icon: FiCpu,
    },
    {
        title: "AX 전환 전략과 기업 설계",
        desc: "AI를 도입하는 수준을 넘어 AX 중심의 조직과 비즈니스 구조를 설계하는 방법을 학습합니다.",
        Icon: FiDatabase,
    },
    {
        title: "Agentic AI와 기술 패러다임 이해",
        desc: "자율 에이전트와 피지컬 AI 흐름을 기반으로 차세대 AI 기술과 실전 적용 방향을 파악합니다.",
        Icon: FiLayers,
    },
    {
        title: "현장 중심 AI 적용 사례",
        desc: "마케팅, 의사결정 자동화 등 실제 기업 사례를 통해 AI가 어떻게 업무에 적용되는지 구체적으로 확인합니다.",
        Icon: FiTarget,
    },
    {
        title: "AI 시대 조직·도구·미래 전략",
        desc: "조직 설계, AI 도구 활용, 그리고 향후 10년의 변화까지 실행과 전략을 함께 고려한 종합적인 방향을 정리합니다.",
        Icon: FiBarChart2,
    },
];

const curriculumCardMeta: Record<
    string,
    {
        schedule: string;
        description: string;
    }
> = {
    "01": {
        schedule: "7.16 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "02": {
        schedule: "7.23 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "03": {
        schedule: "7.30 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "04": {
        schedule: "8.6 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "05": {
        schedule: "8.13 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "06": {
        schedule: "8.20 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "07": {
        schedule: "8.27 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "08": {
        schedule: "9.3 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "09": {
        schedule: "9.10 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
    "10": {
        schedule: "9.17 아모레퍼시픽 본사 17층 삼일회계법인 세종홀",
        description: "",
    },
};

const instructorImages = Object.entries(
    import.meta.glob("../assets/img/instructor/seoul-4/*.{png,jpg,jpeg,webp}", {
        eager: true,
        import: "default",
    }),
)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, src], index) => ({
        id: index + 1,
        src: src as string,
        label: `연사 ${String(index + 1).padStart(2, "0")}`,
        fileName: path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? `Instructor ${index + 1}`,
        lesson: path.match(/-(\d+)\.[^.]+$/)?.[1] ?? String(index + 1).padStart(2, "0"),
    }));

export default function SeoulDetailPage() {
    const pageTheme = {
        "--page-primary": "#7460af",
    } as CSSProperties;
    const [swiper, setSwiper] = useState<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [hoveredCurriculumIndex, setHoveredCurriculumIndex] = useState<number | null>(null);

    const syncSwiperState = (instance: SwiperType) => {
        setIsBeginning(instance.isBeginning);
        setIsEnd(instance.isEnd);
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
                    const transitionDurations = styles.transitionDuration
                        .split(",")
                        .map((value) => Number.parseFloat(value) * 1000);
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
        <div style={pageTheme}>
            <Header />

            <section className="relative min-h-screen overflow-hidden pt-16 md:pt-[101px] lg:h-screen">
                <div
                    className="hero-image-pan absolute inset-x-0 bottom-0 top-16 bg-cover bg-center md:top-[101px]"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(180deg,rgba(20,6,30,0.76)_0%,rgba(58,12,87,0.54)_42%,rgba(22,5,34,0.82)_100%)] md:top-[101px]" />
                <div className="absolute inset-x-0 bottom-0 top-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_34%)] md:top-[101px]" />

                <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1080px] items-center px-5 py-12 text-center sm:px-8 sm:py-16 md:min-h-[calc(100svh-101px)]">
                    <div className="w-full">
                        <p className="hero-sequence hero-delay-1 mb-8 text-sm uppercase tracking-[0.25em] text-white/62">
                            Chief AI Officer
                        </p>

                        <h1 className="hero-sequence hero-delay-2 mb-6 text-[44px] font-bold leading-[1.05] text-white/92 sm:mb-8 sm:text-[58px] lg:text-[70px]">
                            CAIO IN
                            <br />
                            SEOUL 4기
                        </h1>

                        <p className="hero-sequence hero-delay-3 mx-auto mb-10 max-w-[760px] text-base text-white/88 sm:mb-12 sm:text-lg">
                            경영진을 위한 실전 AI 전략 및 거버넌스 최고위과정.
                        </p>

                        <a
                            href="https://survey.koraia.org/public/caio4th"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-sequence hero-delay-4 relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out group outline-offset-4 sm:px-8 sm:py-4 sm:text-base"
                        >
                            <span className="relative z-20">수강 신청하기</span>
                            <span className="absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]"></span>
                            <span className="absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300"></span>
                            <span className="absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#E8D6F4] drop-shadow-3xl transition-all duration-300"></span>
                        </a>

                        <div className="hero-sequence hero-delay-5 mx-auto mt-14 max-w-[860px] bg-[rgba(27,9,39,0.3)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px] sm:mt-20 sm:p-8">
                            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38">
                                    <span className="min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white">
                                        일시 및
                                        <br />
                                        장소
                                    </span>
                                    <div className="text-sm leading-relaxed text-white/88">
                                        <p>
                                            2026년 7월 16일 ~ 2026년 9월 17일
                                            <br />
                                            매주 목요일 18:40 ~ 21:00
                                        </p>
                                        <p>아모레퍼시픽 본사 17층 삼일회계법인 세종홀</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">문의</span>
                                    <span className="text-sm text-white/88">한국인공지능협회 사무국 02-713-4800</span>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38">
                                    <span className="min-w-[68px] shrink-0 text-sm font-medium text-white">신청 마감</span>
                                    <span className="text-sm text-white/88">2026년 6월 30일(화) 까지</span>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">교육비</span>
                                    <div className="text-sm leading-relaxed text-white/88">
                                        <p className="text-white">380만원 (VAT 별도)</p>
                                        <p className="mt-1 text-xs text-white/64">
                                            5월 6일 ~ 5월 8일 AI EXPO KOREA 기간 내 등록 신청 시 20% 할인
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <a
                        href="#hero-next-section"
                        className="hero-scroll-indicator hero-sequence hero-delay-5"
                        aria-label="다음 섹션으로 스크롤"
                    >
                        <span className="hero-scroll-mouse">
                            <span className="hero-scroll-wheel" />
                        </span>
                        <span className="hero-scroll-text">SCROLL</span>
                    </a>
                </div>
            </section>

            <section id="hero-next-section" className="relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:h-[700px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${caioImage})` }} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]" />
                <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1080px] items-center justify-center px-5 py-16 text-center sm:min-h-[640px] sm:px-8 lg:h-full lg:min-h-0">
                    <div className="reveal-on-scroll reveal-soft" style={{ transitionDelay: "180ms" }}>
                        <h2 className="mb-5 text-[34px] font-bold leading-tight text-white sm:text-[40px] lg:text-[48px]">
                            무엇이 이들을 움직였을까요?
                        </h2>
                        <p className="mt-8 text-base font-semibold leading-relaxed text-white/90 sm:mt-12 sm:text-xl">
                            AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.
                            <br />
                            그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-24 lg:py-32">
                <div className="reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--page-primary)]">
                        Reason
                    </p>

                    <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-center">
                        <h2 className="w-full text-[32px] font-bold leading-tight text-black md:w-1/2 md:text-[42px]">
                            CAIO 최고위과정을
                            <br />
                            선택해야 하는 이유.
                        </h2>
                        <p className="w-full pt-0 text-base leading-relaxed text-black md:w-1/2 md:pt-2">
                            인재 부족, 전략 부재, 실행 지연.
                            <br />
                            이 문제는 개인이 아닌 사회 구조의 문제입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {reasonCards.map((card) => (
                            <div
                                key={card.num}
                                className="reveal-on-scroll reveal-card rounded-2xl border border-gray-100 bg-white p-7"
                                style={{ transitionDelay: `${Number(card.num) * 95}ms` }}
                            >
                                <div className="mb-5 flex items-start justify-between gap-4">
                                    <p className="text-sm font-semibold text-[var(--page-primary)]">혜택 {card.num}</p>
                                    {(() => {
                                        const Icon = reasonCardIcons[card.num as keyof typeof reasonCardIcons];
                                        return (
                                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(203,93,255,0.08)] text-[var(--page-primary)]">
                                                <Icon className="text-[22px]" />
                                            </span>
                                        );
                                    })()}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-black">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-gradient-to-b from-[white] to-[#EADFF9] px-5 pb-20 pt-14 text-center sm:px-8 sm:pb-28 sm:pt-16">
                    <div className="reveal-on-scroll">
                        <span className="mb-7 inline-block rounded-full border border-[#7460af] bg-transparent px-5 py-2 text-sm font-semibold text-[#7460af]">
                            Special Point
                        </span>
                        <h2 className="text-[30px] font-bold text-[#7460af] sm:text-[36px]">네트워킹으로 완성되는 경험</h2>
                    </div>
                </div>

                <div className="bg-[#F5F6FA] pb-20 pt-16 sm:pt-[120px]">
                    <div className="reveal-on-scroll mx-auto -mt-6 flex max-w-[1080px] flex-col gap-10 px-5 sm:-mt-10 sm:px-8 lg:flex-row lg:items-start lg:gap-16">
                        <div className="flex-1 pt-0 lg:pt-10">
                            <h3 className="mb-2 text-[24px] font-bold text-gray-800 sm:text-[28px]">평균 출석률</h3>
                            <p className="mb-8 text-[38px] font-bold leading-none text-[#7460af] sm:mb-10 sm:text-[46px]">98.8%</p>
                            <p className="mb-8 text-base text-gray-700 sm:mb-10 sm:text-lg">끝까지 참여하는 이유는 명확합니다.</p>
                            <p className="text-base leading-relaxed text-gray-400">
                                출석률 80% 이상 시
                                <br />
                                한국인공지능협회 협회장 명의의 이수증이 수여됩니다.
                            </p>
                        </div>

                        <div className="w-full shrink-0 pt-0 lg:w-auto lg:pt-10">
                            <a
                                href="/files/img-su4-poster.png"
                                download="CAIO_IN_SEOUL_4TH.png"
                                className="poster-card group relative m-auto block h-[260px] w-full max-w-[380px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 text-[#2c1838] sm:h-[280px] sm:p-8"
                            >
                                <div className="absolute -right-[72px] -top-[72px] z-0 h-36 w-36 rounded-full bg-[var(--page-primary)] transition-transform duration-500 group-hover:scale-[8]" />
                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#8f6da6] transition-colors duration-500 group-hover:text-white/80">
                                            Brochure
                                        </p>
                                        <h3 className="w-full text-[28px] font-bold leading-tight text-[#2c1838] transition-colors duration-500 group-hover:text-white sm:text-[32px]">
                                            CAIO IN SEOUL
                                            <br />
                                            4TH
                                        </h3>
                                    </div>

                                    <span className="absolute bottom-8 left-0 inline-flex items-center gap-2 text-sm font-semibold text-[var(--page-primary)] transition-colors duration-500 group-hover:text-white">
                                        <span>포스터 다운로드하기</span>
                                        <FiArrowRight className="text-base" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#fcf9ff] py-20 sm:py-24">
                <div className="reveal-on-scroll mx-auto max-w-[1080px] px-5 sm:px-8">
                    <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-800">Curriculum</p>

                    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-center md:justify-between md:gap-8">
                        <h2 className="w-full text-[32px] font-bold leading-tight text-gray-800 md:w-1/2 md:text-[42px]">
                            이번
                            <br />
                            커리큘럼은요
                        </h2>
                        <p className="w-full pt-0 text-left text-base leading-relaxed text-gray-800 md:w-1/2 md:pt-3 md:text-lg">
                            전략부터 실행까지,
                            <br />
                            현장에서 바로 쓰이는 AI를 다룹니다.
                        </p>
                    </div>

                    <div className="mb-20 px-6 py-10 md:px-10">
                        <div className="relative hidden md:block">
                            <div className="absolute left-0 right-0 top-4 h-4 rounded-full bg-gray-200" />
                            <div
                                className="absolute left-0 top-4 h-4 rounded-full bg-[var(--page-primary)] transition-[width] duration-300 ease-out"
                                style={{
                                    width:
                                        hoveredCurriculumIndex === null
                                            ? "0%"
                                            : `${((hoveredCurriculumIndex + 0.5) / curriculumProgressCards.length) * 100}%`,
                                }}
                            />
                            <div className="grid grid-cols-5 gap-0">
                                {curriculumProgressCards.map((card, index) => (
                                    <div
                                        key={card.title}
                                        className="group relative min-w-0"
                                        onMouseEnter={() => setHoveredCurriculumIndex(index)}
                                        onMouseLeave={() => setHoveredCurriculumIndex(null)}
                                    >
                                        <div className="mb-5 flex justify-center">
                                            <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(134,105,148,0.08)] bg-white text-[var(--page-primary)] shadow-[0_10px_24px_rgba(134,105,148,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(134,105,148,0.24)] group-hover:shadow-[0_16px_32px_rgba(134,105,148,0.14)]">
                                                <card.Icon className="text-[20px]" />
                                            </div>
                                        </div>
                                        <h4 className="mx-auto max-w-[220px] text-center text-sm font-semibold leading-6 text-gray-600 transition-colors duration-300 group-hover:text-[var(--page-primary)]">
                                            {card.title}
                                        </h4>
                                        <div
                                            className={`pointer-events-none absolute top-[94px] z-20 w-[190px] rounded-2xl border border-[rgba(134,105,148,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_18px_36px_rgba(134,105,148,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 ${
                                                index === 0
                                                    ? "left-0"
                                                    : index === curriculumProgressCards.length - 1
                                                      ? "right-0"
                                                      : "left-1/2 -translate-x-1/2"
                                            }`}
                                        >
                                            <p className="text-sm leading-6 text-gray-600">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {curriculumProgressCards.map((card) => (
                                <div key={card.title} className="rounded-[22px] border border-[rgba(134,105,148,0.12)] bg-white p-5">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(134,105,148,0.08)] text-[var(--page-primary)]">
                                            <card.Icon className="text-[18px]" />
                                        </span>
                                        <h4 className="text-base font-bold text-gray-900">{card.title}</h4>
                                    </div>
                                    <p className="text-sm leading-6 text-gray-600">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 sm:mt-24 lg:mt-32">
                        <div className="mb-10 flex items-end justify-center gap-8">
                            <h3 className="text-center text-[24px] font-semibold leading-tight text-gray-900 sm:text-[28px]">이번 과정을 함께할 연사들</h3>
                        </div>

                        <div className="relative overflow-hidden px-2 py-8 sm:px-8 sm:py-12">
                            {!isBeginning && (
                                <button
                                    type="button"
                                    onClick={() => swiper?.slidePrev()}
                                    className="absolute left-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#8b69a4] transition-colors duration-300 hover:text-[#5d1f82] lg:flex"
                                    aria-label="이전 연사 보기"
                                >
                                    <FiChevronLeft size={24} />
                                </button>
                            )}

                            {!isEnd && (
                                <button
                                    type="button"
                                    onClick={() => swiper?.slideNext()}
                                    className="absolute right-0 top-[48%] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#8b69a4] transition-colors duration-300 hover:text-[#5d1f82] lg:flex"
                                    aria-label="다음 연사 보기"
                                >
                                    <FiChevronRight size={24} />
                                </button>
                            )}

                            <Swiper
                                className="instructor-swiper"
                                modules={[Pagination]}
                                pagination={{
                                    clickable: true,
                                }}
                                onSwiper={(instance) => {
                                    setSwiper(instance);
                                    syncSwiperState(instance);
                                }}
                                onSlideChange={syncSwiperState}
                                speed={900}
                                slidesPerView={1.15}
                                slidesPerGroup={1}
                                spaceBetween={18}
                                roundLengths
                                watchOverflow
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2.1,
                                        spaceBetween: 20,
                                    },
                                    900: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                        spaceBetween: 24,
                                    },
                                }}
                            >
                                {instructorImages.map((instructor) => (
                                    <SwiperSlide key={instructor.id}>
                                        <article className="group relative h-full bg-transparent">
                                            <span className="mb-5 inline-flex border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-[rgba(15,24,45,0.78)]">
                                                {instructor.lesson}강
                                            </span>
                                            <p className="mb-4 px-1 text-sm font-medium leading-6 text-[rgba(15,24,45,0.88)] sm:mb-6">
                                                {curriculumCardMeta[instructor.lesson]?.schedule ?? ""}
                                            </p>
                                            <div className="speaker-card relative flex items-center justify-center overflow-hidden rounded-[10px]">
                                                <img
                                                    src={instructor.src}
                                                    alt={instructor.label}
                                                    decoding="async"
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <p className="mt-5 px-1 text-sm leading-6 text-[rgba(15,24,45,0.78)]">
                                                {curriculumCardMeta[instructor.lesson]?.description ?? ""}
                                            </p>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <p className="mt-12 text-left text-sm leading-7 tracking-[0.02em] text-[#949494]">
                                * 커리큘럼 내용과 일정은 변경될 수 있습니다.
                                <br />
                                * 외부 행사 연계, 야유회 등의 네트워크 활동이 포함될 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-20 sm:py-24">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${perksImage})` }} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]" />
                <div className="perks-ambient-light absolute inset-0" />

                <div className="relative z-10 mx-auto max-w-[1080px] px-5 sm:px-8">
                    <div className="mx-auto max-w-[780px]">
                        <div className="reveal-on-scroll">
                            <p className="mb-8 text-center text-xs uppercase tracking-[0.25em] text-white/70">Perks</p>
                            <h2 className="mb-12 text-center text-[30px] font-bold leading-tight text-white sm:mb-14 sm:text-[36px]">
                                단순 교육을 넘어,
                                <br />
                                자격 · 네트워크 · 실행 기회를 함께 제공합니다.
                            </h2>
                        </div>

                        <div className="overflow-hidden">
                            {perks.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`grid grid-cols-1 items-center gap-8 px-3 py-8 md:grid-cols-[4fr_6fr] ${
                                        index !== 0 ? "border-t border-white/30" : ""
                                    }`}
                                >
                                    <h3 className="bg-gradient-to-r from-[#8892aa] via-[#F5F7FA] to-[#8E949F] bg-clip-text text-center text-[24px] font-semibold text-transparent md:text-left">
                                        {item.title}
                                    </h3>
                                    <p className="text-center text-base leading-relaxed text-white/82 md:text-left">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative min-h-[520px] overflow-hidden sm:min-h-[620px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${ctaImage})` }} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8">
                    <div className="reveal-on-scroll">
                        <h2 className="mb-6 text-[34px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]">
                            미래 비즈니스의
                            <br />
                            지휘권을 확보하십시오.
                        </h2>
                        <p className="mb-10 text-sm text-white/80 sm:mb-12 sm:text-base">
                            지금 준비하지 않으면 격차는 더 벌어집니다.
                        </p>
                        <a
                            href="https://survey.koraia.org/public/caio4th"
                            target="_blank"
                            rel="noreferrer"
                            className="group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out outline-offset-4 sm:px-8 sm:py-4 sm:text-base"
                        >
                            <span className="relative z-20">지금 신청하세요</span>
                            <span className="absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]"></span>
                            <span className="absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300"></span>
                            <span className="absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300"></span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-[#F5F6FA] py-20">
                <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-left text-xs font-semibold uppercase tracking-[0.24em] text-[var(--page-primary)]">
                            Organizer
                        </p>
                        <h2 className="text-left text-[32px] font-bold leading-tight text-[#1d1628]">주최사</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 md:justify-start">
                        {organizers.map((organizer) => (
                            <a
                                key={organizer.name}
                                href={organizer.href}
                                target="_blank"
                                rel="noreferrer"
                                title={organizer.name}
                                className="flex h-[150px] w-full items-center justify-center rounded-xl border border-gray-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--page-primary)]/20 hover:shadow-[0_18px_36px_rgba(134,105,148,0.1)] sm:h-[180px] md:w-[calc((100%-2.5rem)/3)]"
                            >
                                <img src={organizer.src} alt={organizer.name} className="max-h-[78px] max-w-full object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
