import Image from "next/image";
import SmoothScrollLink from "./smoothScrollLink";
import { poppins } from "@/app/fonts";

export default function Header() {
  return (
    <header className="flex flex-col bg-[#161719]/80 lg:flex-row backdrop-blur-md z-20 sticky top-0 items-center lg:justify-around p-4">
      <a href="#home" className="flex gap-2">
        <Image src="images/logo-light.svg" alt="Logo" width={40} height={40} />
        <div className="flex flex-col content-center m-auto">
          <p className="text-sm font-medium leading-4">
            Raymond Negron
          </p>
          <p className="font-extralight text-xs leading-3">
            Software Developer
          </p>
        </div>
      </a>
      <nav>
        <ul className={`flex flex-row ${poppins.className} lg:gap-8 gap-4 py-2 mx-6 font-extralight text-sm`}>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#home" >
                <span className="bg-left-bottom bg-gradient-to-r from-orange-500 to-orange-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Home
                  <span className="text-orange-500 font-semibold">.html</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#experience" >
                <span className="bg-left-bottom bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Experience
                  <span className="text-green-600 font-semibold">.py</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#projects">
                <span className="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Projects
                  <span className="text-yellow-400 font-semibold">.js</span>
                </span>
              </SmoothScrollLink>
          </li>
          <li className="group transition-all duration-300 ease-in-out">
              <SmoothScrollLink href="#skills">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Skills
                  <span className="text-blue-500 font-semibold">.ts</span>
                </span>
              </SmoothScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
