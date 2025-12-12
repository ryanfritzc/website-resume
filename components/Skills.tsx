import * as svgs from "../lib/svgs";

export const Skills = () => {
  return (
    <div className="flex flex-row mx-auto justify-center items-center gap-20 w-4/5">
      <div className="w-1/2 flex my-5 flex-col">
        <h1 className="text-3xl font-bold mt-10" id="skills">
          Skills
        </h1>
        <p className="text-lg mb-5">
          I am a web developer specializing in full-stack development, site and
          SEO optimization, incorporating and utilizing 3rd party analytical
          tools, and fast pace individual teams or agile workflows. Experienced
          in building and maintaining high-performance websites and delivering
          creative solutions in fast-paced environments. Eager to learn and
          adapt to meet evolving business needs
        </p>
      </div>
      <div className="w-1/2 flex my-5 flex-col ">
        <div className="grid-cols-2 md:justify-items-between my-2 grid w-full gap-4 md:grid-cols-3">
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
            <p className="ml-5">Blazor</p>
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
            {svgs.dotnetCore}
            <p className="ml-5">.NET (Core)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
