import Image from "next/image"
import { GithubFilled, LinkOutlined } from "@ant-design/icons"

export default function Projects () {
  const projects = [
    {
      name: "Photo Gallery",
      description: "A photo gallery app that allows users to upload and share their photos.",
      link: "/projects/photo-gallery",
      image: "/images/projects/todo.png",
      github: "https://github.com/raymond1242/todo-list",
      tecnologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      name: "Todo List",
      description: "A simple todo list app that allows users to add, edit, and delete tasks.",
      link: "/projects/todo-list",
      image: "/images/projects/todo-list-app.png",
      github: "https://github.com/raymond1242/todo-list",
      tecnologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      name: "Weather App",
      description: "A weather app that allows users to check the weather in their location.",
      link: "/projects/weather-app",
      image: "/images/projects/todo-list.png",
      github: "https://github.com/raymond1242/todo-list",
      tecnologies: ["React", "TypeScript", "Node.js", "MongoDB"],
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
            className="lg:flex grid m-auto gap-3 p-4 rounded-md"
          >
            <Image
              src={project.image}
              alt={project.name}
              className={`m-auto rounded-2xl ${index % 2 === 0 ? "lg:order-last z-0" : ""}`}
              width={500}
              height={450}
            />
            <div className="bg-neutral-700/95 flex flex-col lg:max-w-96 gap-3 z-10 my-auto lg:-mx-8 p-5 rounded-xl">
              <div className="flex gap-1">
                <a
                  href={project.link}
                  className="flex gap-1 text-blue-500" 
                >
                  <LinkOutlined className="flex m-auto mb-1 text-4xl"/>
                </a>
                <p className="text-3xl font-medium my-auto">{project.name}</p>
              </div>
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
              <div>
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
