import Header from "../components/Header";
import Footer from "../components/Footer";
import caioImage from "../assets/img/bg-caio-01.jpg";
import perksImage from "../assets/img/bg-caio-02.jpg";
import ctaImage from "../assets/img/bg-caio-03.jpg";

export default function SeoulDetailPage() {
  return (
    <div>
      <Header />

      {/* 01 — Hero */}
      <section className="pt-[101px] bg-white">
        <div className="max-w-[1080px] mx-auto px-8 pt-16 pb-0 text-center">
          <p className="text-sm text-gray-400 tracking-[0.25em] uppercase mb-10">
            Opened Course
          </p>
          <h1 className="text-[70px] font-bold leading-[1.1] text-black mb-8">
            CAIO IN<br />
            <span className="text-[#4D6BFF]">GWANGJU</span> 2기
          </h1>
          <p className="text-lg text-black mb-16">
            AI 시대, 의사결정의 기준을 다시 설계합니다.
          </p>
          <button className="bg-[#111111] text-white text-sm font-semibold px-10 py-4 rounded-lg">
            수강 신청하기
          </button>

          <div className="mt-20 mb-32 max-w-[780px] mx-auto">
            <div className="grid grid-cols-2 text-left gap-4">
              <div className="flex gap-6 py-7 border-y border-gray-400">
                <span className="text-sm font-medium text-[#4D6BFF] min-w-[68px] leading-snug shrink-0">
                  일시 및<br />장소
                </span>
                <div className="text-sm text-gray-800 leading-relaxed text-left">
                  <p>2026년 4월 14일 ~ 2026년 7월 14일</p>
                  <p>매주 화요일 18:30 ~ 20:30</p>
                  <p>빛고을창업스테이션 코워킹스페이스 외</p>
                </div>
              </div>
              <div className="flex gap-6 py-7 border-y border-gray-400  pl-10">
                <span className="text-sm font-medium text-[#4D6BFF] shrink-0">문의</span>
                <span className="text-sm text-gray-800">062-376-8840</span>
              </div>
              <div className="flex gap-6 py-7">
                <span className="text-sm font-medium text-[#4D6BFF] min-w-[68px] shrink-0">신청 마감</span>
                <span className="text-sm text-gray-800">2026년 4월 24일(금)까지</span>
              </div>
              <div className="flex gap-6 py-7 pl-10">
                <span className="text-sm font-medium text-[#4D6BFF] shrink-0">참가비</span>
                <span className="text-sm text-gray-800 font-semibold">380만원 (VAT포함)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — 무엇이 이들을 움직였을까요? */}
      <section className="relative h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${caioImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.82)_0%,rgba(7,13,32,0.58)_35%,rgba(10,18,44,0.5)_60%,rgba(7,11,24,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,107,255,0.16),transparent_38%)]" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
          <h2 className="text-[48px] font-bold text-white leading-tight mb-5">
            무엇이 이들을 움직였을까요?
          </h2>
          <p className="mt-12 text-white/90 text-xl font-semibold leading-relaxed">
            AI는 이미 업무와 의사결정의 기준을 바꾸고 있습니다.<br />
            그래서 이들은 실행 기준을 세우고, 방향을 주도하기 시작했습니다.
          </p>
        </div>
      </section>

      {/* 03 — REASON */}
      <section className="bg-white py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <p className="text-sm font-semibold text-[#4D6BFF] tracking-[0.15em] uppercase mb-6">
            Reason
          </p>
          <div className="flex items-center mb-16">
            <h2 className="w-1/2 text-[42px] font-bold text-black leading-tight">
              CAIO 최고위과정을<br />선택해야 하는 이유.
            </h2>
            <p className="w-1/2 text-base text-black leading-relaxed pt-2">
              인재 부족, 전략 부재, 실행 지연.<br />
              이 문제는 개인이 아닌 사회 구조의 문제입니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { num: "01", title: "CAIO 자격 부여", desc: "한국인공지능 자격센터가 운영하는 최고인공지능경영자(CAIO) 자격 수여" },
              { num: "02", title: "CAIO 포럼 초대권", desc: "26년 CAIO 포럼 초대권 증정" },
              { num: "03", title: "수료증 수여", desc: "협회장 명의 이수증 수여" },
              { num: "04", title: "홍보 & 마케팅 지원", desc: "CEO AI 최고위 과정의 홈페이지 광고 요청 시 일부 지원" },
              { num: "05", title: "세미나 및 포럼 참가", desc: "본 대학 및 부속 연구소들이 주최하는 세미나 및 포럼 우선 참가" },
              { num: "06", title: "네트워크 활동", desc: "본 과정 이수자들 간의 상호협동 동창회 구성" },
            ].map((card) => (
              <div key={card.num} className="bg-gray-50 rounded-2xl p-7">
                <p className="text-sm font-semibold text-[#4D6BFF] mb-4">혜택 {card.num}</p>
                <h3 className="text-xl font-bold text-black mb-3">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Special Point */}
      <section>
        <div className="bg-gradient-to-b from-[#3941FF] to-[#AFC1FF] pt-16 pb-28 text-center">
          <span className="inline-block bg-transparent border border-white text-white text-sm font-semibold px-5 py-2 rounded-full mb-7">
            Special Point
          </span>
          <h2 className="text-[36px] font-bold text-white">
            네트워킹으로 완성되는 경험
          </h2>
        </div>
        <div className="bg-[#F5F6FA] pt-[120px] pb-20">
          <div className="max-w-[1080px] mx-auto px-8 flex items-start gap-16 -mt-10">
            <div className="flex-1 pt-10">
              <h3 className="text-[28px] font-bold text-gray-800 mb-2">전 기수 평균 출석률</h3>
              <p className="text-[46px] font-bold text-[#4D6BFF] leading-none mb-10">98.8%</p>
              <p className="text-lg text-gray-700 mb-10">끝까지 참여하는 이유는 명확합니다.</p>
              <p className="text-base text-gray-400 leading-relaxed">
                출석률 80% 이상일 경우<br />
                한국인공지능협회 협회장 명의의 이수증이 수여됩니다.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center pt-10">
              <div className="bg-gray-300 w-[380px] h-[280px] rounded-xl" />
              <button className="mt-4 bg-[#4D6BFF] text-white text-sm font-semibold px-8 py-3 rounded-lg w-full">
                포스터 다운로드
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Instructor */}
      <section className="bg-[#444dde] bg-gradient-to-b from-[#F5F6FA] to-[#0F1035] py-24">
        <div className="max-w-[1080px] mx-auto px-8">
          <p className="text-xs text-gray-800 tracking-[0.25em] uppercase mb-6">Instructor</p>
          <div className="flex items-center mb-16">
            <h2 className="w-1/2 text-[42px] font-bold text-gray-800 leading-tight">
              이번<br/>커리큘럼은요
            </h2>
            <p className="w-1/2 text-lg text-gray-800 leading-relaxed max-w-xs pt-3 text-left">
              전략부터 실행까지,<br />
              현장에서 바로 쓰는 AI를 다룹니다.
            </p>
          </div>

          <div className="flex gap-12 mb-20">
            <div className="flex-1">
              <div className="bg-[#1C1E4A] rounded-2xl p-8 mb-8">
                <p className="text-xs text-gray-500 mb-4">이번 강의 소개</p>
                <p className="text-[22px] font-bold text-white leading-snug">
                  "AI의 기능성 탐색,<br />나에게 필요한 도구 기획하기"
                </p>
              </div>
              <h3 className="text-[42px] font-bold text-white mb-2">한서우</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Codes Ambassador @OpenAI<br />
                국내 AI기술 & 거버넌스 지원위원
              </p>
            </div>
            <div className="relative shrink-0 w-[400px]">
              <div className="bg-gray-700 w-full h-[420px] rounded-2xl" />
              <span className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                @OpenAI 공식 앰버사더
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 tracking-[0.2em] uppercase mb-6">강의할 연사</p>
          <div className="flex gap-6">
            {[
              { num: 1, name: "오병석", role: "소속 및 직책" },
              { num: 2, name: "박나연", role: "소속 및 직책" },
              { num: 3, name: "이정섭", role: "소속 및 직책" },
            ].map((person) => (
              <div key={person.name} className="flex items-center gap-4 flex-1">
                <span className="text-white/30 text-sm font-semibold">{person.num}</span>
                <div className="bg-gray-700 w-[72px] h-[72px] rounded-xl shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">{person.name}</p>
                  <p className="text-white/40 text-xs mt-1">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — PERKS */}
      <section className="relative overflow-hidden border-white/5 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${perksImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,28,0.56)_0%,rgba(10,16,41,0.46)_42%,rgba(8,12,30,0.64)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,107,255,0.12),transparent_36%)]" />
        <div className="relative z-10 max-w-[1080px] mx-auto px-8">
          <div className="mx-auto max-w-[680px]">
          <p className="text-xs text-white/70 tracking-[0.25em] uppercase mb-8 text-left">Perks</p>
          <h2 className="text-[36px] font-bold text-white/90 leading-tight mb-14 text-left">
            단순 교육을 넘어,<br />자격·네트워크·실행 기회를 함께 제공합니다.
          </h2>
          <div className="overflow-hidden bg-black/1 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-[2px]">
              {[
                { title: "CAIO 자격 부여", desc: "공식 자격으로 전문성을 증명합니다." },
                { title: "협회 프리미엄 혜택", desc: "협회 전용 리소스와 네트워크를 활용할 수 있습니다." },
                { title: "원우 네트워크", desc: "이수 이후에도 연결은 계속됩니다." },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`grid grid-cols-1 md:grid-cols-[4fr_6fr] items-center gap-8 px-3 py-8 backdrop-blur-sm ${
                    index !== 0 ? "border-t border-white/30" : ""
                  }`}
                >
                  <h3 className="bg-gradient-to-r from-[#6F7480] via-[#F5F7FA] to-[#8E949F] bg-clip-text text-[24px] font-semibold text-transparent text-center md:text-left">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/82 leading-relaxed text-center md:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 — CTA */}
      <section className="relative h-[520px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,24,0.58)_0%,rgba(8,15,35,0.42)_38%,rgba(8,14,32,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,30,68,0.16),transparent_46%)]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <h2 className="text-[38px] font-bold text-white leading-tight mb-7">
            AI 시대,<br />리더가 먼저 바뀌어야 합니다.
          </h2>
          <p className="text-white/90 text-base mb-12">
            지금 준비하지 않으면 격차는 더 벌어집니다.
          </p>
          <button className="border border-white text-white text-sm font-semibold px-10 py-3.5 rounded-lg hover:bg-white hover:text-[#0D1230] transition-colors">
            지금 신청하기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
