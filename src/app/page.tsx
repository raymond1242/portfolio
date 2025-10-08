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
      <section className="flex px-6 lg:py-14 py-8">
        <div className="flex flex-col lg:gap-4 gap-2 m-auto px-4 py-2">
          <p className="text-3xl">Hi ✋,</p>
          <div className="flex gap-2">
            <p className="lg:text-5xl text-xl font-light content-end">I&apos;m</p>
            <p className="lg:text-6xl text-2xl font-medium">Raymond,</p>
          </div>
          <p className={`${poppins.className} lg:text-6xl text-2xl font-bold cursor`}>
            SOFTWARE DEVELOPER.
          </p>
          <div className="flex flex-col lg:my-6 gap-2 my-1 text-xl">
            <span className="font-medium text-3xl text-red-600">{`{`}</span>
            <p className="max-w-[650px] [&_span]:font-semibold lg:ml-8 ml-2 font-extralight">
              Skilled in building <span>scalable</span> microservices
              architectures using <span>Node.js, Python, and AWS</span>, with expertise in database integrations and <span>real-time communication systems</span>.
              Adept at collaborating in cross-functional teams and passionate about delivering <span>innovative and efficient</span>
              solutions.
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
            className="flex w-fit border-extralight font-extralight hover:bg-[#45484b] p-2 rounded-2xl transition-all duration-300 ease-in-out"
            href="/cv/resume.pdf"
            download="cv"
          >
            <FileTextOutlined className="text-xl -mt-1 mr-2" />
            <p className="m-auto">
              Dowload CV
            </p>
          </a>
        </div>
      </section>
      <Experience/>
      <Projects/>
      <Skills/>
    </main>
  );
}
