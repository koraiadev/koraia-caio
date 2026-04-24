import logo from "../assets/logo-white.png";
import { FiExternalLink } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-[0_1px_0_rgba(255,255,255,0.08)]">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-white">
        <a href="/">
          <img src={logo} alt="CAIO" className="h-7 w-auto" />
        </a>

        <a
          href="/contact"
          className="flex items-center gap-1 text-sm font-medium text-white/72 transition-colors hover:text-white"
        >
          문의하기
          <FiExternalLink />
        </a>
      </div>

      <div className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto flex max-w-[1080px] divide-x divide-white/10 text-white">
          {[
            { label: "서울", href: "/seoul" },
            { label: "광주", href: "/gwangju" },
            { label: "천안", href: "/cheonan" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex-1 py-3 text-center text-sm font-medium text-white/64 transition-colors hover:bg-white/6 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
