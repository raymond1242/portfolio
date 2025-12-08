import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Header from "./components/header/page";
import Experience from "./components/experience/page";
import { FileTextOutlined } from "@ant-design/icons";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main id="home" className="relative">
      <Header />
      <section className="flex px-6 lg:py-20 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="flex flex-col lg:gap-7 gap-5 m-auto max-w-4xl px-4 py-2 relative z-10">
          <div className="flex flex-col gap-3">
            <p className="text-3xl lg:text-4xl text-neutral-300 animate-fade-in">Hi ✋,</p>
            <div className="flex gap-4 items-end">
              <p className="lg:text-4xl text-xl font-light text-neutral-400">I&apos;m</p>
              <p className="lg:text-5xl text-2xl font-semibold bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                Raymond,
              </p>
            </div>
            <p className={`${poppins.className} lg:text-6xl text-3xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent cursor`}>
              SOFTWARE DEVELOPER.
            </p>
          </div>

          <div className="flex flex-col lg:my-8 my-5 gap-3 text-lg lg:text-xl relative">
            <span className="font-medium text-3xl text-red-500 glow-text">{`{`}</span>
            <div className="relative p-6 lg:p-8 rounded-xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-neutral-800/50 backdrop-blur-sm">
              <p className="[&_span]:font-semibold [&_span]:text-red-400 [&_span]:glow-text-subtle font-light leading-relaxed text-neutral-300">
                Skilled in building <span>scalable microservices</span> architectures
                using <span>Node.js, Python, and AWS</span>, with expertise in database
                integrations and <span>real-time communication systems</span>. Adept at
                collaborating in cross-functional teams and passionate about
                delivering <span>innovative and efficient</span> solutions.
              </p>
            </div>
            <span className="font-medium text-3xl text-red-500 glow-text">{`}`}</span>
          </div>

          <p className="lg:text-xl text-lg font-light text-neutral-300">
            <span className="text-red-400 underline underline-offset-4 decoration-2 decoration-red-500/60 hover:decoration-red-400 transition-colors glow-text-subtle mr-1">
              Explore my work
            </span>
            and let&apos;s innovate together.
          </p>

          <a
            className="group flex items-center gap-3 w-fit px-5 py-3 border border-neutral-700/80 font-light bg-neutral-900/50 hover:bg-red-950/30 hover:border-red-900/50 rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-red-900/20 backdrop-blur-sm"
            href="/cv/resume.pdf"
            download="cv"
          >
            <FileTextOutlined className="text-xl text-red-400 group-hover:scale-110 transition-transform" />
            <span className="text-neutral-200">Download CV</span>
          </a>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
