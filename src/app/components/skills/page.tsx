import Image from "next/image"

export default function Skills () {
  return (
    <section id="skills" className="flex flex-col lg:grid lg:grid-cols-5 px-6 py-8 lg:py-14">
      <div className="flex col-span-2 p-4">
        <p className="m-auto lg:text-7xl text-5xl p-4 font-medium text-red-500">
          {"{ "}
          <span className="text-white">SKILLS</span>
          {" }"}
        </p>
      </div>
      <div className="flex gap-8 flex-col col-span-3">  
        <div className="flex justify-evenly">
          <Image
            src={"/images/skills/typescript.svg"}
            alt="TypeScript"
            width={90}
            height={90}
          />
          <Image
            src={"/images/skills/react.png"}
            alt="React"
            width={90}
            height={90}
          />
          <Image
            src={"/images/skills/python.png"}
            alt="Python"
            width={90}
            height={90}
          />
        </div>
        <div className="flex justify-evenly">
          <Image
            src={"/images/skills/django.png"}
            alt="Django"
            width={80}
            height={80}
          />
          <Image
            src={"/images/skills/docker.webp"}
            alt="Docker"
            width={90}
            height={90}
          />
          <Image
            src={"/images/skills/git.png"}
            alt="Git"
            width={100}
            height={90}
          />
        </div>
      </div>
    </section>
  )
}
