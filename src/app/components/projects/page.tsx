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
    <section id="projects" className="px-6 py-12 lg:py-16">
      <h2 className="lg:text-7xl text-5xl text-red-500 text-center pb-8 lg:mb-8">
        &lt;
        <span className="text-white font-medium">
          PROJEC
          <span className="font-light text-5xl">.ts</span>
        </span>
        /&gt;
      </h2>
      <div className="flex flex-col gap-12 lg:gap-16 max-w-7xl m-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:flex grid m-auto gap-8 lg:gap-10 p-4 rounded-md"
          >
            <Image
              src={project.image}
              alt={project.name}
              className={`m-auto rounded-2xl border-2 border-neutral-700 hover:border-neutral-600 shadow-lg transition-all duration-300 hover:scale-[1.02] ${index % 2 === 0 ? "lg:order-last z-0" : ""}`}
              width={680}
              height={450}
            />
            <div className="flex flex-col lg:max-w-96 gap-4 z-10 my-auto lg:-mx-4 p-5 bg-neutral-900/50 rounded-xl backdrop-blur-sm">
              <div className="flex gap-3 items-center">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex text-blue-500 hover:text-blue-400 transition-colors"
                  aria-label={`Visit ${project.name}`}
                >
                  <LinkOutlined className="text-3xl" />
                </a>
                <h3 className="text-3xl text-neutral-400 font-semibold">{project.name}</h3>
              </div>
              <p className="text-xl font-light text-neutral-300">{project.subtitle}</p>
              <p className="text-sm font-light leading-relaxed">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center border border-neutral-700 hover:bg-neutral-600 hover:border-neutral-600 font-light text-sm py-2 px-3 rounded-lg gap-2 w-fit transition-all duration-300"
              >
                <GithubFilled className="text-xl" />
                <span>Source code</span>
              </a>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tecnologies.map((tecnology, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700/90 text-xs px-3 py-1.5 rounded-lg font-medium"
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
