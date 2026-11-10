import Image from "next/image";

// "Home" is desktop-only: on mobile the logo already links to #home, and dropping it keeps the nav on one line.
const navItems = [
  { href: "#home", label: "Home", desktopOnly: true },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

// Floating, frosted-glass header: a pill on desktop, a rounded card on mobile (logo and nav don't fit on one row there).
// Width = viewport minus side margins, capped at 69rem so the logo lines up with the sections' content edge
// (sections are max-w-6xl/72rem with lg:px-12; pill is 1.5rem narrower per side and has lg:pl-6).
export default function Header() {
  return (
    <header className="sticky top-3 lg:top-4 z-20 mt-3 lg:mt-4 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-[69rem] flex flex-col lg:flex-row items-center lg:justify-between gap-1 px-3 py-3 lg:pl-6 lg:pr-2 lg:py-2 rounded-2xl lg:rounded-full border border-neutral-200/60 bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-neutral-900/5">
      <a href="#home" className="flex gap-3 items-center group">
        <Image src="/images/logo-dark.svg" alt="Logo" width={36} height={36} className="transition-transform duration-300 group-hover:scale-105" />
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-neutral-900">
            Raymond Negron
          </p>
          <p className="text-xs text-neutral-400">
            Software Engineer
          </p>
        </div>
      </a>
      <nav>
        <ul className="flex flex-row flex-wrap justify-center gap-x-4 max-[359px]:gap-x-3 gap-y-1 lg:gap-1 py-1 lg:py-0 text-sm max-[359px]:text-[13px] lg:text-base font-normal">
          {navItems.map(({ href, label, desktopOnly }) => (
            <li key={href} className={desktopOnly ? "hidden lg:block" : undefined}>
              <a href={href} className="block lg:px-4 lg:py-2 rounded-full text-neutral-500 hover:text-neutral-900 lg:hover:bg-neutral-900/5 transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
