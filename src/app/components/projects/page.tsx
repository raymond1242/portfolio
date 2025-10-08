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
    <section id="projects" className="px-6 py-8 lg:py-14">
      <h1 className="lg:text-7xl text-4xl text-red-500 text-center pb-4 lg:mb-6">
        &lt;
        <span className="text-white font-medium">
          PROJEC
          <span className="font-light text-5xl">.ts</span>
        </span>
        /&gt;
      </h1>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:flex grid m-auto gap-6 p-4 rounded-md"
          >
            <Image
              src={project.image}
              alt={project.name}
              className={`m-auto rounded-2xl border-2 border-white ${index % 2 === 0 ? "lg:order-last z-0" : ""}`}
              width={680}
              height={450}
            />
            <div className="flex flex-col lg:max-w-96 gap-3 z-10 my-auto lg:-mx-4 p-5">
              <div className="flex gap-1">
                <a
                  href={project.link}
                  target="_blank"
                  className="flex gap-1 text-blue-500" 
                >
                  <LinkOutlined className="flex m-auto mb-1 text-3xl"/>
                </a>
                <p className="text-3xl text-neutral-400 font-semibold my-auto">{project.name}</p>
              </div>
              <p className="text-xl font-light">{project.subtitle}</p>
              <p className="text-md font-light my-1">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                className="flex border-light hover:bg-neutral-600 font-light text-xs py-1 px-1.5 border-white rounded-lg gap-1.5 w-fit"
              >
                <GithubFilled className="flex m-auto mb-1 text-xl"/>
                <p className="m-auto mt-1">
                  Source code
                </p>
              </a>
              <div className="flex gap-2 mt-2">
                {project.tecnologies.map((tecnology, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700/90 text-xs px-2 py-1 rounded-lg"
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
