import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Header from "./components/header/page";
import Experience from "./components/experience/page";
import { FileTextOutlined } from "@ant-design/icons";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <main id="home" className="relative overflow-x-hidden">
      <Header />
      <section className="flex px-4 lg:px-6 lg:py-24 py-16 relative overflow-hidden min-h-[85vh] items-center w-full">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 -left-20 lg:-left-40 w-60 lg:w-80 h-60 lg:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 lg:-right-40 w-72 lg:w-96 h-72 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-100" />

        <div className="flex flex-col lg:gap-4 gap-4 m-auto max-w-5xl w-full px-2 py-2 relative z-10">
          <div className="flex flex-col gap-4">
            <p className="text-3xl lg:text-5xl text-neutral-200 animate-fade-in font-light">
              Hi <span className="inline-block animate-wave">✋</span>,
            </p>
            <div className="flex gap-3 lg:gap-4 items-end flex-wrap">
              <p className="text-xl lg:text-5xl font-light text-neutral-300">I&apos;m</p>
              <h1 className="text-3xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 via-neutral-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Raymond Negron
              </h1>
            </div>
            <div className="flex items-center gap-2 lg:gap-3 mt-2">
              <div className="h-1 w-8 lg:w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
              <p className={`${poppins.className} text-xl lg:text-5xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent cursor tracking-wide lg:tracking-wider`}>
                SOFTWARE DEVELOPER
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:my-10 my-6 gap-3 lg:gap-4 text-lg lg:text-xl relative">
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="font-bold text-3xl lg:text-4xl text-red-500 glow-text animate-pulse-subtle">{`{`}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>
            <div className="relative group p-6 lg:p-10 rounded-xl lg:rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-950/90 border border-neutral-800/60 hover:border-neutral-700/80 backdrop-blur-md shadow-2xl hover:shadow-red-950/20 transition-all duration-500">
              <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative [&_span]:font-bold [&_span]:text-red-400 [&_span]:glow-text-subtle font-light leading-relaxed text-neutral-300 text-sm lg:text-lg">
                Skilled in building <span>scalable microservices</span> architectures
                using <span>Node.js, Python, and AWS</span>, with expertise in database
                integrations and <span>real-time communication systems</span>. Adept at
                collaborating in cross-functional teams and passionate about
                delivering <span>innovative and efficient</span> solutions.
              </p>
            </div>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="h-px flex-1 bg-gradient-to-l from-red-500/50 to-transparent" />
              <span className="font-bold text-3xl lg:text-4xl text-red-500 glow-text animate-pulse-subtle">{`}`}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center w-full">
            <p className="text-base lg:text-xl font-light text-neutral-300">
              <span className="text-red-400 underline underline-offset-4 decoration-2 decoration-red-500/60 hover:decoration-red-400 transition-colors glow-text-subtle mr-1">
                Explore my work
              </span>
              and let&apos;s innovate together.
            </p>

            <a
              className="group flex items-center gap-2 lg:gap-3 w-fit px-5 lg:px-6 py-3 lg:py-3.5 border-2 border-red-900/50 font-medium bg-gradient-to-r from-red-950/40 to-neutral-900/40 hover:from-red-900/40 hover:to-red-950/40 hover:border-red-800/70 rounded-xl transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:shadow-red-900/30 backdrop-blur-sm hover:scale-105 text-sm lg:text-base"
              href="/cv/resume.pdf"
              download="cv"
            >
              <FileTextOutlined className="text-lg lg:text-xl text-red-400 group-hover:scale-110 transition-transform glow-text-subtle" />
              <span className="text-neutral-200 group-hover:text-white transition-colors">Download CV</span>
            </a>
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
