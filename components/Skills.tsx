import * as svgs from "../lib/svgs";
import { GithubGraph } from "@/components/GithubGraph";

export const Skills = () => {
  return (
    <div className="mx-auto w-full px-4 py-10 sm:w-4/5 sm:justify-center sm:items-center sm:gap-20 sm:p-14">
      <h1
        className="mb-5 mt-6 text-2xl font-bold sm:mt-10 sm:text-3xl"
        id="skills">
        Skills
      </h1>
      <div className="lg:mt-5 mb-15 flex w-full lg:flex-row flex-col lg:gap-20 sm:flex-row gap-10">
        <p className="text-base leading-relaxed lg:mb-5 lg:w-1/2 sm:text-lg">
          I bring a lot more than just the technical skills listed to the right!
          I pride myself in being able to assimilate into existing teams and
          quickly get into the flow of things through my outgoing personality. I
          have experience working in both large and small teams, ensuring the
          morale and productivity of the team stays high with positive and
          respectful energy, and I am always looking for ways to improve my
          skills and learn new technologies by being open to feedback and
          criticism.
        </p>

        <div className="lg:my-5 flex flex-col lg:w-1/2">
          <div className="my-2 grid w-full grid-cols-1 gap-3 md:grid-cols-3 sm:gap-4 md:justify-items-between">
            <div className="flex flex-row">
              {svgs.reactLogo}
              <p className="ml-5">React</p>
            </div>
            <div className="flex flex-row">
              {svgs.nextjsLogo}
              <p className="ml-5">Next.js</p>
            </div>
            <div className="flex flex-row">
              {svgs.blazorLogo}
              <p className="ml-5">Razor</p>
            </div>
            <div className="flex flex-row">
              {svgs.jqueryLogo}
              <p className="ml-5">jQuery</p>
            </div>
            <div className="flex flex-row">
              {svgs.typescriptLogo}
              <p className="ml-5">TypeScript</p>
            </div>
            <div className="flex flex-row">
              {svgs.pythonLogo}
              <p className="ml-5">Python</p>
            </div>
            <div className="flex flex-row">
              {svgs.nodejsLogo}
              <p className="ml-5">Node.js</p>
            </div>
            <div className="flex flex-row">
              {svgs.dotnetLogo}
              <p className="ml-5">.NET (C#, VB)</p>
            </div>
            <div className="flex flex-row">
              {svgs.sqlLogo}
              <p className="ml-5">SQL</p>
            </div>
          </div>
        </div>
      </div>
      <GithubGraph />
    </div>
  );
};
