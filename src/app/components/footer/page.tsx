import Image from "next/image";
import { dosis } from "@/app/fonts";
import SmoothScrollLink from "../header/smoothScrollLink";
import { LinkedinFilled, GithubFilled, XOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="relative flex lg:flex-row flex-col bg-gradient-to-b from-neutral-950 to-black border-t border-neutral-800/50 py-8 px-10 lg:py-16 gap-8 justify-between">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/5 via-transparent to-transparent pointer-events-none" />
      <div className="flex flex-col my-auto gap-4 lg:order-first order-3 relative z-10">
        <div className="relative group">
          <Image src="images/logo-light.svg" alt="Logo" className="-ml-1.5 transition-transform duration-300 group-hover:scale-110" width={70} height={70} />
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-neutral-400 font-light">
          Made by&nbsp;
          <span className={`${dosis.className} text-xl font-semibold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent`}>
            Raymond
          </span>
        </p>
      </div>
      <div className="flex gap-8 lg:gap-12 justify-between lg:w-[450px] relative z-10">
        <div className='flex flex-col gap-4'>
          <p className="text-xl font-semibold text-red-500 glow-text-subtle">
              SECTIONS
          </p>
          <ul className="flex flex-col gap-3 font-light text-md text-neutral-400">
            <li className="hover:text-neutral-200 transition-colors duration-300 hover:translate-x-1 transition-transform">
              <SmoothScrollLink href="#home">
                Home
              </SmoothScrollLink>
            </li>
            <li className="hover:text-neutral-200 transition-colors duration-300 hover:translate-x-1 transition-transform">
              <SmoothScrollLink href="#experience">
                Experience
              </SmoothScrollLink>
            </li>
            <li className="hover:text-neutral-200 transition-colors duration-300 hover:translate-x-1 transition-transform">
              <SmoothScrollLink href="#projects">
                Projects
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <p className="font-semibold text-xl text-red-500 glow-text-subtle">PROJECTS</p>
          <ul className="flex flex-col gap-3 font-light text-md text-neutral-400">
            <li className="hover:text-neutral-200 transition-colors duration-300 hover:translate-x-1 transition-transform">
              <a href="/">
                Somer
              </a>
            </li>
            <li className="hover:text-neutral-200 transition-colors duration-300 hover:translate-x-1 transition-transform">
              <a href="/">
                Collyn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-5 relative z-10'>
        <p className="text-lg font-light text-neutral-300">
          Connect with me
        </p>
        <div className='flex gap-3 lg:justify-end'>
          <a href="https://www.linkedin.com/in/raymond-negron-valqui-49b657199" target="_blank" className="group">
            <div className="p-2 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-blue-900/50 hover:bg-neutral-800/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-950/30">
              <LinkedinFilled className='text-2xl text-neutral-400 group-hover:text-blue-400 transition-colors duration-300' />
            </div>
          </a>
          <a href="https://github.com/raymond1242" target="_blank" className="group">
            <div className="p-2 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 hover:scale-110 shadow-lg">
              <GithubFilled className='text-2xl text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300' />
            </div>
          </a>
          <a href="https://twitter.com/NegronValq49114" target="_blank" className="group">
            <div className="p-2 rounded-xl bg-neutral-900/50 border border-neutral-800/50 hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 hover:scale-110 shadow-lg">
              <XOutlined className='text-2xl text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300' />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
