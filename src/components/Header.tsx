import Image from "next/image";
import NavLinks, { type NavItem } from "@/components/NavLinks";

// "Home" is desktop-only: on mobile the logo already links to #home, and dropping it keeps the nav on one line.
// NavLinks highlights the link of the section in view; each href must match a section id.
const navItems: NavItem[] = [
  { href: "#home", label: "Home", desktopOnly: true },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

// Floating, frosted-glass pill header on one row: logo and nav. Mobile shows only a smaller logo (no name/title) so the
// bar stays short and the nav fits beside it.
// Width = viewport minus side margins, capped at 69rem so the logo lines up with the sections' content edge
// (sections are max-w-6xl/72rem with lg:px-12; pill is 1.5rem narrower per side and has lg:pl-6).
export default function Header() {
  return (
    <header className="sticky top-3 lg:top-4 z-20 mt-3 lg:mt-4 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-276 flex items-center justify-between gap-3 pl-2 pr-3 py-2 lg:pl-6 lg:pr-2 rounded-full border border-neutral-200/60 bg-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-neutral-900/5">
      <a href="#home" aria-label="Raymond Negron, home" className="flex gap-3 items-center group shrink-0">
        <Image src="/images/logo-dark.svg" alt="Logo" width={36} height={36} className="w-7 h-7 lg:w-9 lg:h-9 transition-transform duration-300 group-hover:scale-105" />
        <div className="hidden lg:flex flex-col">
          <p className="text-sm font-semibold text-neutral-900">
            Raymond Negron
          </p>
          <p className="text-xs text-neutral-400">
            Software Engineer
          </p>
        </div>
      </a>
      <NavLinks items={navItems} />
    </header>
  );
}
