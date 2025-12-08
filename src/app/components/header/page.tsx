import Image from "next/image";
import SmoothScrollLink from "./smoothScrollLink";
import { poppins } from "@/app/fonts";

export default function Header() {
  return (
    <header className="flex flex-col bg-neutral-950/90 lg:flex-row backdrop-blur-lg z-20 sticky top-0 items-center lg:justify-around p-4 border-b border-neutral-800/50 shadow-lg">
      <a href="#home" className="flex gap-2 group">
        <div className="relative">
          <Image src="images/logo-light.svg" alt="Logo" width={40} height={40} className="transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="flex flex-col content-center m-auto">
          <p className="text-sm font-medium leading-4 bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            Raymond Negron
          </p>
          <p className="font-light text-xs leading-3 text-neutral-400">
            Software Developer
          </p>
        </div>
      </a>
      <nav>
        <ul className={`flex flex-row ${poppins.className} lg:gap-8 gap-4 py-2 mx-6 font-light text-sm`}>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#home" >
                <span className="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out text-neutral-300 group-hover:text-white">
                  Home
                  <span className="text-orange-500 font-semibold glow-text-subtle">.html</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#experience" >
                <span className="bg-left-bottom bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out text-neutral-300 group-hover:text-white">
                  Experience
                  <span className="text-green-500 font-semibold glow-text-subtle">.py</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#projects">
                <span className="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out text-neutral-300 group-hover:text-white">
                  Projects
                  <span className="text-yellow-400 font-semibold glow-text-subtle">.js</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#skills">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out text-neutral-300 group-hover:text-white">
                  Skills
                  <span className="text-blue-500 font-semibold glow-text-subtle">.ts</span>
                </span>
              </SmoothScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
