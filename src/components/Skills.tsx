import Image from "next/image"

export default function Skills () {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "/images/skills/python.webp" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript.webp" },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: "/images/skills/react.webp" },
        { name: "Django", icon: "/images/skills/django.webp" },
        { name: "Flask", icon: "/images/skills/flask.svg" },
        { name: "NestJS", icon: "/images/skills/nestjs.svg" },
        { name: "Scrapy", icon: "/images/skills/scrapy.svg" },
      ]
    },
    {
      title: "Data",
      skills: [
        { name: "Snowflake", icon: "/images/skills/snowflake.svg" },
        { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
        { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: "/images/skills/aws.webp" },
        { name: "Docker", icon: "/images/skills/docker.webp" },
        { name: "Git", icon: "/images/skills/git.webp" },
        { name: "GitHub Actions", icon: "/images/skills/github-actions.svg" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Skills</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Technologies I use</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-neutral-900 mb-6">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors duration-200"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    // Explicit w-10/h-10: Tailwind's preflight sets img { height: auto }, which otherwise resizes
                    // non-square icons (e.g. AWS 160x96 rendered 40x24) and triggers next/image's aspect-ratio warning
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-neutral-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
