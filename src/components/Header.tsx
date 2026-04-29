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
    ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#162033]/12 text-[#162033]/78 transition-colors hover:bg-[#162033]/[0.04] hover:text-[#162033]"
    : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/78 transition-colors hover:bg-white/6 hover:text-white";
  const mobilePanelClassName = isLight
    ? "border-t border-[#162033]/10 bg-white/96 text-[#162033]"
    : "border-t border-white/10 bg-[#090909]/96 text-white";
  const mobileNavLinkClassName = isLight
    ? "flex items-center justify-between rounded-2xl border border-[#162033]/10 bg-[#162033]/[0.03] px-4 py-4 text-[#162033] transition-colors hover:bg-[#162033]/[0.06]"
    : "flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-white transition-colors hover:bg-white/[0.06]";
  const mobileNotebookLinkClassName = isLight
    ? "mt-4 inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-[#162033]/68 transition-colors hover:text-[#162033]"
    : "mt-4 inline-flex w-full items-center justify-center gap-1 text-sm font-medium text-white/72 transition-colors hover:text-white";

  return (
    <header className={headerClassName}>
      <div className="md:hidden">
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

        {isMobileMenuOpen && (
          <div className={mobilePanelClassName}>
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
                원우회 수첩 바로가기
                <FiExternalLink />
              </a>
            </div>
          </div>
        )}
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
