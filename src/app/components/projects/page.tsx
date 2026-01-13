import Image from "next/image"
import { GithubFilled, ArrowRightOutlined } from "@ant-design/icons"

export default function Projects () {
  const projects = [
    {
      name: "Somer",
      subtitle: "Stock Management System",
      description: "A comprehensive stock management solution that helps businesses track inventory, manage orders, and optimize their supply chain operations.",
      link: "https://www.somer.lat",
      image: "/images/projects/somer.png",
      github: "https://github.com/raymond1242/somer-web",
      technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    },
    {
      name: "Collyn",
      subtitle: "Order Management System",
      description: "An intuitive order management platform designed to streamline the ordering process and improve customer experience for small businesses.",
      link: "https://collyn.vercel.app",
      image: "/images/projects/collyn.png",
      github: "https://github.com/raymond1242/collyn-web",
      technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    }
  ]

  return (
    <section id="projects" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Projects</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Things I&apos;ve built</h2>
      </div>

      <div className="grid gap-8 lg:gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <a href={project.link} target="_blank" className="block">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  width={680}
                  height={450}
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300 rounded-2xl" />
              </a>
            </div>

            <div className={`flex flex-col gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div>
                <p className="text-sm font-medium text-neutral-400 mb-1">{project.subtitle}</p>
                <h3 className="text-3xl font-bold text-neutral-900">{project.name}</h3>
              </div>

              <p className="text-neutral-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRightOutlined className="text-xs" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <GithubFilled className="text-base" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
