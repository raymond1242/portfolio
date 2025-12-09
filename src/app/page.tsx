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
      <section className="flex px-6 lg:py-24 py-16 relative overflow-hidden min-h-[85vh] items-center">
        {/* Animated background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="flex flex-col lg:gap-8 gap-6 m-auto max-w-5xl px-4 py-2 relative z-10">
          <div className="flex flex-col gap-4">
            <p className="text-4xl lg:text-5xl text-neutral-200 animate-fade-in font-light">
              Hi <span className="inline-block animate-wave">✋</span>,
            </p>
            <div className="flex gap-4 items-end flex-wrap">
              <p className="lg:text-5xl text-2xl font-light text-neutral-300">I&apos;m</p>
              <h1 className="lg:text-7xl text-4xl font-bold bg-gradient-to-r from-red-400 via-neutral-200 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Raymond Negron
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
              <p className={`${poppins.className} lg:text-5xl text-2xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent cursor tracking-wider`}>
                SOFTWARE DEVELOPER
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:my-10 my-6 gap-4 text-lg lg:text-xl relative">
            <div className="flex items-center gap-3">
              <span className="font-bold text-4xl text-red-500 glow-text animate-pulse-subtle">{`{`}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-red-500/50 to-transparent" />
            </div>
            <div className="relative group p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-950/90 border border-neutral-800/60 hover:border-neutral-700/80 backdrop-blur-md shadow-2xl hover:shadow-red-950/20 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-950/10 via-transparent to-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="relative [&_span]:font-bold [&_span]:text-red-400 [&_span]:glow-text-subtle font-light leading-relaxed text-neutral-300 text-base lg:text-lg">
                Skilled in building <span>scalable microservices</span> architectures
                using <span>Node.js, Python, and AWS</span>, with expertise in database
                integrations and <span>real-time communication systems</span>. Adept at
                collaborating in cross-functional teams and passionate about
                delivering <span>innovative and efficient</span> solutions.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-l from-red-500/50 to-transparent" />
              <span className="font-bold text-4xl text-red-500 glow-text animate-pulse-subtle">{`}`}</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center">
            <p className="lg:text-xl text-lg font-light text-neutral-300">
              <span className="text-red-400 underline underline-offset-4 decoration-2 decoration-red-500/60 hover:decoration-red-400 transition-colors glow-text-subtle mr-1">
                Explore my work
              </span>
              and let&apos;s innovate together.
            </p>

            <a
              className="group flex items-center gap-3 w-fit px-6 py-3.5 border-2 border-red-900/50 font-medium bg-gradient-to-r from-red-950/40 to-neutral-900/40 hover:from-red-900/40 hover:to-red-950/40 hover:border-red-800/70 rounded-xl transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl hover:shadow-red-900/30 backdrop-blur-sm hover:scale-105"
              href="/cv/resume.pdf"
              download="cv"
            >
              <FileTextOutlined className="text-xl text-red-400 group-hover:scale-110 transition-transform glow-text-subtle" />
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
