import logoDark from "../assets/logo.png";
import logoLight from "../assets/logo-white.png";
import { FiExternalLink } from "react-icons/fi";

type HeaderProps = {
  variant?: "dark" | "light";
};

export default function Header({ variant = "dark" }: HeaderProps) {
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

  return (
    <header className={headerClassName}>
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
          원우회 수첩
          <FiExternalLink />
        </a>
      </div>

      <div className={tabBarClassName}>
        <div className={tabInnerClassName}>
          {[
            { id: "seoul", label: "서울 4기", href: "/seoul" },
            { id: "gwangju", label: "광주 2기", href: "/gwangju" },
            { id: "cheonan", label: "천안", href: "/cheonan" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${tabLinkClassName} inline-flex items-center justify-center gap-2`}
            >
              <span>{item.label}</span>
              {item.id === "seoul" && (
                <span className="rounded-full bg-transparent px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400">
                  모집 중
                </span>
              )}
              {item.id === "gwangju" && (
                <span className="rounded-full bg-transparent px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400">
                  진행 중
                </span>
              )}
              {item.id === "cheonan" && (
                <span className="rounded-full bg-transparent px-2 py-0.5 text-[11px] font-medium leading-none text-blue-400">
                  진행 중
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
