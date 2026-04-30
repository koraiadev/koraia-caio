import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowRight, FiBarChart2, FiChevronLeft, FiChevronRight, FiCpu, FiDatabase, FiLayers, FiTarget } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { FaChalkboardTeacher, FaNetworkWired } from "react-icons/fa";
import { TbCertificate2 } from "react-icons/tb";
import { IoBalloonOutline, IoPeopleSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/img/img-gwangju.png";
import caioImage from "../assets/img/bg-caio-01.jpg";
import perksImage from "../assets/img/bg-caio-02.jpg";
import ctaImage from "../assets/img/bg-caio-03.jpg";
import logoJnu from "../assets/img/logo/logo-jnu.png";
import logoMicrosoft from "../assets/img/logo/logo-microsoft.png";
import logoDimoa from "../assets/img/logo/logo-dimoa.png";
import logoAws from "../assets/img/logo/logo-aws.png";
import logoCheongchul from "../assets/img/logo/logo-cheongchul.png";
import logoRaonsecure from "../assets/img/logo/logo-raonsecure.png";
import logoKfq from "../assets/img/logo/logo-kfq.jpg";
import logoSeriCeo from "../assets/img/logo/logo-seri-ceo.png";

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

const partnerLogos = [
    {
        name: "전남대학교 공과대학",
        href: "https://eng.jnu.ac.kr/eng/index.do",
        src: logoJnu,
    },
    {
        name: "마이크로소프트(Microsoft)",
        href: "https://www.microsoft.com/ko-kr",
        src: logoMicrosoft,
    },
    {
        name: "디모아",
        href: "https://www.dimoa.co.kr/",
        src: logoDimoa,
    },
    {
        name: "아마존웹서비스(AWS)",
        href: "https://aws.amazon.com/ko/",
        src: logoAws,
    },
    {
        name: "법무법인청출",
        href: "https://cheongchul.com/",
        src: logoCheongchul,
    },
    {
        name: "라온시큐어",
        href: "https://www.raonsecure.com/ko",
        src: logoRaonsecure,
    },
    {
        name: "한국품질재단",
        href: "https://www.kfq.or.kr/",
        src: logoKfq,
    },
    {
        name: "SERI CEO",
        href: "https://www.sericeo.org/",
        src: logoSeriCeo,
    },
];

const curriculumProgressCards = [
    {
        title: "AI 개념과 미래 방향 이해",
        desc: "피지컬 AI부터 생성형 AI까지 기술의 흐름과 AI가 사회와 산업에 미치는 영향을 구조적으로 이해합니다.",
        Icon: FiCpu,
    },
    {
        title: "데이터 기반 산업 혁신 사례",
        desc: "제조, 디스플레이 등 실제 기업 사례를 통해 데이터와 AI가 어떻게 산업 경쟁력을 만드는지 확인합니다.",
        Icon: FiDatabase,
    },
    {
        title: "현장 중심 AI 적용과 기술 이해",
        desc: "공정 데이터, 딥러닝 등 실제 적용 사례를 바탕으로 AI 기술이 현장에서 어떻게 활용되는지 학습합니다.",
        Icon: FiLayers,
    },
    {
        title: "AX 전환과 기업 적용 전략",
        desc: "기업이 겪는 AI 도입의 문제를 분석하고 효과적인 AX 전환 전략과 실행 방안을 정리합니다.",
        Icon: FiTarget,
    },
    {
        title: "AI 시대 리더십과 미래 전략",
        desc: "LLM·Agent 흐름과 인간-AI 협업을 바탕으로 조직과 리더의 의사결정 방향을 설계합니다.",
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
        schedule: "4.14 전남대학교 공과대학 코스모스홀",
        description:
            "지역과 대학의 경계를 넘어 대한민국 AI 연구의 기초 체력을 다지는 교육자이자, 차세대 컴퓨팅 환경의 설계자",
    },
    "02": {
        schedule: "4.21 빛고을창업스테이션 코워킹스페이스2",
        description:
            "독일 언론학 박사이자 청와대 디지털소통센터장을 지낸, 기술과 사회의 접점을 설계하는 국내 최고의 미디어ㆍIT 전략가",
    },
    "03": {
        schedule: "4.28 빛고을창업스테이션 코워킹스페이스2",
        description:
            "연구소장에서 대표까지, AI 원천 기술의 상용화를 진두지휘하며 국내 최고의 AI 서비스 플랫폼을 구축한 기술 경영인",
    },
    "05": {
        schedule: "5.12 빛고을창업스테이션 코워킹스페이스2",
        description:
            "AI 시대에 필요한 창의적 사고와 인문학적 리더십을 강의하며, 리더들의 디지털 마인드셋을 일깨우는 경영 전략 멘토",
    },
    "06": {
        schedule: "5.19 전남대학교 공과대학 영명홀",
        description:
            "AI 기술의 객관적 검증과 표준을 정립하며, 기업들이 신뢰할 수 있는 AI 비즈니스를 펼칠 수 있도록 돕는 인증 전략 전문가",
    },
    "07": {
        schedule: "5.26 빛고을창업스테이션 코워킹스페이스2",
        description:
            "데이터 시각화 아티스트이자 기술 행정가로서, 차가운 알고리즘을 인간 중심의 시각 언어로 번역하는 데이터 아트 분야의 선구자",
    },
    "08": {
        schedule: "6.9 빛고을창업스테이션 코워킹스페이스2",
        description:
            "국내 최초 자바 챔피언 출신으로, AI 학습 데이터의 표준과 신뢰성을 구축하며 데이터 주도형 혁신을 이끄는 기술 리더",
    },
    "10": {
        schedule: "6.23 빛고을창업스테이션 코워킹스페이스2",
        description:
            "AI 기반의 사용자 경험과 상호작용을 연구하며, 지능형 시스템의 인간 중심 설계를 선도하는 AI 교육 및 연구 전문가",
    },
    "11": {
        schedule: "6.30 전남대학교 공과대학 코스모스홀",
        description:
            "인공지능 알파고를 상대로 '신의 한 수'를 던진 인류 유일의 승리자이자, AI 시대의 서막을 온몸으로 겪어낸 통찰가",
    },
    "12": {
        schedule: "7.7 빛고을창업스테이션 코워킹스페이스2",
        description:
            "인텔 글로벌 부사장 출신의 통찰력으로 반도체 인프라부터 클라우드까지 AI 하드웨어 생태계 전반을 꿰뚫는 ICT 업계의 거목",
    },
    "13": {
        schedule: "7.14 빛고을창업스테이션 코워킹스페이스2",
        description:
            "차세대 AI 반도체의 시장 가치를 창출하고, 글로벌 테크 기업들과의 전략적 파트너십을 통해 실질적인 성장을 견인하는 수익 창출 전문가",
    },
};

const instructorImages = Object.entries(
    import.meta.glob("../assets/img/instructor/gwangju-2/*.{png,jpg,jpeg,webp}", {
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

export default function GwangjuDetailPage() {
    const pageTheme = {
        "--page-primary": "#4E5F7E",
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
                <div className="absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(180deg,rgba(6,12,28,0.72)_0%,rgba(10,18,40,0.48)_42%,rgba(5,9,22,0.78)_100%)] md:top-[101px]" />
                <div className="absolute inset-x-0 bottom-0 top-16 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%)] md:top-[101px]" />

                <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-[1080px] items-center px-5 py-12 text-center sm:px-8 sm:py-16 md:min-h-[calc(100svh-101px)]">
                    <div className="w-full">
                        <p className="hero-sequence hero-delay-1 mb-8 text-sm uppercase tracking-[0.25em] text-white/62">
                            Chief AI Officer
                        </p>

                        <h1 className="hero-sequence hero-delay-2 mb-6 text-[42px] font-bold leading-[1.05] text-white/90 sm:mb-8 sm:text-[58px] lg:text-[70px]">
                            CAIO IN
                            <br />
                            GWANGJU 2기
                        </h1>

                        <p className="hero-sequence hero-delay-3 mx-auto mb-10 max-w-[720px] text-base text-white/90 sm:mb-12 sm:text-lg">
                            AI 시대, 의사결정의 기준을 다시 설계합니다.
                        </p>

                        <button className="hero-sequence hero-delay-4 relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out group outline-offset-4 sm:px-8 sm:py-4 sm:text-base">
                            <span className="relative z-20">모집 신청 마감</span>
                            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-tl-lg border-l-1 border-t-1 top-0 left-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-1 border-t-1 top-0 right-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-1 border-b-1 left-0 bottom-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-br-lg border-r-1 border-b-1 right-0 bottom-0"></span>
                        </button>

                        <div className="hero-sequence hero-delay-5 mx-auto mt-14 max-w-[780px] bg-[rgba(10,16,31,0.26)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px] sm:mt-20 sm:p-8">
                            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38">
                                    <span className="min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white">
                                        일시 및
                                    <br />
                                        장소
                                    </span>
                                    <div className="text-left text-sm leading-relaxed text-white/88">
                                        <p>2026년 4월 14일 ~ 2026년 7월 14일</p>
                                        <p>매주 화요일 18:30 ~ 20:30</p>
                                        <p>빛고을창업스테이션 코워킹스페이스 외</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">문의</span>
                                    <span className="text-sm text-white/88">062-376-8840</span>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38">
                                <span className="min-w-[68px] shrink-0 text-sm font-medium text-white">
                                    신청 마감
                                </span>
                                    <span className="text-sm text-white/88">2026년 4월 24일까지</span>
                                </div>

                                <div className="flex gap-6 border-t border-white/18 py-7 transition-colors duration-300 hover:border-white/38 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">참가비</span>
                                    <span className="text-sm text-white">380만원 (VAT 포함)</span>
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
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${caioImage})` }}
                />
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
                                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(78,95,126,0.08)] text-[var(--page-primary)]">
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
                <div className="bg-gradient-to-b from-[white] to-[#AFC1FF] pt-16 pb-28 text-center">
                    <div className="reveal-on-scroll">
                        <span className="mb-7 inline-block rounded-full border border-[var(--page-primary)] bg-transparent px-5 py-2 text-sm font-semibold text-[var(--page-primary)]">
                            Special Point
                        </span>
                        <h2 className="text-[30px] font-bold text-[var(--page-primary)] sm:text-[36px]">네트워킹으로 완성되는 경험</h2>
                    </div>
                </div>

                <div className="bg-[#F5F6FA] pb-20 pt-[104px] sm:pt-[120px]">
                    <div className="reveal-on-scroll mx-auto -mt-10 flex max-w-[1080px] flex-col gap-10 px-5 sm:px-8 md:flex-row md:items-start md:gap-16">
                        <div className="flex-1 pt-6 md:pt-10">
                            <h3 className="mb-2 text-[24px] font-bold text-gray-800 sm:text-[28px]">평균 출석률</h3>
                            <p className="mb-8 text-[40px] font-bold leading-none text-[var(--page-primary)] sm:mb-10 sm:text-[46px]">98.8%</p>
                            <p className="mb-8 text-base text-gray-700 sm:mb-10 sm:text-lg">끝까지 참여하는 이유는 명확합니다.</p>
                            <p className="text-base leading-relaxed text-gray-400">
                                출석률 80% 이상 시
                                <br />
                                한국인공지능협회 협회장 명의의 이수증이 수여됩니다.
                            </p>
                        </div>

                        <div className="shrink-0 pt-2 md:pt-10">
                            <a
                                href="/files/img-gj2-poster.jpg"
                                download="CAIO_IN_GWANGJU_2기_포스터.jpg"
                                className="poster-card group relative m-auto block h-[260px] w-full max-w-[380px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-6 text-[#23304c] sm:h-[280px] sm:p-8"
                            >
                                <div className="absolute -right-[72px] -top-[72px] z-0 h-36 w-36 rounded-full bg-[var(--page-primary)] transition-transform duration-500 group-hover:scale-[8]" />
                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7a869f] transition-colors duration-500 group-hover:text-white/80">
                                            Brochure
                                        </p>
                                        <h3 className="w-full text-[28px] font-bold leading-tight text-[#23304c] transition-colors duration-500 group-hover:text-white sm:text-[32px]">
                                            CAIO IN GWANGJU
                                            <br />
                                            2TH
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

            <section className="bg-[#f4f6ff] py-20 sm:py-24">
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

                    <div className="px-6 py-10 md:px-10 mb-20">
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
                                            <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-md border border-[rgba(78,95,126,0.14)] bg-white text-[var(--page-primary)] shadow-[0_10px_24px_rgba(78,95,126,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(78,95,126,0.24)] group-hover:shadow-[0_16px_32px_rgba(78,95,126,0.14)]">
                                                <card.Icon className="text-[20px]" />
                                            </div>
                                        </div>
                                        <h4 className="mx-auto max-w-[220px] text-center text-sm font-semibold leading-6 text-gray-600 transition-colors duration-300 group-hover:text-[var(--page-primary)]">
                                            {card.title}
                                        </h4>
                                        <div
                                            className={`pointer-events-none absolute top-[94px] z-20 w-[190px] rounded-2xl border border-[rgba(78,95,126,0.12)] bg-white/98 p-4 opacity-0 shadow-[0_18px_36px_rgba(78,95,126,0.12)] transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-2 group-hover:opacity-100 ${
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
                                <div key={card.title} className="rounded-[22px] border border-[rgba(78,95,126,0.12)] bg-white p-5">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(78,95,126,0.08)] text-[var(--page-primary)]">
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
                                    className="absolute left-0 top-[calc(50%+52px)] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex"
                                    aria-label="이전 연사 보기"
                                >
                                    <FiChevronLeft size={24} />
                                </button>
                            )}

                            {!isEnd && (
                                <button
                                    type="button"
                                    onClick={() => swiper?.slideNext()}
                                    className="absolute right-0 top-[calc(50%+52px)] z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex"
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
                            <p className="mt-12 text-left text-sm tracking-[0.02em] leading-7 text-[#949494]">
                                * 커리큘럼 내용과 일정은 변경될 수 있습니다.
                                <br/>
                                * 외부 행사 연계, 야유회 등의 네트워크 활동이 포함될 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-20 sm:py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${perksImage})` }}
                />
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
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ctaImage})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center sm:px-8">
                    <div className="reveal-on-scroll">
                        <h2 className="mb-6 text-[34px] font-bold leading-tight text-white sm:text-[44px] lg:text-[52px]">
                            AI 시대,
                            <br />
                            리더가 먼저 바뀌어야 합니다.
                        </h2>
                        <p className="mb-10 text-sm text-white/80 sm:mb-12 sm:text-base">
                            지금 준비하지 않으면 격차는 더 벌어집니다.
                        </p>
                        <button className="group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-6 py-3 text-center font-barlow text-sm uppercase text-white transition-transform duration-300 ease-in-out outline-offset-4 sm:px-8 sm:py-4 sm:text-base">
                            <span className="relative z-20">모집 신청 마감</span>
                            <span className="absolute left-[-75%] top-0 z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]"></span>
                            <span className="absolute left-0 top-0 block h-[20%] w-1/2 rounded-tl-lg border-l-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300"></span>
                            <span className="absolute right-0 top-0 block h-[60%] w-1/2 rounded-tr-lg border-r-1 border-t-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-1 border-l-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300 group-hover:h-[90%]"></span>
                            <span className="absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-b-1 border-r-1 border-[#D6E0E5] drop-shadow-3xl transition-all duration-300"></span>
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#F2F3F8] py-20">
                <div className="mx-auto max-w-[1080px] px-5 sm:px-8">
                    <div className="mb-10 text-center">
                        <p className="mb-3 text-left text-xs font-semibold uppercase tracking-[0.24em] text-[var(--page-primary)]">
                            Partners
                        </p>
                        <h2 className="text-left text-[32px] font-bold leading-tight text-[#162033]">후원사ㆍ협력사</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {partnerLogos.map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.href}
                                target="_blank"
                                rel="noreferrer"
                                title={partner.name}
                                className="flex h-[150px] items-center justify-center rounded-xl border border-gray-100 bg-white px-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--page-primary)]/30 hover:shadow-[0_18px_36px_rgba(9,56,114,0.1)]"
                            >
                                <img src={partner.src} alt={partner.name} className="max-h-[64px] max-w-full object-contain" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
