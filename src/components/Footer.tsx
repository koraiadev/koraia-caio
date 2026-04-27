const topLinks = [
  { label: "한국인공지능협회", href: "https://koraia.org/" },
  { label: "한국인공지능자격센터", href: "https://lic.koraia.org/" },
  { label: "한국인공지능인증센터", href: "https://cc.koraia.org/" },
];

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="bg-black">
        <div className="mx-auto flex max-w-[980px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-2.5 text-[12px] font-semibold text-white sm:px-8 lg:px-0 pt-10">
          {topLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4">
              {index > 0 && <span className="text-white/40">|</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="footer-link text-white/92"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="mx-auto max-w-[980px] px-6 py-10 sm:px-8 lg:px-0">
          <h3 className="text-sm font-semibold tracking-[-0.01em] text-white">
            사단법인 한국인공지능협회
          </h3>

          <div className="mt-3 text-xs leading-7 text-white/80">
            <p>
              회장: 김현철 · 개인정보책임관리자: 나상원 · 사업자번호: 436-82-00239 ·{" "}
              <a
                href="https://bizno.net/?area=&query=+436-82-00239"
                target="_blank"
                rel="noreferrer"
                className="footer-link underline underline-offset-2"
              >
                사업자정보확인
              </a>
            </p>
            <p>서울특별시 마포구 백범로 88, 경총빌딩 3층</p>
            <p>Tel. 02-713-4800 · Email. info@koraia.org · 주중 9시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
          </div>

          <div className="mt-4 border-t border-white/18 pt-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <a href="#" className="footer-link font-medium text-white/70">
                이용약관
              </a>
              <span className="text-white/34">|</span>
              <a href="#" className="footer-link font-semibold text-white underline underline-offset-2">
                개인정보처리방침
              </a>
            </div>

            <p className="mt-4 text-xs leading-7 text-white/60">
                © BY KOREA ARTIFICIAL INTELLIGENCE ASSOCIATION, ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
