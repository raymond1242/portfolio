import Image from "next/image"
import { GithubFilled, ArrowRightOutlined } from "@ant-design/icons"

export default function Projects () {
  const projects = [
    {
      name: "Somer",
      subtitle: "Stock Management System",
      description: "A comprehensive stock management solution that helps businesses track inventory, manage orders, and optimize their supply chain operations.",
      link: "https://www.somer.lat",
      image: "/images/projects/somer-landing.png",
      github: "https://github.com/raymond1242/somer-web",
      technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    },
    {
      name: "Collyn",
      subtitle: "Order Management System",
      description: "An intuitive order management platform designed to streamline the ordering process and improve customer experience for small businesses.",
      link: "https://collyn.vercel.app",
      image: "/images/projects/collyn-landing.png",
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

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-8 bg-white rounded-2xl border broder-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-400/80"
          >
            <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <a href={project.link} target="_blank" className="block">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto rounded-xl"
                  width={680}
                  height={450}
                />
              </a>
            </div>

            <div className={`flex flex-col gap-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div>
                <p className="text-base font-medium text-neutral-600 tracking-wide mb-2">{project.subtitle}</p>
                <h3 className="text-4xl font-bold text-neutral-900">{project.name}</h3>
              </div>

              <p className="text-neutral-800 font-light leading-relaxed text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-semibold bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-blue-600 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRightOutlined className="text-xs" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  <GithubFilled className="text-lg" />
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
