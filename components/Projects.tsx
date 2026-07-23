import dmhLight from "../app/assets/projectScreenshots/dmhLight.png";
import dmhDark from "../app/assets/projectScreenshots/dmhDark.png";
import Image from "next/image";
export const Projects = () => {
  return (
    <div
      className="mx-auto my-8 flex w-full max-w-6xl flex-col gap-10 rounded-xl bg-secondary px-4 py-8 sm:my-5 sm:w-4/5 sm:max-w-none sm:gap-32 sm:px-0 sm:py-10"
      id="projects">
      <div className="flex flex-col gap-10 sm:ml-15 sm:gap-15">
        <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
        <div className="flex flex-col gap-8 sm:ml-5 sm:gap-5 sm:pr-20">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold sm:text-2xl">
              Digital Marketing Hub
            </h3>
            <p className="text-sm leading-relaxed sm:text-base">
              The Digital Marketing Hub was a project given to me to create a
              comprehensive central location for high level information. The
              goal for this was a &apos;one stop shop&apos; for what my team
              worked on to keep transparency and encourage cross team
              communication and knowledge. I essentially created a web
              application that not only pulled information from Jira, Asana,
              Matomo, our Sanity instance, and our Confluence pages, but also
              enabled analysis done through optional checking of data that was
              pulled. For example, I pulled in and broke down the makeup of
              every blog on our website - Word count, custom components that
              were used, authors, etc. With this, they are also compared with
              each other to make decisions on future directions. The website was
              built using Next.js and Tailwind CSS, and it was designed to be
              responsive and user-friendly. The website included a blog, a
              resources section, and a contact form. The project was a success,
              and the website is now live and being used by our team. The
              screenshots below show the idea, with some redacted information to
              protect the privacy of the company.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
              <Image
                src={dmhLight}
                className="h-auto w-full rounded-lg border border-border sm:w-1/2 sm:rounded-none sm:border-0"
                alt="Digital Marketing Hub Screenshot"
              />
              <Image
                src={dmhDark}
                className="h-auto w-full rounded-lg border border-border sm:w-1/2 sm:rounded-none sm:border-0"
                alt="Digital Marketing Hub Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
