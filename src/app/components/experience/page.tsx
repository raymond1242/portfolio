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
        "Contributed to the end-to-end development of backend applications using Node.js and the NestJS framework, building a scalable",
        "microservices architecture from scratch. Designed and optimized database integrations with Postgres (via Prisma ORM) and",
        "DynamoDB, while implementing real-time communication through AWS Lambda and WebSocket APIs. Ensured secure access and user management by integrating AWS Cognito authentication across services"
      ],
      tecnologies: ["Node.js", "NestJS", "Docker", "PostgreSQL", "Flask"],
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
      tecnologies: ["Python", "Flask", "Docker", "MongoDB", "Vue.js"],
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
      tecnologies: ["Python", "Django", "ReactTS", "Docker", "PostgreSQL", "MongoDB"],
    },
  ]

  return (
    <section id="experience" className="flex flex-col px-6 py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
      <div className="flex col-span-2 p-4 mb-8">
        <h2 className="m-auto lg:text-7xl text-5xl p-4 font-medium text-red-500 glow-text">
          {"{ "}
          <span className="text-white">
            EXP
            <span className="font-light text-5xl">erience</span>
          </span>
          {" }"}
        </h2>
      </div>
      <div className="flex flex-col lg:gap-14 gap-10 m-auto max-w-6xl relative z-10">
        {experiences.map((experience, index) => (
          <div key={index} className="group flex flex-col lg:flex-row gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/40 to-neutral-950/40 border border-neutral-800/50 hover:border-neutral-700/80 transition-all duration-500 hover:shadow-2xl hover:shadow-red-950/20 backdrop-blur-sm">
            <div className="relative my-auto overflow-hidden rounded-xl flex-shrink-0 self-center lg:self-start">
              <Image
                className="transition-all duration-500 ease-out rounded-xl border-2 border-neutral-800/60 group-hover:border-red-900/40 shadow-lg group-hover:scale-105 group-hover:shadow-red-950/30"
                src={experience.image}
                alt={experience.company}
                width={540}
                height={160}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col lg:gap-5 gap-4 p-2 max-w-[540px]">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">{experience.company}</h3>
                  {experience.tag && (
                    <span className="border border-red-900/50 px-3 py-1 text-sm font-light h-fit rounded-lg bg-red-950/30 text-red-300 shadow-md">
                      {experience.tag}
                    </span>
                  )}
                </div>
                <p className="text-2xl lg:text-3xl font-light text-neutral-300">{experience.role}</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <div className="flex gap-2 items-center px-3 py-1.5 rounded-lg bg-blue-950/20 border border-blue-900/30">
                  <CalendarOutlined className="text-blue-400" />
                  <span className="font-light text-blue-300">{experience.date}</span>
                </div>
                <div className="flex gap-2 items-center px-3 py-1.5 rounded-lg bg-red-950/20 border border-red-900/30">
                  <EnvironmentOutlined className="text-red-400" />
                  <span className="font-light italic text-red-300">{experience.location}</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 text-sm font-light leading-relaxed list-disc list-inside text-neutral-400 marker:text-red-500">
                {experience.accomplishments.map((accomplishment, index) => (
                  <li key={index} className="pl-2">
                    {accomplishment}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs mt-2">
                {experience.tecnologies.map((technology, index) => (
                  <span key={index} className="bg-gradient-to-r from-neutral-800/90 to-neutral-900/90 px-3 py-1.5 rounded-lg font-medium border border-neutral-700/50 text-neutral-300 hover:border-red-900/50 hover:from-neutral-800 hover:to-neutral-900 transition-all duration-300">
                    {technology}
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
