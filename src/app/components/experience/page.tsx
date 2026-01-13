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
      accomplishments: [
        "Contributed to the end-to-end development of backend applications using Node.js and the NestJS framework, building a scalable microservices architecture from scratch.",
        "Designed and optimized database integrations with Postgres (via Prisma ORM) and DynamoDB, while implementing real-time communication through AWS Lambda and WebSocket APIs.",
        "Ensured secure access and user management by integrating AWS Cognito authentication across services."
      ],
      technologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "AWS"],
    },
    {
      company: "Level Up Technology",
      role: "Python Developer",
      image: "/images/experience/arkrisk.png",
      location: "New York, USA",
      date: "Nov 2023 - Present",
      accomplishments: [
        "Led design and development phase adhered to best practices and standards, collaborating closely with stakeholders.",
        "Implemented performance optimization techniques, such as parallelism ensuring high responsiveness making the process 60% faster.",
        "Demonstrated expertise in troubleshooting and debugging issues, implementing effective error handling mechanisms and logging strategies."
      ],
      technologies: ["Python", "Flask", "Docker", "MongoDB", "Vue.js"],
    },
    {
      company: "Bitmaker",
      role: "Software Developer",
      image: "/images/experience/estela.png",
      location: "Arequipa, Peru",
      date: "Apr 2022 - Oct 2023",
      tag: "Open Source",
      accomplishments: [
        "Implemented backend critical features and performance enhancements. Introduced enhancements to the interface of development platform.",
        "Collaborated closely with designers and quality assurance (QA) teams throughout the development lifecycle, ensuring design alignment specifications.",
        "Successfully integrated new features and modules into existing applications, ensuring seamless integration and compatibility with existing systems."
      ],
      technologies: ["Python", "Django", "React", "Docker", "PostgreSQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Experience</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Where I&apos;ve worked</h2>
      </div>

      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/50"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-xl object-cover w-full lg:w-[280px] h-[160px]"
                  src={experience.image}
                  alt={experience.company}
                  width={280}
                  height={160}
                />
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-neutral-900">{experience.company}</h3>
                      {experience.tag && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-neutral-900 text-white rounded-full">
                          {experience.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-neutral-500 font-light">{experience.role}</p>
                  </div>

                  <div className="flex flex-col lg:items-end gap-1 text-sm text-neutral-400">
                    <div className="flex items-center gap-2">
                      <CalendarOutlined />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvironmentOutlined />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-neutral-600 leading-relaxed">
                  {experience.accomplishments.map((accomplishment, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-neutral-300 mt-1.5">•</span>
                      <span>{accomplishment}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-2">
                  {experience.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
