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
    <section id="experience" className="flex flex-col px-6 py-8">
      <div className="flex col-span-2 p-4">
        <p className="m-auto lg:text-7xl text-5xl p-4 font-medium text-red-500">
          {"{ "}
          <span className="text-white">
            EXP
            <span className="font-light text-5xl">erience</span>
          </span>
          {" }"}
        </p>
      </div>
      <div className="flex flex-col lg:gap-6 gap-4 m-auto">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col lg:flex-row gap-4">
            <Image
              className="hover:scale-105 transition-all duration-400 ease-in-out rounded-xl"
              src={experience.image}
              alt="ArkRisk"
              width={540}
              height={180}
            />
            <div className="flex flex-col lg:gap-5 gap-4 m-auto p-2 max-w-[500px]">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-3xl font-medium">{experience.company}</p>
                  {experience.tag && (
                    <span className=" border-light px-2 py-1 text-sm font-extralight h-fit rounded-lg">
                      {experience.tag}
                    </span>
                  )}
                </div>
                <p className="text-2xl">{experience.role}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <CalendarOutlined className="text-blue-500"/>
                  <p className=" font-extralight text-xs">{experience.date}</p>
                </div>
                <div className="flex gap-1">
                  <EnvironmentOutlined className="text-red-500"/>
                  <p className="my-auto font-extralight italic text-xs">{experience.location}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2 text-[14px] font-extralight">
                {experience.accomplishments.map((accomplishment, index) => (
                  <li key={index}>
                    <p>{accomplishment}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {experience.tecnologies.map((technology, index) => (
                  <span key={index} className="bg-neutral-700/90 px-2 py-1 rounded-lg">
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
