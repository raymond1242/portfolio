import Image from "next/image";
import { dosis } from "@/app/fonts";
import SmoothScrollLink from "../header/smoothScrollLink";
import { LinkedinFilled, GithubFilled, XOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col bg-[#161719] p-6 lg:py-12 gap-6 justify-between">
      <div className="flex flex-col my-auto gap-3 lg:order-first order-3">
        <Image src="images/logo-light.svg" alt="Logo" className="-ml-1.5" width={70} height={70} />
        <p className="text-neutral-400">
          Made by&nbsp;
          <span className={`${dosis.className} text-xl font-semibold text-white`}>
            Raymond
          </span>
        </p>
      </div>
      <div className="flex gap-4 justify-between lg:w-[400px]">
        <div className='flex flex-col gap-4'>
          <p className="text-xl font-semibold">
              SECTIONS
          </p>
          <ul className="flex flex-col gap-3 font-extralight text-md text-neutral-300">
            <li>
              <SmoothScrollLink href="#home">
                Home
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink href="#experience">
                Experience
              </SmoothScrollLink>
            </li>
            <li>
              <SmoothScrollLink href="#projects">
                Projects
              </SmoothScrollLink>
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-4'>
          <p className="font-semibold text-xl">PROJECTS</p>
          <ul className="flex flex-col gap-3 font-extralight text-md text-neutral-300">
            <li>
              <a href="/">
                Photo Gallery
              </a>
            </li>
            <li>
              <a href="/">
                Todo List
              </a>
            </li>
            <li>
              <a href="/">
                Weather App
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <p className="text-lg font-light">
          Connect with me
        </p>
        <div className='flex gap-2 lg:justify-end'>
          <a href="https://www.linkedin.com/in/raymond-negron-valqui-49b657199" target="_blank">
            <LinkedinFilled className='text-3xl hover:text-4xl transition-all duration-300 ease-in-out' />
          </a>
          <a href="https://github.com/raymond1242" target="_blank">
            <GithubFilled className='text-3xl hover:text-4xl transition-all duration-300 ease-in-out' />
          </a>
          <a href="https://twitter.com/NegronValq49114" target="_blank">
            <XOutlined className='text-3xl hover:text-4xl transition-all duration-300 ease-in-out' />
          </a>
        </div>
      </div>
    </footer>
  );
}
