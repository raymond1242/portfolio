import { EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons"
import Image from "next/image"

export default function Experience () {

  const experiences = [
    {
      company: "Bluepoint AI",
      role: "Software Developer",
      image: "/images/experience/bluepoint.png",
      location: "Lima, PE",
      date: "Nov 2024 - May 2025",
      description: "Built scalable microservices with NestJS and AWS. Designed database integrations with Postgres and DynamoDB, implementing real-time WebSocket APIs.",
      technologies: ["Node.js", "NestJS", "AWS", "PostgreSQL"],
    },
    {
      company: "Level Up Technology",
      role: "Python Developer",
      image: "/images/experience/arkrisk.png",
      location: "New York, USA",
      date: "Nov 2023 - Present",
      description: "Led backend development with performance optimizations achieving 60% faster processing. Implemented robust error handling and logging strategies.",
      technologies: ["Python", "Flask", "MongoDB", "Docker"],
    },
    {
      company: "Bitmaker",
      role: "Software Developer",
      image: "/images/experience/estela.png",
      location: "Arequipa, Peru",
      date: "Apr 2022 - Oct 2023",
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

      <div className="grid md:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white rounded-2xl border border-neutral-100 hover:border-neutral-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-neutral-400/80"
          >
            {/* Image at top */}
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.company}
                fill
                className="object-cover"
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
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
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
