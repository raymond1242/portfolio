import { CalendarOutlined } from "@ant-design/icons"

export default function Education () {
  const education = [
    {
      degree: "M.Sc. in Data Science",
      school: "San Pablo Catholic University",
      date: "2024 – Present",
    },
    {
      degree: "B.Sc. in Computer Science",
      school: "San Pablo Catholic University",
      date: "2017 – 2022",
    },
  ]

  return (
    <section id="education" className="py-20 lg:py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Education</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Where I&apos;ve studied</h2>
      </div>

      <div className="divide-y divide-neutral-100 border-y border-neutral-100">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-6"
          >
            <div>
              <h3 className="text-lg font-bold text-neutral-900">{item.degree}</h3>
              <p className="text-neutral-500 font-light">{item.school}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <CalendarOutlined className="text-blue-500" />
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
