import Image from "next/image";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row bg-white/80 backdrop-blur-md z-20 sticky top-0 items-center lg:justify-between px-6 lg:px-12 py-4 border-b border-neutral-100">
      <a href="#home" className="flex gap-3 items-center group">
        <Image src="/images/logo-dark.svg" alt="Logo" width={36} height={36} className="transition-transform duration-300 group-hover:scale-105" />
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
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-neutral-500 hover:text-neutral-900 transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
