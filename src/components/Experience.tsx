import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons"
import Image from "next/image"

export default function Experience () {

  const experiences = [
    {
      company: "Inetum",
      role: "Data & AI Engineer",
      image: "/images/experience/inetum.webp",
      location: "Lima, Peru",
      date: "2026 – Present",
      description: "Data and AI engineering on Belcorp's Snowflake and AWS platform. Built Cortex Agents (text-to-SQL, RAG) for natural-language analytics and MCP servers connecting AI assistants to internal tools.",
      technologies: ["Snowflake", "Cortex AI", "Python", "TypeScript"],
    },
    {
      company: "Brandsolo",
      role: "Full Stack Developer",
      image: "/images/experience/brandsolo.webp",
      location: "Arequipa, Peru",
      date: "2025 – 2026",
      description: "Built large-scale Scrapy pipelines for JavaScript-rendered e-commerce sites, from spider development to validation and multi-database sync, running on AWS with centralized monitoring.",
      technologies: ["Python", "Scrapy", "AWS"],
    },
    {
      company: "Bluepoint AI",
      role: "Software Developer",
      image: "/images/experience/bluepoint.webp",
      location: "Lima, Peru",
      date: "2024 – 2025",
      description: "Built scalable microservices with NestJS and AWS. Designed database integrations with Postgres and DynamoDB, implementing real-time WebSocket APIs.",
      technologies: ["Node.js", "NestJS", "AWS", "PostgreSQL"],
    },
    {
      company: "Level Up Technology",
      role: "Python Developer",
      image: "/images/experience/arkrisk.webp",
      location: "New York, USA",
      date: "2023 – 2025",
      description: "Built and optimized high-performance backend APIs with Python (Flask), owning the full API lifecycle. Increased core processing performance 4× through parallelization and scaled MongoDB for high-volume data.",
      technologies: ["Python", "Flask", "MongoDB", "Docker"],
    },
    {
      company: "Bitmaker",
      role: "Software Developer",
      image: "/images/experience/estela.webp",
      location: "Arequipa, Peru",
      date: "2022 – 2023",
      tag: "Open Source",
      description: "Developed critical backend features and UI enhancements. Collaborated with design and QA teams to deliver seamless integrations.",
      technologies: ["Python", "Django", "React", "Docker"],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Experience</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Where I&apos;ve worked</h2>
      </div>

      {/* Flex instead of grid so an incomplete last row stays centered; card width = 1/2 (md) or 1/3 (lg) minus the gaps */}
      <div className="flex flex-wrap justify-center gap-6">
        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="group flex flex-col w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] bg-white rounded-2xl border border-neutral-100 hover:border-neutral-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neutral-400/80"
          >
            {/* Image at top */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.company}
                fill
                sizes="(min-width: 1152px) 336px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
              />
              {experience.tag && (
                <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-medium bg-neutral-900 text-white rounded-full">
                  {experience.tag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col p-6 flex-1">
              <h3 className="text-lg font-bold text-neutral-900">{experience.company}</h3>
              <p className="text-neutral-500 text-lg font-light mb-3">{experience.role}</p>

              <div className="flex flex-col gap-1 text-xs text-neutral-500 mb-4">
                <div className="flex items-center gap-2">
                  <CalendarOutlined className="text-blue-500" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <EnvironmentOutlined className="text-red-500" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-4">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                  >
                    {tech}
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
