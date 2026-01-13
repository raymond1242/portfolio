import Skills from "./components/skills/page";
import Projects from "./components/projects/page";
import Header from "./components/header/page";
import Experience from "./components/experience/page";
import { FileTextOutlined } from "@ant-design/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="relative overflow-x-hidden bg-white">
      <Header />
      <section className="flex px-6 lg:px-12 lg:py-32 py-20 relative min-h-[90vh] items-center w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 w-full items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 flex-1 order-2 lg:order-1">
            <p className="text-lg text-neutral-400 font-light tracking-wide">
              Hi, I&apos;m
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 tracking-tight">
              Raymond Negron
            </h1>
            <p className="text-2xl lg:text-3xl font-light text-neutral-500 -mt-2">
              Software Developer
            </p>

            <div className="mt-4 lg:mt-6 max-w-xl">
              <p className="text-neutral-600 text-lg leading-relaxed font-light">
                Skilled in building <span className="text-neutral-900 font-medium">scalable microservices</span> using
                Node.js, Python, and AWS. Passionate about <span className="text-neutral-900 font-medium">real-time systems</span> and
                delivering <span className="text-neutral-900 font-medium">efficient solutions</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full transition-all duration-300 text-base font-medium"
                href="/cv/resume.pdf"
                download="cv"
              >
                <FileTextOutlined className="text-lg" />
                <span>Download CV</span>
              </a>
              <a
                className="flex items-center justify-center px-8 py-4 border-2 border-neutral-200 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 rounded-full transition-all duration-300 text-base font-medium"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative order-1 lg:order-2 flex-shrink-0">
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              {/* Image container with shadow */}
              <div className="absolute inset-0 overflow-hidden rounded-full shadow-xl shadow-neutral-400/80">
                <Image
                  src="/images/me.jpeg"
                  alt="Raymond Negron"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Subtle border ring */}
              <div className="absolute inset-0 rounded-full border border-neutral-100" />
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}
