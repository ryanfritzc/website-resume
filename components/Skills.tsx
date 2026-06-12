import * as svgs from "../lib/svgs";

export const Skills = () => {
  return (
    <div className="mx-auto justify-center items-center gap-20 w-4/5 p-14">
      <h1 className="text-3xl font-bold mt-10 mb-5" id="skills">
        Skills
      </h1>
      <div className="w-full flex my-5 flex-col sm:flex-row sm:gap-20">
        <p className="text-lg sm:mb-5 sm:w-1/2">
          I bring a lot more than just the technical skills listed to the right!
          I pride myself in being able to assimilate into existing teams and
          quickly get into the flow of things through my outgoing personality. I
          have experience working in both large and small teams, ensuring the
          morale and productivity of the team stays high with positive and
          respectful energy, and I am always looking for ways to improve my
          skills and learn new technologies by being open to feedback and
          criticism.
        </p>

        <div className="sm:w-1/2 flex my-5 flex-col ">
          <div className="grid-cols-3 md:justify-items-between my-2 grid w-full gap-2 sm:gap-4">
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
    </div>
  );
};
