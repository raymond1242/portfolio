import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col lg:flex-row bg-white/70 backdrop-blur-md z-20 sticky top-0 items-center lg:justify-between p-4">
      <div className="flex gap-2">
        <Image src="images/logo.svg" alt="Logo" width={55} height={55} />
        <div className="flex flex-col content-center m-auto">
          <p className="text-lg font-medium leading-6">
            Raymond Negron
          </p>
          <p className="font-extralight text-sm leading-4">
            Software Developer
          </p>
        </div>
      </div>
      <nav>
        <ul className="flex flex-row lg:gap-8 gap-4 py-2 mx-6 text-black font-extralight text-xl">
          <li>
              <Link href="/" className="group transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Home
                  <span className="text-green-600 font-semibold">.py</span>
                </span>
              </Link>
          </li>
          <li>
              <Link href="/" className="group transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-yellow-500 to-yellow-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Projects
                  <span className="text-yellow-400 font-semibold">.js</span>
                </span>
              </Link>
          </li>
          <li>
              <Link href="/" className="group transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                  Blog
                  <span className="text-blue-500 font-semibold">.ts</span>
                </span>
              </Link>
          </li>
          <li>
              <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
