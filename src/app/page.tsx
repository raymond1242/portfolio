import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Header from "./components/header/page";
import Experience from "./components/experience/page";
import { FileTextOutlined } from "@ant-design/icons";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main id="home">
      <Header />
      <section className="flex px-6 lg:py-16 py-10">
        <div className="flex flex-col lg:gap-6 gap-4 m-auto max-w-4xl px-4 py-2">
          <div className="flex flex-col gap-2">
            <p className="text-3xl lg:text-4xl">Hi ✋,</p>
            <div className="flex gap-4 items-end">
              <p className="lg:text-4xl text-xl font-light">I&apos;m</p>
              <p className="lg:text-5xl text-2xl font-semibold text-neutral-500">Raymond,</p>
            </div>
            <p className={`${poppins.className} lg:text-6xl text-3xl font-bold cursor`}>
              SOFTWARE DEVELOPER.
            </p>
          </div>

          <div className="flex flex-col lg:my-6 my-4 gap-2 text-lg lg:text-xl">
            <span className="font-medium text-3xl text-red-600">{`{`}</span>
            <p className="max-w-[700px] [&_span]:font-semibold lg:ml-8 ml-4 font-light leading-relaxed">
              Skilled in building <span>scalable microservices</span> architectures
              using <span>Node.js, Python, and AWS</span>, with expertise in database
              integrations and <span>real-time communication systems</span>. Adept at
              collaborating in cross-functional teams and passionate about
              delivering <span>innovative and efficient</span> solutions.
            </p>
            <span className="font-medium text-3xl text-red-600">{`}`}</span>
          </div>

          <p className="lg:text-xl text-lg font-light">
            <span className="text-red-400 underline underline-offset-4 decoration-2 decoration-red-400 mr-1">
              Explore my work
            </span>
            and let&apos;s innovate together.
          </p>

          <a
            className="flex items-center gap-2 w-fit px-4 py-3 border border-neutral-700 font-light hover:bg-[#45484b] hover:border-neutral-600 rounded-xl transition-all duration-300 ease-in-out shadow-sm hover:shadow-md"
            href="/cv/resume.pdf"
            download="cv"
          >
            <FileTextOutlined className="text-xl" />
            <span>Download CV</span>
          </a>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
