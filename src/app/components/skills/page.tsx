import Image from "next/image"

export default function Skills () {
  return (
    <section id="skills" className="flex flex-col lg:grid lg:grid-cols-5 px-4 lg:px-6 py-16 lg:py-20 max-w-7xl m-auto relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="flex col-span-2 p-2 lg:p-4">
        <div className="m-auto flex flex-col items-center gap-3 lg:gap-4 w-full">
          <div className="flex items-center gap-2 lg:gap-4 justify-center w-full">
            <div className="h-px w-4 lg:w-6 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-3xl lg:text-7xl font-bold relative group text-center">
              <span className="text-purple-500 glow-text font-bold">{`{ `}</span>
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                SKILLS
              </span>
              <span className="text-purple-500 glow-text font-bold">{` }`}</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </h2>
            <div className="h-px w-4 lg:w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          <p className="text-neutral-400 text-xs lg:text-base font-light text-center">Technologies I work with</p>
        </div>
      </div>
      <div className="flex gap-12 lg:gap-14 flex-col col-span-3 justify-center relative z-10">
        <div className="flex justify-evenly items-center flex-wrap gap-6">
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-blue-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/typescript.svg"}
                alt="TypeScript"
                width={90}
                height={90}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-blue-400 glow-text-subtle">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-cyan-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/react.png"}
                alt="React"
                width={90}
                height={90}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-cyan-400 glow-text-subtle">React</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-yellow-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-yellow-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/python.png"}
                alt="Python"
                width={90}
                height={90}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-yellow-400 glow-text-subtle">Python</span>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-wrap gap-6">
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-green-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-green-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/django.png"}
                alt="Django"
                width={80}
                height={80}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-green-400 glow-text-subtle">Django</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-blue-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/docker.webp"}
                alt="Docker"
                width={90}
                height={90}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-blue-400 glow-text-subtle">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-4 group">
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 hover:from-neutral-800/80 hover:to-neutral-900/80 border-2 border-neutral-800/60 group-hover:border-orange-900/50 transition-all duration-500 hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-950/30 backdrop-blur-sm">
              <Image
                src={"/images/skills/git.png"}
                alt="Git"
                width={100}
                height={90}
                className="transition-transform duration-500 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-sm font-medium text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-orange-400 glow-text-subtle">Git</span>
          </div>
        </div>
      </div>
    </section>
  )
}
