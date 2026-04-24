import logo from "../assets/logo.png";
import {FiExternalLink} from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-8 text-black">
        <a href="/">
          <img src={logo} alt="KORAIA" className="h-7 w-auto" />
        </a>
        <a
          href="/contact"
          className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-black"
        >
          원우회 수첩<FiExternalLink />
        </a>
      </div>
      <div className="border-t border-gray-100 bg-white text-black">
        <div className="mx-auto flex max-w-[1080px] divide-x divide-gray-100 text-black">
          {[
            { label: "서울", href: "/seoul" },
            { label: "광주", href: "/gwangju" },
            { label: "천안", href: "/cheonan" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex-1 py-3 text-center text-sm text-gray-500 font-medium transition-colors hover:bg-gray-50 hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
