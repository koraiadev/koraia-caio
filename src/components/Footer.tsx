const topLinks = [
  { label: "한국인공지능협회", href: "https://koraia.org/" },
  { label: "한국인공지능자격센터", href: "https://lic.koraia.org/" },
  { label: "한국인공지능인증센터", href: "https://cc.koraia.org/" },
];

type FooterProps = {
  variant?: "dark" | "light";
};

export default function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";
  const topSectionClassName = isLight ? "bg-white" : "bg-black";
  const topInnerClassName = isLight
    ? "mx-auto flex max-w-[980px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-2.5 pt-10 text-[12px] font-semibold text-[#162033] sm:px-8 lg:px-0"
    : "mx-auto flex max-w-[980px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-2.5 pt-10 text-[12px] font-semibold text-white sm:px-8 lg:px-0";
  const separatorClassName = isLight ? "text-[#162033]/24" : "text-white/40";
  const topLinkClassName = isLight ? "footer-link !text-[#162033]/88 hover:!text-[#162033]" : "footer-link text-white/92";
  const bottomSectionClassName = isLight ? "bg-white text-[#162033]" : "bg-black text-white";
  const headingClassName = isLight ? "text-sm font-semibold tracking-[-0.01em] text-[#162033]" : "text-sm font-semibold tracking-[-0.01em] text-white";
  const bodyTextClassName = isLight ? "mt-3 text-xs leading-7 text-[#162033]/78" : "mt-3 text-xs leading-7 text-white/80";
  const dividerClassName = isLight ? "mt-4 border-t border-[#162033]/12 pt-4" : "mt-4 border-t border-white/18 pt-4";
  const policyLinkClassName = isLight
    ? "footer-link font-medium !text-[#162033]/68 hover:!text-[#162033]"
    : "footer-link font-medium text-white/70";
  const privacyLinkClassName = isLight
    ? "footer-link font-semibold !text-[#162033] underline underline-offset-2 hover:!text-[#162033]"
    : "footer-link font-semibold text-white underline underline-offset-2";
  const businessInfoLinkClassName = isLight
    ? "footer-link underline underline-offset-2 !text-[#162033]/78 hover:!text-[#162033]"
    : "footer-link underline underline-offset-2";
  const copyrightClassName = isLight ? "mt-4 text-xs leading-7 text-[#162033]/56" : "mt-4 text-xs leading-7 text-white/60";

  return (
    <footer className="mt-0">
      <div className={topSectionClassName}>
        <div className={topInnerClassName}>
          {topLinks.map((link, index) => (
            <div key={link.label} className="flex items-center gap-4">
              {index > 0 && <span className={separatorClassName}>|</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={topLinkClassName}
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className={bottomSectionClassName}>
        <div className="mx-auto max-w-[980px] px-6 py-10 sm:px-8 lg:px-0">
          <h3 className={headingClassName}>
            사단법인 한국인공지능협회
          </h3>

          <div className={bodyTextClassName}>
            <p>
              회장: 김현철 · 개인정보책임관리자: 나상원 · 사업자번호: 436-82-00239 ·{" "}
              <a
                href="https://bizno.net/?area=&query=+436-82-00239"
                target="_blank"
                rel="noreferrer"
                className={businessInfoLinkClassName}
              >
                사업자정보확인
              </a>
            </p>
            <p>서울특별시 마포구 백범로 88, 경총빌딩 3층</p>
            <p>Tel. 02-713-4800 · Email. info@koraia.org · 주중 9시~18시 (점심시간 12~13시 / 주말 및 공휴일 제외)</p>
          </div>

          <div className={dividerClassName}>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <a href="#" className={policyLinkClassName}>
                이용약관
              </a>
              <span className={separatorClassName}>|</span>
              <a href="#" className={privacyLinkClassName}>
                개인정보처리방침
              </a>
            </div>

            <p className={copyrightClassName}>
                © BY KOREA ARTIFICIAL INTELLIGENCE ASSOCIATION, ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
