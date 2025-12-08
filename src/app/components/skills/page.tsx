import Image from "next/image"

export default function Skills () {
  return (
    <section id="skills" className="flex flex-col lg:grid lg:grid-cols-5 px-6 py-12 lg:py-16 max-w-7xl m-auto">
      <div className="flex col-span-2 p-4">
        <h2 className="m-auto lg:text-7xl text-5xl p-4 font-medium text-red-500">
          {"{ "}
          <span className="text-white">SKILLS</span>
          {" }"}
        </h2>
      </div>
      <div className="flex gap-10 lg:gap-12 flex-col col-span-3 justify-center">
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/typescript.svg"}
                alt="TypeScript"
                width={90}
                height={90}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">TypeScript</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/react.png"}
                alt="React"
                width={90}
                height={90}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">React</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/python.png"}
                alt="Python"
                width={90}
                height={90}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
          </div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/django.png"}
                alt="Django"
                width={80}
                height={80}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">Django</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/docker.webp"}
                alt="Docker"
                width={90}
                height={90}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">Docker</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110">
              <Image
                src={"/images/skills/git.png"}
                alt="Git"
                width={100}
                height={90}
              />
            </div>
            <span className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">Git</span>
          </div>
        </div>
      </div>
    </section>
  )
}
