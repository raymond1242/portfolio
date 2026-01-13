import Image from "next/image";
import SmoothScrollLink from "./smoothScrollLink";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-md z-20 sticky top-0 items-center lg:justify-between px-6 lg:px-12 py-4 border-b border-neutral-100">
      <a href="#home" className="flex gap-3 items-center group">
        <Image src="images/logo-dark.svg" alt="Logo" width={36} height={36} className="transition-transform duration-300 group-hover:scale-105" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-neutral-900">
            Raymond Negron
          </p>
          <p className="text-xs text-neutral-400">
            Software Developer
          </p>
        </div>
      </a>
      <nav>
        <ul className="flex flex-row gap-8 py-2 text-base font-normal">
          <li>
            <SmoothScrollLink href="#home">
              <span className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
                Home
              </span>
            </SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink href="#experience">
              <span className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
                Experience
              </span>
            </SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink href="#projects">
              <span className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
                Projects
              </span>
            </SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink href="#skills">
              <span className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
                Skills
              </span>
            </SmoothScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
