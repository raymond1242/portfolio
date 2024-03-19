import Skills from "./components/skills/page";
import Projects from "./components/projects/page";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-t from-gray-300 to-white flex px-6 lg:py-14 py-8">
        <div className="flex flex-col lg:gap-4 gap-2 m-auto px-4 py-2">
          <p className="text-3xl">Hi ✋,</p>
          <div className="flex gap-2">
            <p className="lg:text-5xl text-xl font-light content-end">I'm</p>
            <p className="lg:text-6xl text-2xl font-medium">Raymond</p>
          </div>
          <p className="lg:text-6xl text-2xl font-bold cursor">
            SOFTWARE DEVELOPER.
          </p>
          <div className="flex flex-col lg:my-6 gap-2 my-1 lg:text-2xl text-xl">
            <span className="font-medium text-3xl text-red-600">{`{`}</span>
            <span className="max-w-96 lg:ml-8 ml-2 font-light">
              I'm an
              <span className="mx-1 font-semibold">enthusiastic</span>
              programmer showing my skills and projects.
            </span>
            <span className="font-medium text-3xl text-red-600">{`}`}</span>
          </div>
          <p className="lg:text-xl text-lg font-light">
            <span className="text-red-600 underline underline-offset-4 decoration-4 decoration-red-600 mr-1">
              Explore my work
            </span>
            and let's innovate together.
          </p>
        </div>
      </div>
      <Skills/>
      <Projects/>
    </main>
  );
}
