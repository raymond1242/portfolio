import Image from "next/image"

export default function Skills () {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "/images/skills/python.png" },
        { name: "TypeScript", icon: "/images/skills/typescript.svg" },
        { name: "JavaScript", icon: "/images/skills/javascript.png" },
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: "/images/skills/react.png" },
        { name: "Django", icon: "/images/skills/django.png" },
        { name: "NestJS", icon: "/images/skills/nestjs.svg" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Docker", icon: "/images/skills/docker.webp" },
        { name: "Git", icon: "/images/skills/git.png" },
        { name: "AWS", icon: "/images/skills/aws.png" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Skills</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Technologies I use</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
                    className="object-contain"
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
