import Image from "next/image"
import { GithubFilled, LinkOutlined } from "@ant-design/icons"

export default function Projects () {
  const projects = [
    {
      name: "Somer",
      subtitle: "Stock Management System",
      description: "A simple todo list app that allows users to add, edit, and delete tasks.",
      link: "https://www.somer.lat",
      image: "/images/projects/somer.png",
      github: "https://github.com/raymond1242/somer-web",
      tecnologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    },
    {
      name: "Collyn",
      subtitle: "Order Management System",
      description: "A weather app that allows users to check the weather in their location.",
      link: "https://collyn.vercel.app",
      image: "/images/projects/collyn.png",
      github: "https://github.com/raymond1242/collyn-web",
      tecnologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    }
  ]

  return (
    <section id="projects" className="px-4 lg:px-6 py-16 lg:py-20 relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="flex flex-col items-center pb-8 lg:pb-12 lg:mb-12 gap-3 lg:gap-4">
        <div className="flex items-center gap-2 lg:gap-4 w-full justify-center">
          <div className="h-px w-4 lg:w-16 bg-gradient-to-r from-transparent to-blue-500/50" />
          <h2 className="text-3xl lg:text-7xl font-bold relative group text-center">
            <span className="text-blue-500 glow-text font-bold">&lt;</span>
            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              PROJECT
              <span className="text-yellow-400 font-mono">.ts</span>
            </span>
            <span className="text-blue-500 glow-text font-bold">/&gt;</span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </h2>
          <div className="h-px w-4 lg:w-16 bg-gradient-to-l from-transparent to-blue-500/50" />
        </div>
        <p className="text-neutral-400 text-xs lg:text-base font-light text-center">Things I&apos;ve built</p>
      </div>
      <div className="flex flex-col gap-16 lg:gap-20 max-w-7xl m-auto relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group lg:flex grid m-auto gap-8 lg:gap-10 p-6 lg:p-8 rounded-2xl"
          >
            <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? "lg:order-last" : ""}`}>
              <Image
                src={project.image}
                alt={project.name}
                className="m-auto rounded-2xl border-2 border-neutral-800/60 group-hover:border-blue-900/40 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-blue-950/30"
                width={680}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-red-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col lg:max-w-96 gap-5 z-10 my-auto lg:-mx-6 p-6 lg:p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 rounded-2xl backdrop-blur-md border border-neutral-800/50 group-hover:border-neutral-700/80 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-950/20">
              <div className="flex gap-3 items-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex text-blue-400 hover:text-blue-300 transition-colors p-2 rounded-lg hover:bg-blue-950/30 glow-text-subtle"
                  aria-label={`Visit ${project.name}`}
                >
                  <LinkOutlined className="text-3xl" />
                </a>
                <h3 className="text-3xl bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent font-semibold">{project.name}</h3>
              </div>
              <p className="text-xl font-light text-red-400 glow-text-subtle">{project.subtitle}</p>
              <p className="text-sm font-light leading-relaxed text-neutral-400">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center border border-neutral-700/80 hover:bg-neutral-800/50 hover:border-neutral-600 bg-neutral-900/50 font-light text-sm py-2.5 px-4 rounded-lg gap-2 w-fit transition-all duration-300 shadow-md hover:shadow-lg text-neutral-300"
              >
                <GithubFilled className="text-xl" />
                <span>Source code</span>
              </a>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tecnologies.map((tecnology, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-neutral-800/90 to-neutral-900/90 text-xs px-3 py-1.5 rounded-lg font-medium border border-neutral-700/50 text-neutral-300 hover:border-blue-900/50 transition-all duration-300"
                  >
                    {tecnology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
