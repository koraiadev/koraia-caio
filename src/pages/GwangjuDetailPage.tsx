import { useState } from "react";
import type { CSSProperties } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "swiper/css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/img/img-gwangju.png";
import caioImage from "../assets/img/bg-caio-01.jpg";
import perksImage from "../assets/img/bg-caio-02.jpg";
import ctaImage from "../assets/img/bg-caio-03.jpg";

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

const instructorImages = Object.entries(
    import.meta.glob("../assets/img/instructor/*.{png,jpg,jpeg,webp}", {
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

    const syncSwiperState = (instance: SwiperType) => {
        setIsBeginning(instance.isBeginning);
        setIsEnd(instance.isEnd);
    };

    return (
        <div style={pageTheme}>
            <Header />

            <section className="relative h-screen overflow-hidden pt-[101px]">
                <div
                    className="absolute inset-x-0 bottom-0 top-[101px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
                <div className="absolute inset-x-0 bottom-0 top-[101px] bg-[linear-gradient(180deg,rgba(6,12,28,0.72)_0%,rgba(10,18,40,0.48)_42%,rgba(5,9,22,0.78)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 top-[101px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%)]" />

                <div className="relative mx-auto flex min-h-[calc(100svh-101px)] max-w-[1080px] items-center px-8 py-16 text-center">
                    <div className="w-full">
                        <p className="mb-8 text-sm uppercase tracking-[0.25em] text-white/62">
                            Chief AI Officer
                        </p>

                        <h1 className="mb-8 text-[70px] font-bold leading-[1.05] text-white/90">
                            CAIO IN
                            <br />
                            GWANGJU 2기
                        </h1>

                        <p className="mx-auto mb-12 max-w-[720px] text-lg text-white/90">
                            AI 시대, 의사결정의 기준을 다시 설계합니다.
                        </p>

                        <button className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden">
                            <span className="relative z-20">수강 신청하기</span>
                            <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-tl-lg border-l-1 border-t-1 top-0 left-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-1 border-t-1 top-0 right-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-1 border-b-1 left-0 bottom-0"></span>
                            <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D6E0E5] absolute h-[20%] rounded-br-lg border-r-1 border-b-1 right-0 bottom-0"></span>
                        </button>

                        <div className="mx-auto mt-20 max-w-[780px] bg-[rgba(10,16,31,0.26)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-[1px]">
                            <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
                                <div className="flex gap-6 border-y border-white/18 py-7">
                                    <span className="min-w-[68px] shrink-0 text-sm font-medium leading-snug text-white">
                                        일시 및
                                    <br />
                                        장소
                                    </span>
                                    <div className="text-left text-sm leading-relaxed text-white/88">
                                        <p>2026년 4월 7일 ~ 2026년 7월 7일</p>
                                        <p>매주 화요일 18:30 ~ 20:30</p>
                                        <p>인공지능산업융합사업단 컨퍼런스홀 외</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 border-y border-white/18 py-7 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">문의</span>
                                    <span className="text-sm text-white/88">062-376-8840</span>
                                </div>

                                <div className="flex gap-6 py-7">
                                <span className="min-w-[68px] shrink-0 text-sm font-medium text-white">
                                    신청 마감
                                </span>
                                    <span className="text-sm text-white/88">2026년 4월 24일까지</span>
                                </div>

                                <div className="flex gap-6 py-7 md:pl-10">
                                    <span className="shrink-0 text-sm font-medium text-white">참가비</span>
                                    <span className="text-sm text-white">380만원 (VAT 포함)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-[700px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${caioImage})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
                    <h2 className="mb-5 text-[48px] font-bold leading-tight text-white">
                        무엇이 이들을 움직였을까요?
                    </h2>
                    <p className="mt-12 text-xl font-semibold leading-relaxed text-white/90">
                        AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.
                        <br />
                        그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.
                    </p>
                </div>
            </section>

            <section className="bg-white py-24">
                <div className="mx-auto max-w-[1080px] px-8">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--page-primary)]">
                        Reason
                    </p>

                    <div className="mb-16 flex items-center">
                        <h2 className="w-1/2 text-[42px] font-bold leading-tight text-black">
                            CAIO 최고위과정을
                            <br />
                            선택해야 하는 이유.
                        </h2>
                        <p className="w-1/2 pt-2 text-base leading-relaxed text-black">
                            인재 부족, 전략 부재, 실행 지연.
                            <br />
                            이 문제는 개인이 아닌 사회 구조의 문제입니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {reasonCards.map((card) => (
                            <div key={card.num} className="rounded-2xl bg-gray-50 p-7">
                                <p className="mb-4 text-sm font-semibold text-[var(--page-primary)]">혜택 {card.num}</p>
                                <h3 className="mb-3 text-xl font-bold text-black">{card.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-gradient-to-b from-[var(--page-primary)] to-[#AFC1FF] pt-16 pb-28 text-center">
          <span className="mb-7 inline-block rounded-full border border-white bg-transparent px-5 py-2 text-sm font-semibold text-white">
            Special Point
          </span>
                    <h2 className="text-[36px] font-bold text-white">네트워킹으로 완성되는 경험</h2>
                </div>

                <div className="bg-[#F5F6FA] pt-[120px] pb-20">
                    <div className="mx-auto -mt-10 flex max-w-[1080px] items-start gap-16 px-8">
                        <div className="flex-1 pt-10">
                            <h3 className="mb-2 text-[28px] font-bold text-gray-800">평균 출석률</h3>
                            <p className="mb-10 text-[46px] font-bold leading-none text-[var(--page-primary)]">98.8%</p>
                            <p className="mb-10 text-lg text-gray-700">끝까지 참여하는 이유는 명확합니다.</p>
                            <p className="text-base leading-relaxed text-gray-400">
                                출석률 80% 이상 시
                                <br />
                                한국인공지능협회 협회장 명의의 이수증이 수여됩니다.
                            </p>
                        </div>

                        <div className="shrink-0 pt-10">
                            <div className="h-[280px] w-[380px] rounded-xl bg-gray-300" />
                            <button className="mt-4 w-full rounded-lg bg-[var(--page-primary)] px-8 py-3 text-sm font-semibold text-white">
                                브로슈어 다운로드
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f6ff] py-24">
                <div className="mx-auto max-w-[1080px] px-8">
                    <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-800">Instructor</p>

                    <div className="mb-16 flex items-center justify-between gap-8">
                        <h2 className="w-1/2 text-[42px] font-bold leading-tight text-gray-800">
                        이번
                        <br />
                        커리큘럼은요
                        </h2>
                        <p className="w-1/2 max-w-xs pt-3 text-left text-lg leading-relaxed text-gray-800">
                            전략부터 실행까지,
                            <br />
                            현장에서 바로 쓰이는 AI를 다룹니다.
                        </p>
                    </div>

                    <div className="relative overflow-hidden px-8">
                        {!isBeginning && (
                            <button
                                type="button"
                                onClick={() => swiper?.slidePrev()}
                                className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex"
                                aria-label="이전 연사 보기"
                            >
                                <FiChevronLeft size={24} />
                            </button>
                        )}

                        {!isEnd && (
                            <button
                                type="button"
                                onClick={() => swiper?.slideNext()}
                                className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center text-[56px] text-[#5c6780] transition-colors duration-300 hover:text-[#1f2b44] lg:flex"
                                aria-label="다음 연사 보기"
                            >
                                <FiChevronRight size={24} />
                            </button>
                        )}

                        <Swiper
                            className="instructor-swiper"
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
                                    <article className="group relative h-full overflow-hidden rounded-[28px] bg-transparent">
                                        <span className="absolute left-1/2 top-5 z-10 -translate-x-1/2 rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-semibold tracking-[0.18em] text-[rgba(15,24,45,0.78)]">
                                            {instructor.lesson}강
                                        </span>
                                        <div className="speaker-card relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[28px]">
                                            <img
                                                src={instructor.src}
                                                alt={instructor.label}
                                                decoding="async"
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${perksImage})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]" />

                <div className="relative z-10 mx-auto max-w-[1080px] px-8">
                    <div className="mx-auto max-w-[780px]">
                        <p className="mb-8 text-left text-xs uppercase tracking-[0.25em] text-white/70">Perks</p>
                        <h2 className="mb-14 text-left text-[36px] font-bold leading-tight text-white">
                            단순 교육을 넘어,
                            <br />
                            자격 · 네트워크 · 실행 기회를 함께 제공합니다.
                        </h2>

                        <div className="overflow-hidden bg-black/1 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-[1px]">
                            {perks.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`grid grid-cols-1 items-center gap-8 px-3 py-8 backdrop-blur-sm md:grid-cols-[4fr_6fr] ${
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

            <section className="relative h-[520px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${ctaImage})` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                    <h2 className="mb-4 text-[52px] font-bold leading-tight text-white">
                        AI 시대,
                        <br />
                        리더가 먼저 바뀌어야 합니다.
                    </h2>
                    <p className="mb-10 text-base text-white/80">
                        지금 준비하지 않으면 격차는 더 벌어집니다.
                    </p>
                    <button className="rounded-lg border border-white px-10 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0D1230]">
                        지금 신청하기
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}
