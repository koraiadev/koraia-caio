import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import logoCheonan from "../assets/img/logo/logo-cheonan.jpg";
import logoChungnam from "../assets/img/logo/logo-chungnam.png";
import logoCtp from "../assets/img/logo/logo-ctp.png";
import logoJnu from "../assets/img/logo/logo-jnu.png";
import logoKicox from "../assets/img/logo/logo-kicox..png";
import logoKoraia from "../assets/img/logo/logo-koraia.png";
import logoPwc from "../assets/img/logo/logo-pwc.png";
import homePageCss from "../styles/home-page.css?raw";

const asset = (fileName: string) => `${import.meta.env.BASE_URL}assets/home/${fileName}`;

const HOME_PAGE_STYLES = homePageCss
  .replace(/^(\s*)html\s*\{/m, "$1:host {")
  .replace(/^(\s*)body\s*\{/m, "$1:host {")
  .replace(/^(\s*):root\s*\{/m, "$1:host {")
  .replaceAll("img/intro_cover.png", asset("hero-intro-cover.png"));

const faqData = [
  {
    q: "CAIO 과정은 어떤 분들을 대상으로 하나요?",
    a: "대표이사 및 임원급 C레벨을 대상으로 합니다. AI를 활용해 산업지능화·AX를 추진하고자 하는 수요기업, AI 솔루션 공급기업, 공공·민간 분야 리더급 인사가 주요 대상입니다.",
  },
  {
    q: "수강료와 신청 방법은 어떻게 되나요?",
    a: "수강료와 신청 방법은 기수별로 상이합니다. 페이지 상단의 정보 테이블 또는 하단 신청 폼을 통해 문의 주시면 안내드리겠습니다.",
  },
  {
    q: "이수증은 어떻게 받을 수 있나요?",
    a: "출석률 80% 이상일 경우 한국인공지능협회 협회장 명의의 이수증이 수여됩니다. 이수증과 함께 CAIO 자격 및 협회 네트워크 혜택이 제공됩니다.",
  },
  {
    q: "서울/광주/천안 과정의 차이점이 있나요?",
    a: "핵심 커리큘럼은 동일하게 운영되며, 지역별 산업 환경과 수강생 구성에 맞춰 일부 콘텐츠가 커스터마이징됩니다. 각 지역 특화 네트워크도 함께 형성됩니다.",
  },
  {
    q: "과정 수료 후 어떤 혜택이 있나요?",
    a: "CAIO 자격 부여, 한국인공지능협회 회원사 전용 리소스 활용, 수료 후에도 이어지는 원우 네트워크 등 다양한 혜택이 제공됩니다.",
  },
] as const;

const historyData = [
  {
    id: "seoul1",
    city: "서울",
    cityColor: "#1447d4",
    period: "서울 1기",
    date: "2023",
    fullName: "[2023] AI CEO ACADEMY 최고위과정 서울 1기",
    status: "done",
    galleries: [
      asset("cohort-seoul-1-activity-1.png"),
      asset("cohort-seoul-1-activity-2.png"),
      asset("cohort-seoul-1-activity-3.png"),
      asset("cohort-seoul-1-activity-4.png"),
    ],
    speakers: [
      { name: "과학기술정보통신부 엄열 국장", lecture: "(축사 및 특강) 대한민국 AI 정책 방향", bg: asset("speaker-eom-yeol.png") },
      { name: "피에스인베스트먼트 서병수 대표", lecture: "AI 대중화 시대에 변화될 기업환경", bg: asset("speaker-seo-byeongsu.png") },
      { name: "한양대학교 이상욱 교수", lecture: "AI가 바꿀 미래 사회와 국내외 정책 동향", bg: asset("speaker-lee-sanguk.png") },
      { name: "인텔 이주석 부사장", lecture: "데이터가 주도하는 디지털 혁신과 생성형 AI 의 활용", bg: asset("speaker-lee-juseok.png") },
      { name: "두물머리 천영록 대표", lecture: "AI automation 신산업의 등장", bg: asset("speaker-cheon-yeongrok.png") },
      { name: "KT 전략신사업 신수정 부문장", lecture: "AI 시대의 리더십", bg: asset("speaker-shin-soojung.png") },
      { name: "서울여자대학교 김명주 교수", lecture: "AI 공존 시대에 필요한 윤리적 상상력 그리고 규제", bg: asset("speaker-kim-myeongju.png") },
      { name: "팬덤퍼널 김윤경 대표", lecture: "생성형 AI시대! 우리는 어떻게 살아남아야 하는가?", bg: asset("speaker-kim-yunkyeong.png") },
      { name: "경희대학교 김재인 교수", lecture: "인공지능과 미래역량", bg: asset("speaker-kim-jaein.png") },
      { name: "태평양 이상직 변호사", lecture: "인공지능시대의 위험과 도전, 창의와 혁신", bg: asset("speaker-lee-sangjik.png") },
    ],
  },
  {
    id: "seoul2",
    city: "서울",
    cityColor: "#1447d4",
    period: "서울 2기",
    date: "2024",
    fullName: "[2024] AI LEADER ACADEMY 최고위과정 서울 2기",
    status: "done",
    galleries: [
      asset("cohort-seoul-2-activity-1.png"),
      asset("cohort-seoul-2-activity-2.png"),
      asset("cohort-seoul-2-activity-3.png"),
      asset("cohort-seoul-2-activity-4.png"),
    ],
    speakers: [
      { name: "LG AI연구원 임우형 상무", lecture: "LG 초거대 AI 모델 엑사원 경영 활용 동향과 배울 점", bg: asset("speaker-lim-uhyeong.png") },
      { name: "SK mySUNI 김지현 부사장", lecture: "전통기업의 디지털 전환(DX)의 우여곡절과 성과창출 방안", bg: asset("speaker-kim-jihyeon.png") },
      { name: "업스테이지 최홍준 총괄부사장", lecture: "기업의 생성형 AI 활용 생산성 제고 전략", bg: asset("speaker-choi-hongjun.png") },
      { name: "마음AI 최홍섭 대표", lecture: "수익 창출형 생성형 AI 플랫폼 구축 전략", bg: asset("speaker-choi-hongseop.png") },
      { name: "SERICEO 김대균 이사", lecture: "AI와 리더십, 인공지능 시대에 리더의 자기학습과 성장, 구성원을 이끄는 방향", bg: asset("speaker-kim-daegyun.png") },
      { name: "포티투마루 김동환 대표", lecture: "생성형 AI(sLLM)의 산업별 도입 절차와 기대성과", bg: asset("speaker-kim-donghwan.png") },
      { name: "이즈파크 김갑산 대표", lecture: "기업의 수익 제고 비결 디지털전환(DX) 노하우", bg: asset("speaker-kim-gapsan.png") },
      { name: "STA테스팅컨설팅 권원일 대표", lecture: "국내외 AI 인증 동향과 대응전략", bg: asset("speaker-kwon-wonil.png") },
    ],
  },
  {
    id: "seoul3",
    city: "서울",
    cityColor: "#1447d4",
    period: "서울 3기",
    date: "2025",
    fullName: "[2025] CAIO 리더 아카데미 IN 서울 3기",
    status: "done",
    galleries: [
      asset("cohort-seoul-3-activity-1.jpg"),
      asset("cohort-seoul-3-activity-2.jpg"),
      asset("cohort-seoul-3-activity-3.jpg"),
      asset("cohort-seoul-3-activity-4.jpg"),
    ],
    speakers: [
      { name: "LG AI연구원 임우형 상무", lecture: "인공지능 활용 사례 및 기술 협력을 통한 사업화 전략", bg: asset("speaker-lim-uhyeong.png") },
      { name: "연세대학교 미래캠퍼스 AI융합과학원 이주석 교수", lecture: "데이터가 주도하는 디지털 혁신과 생성형 AI의 활용", bg: asset("speaker-lee-juseok.png") },
      { name: "구글 정명훈 파트너", lecture: "AI 도구 도입 시 조직 전환: 변화관리와 인재 전략", bg: asset("speaker-jeong-myeonghun.png") },
      { name: "네이버클라우드 김필수 리더", lecture: "생성형 AI를 통한 AI Agent와 적용 사례", bg: asset("speaker-kim-pilsu.png") },
      { name: "마음AI 최홍섭 대표", lecture: "Next ChatGPT, Physical AI 시대를 대비하라", bg: asset("speaker-choi-hongseop.png") },
      { name: "한양대학교 한재권 교수", lecture: "로봇과 함께 살아갈 세상", bg: asset("speaker-han-jaegwon.png") },
      { name: "에이아이플랫폼 신형섭 대표", lecture: "AI 기반 의료마이데이터: 미래 의료 혁신을 이끄는 핵심 기술", bg: asset("speaker-shin-hyeongseop.png") },
      { name: "울산과학기술원 이세돌 교수", lecture: "AI와 인간의 상호작용: 감성과 창의성의 중요성", bg: asset("speaker-lee-sedol.png") },
    ],
  },
  {
    id: "gwangju1",
    city: "광주",
    cityColor: "#0891b2",
    period: "광주 1기",
    date: "2025",
    fullName: "[2025] CAIO IN 광주 1기",
    status: "done",
    galleries: [
      asset("cohort-gwangju-1-activity-1.jpg"),
      asset("cohort-gwangju-1-activity-2.jpg"),
      asset("cohort-gwangju-1-activity-3.jpg"),
      asset("cohort-gwangju-1-activity-4.jpg"),
    ],
    speakers: [
      { name: "전남대학교 김경백 교수", lecture: "AI 일상화를 위한 대전환 전략", bg: asset("speaker-kim-gyeongbaek.png") },
      { name: "에이아이플랫폼 신형섭 대표", lecture: "AI 기반 의료마이데이터: 미래 의료 혁신을 이끄는 핵심 기술", bg: asset("speaker-shin-hyeongseop.png") },
      { name: "네이버클라우드 김필수 리더", lecture: "생성형 AI를 통한 AI Agent와 적용 사례", bg: asset("speaker-kim-pilsu.png") },
      { name: "울산과학기술원 이세돌 교수", lecture: "AI와 인간의 상호작용: 감성과 창의성의 중요성", bg: asset("speaker-lee-sedol.png") },
      { name: "한국과학기술원 김갑진 교수", lecture: "양자컴퓨팅 원리", bg: asset("speaker-kim-gapjin.png") },
      { name: "마음AI 최홍섭 대표", lecture: "Next ChatGPT, Physical AI 시대를 대비하라", bg: asset("speaker-choi-hongseop.png") },
      { name: "연세대학교 AI융합과학원 이주석 교수", lecture: "데이터가 주도하는 디지털 혁신과 생성형 AI의 활용", bg: asset("speaker-lee-juseok.png") },
      { name: "구글 정명훈 파트너", lecture: "AI 도구 도입 시 조직 전환: 변화관리와 인재 전략", bg: asset("speaker-jeong-myeonghun.png") },
      { name: "KAIST 김대식 교수", lecture: "AGI 시장지배력의 시대", bg: asset("speaker-kim-daesik.png") },
      { name: "전남대학교 양형정 교수", lecture: "AI 전환기의 리더십과 책임: 전략, 기술, 사람", bg: asset("speaker-yang-hyeongjeong.png") },
    ],
  },
] as const;

const statusMap = {
  done: { cls: "hs-done", label: "수료 완료" },
  open: { cls: "hs-open", label: "모집 예정" },
  new: { cls: "hs-new", label: "신규 개설" },
} as const;

const reviews = [
  {
    stars: "★★★★★",
    text: "솔직히 큰 기대는 안 하고 들어왔습니다.\n그런데 생각보다 실무적인 내용이 많아서 놀랐고, 바로 적용해볼 수 있는 것들이 꽤 있었습니다.\n특히 비슷한 고민을 하는 분들을 만난 게 도움이 됐습니다.",
    author: "서울 1기 원우회원",
    avatar: asset("review-avatar-01.png"),
  },
  {
    stars: "★★★★★",
    text: "강의 내용도 좋았지만, 사람을 얻어가는 과정이었습니다.\n각자 다른 산업에 있지만 비슷한 고민을 하고 있다는 걸 알게 됐고, 끝난 뒤에도 자연스럽게 이어지는 관계가 가장 큰 자산이라고 생각합니다.",
    author: "광주 1기 원우회원",
    avatar: asset("review-avatar-02.png"),
  },
  {
    stars: "★★★★★",
    text: "경영진 입장에서 AI를 어떻게 바라봐야 하는지, 어디서부터 시작해야 하는지 정리되는 과정이었습니다. 막연했던 것들이 구체화되었습니다.",
    author: "서울 3기 원우회원",
    avatar: asset("review-avatar-03.png"),
  },
] as const;

const curriculum = [
  { week: "CHAPTER 01", title: "경영진 의사결정 - 왜 AI인가?", desc: "AI 기본법 시행 배경과 C레벨이 알아야 할 AI 전략의 핵심" },
  { week: "CHAPTER 02", title: "데이터·거버넌스 - 전략 실행의 기반", desc: "데이터 인프라, AI 거버넌스 체계 구축과 법적 의무 이해" },
  { week: "CHAPTER 03", title: "Agentic AI 실행 - 자율 AI 도입", desc: "AI 에이전트 개념부터 조직 내 실전 도입 방법론까지" },
  { week: "CHAPTER 04", title: "조직 재설계 - AI 시대의 인재 전략", desc: "AI 친화적 조직 구조와 직무 재정의, 변화 관리 전략" },
  { week: "CHAPTER 05", title: "산업 적용 - 현장 성과 창출", desc: "내 산업에 AI를 접목하는 실전 워크숍 및 사례 발표" },
] as const;

const stripImages = [
  asset("gallery-strip-01.jpg"),
  asset("gallery-strip-02.png"),
  asset("gallery-strip-03.png"),
  asset("gallery-strip-04.jpg"),
  asset("gallery-strip-05.png"),
  asset("gallery-strip-06.png"),
];

const targetAudience = [
  { num: "01", name: "대표이사 · CEO", desc: "AI 시대의 경영 방향성과 전략적 의사결정 기준을 재정립하고자 하는 분", bg: asset("audience-ceo.png") },
  { num: "02", name: "임원 · C-레벨", desc: "CFO · COO · CMO 등 각 기능 조직의 AI 전략 실행을 책임지는 분", bg: asset("audience-c-level.png") },
  { num: "03", name: "CDO · CIO · AI 총괄", desc: "조직 내 AI 도입과 거버넌스 체계 수립을 주도하는 리더", bg: asset("audience-cdo-cio.png") },
  { num: "04", name: "AI 솔루션 공급기업", desc: "AI 기반 제품·서비스로 산업 고객을 확장하려는 기업 대표", bg: asset("audience-solution-provider.png") },
] as const;

const instructors = [
  { name: "김갑진", role: "KAIST 교수", bg: asset("speaker-kim-gapjin.png") },
  { name: "이세돌", role: "UNIST 교수", bg: asset("speaker-lee-sedol.png") },
  { name: "한재권", role: "한양대 교수", bg: asset("speaker-han-jaegwon.png") },
] as const;

const pressItems = [
  { media: "CAIO", title: "한국인공지능협회, 2026년 CAIO 과정 전국 확대 운영", date: "2026. 05", bg: asset("press-caio-cover.jpg"), url: "" },
  { media: "서울신문", title: "AI는 선택 아닌 필수…전남대 CAIO 과정, 지역 혁신 플랫폼 될 것", date: "2025. 08", bg: "https://img.seoul.co.kr/img/upload/2026/03/10/SSC_20260310091344_O2.jpg.webp", url: "https://www.seoul.co.kr/news/society/2025/08/18/20250818500056" },
  { media: "IT조선", title: "인공지능협회, CAIO 과정 신설… 이세돌 등 강사 참여", date: "2025. 07", bg: "https://cdn.it.chosun.com/news/photo/202507/2023092144655_421583_1710.png", url: "https://it.chosun.com/news/articleView.html?idxno=2023092144655" },
] as const;

const locations = [
  { city: "서울", sub: "한국인공지능협회 × PwC", cohort: "1~4기", bg: asset("location-seoul.png"), to: "/seoul" },
  { city: "광주", sub: "지역 특화 AI 최고위과정", cohort: "1~2기", bg: asset("location-gwangju.png"), to: "/gwangju" },
  { city: "천안", sub: "충청권 AX 얼라이언스", cohort: "1기", bg: asset("location-cheonan.png"), to: "/cheonan" },
] as const;

const partnerLogos = [
  { src: logoKoraia, alt: "한국인공지능협회" },
  { src: logoPwc, alt: "PwC Korea" },
  { src: logoJnu, alt: "전남대학교" },
  { src: logoChungnam, alt: "충청남도" },
  { src: logoCheonan, alt: "천안시" },
  { src: logoCtp, alt: "충남테크노파크" },
  { src: logoKicox, alt: "한국산업단지공단" },
] as const;

function HomePageContent() {
  const [openHistory, setOpenHistory] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const allStripImages = [...stripImages, ...stripImages, ...stripImages];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  const visibleReviews = isMobile
    ? [reviews[reviewIdx]]
    : [reviews[reviewIdx], reviews[(reviewIdx + 1) % reviews.length]];

  const showPrevReview = () => {
    setReviewIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const showNextReview = () => {
    setReviewIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page-shell">
      <section className="vision-section fluid">
        <div className="vision-bg" />
        <div className="vision-blur" />
        <div className="vision-content">
          <div className="vision-tag">AI LEADERSHIP · 2023-2026</div>
          <h1 className="vision-h1">
            경영진이 직접
            <br />
            <em>AI 전략을 설계하는</em>
            <br />
            유일한 과정
          </h1>
          <p className="vision-sub">
            단순 이론이 아닌, 실전 전략 수립부터 조직 실행까지.
            <br />
            C레벨을 위한 최고위과정 CAIO.
          </p>
        </div>
      </section>

      <div className="strip-section fluid">
        <div className="strip-track">
          {allStripImages.map((src, index) => (
            <div className="strip-img" key={`${src}-${index}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        <div className="strip-overlay">
          <span>왜 지금 시작해야 하나요?</span>
        </div>
      </div>

      <div className="quote-section fluid">
        <p>
          AI는 이미 “도입할까 말까”의 단계가 아니라,
          <br />
          “누가 전략을 만들고 누가 실행을 밀어붙일 것인가”인
          <br />
          AI 네이티브(AI-native) 단계로 넘어갔습니다.
        </p>
      </div>

      <section id="about" className="reason-section fluid">
        <div className="reason-top">
          <div>
            <p className="reason-label">REASON</p>
            <h2 className="reason-h2">
              기술이 아닌 리더십의 부재,
              <br />
              바로 CAIO가 필요한 이유입니다.
            </h2>
          </div>
          <p className="reason-desc">
            수많은 기업이 AI 도입에 실패하는 진짜 이유는 비용이나 기술력 부족이 아닙니다.
            <br />
            <br />
            어떻게 도입하고 어디에 쓸지 결정할 &apos;전략&apos;과 &apos;실행 체계&apos;가 없기 때문입니다.
          </p>
        </div>
        <div className="stats-row">
          {[
            { num: "84.2%", label: "압도적인 필요성 인식", sub: "AI 도입의 필요성을 절감" },
            { num: "17.9%", label: "저조한 실제 실행률", sub: "실제로 AI를 활용하는 비율은 참담" },
            { num: "25.5%", label: "파일럿의 함정", sub: "성과를 내는 곳은 10곳 중 2곳 남짓" },
          ].map((stat) => (
            <div className="stat-cell" key={stat.label}>
              <div className="stat-cell-num">{stat.num}</div>
              <div className="stat-cell-label">{stat.label}</div>
              <div className="stat-cell-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="target-section fluid">
        <div className="target-bg" />
        <div className="target-overlay" />
        <div className="wrap">
          <p className="sec-label-b">WHO · 대상자</p>
          <h2>
            CAIO는 바로
            <br />
            여러분들을 위한 과정입니다
          </h2>
        </div>
        <div className="target-grid">
          {targetAudience.map((target) => (
            <div className="target-card" key={target.num}>
              <div className="target-card-bg" style={{ backgroundImage: `url("${target.bg}")` }} />
              <div className="target-card-overlay" />
              <div className="target-num">{target.num}</div>
              <div className="target-card-content">
                <div className="target-name">{target.name}</div>
                <div className="target-desc">{target.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-section fluid">
        <div className="wrap">
          <p className="sec-label">INSTRUCTOR</p>
          <div className="dark-split">
            <h2 className="dark-h2">
              그래서 준비했습니다.
              <br />
            </h2>
            <p className="dark-desc">
              바쁜 경영진에게
              <br />
              원론적인 기술 강의는 필요 없습니다.
            </p>
          </div>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(231,231,232,1)", marginBottom: 32, letterSpacing: "-.15px" }}>
            경영진의 시간은 가장 비싸기에, 헤맬 필요 없는 가장 완벽한 지름길을 설계했습니다.
          </p>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(231,231,232,1)", marginBottom: 32, letterSpacing: "-.15px" }}>
            &quot;AI 전략은 누가 세우고, 실행은 어떻게 하는가?&quot;
          </p>
          <p style={{ fontSize: 18, fontWeight: 500, color: "rgba(231,231,232,1)", marginBottom: 32, letterSpacing: "-.15px" }}>
            그 질문에 대한 답을 철저한 현장 중심의 커리큘럼과 최고의 연사진 라인업으로 증명합니다.
          </p>
          <div className="dark-divider" />
          <div className="instructor-grid">
            {instructors.map((instructor) => (
              <div className="instructor-card" key={instructor.name}>
                <div className="instructor-card-bg" style={{ backgroundImage: `url("${instructor.bg}")` }} />
                <div className="instructor-card-overlay" />
                <div className="instructor-info">
                  <div className="instructor-name">{instructor.name}</div>
                  <div className="instructor-role">{instructor.role}</div>
                </div>
              </div>
            ))}
            <p style={{ fontSize: 12, fontWeight: 500, color: "rgb(166 166 198)" }}>※ 매 기수별로 연사진은 달라질 수 있습니다.</p>
          </div>
        </div>
      </section>

      <section className="keywords-section fluid">
        <div className="keywords-label">
          KEYWORDS
          <span>CAIO 과정에서 다루는 핵심 키워드</span>
        </div>
        <div className="keywords-row-wrap">
          <div className="keywords-row row-1">
            {Array.from({ length: 2 }).flatMap((_, loop) =>
              [
                { t: "AI 전략", s: "fill" },
                { t: "Generative AI", s: "outline" },
                { t: "LLM", s: "accent" },
                { t: "Data Governance", s: "outline" },
                { t: "AI 거버넌스", s: "fill" },
                { t: "Multi-Agent", s: "outline" },
                { t: "RAG", s: "accent" },
                { t: "디지털 전환", s: "outline" },
                { t: "AI 윤리", s: "fill" },
                { t: "Prompt Engineering", s: "outline" },
              ].map((keyword, index) => (
                <span key={`row-1-${loop}-${index}`}>
                  <span className={`keyword-item ${keyword.s}`}>{keyword.t}</span>
                  <span className="keyword-star">✦</span>
                </span>
              )),
            )}
          </div>
          <div className="keywords-row row-2">
            {Array.from({ length: 2 }).flatMap((_, loop) =>
              [
                { t: "MLOps", s: "outline" },
                { t: "AI 기본법", s: "fill" },
                { t: "Vertical AI", s: "outline" },
                { t: "Fine-tuning", s: "accent" },
                { t: "Agentic Workflow", s: "outline" },
                { t: "AI ROI", s: "fill" },
                { t: "Vector Database", s: "outline" },
                { t: "경영 의사결정", s: "accent" },
                { t: "AI Transformation", s: "outline" },
                { t: "Enterprise AI", s: "fill" },
              ].map((keyword, index) => (
                <span key={`row-2-${loop}-${index}`}>
                  <span className={`keyword-item ${keyword.s}`}>{keyword.t}</span>
                  <span className="keyword-star">✦</span>
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="dark-section fluid" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <p className="sec-label" style={{ paddingTop: 80, display: "block" }}>
            CURRICULUM
          </p>
          <div className="dark-split">
            <h2 className="dark-h2">
              편안하게,
              <br />
              그리고 깊이 있게.
            </h2>
            <p className="dark-desc">
              가장 실용적이고
              <br />
              압도적인 커리큘럼을 준비했습니다.
            </p>
          </div>

          <div className="cur-table">
            {curriculum.map((item) => (
              <div className="cur-row" key={item.week}>
                <div className="cur-week">{item.week}</div>
                <div className="cur-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="history-section fluid">
        <div className="wrap">
          <p className="sec-label-b">HISTORY</p>
          <h2>
            지금까지의 CAIO,
            <br />
            기수별 운영 연혁
          </h2>
        </div>
        <div className="history-list" style={{ maxWidth: "var(--W)", margin: "0 auto" }}>
          {historyData.map((history) => {
            const isOpen = openHistory === history.id;
            const status = statusMap[history.status];

            return (
              <div className="history-item" key={history.id}>
                <button className="history-toggle" onClick={() => setOpenHistory(isOpen ? null : history.id)}>
                  <div className="history-toggle-left">
                    <span className="history-badge-city" style={{ background: `${history.cityColor}22`, color: history.cityColor }}>
                      {history.city}
                    </span>
                    <span className="history-toggle-title">{history.period}</span>
                    <span className="history-toggle-meta">— {history.date}</span>
                  </div>
                  <span className={`history-toggle-status ${status.cls}`}>{status.label}</span>
                  <span className={`history-chevron ${isOpen ? "open" : ""}`}>▾</span>
                </button>
                <div className={`history-body ${isOpen ? "open" : ""}`}>
                  <div className="history-body-inner">
                    <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 24, letterSpacing: "-.01em" }}>{history.fullName}</p>
                    <div className="history-gallery">
                      {history.galleries.map((src, index) => (
                        <div className="history-gallery-img" key={`${history.id}-gallery-${index}`}>
                          <img src={src} alt="" />
                        </div>
                      ))}
                    </div>
                    <p className="history-speakers-label">SPEAKERS</p>
                    <div className="history-speakers">
                      {history.speakers.map((speaker) => (
                        <div className="speaker-card" key={`${history.id}-${speaker.name}`}>
                          <div className="speaker-card-bg" style={{ backgroundImage: `url("${speaker.bg}")` }} />
                          <div className="speaker-card-overlay" />
                          <div className="speaker-info">
                            <div className="speaker-name">{speaker.name}</div>
                            <div className="speaker-lecture">{speaker.lecture}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cert-section fluid">
        <div className="cert-bg" />
        <div className="cert-overlay" />
        <div className="cert-inner">
          <div className="cert-card">
            <div className="cert-photo">
              <div className="cert-photo-img" style={{ backgroundImage: `url("${asset("certificate-membership.png")}")` }} />
            </div>
            <div className="cert-card-body">
              <h3>CAIO 수료 및 멤버십</h3>
              <p>
                출석률 80% 이상 달성 시,
                <br />
                최고인공지능경영자 자격증이 발급됩니다.
              </p>
            </div>
          </div>
          <div className="cert-text">
            <p className="cert-eyebrow">CERTIFICATE & MEMBERSHIP · CAIO 수료</p>
            <h4>끝까지 참여하는 이유는 명확합니다.</h4>
            <p>
              단순한 강의가 아닌,
              <br />
              경영진으로서의 AI 전략 역량을 인증받는 과정입니다.
              <br />
              <br />
              수료 후에는 협회의 든든한 지원과
              <br />
              국내 최고 수준의 AI C레벨 알럼나이(원우) 네트워크가
              <br />
              평생의 자산으로 주어집니다.
              <br />
              <br />
              본 과정은 단순한 지식 습득을 넘어,
              <br />
              실전 AI 역량을 갖춘 리더임을 증명하는 과정입니다.
            </p>
          </div>
        </div>

        <div className="reviews-label">후기</div>
        <div className="reviews-track-wrap">
          <div className="reviews-nav">
            <button className="rev-btn" onClick={showPrevReview} aria-label="이전 후기">
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button className="rev-btn" onClick={showNextReview} aria-label="다음 후기">
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
          <div className="reviews-track">
            {visibleReviews.map((review) => (
              <div className="review-card" key={`${reviewIdx}-${review.author}`}>
                <div className="review-avatar" style={{ backgroundImage: `url("${review.avatar}")` }} />
                <div className="review-stars">{review.stars}</div>
                <p className="review-text">
                  {review.text.split("\n").map((line, index) => (
                    <span key={`${review.author}-${index}`}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="review-author">{review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="press-section fluid">
        <p className="press-label">IN THE NEWS · 언론 보도</p>
        <div className="press-grid">
          {pressItems.map((press) => (
            <a
              className="press-card"
              key={press.title}
              href={press.url || undefined}
              target={press.url ? "_blank" : undefined}
              rel={press.url ? "noopener noreferrer" : undefined}
              style={{ cursor: press.url ? "pointer" : "default" }}
            >
              <div className="press-card-bg" style={{ backgroundImage: `url("${press.bg}")` }} />
              <div className="press-card-overlay" />
              <div className="press-media">{press.media}</div>
              <div className="press-card-arrow">↗</div>
              <div className="press-card-content">
                <div className="press-title">{press.title}</div>
                <div className="press-date">{press.date}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="process-section fluid">
        <div className="process-bg" />
        <div className="process-inner">
          <p className="process-label">PROCESS</p>
          <h2 className="process-h2">
            신청부터 수료까지,
            <br />
            5단계 프로세스
          </h2>
          <div className="process-steps">
            {[
              { n: "01", t: "온라인 신청", d: "신청서 및 재직증명서 등 서류 제출" },
              { n: "02", t: "서류 검토", d: "운영사무국 서류 심사 진행" },
              { n: "03", t: "안내 절차", d: "개별 통지 및 수강료 납부 안내" },
              { n: "04", t: "입과 · 수강", d: "정규 커리큘럼 시작" },
              { n: "05", t: "수료 · 자격", d: "출석률 80% 이상 시 CAIO 자격 부여" },
            ].map((step) => (
              <div className="process-step" key={step.n}>
                <div className="process-num">{step.n}</div>
                <h4>{step.t}</h4>
                <p>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section fluid">
        <div className="wrap">
          <p className="sec-label-b">FAQ</p>
          <h2>자주 묻는 질문</h2>
        </div>
        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div className="faq-item" key={faq.q}>
                <button className="faq-q" onClick={() => setOpenFaq(isOpen ? null : index)}>
                  <div className="faq-q-left">
                    <span className="faq-q-badge">Q.</span>
                    <span className="faq-q-text">{faq.q}</span>
                  </div>
                  <div className={`faq-icon ${isOpen ? "open" : ""}`}>+</div>
                </button>
                <div className={`faq-a ${isOpen ? "open" : ""}`}>
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="city-cards-section fluid">
        <div className="wrap">
          <p className="sec-label-w">LOCATIONS</p>
          <h2>
            전국 3개 도시에서
            <br />
            만날 수 있습니다!
          </h2>
        </div>
        <div className="city-cards-grid">
          {locations.map((location) => (
            <Link className="city-photo-card" to={location.to} key={location.city}>
              <div className="city-photo-card-bg" style={{ backgroundImage: `url("${location.bg}")` }} />
              <div className="city-photo-card-overlay" />
              <div className="city-photo-card-content">
                <div className="city-photo-card-tag">{location.cohort} 운영</div>
                <div className="city-photo-card-name">{location.city}</div>
                <div className="city-photo-card-sub">{location.sub}</div>
              </div>
              <div className="city-photo-card-arrow">↗</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="impact-cta fluid">
        <div className="impact-cta-bg" />
        <div className="impact-cta-glow" />
        <div className="impact-cta-inner">
          <div className="impact-cta-text">
            <p className="impact-cta-eyebrow">APPLY NOW · 2026</p>
            <h2 className="impact-cta-h2">
              AI 전략의 주체가 될
              <br />
              준비가 되셨나요?
            </h2>
            <p className="impact-cta-sub">가장 먼저 준비한 리더가 변화를 주도합니다.</p>
          </div>
          <div className="impact-cta-btns">
            <Link className="impact-btn-primary" to="/seoul">
              서울 4기
            </Link>
            <Link className="impact-btn-outline" to="/cheonan">
              천안 1기
            </Link>
            <Link className="impact-btn-outline" to="/gwangju">
              광주 2기
            </Link>
          </div>
        </div>
      </section>

      <div className="partner-section">
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, groupIndex) =>
              partnerLogos.map((partner, partnerIndex) => (
                <div className="partner-item" key={`${groupIndex}-${partnerIndex}`}>
                  <img className="partner-logo" src={partner.src} alt={partner.alt} />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: "open" });
    shadowRoot.replaceChildren();

    const preconnectGoogle = document.createElement("link");
    preconnectGoogle.rel = "preconnect";
    preconnectGoogle.href = "https://fonts.googleapis.com";

    const preconnectGstatic = document.createElement("link");
    preconnectGstatic.rel = "preconnect";
    preconnectGstatic.href = "https://fonts.gstatic.com";
    preconnectGstatic.crossOrigin = "anonymous";

    const notoSansKr = document.createElement("link");
    notoSansKr.rel = "stylesheet";
    notoSansKr.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;900&display=swap";

    const pretendard = document.createElement("link");
    pretendard.rel = "stylesheet";
    pretendard.href = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css";

    const styleTag = document.createElement("style");
    styleTag.textContent = HOME_PAGE_STYLES;

    const mountPoint = document.createElement("div");
    shadowRoot.append(preconnectGoogle, preconnectGstatic, notoSansKr, pretendard, styleTag, mountPoint);
    setPortalTarget(mountPoint);

    return () => {
      setPortalTarget(null);
      shadowRoot.replaceChildren();
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ height: "64px" }} className="md:hidden" />
      <div style={{ height: "106px" }} className="hidden md:block" />
      <div ref={hostRef} style={{ display: "block", minHeight: "100vh" }} />
      {portalTarget ? createPortal(<HomePageContent />, portalTarget) : null}
      <Footer />
    </>
  );
}
