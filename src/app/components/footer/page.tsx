import Image from "next/image";
import { roboto, dosis } from "@/app/fonts";
import { LinkedinFilled, GithubFilled, XOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="flex bg-gray-300 text-black p-6 justify-between">
      <div>
        <Image className="my-1" src="images/logo.svg" alt="Logo" width={80} height={80} />
        <p className="">
          Site by&nbsp;
          <span className={`${dosis.className} text-3xl font-semibold`}>
            Raymond
          </span>
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className="text-center">
            SECTIONS
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <p>PROJECTS</p>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="/projects">
              Photo Gallery
            </a>
          </li>
          <li>
            <a href="/projects">
              Todo List
            </a>
          </li>
          <li>
            <a href="/projects">
              Weather App
            </a>
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-4'>
        <p>
          Connect with me
        </p>
        <div className='flex gap-2'>
          <a href="https://www.linkedin.com/in/raymond-negron-valqui-49b657199" target="_blank">
            <LinkedinFilled className='text-3xl' />
          </a>
          <a href="https://github.com/raymond1242" target="_blank">
            <GithubFilled className='text-3xl' />
          </a>
          <a href="https://twitter.com/NegronValq49114" target="_blank">
            <XOutlined className='text-3xl' />
          </a>
        </div>
      </div>
    </footer>
  );
}
