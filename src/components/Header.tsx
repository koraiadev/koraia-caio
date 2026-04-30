import { useState } from "react";
import logoDark from "../assets/logo.png";
import logoLight from "../assets/logo-white.png";
import { FiExternalLink, FiMenu, FiX } from "react-icons/fi";

type HeaderProps = {
  variant?: "dark" | "light";
};

const navigationItems = [
  { id: "seoul", label: "서울 4기", href: "/seoul", status: "모집 중" },
  { id: "gwangju", label: "광주 2기", href: "/gwangju", status: "진행 중" },
  { id: "cheonan", label: "천안", href: "/cheonan", status: "진행 중" },
] as const;

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLight = variant === "light";
  const headerClassName = isLight
    ? "fixed top-0 left-0 right-0 z-50 bg-white/88 text-[#162033] shadow-[0_1px_0_rgba(15,23,42,0.08)] backdrop-blur-md"
    : "fixed top-0 left-0 right-0 z-50 bg-black/72 text-white shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md";
  const topRowClassName = isLight
    ? "mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-[#162033]"
    : "mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-white";
  const notebookLinkClassName = isLight
    ? "flex items-center gap-1 text-sm font-medium text-[#162033]/68 transition-colors hover:text-[#162033]"
    : "flex items-center gap-1 text-sm font-medium text-white/72 transition-colors hover:text-white";
  const tabBarClassName = isLight
    ? "border-t border-[#162033]/10 text-[#162033]"
    : "border-t border-white/10 text-white";
  const tabInnerClassName = isLight
    ? "mx-auto flex max-w-[1080px] divide-x divide-[#162033]/10 text-[#162033]"
    : "mx-auto flex max-w-[1080px] divide-x divide-white/10 text-white";
  const tabLinkClassName = isLight
    ? "flex-1 py-3 text-center text-sm font-medium text-[#162033]/64 transition-colors hover:bg-[#162033]/[0.04] hover:text-[#162033]"
    : "flex-1 py-3 text-center text-sm font-medium text-white/64 transition-colors hover:bg-white/6 hover:text-white";
  const mobileTopRowClassName = isLight
    ? "flex h-16 items-center justify-between px-5 text-[#162033]"
    : "flex h-16 items-center justify-between px-5 text-white";
  const mobileMenuButtonClassName = isLight
    ? "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#162033]/[0.03] text-[#162033]/82 transition-colors hover:bg-[#162033]/[0.07] hover:text-[#162033]"
    : "inline-flex h-10 w-10 items-center justify-center rounded-full text-white/78 transition-colors hover:bg-white/6 hover:text-white";
  const mobilePanelClassName = isLight
    ? "absolute inset-y-0 right-0 w-full max-w-[320px] border-l border-[#162033]/10 bg-white/96 text-[#162033] shadow-[-16px_0_48px_rgba(15,23,42,0.12)] transition-transform duration-300 ease-out"
    : "absolute inset-y-0 right-0 w-full max-w-[320px] border-l border-white/10 bg-[#090909]/96 text-white shadow-[-16px_0_48px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out";
  const mobileOverlayClassName = isLight
    ? "absolute inset-0 bg-[#162033]/20 transition-opacity duration-300 ease-out"
    : "absolute inset-0 bg-black/40 transition-opacity duration-300 ease-out";
  const mobileNavLinkClassName = isLight
    ? "flex items-center justify-between px-4 py-4 text-[#162033] transition-colors hover:text-[#162033]/72"
    : "flex items-center justify-between px-4 py-4 text-white transition-colors hover:text-white/72";
  const mobileNotebookLinkClassName = isLight
    ? "mt-3 flex items-center justify-between px-4 py-4 text-[#162033] transition-colors hover:text-[#162033]/72"
    : "mt-3 flex items-center justify-between px-4 py-4 text-white transition-colors hover:text-white/72";

  return (
    <header className={headerClassName}>
      <div className="relative md:hidden">
        <div className={mobileTopRowClassName}>
          <a href="/">
            <img src={isLight ? logoDark : logoLight} alt="CAIO" className="h-7 w-auto" />
          </a>

          <button
            type="button"
            className={mobileMenuButtonClassName}
            aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        <div
          className={`absolute left-0 top-full z-40 h-[calc(100svh-4rem)] w-full overflow-hidden transition-[visibility] duration-300 ${
            isMobileMenuOpen ? "visible" : "invisible"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <button
            type="button"
            className={`${mobileOverlayClassName} ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}
            aria-label="메뉴 닫기"
            tabIndex={isMobileMenuOpen ? 0 : -1}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className={`${mobilePanelClassName} ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="px-5 pb-5 pt-4">
              <nav className="space-y-3">
                {navigationItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className={mobileNavLinkClassName}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400">
                      {item.status}
                    </span>
                  </a>
                ))}
              </nav>

              <a
                href="https://caiom.koraia.org/"
                target="_blank"
                rel="noreferrer"
                className={mobileNotebookLinkClassName}
              >
                <span className="text-sm font-semibold">원우회 수첩 바로가기</span>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className={topRowClassName}>
          <a href="/">
            <img src={isLight ? logoDark : logoLight} alt="CAIO" className="h-7 w-auto" />
          </a>

          <a
            href="https://caiom.koraia.org/"
            target="_blank"
            rel="noreferrer"
            className={notebookLinkClassName}
          >
            원우회 수첩 바로가기
            <FiExternalLink />
          </a>
        </div>

        <div className={tabBarClassName}>
          <div className={tabInnerClassName}>
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${tabLinkClassName} inline-flex items-center justify-center gap-2`}
              >
                <span>{item.label}</span>
                <span className="rounded-full bg-transparent px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400">
                  {item.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
