import { LinkedinFilled, GithubFilled, XOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="text-center lg:text-left">
          <p className="text-neutral-900 font-semibold">Raymond Negron</p>
          <p className="text-sm text-neutral-400">Software Developer</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/raymond-negron-valqui-49b657199"
            target="_blank"
            className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinFilled className="text-3xl" />
          </a>
          <a
            href="https://github.com/raymond1242"
            target="_blank"
            className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubFilled className="text-3xl" />
          </a>
          <a
            href="https://twitter.com/NegronValq49114"
            target="_blank"
            className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
            aria-label="Twitter"
          >
            <XOutlined className="text-3xl" />
          </a>
        </div>

        <p className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
