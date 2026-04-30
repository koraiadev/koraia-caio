import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">
      <Header />

      <main className="flex min-h-[calc(100vh-320px)] items-center justify-center px-5 pt-24 text-center sm:px-8 md:pt-32">
        <div className="w-full max-w-[720px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/46">
            404 PAGE NOT FOUND
          </p>
          <h1 className="text-[36px] font-bold leading-tight text-white sm:text-[48px]">
            요청하신 페이지를 찾을 수 없습니다.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/72 sm:text-base">
            해당 주소는 변경되었거나 삭제된 페이지일 수 있습니다.
          </p>

          <div className="mt-20 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0b0f19] transition-transform duration-200 hover:-translate-y-0.5"
            >
              홈으로 이동
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
