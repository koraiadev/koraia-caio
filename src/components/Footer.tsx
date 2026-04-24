export default function Footer() {
  return (
    <footer>
      <div className="bg-[#666666]">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3 text-sm text-white sm:px-8 lg:px-0">
          <a href="#" className="footer-link">
            한국인공지능협회
          </a>
          <span className="text-white/34">|</span>
          <a href="#" className="footer-link">
            한국인공지능자격센터
          </a>
          <span className="text-white/34">|</span>
          <a href="#" className="footer-link">
            한국인공지능인증센터
          </a>
        </div>
      </div>

      <div className="bg-[#2f2f31] py-14 text-white">
        <div className="mx-auto max-w-[1080px] px-5 sm:px-8 lg:px-0">
          <h3 className="text-[30px] font-black">사단법인 한국인공지능협회</h3>
          <p className="mt-7 text-sm leading-7 text-white/54">
            회장: 김현철 · 개인정보책임관리자: 나상현 · 사업자번호: 436-82-00239
            · 사업자정보확인
            <br />
            사무국: 서울특별시 마포구 백범로 88, 경청빌딩 3층
          </p>

          <div className="mt-8 border-t border-white/14 pt-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <a href="#" className="footer-link footer-link-strong">
                이용약관
              </a>
              <span className="text-white/34">|</span>
              <a href="#" className="footer-link footer-link-strong">
                개인정보처리방침
              </a>
            </div>
            <p className="mt-5 text-sm leading-7 text-white/42">
              전화번호 02-713-4800 · 이메일 info@koraia.org · 주중 9시~18시
              (점심시간 12시~13시 / 주말 및 공휴일 제외)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
