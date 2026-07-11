import Headshot from "../app/assets/headshot.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex w-full bg-secondary px-10 pb-10 pt-24 sm:h-dvh lg:px-0 sm:pb-0 sm:pt-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-20">
        <div className="w-full max-w-sm sm:w-auto sm:max-w-none">
          <Image
            src={Headshot}
            alt="Ryan Fritz"
            className="h-auto w-full rounded-2xl sm:w-auto"
          />
        </div>
        <div className="flex w-full flex-col sm:max-w-1/2">
          <h1 className="mb-5 text-3xl font-bold sm:text-5xl">
            Hey, I&apos;m Ryan Fritz
          </h1>
          <p className="mb-5 text-base leading-relaxed sm:text-lg">
            I am a web developer specializing in full-stack development, site
            and SEO optimization, incorporating and utilizing 3rd party
            analytical tools, and fast pace individual teams or agile workflows.
            Experienced in building and maintaining high-performance websites
            and delivering creative solutions in fast-paced environments. Eager
            to learn and adapt to meet evolving business needs
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
            <p className="text-sm sm:text-md sm:mb-5">📞 919-426-8030</p>
            <p className="text-sm sm:text-md sm:mb-5">
              ✉️{" "}
              <a
                className="text-ring hover:underline"
                href="mailto:ryanfritzc@gmail.com">
                ryanfritzc@gmail.com
              </a>
            </p>
            <p className="flex flex-row items-center gap-2 text-sm sm:text-md sm:mb-5">
              📃{" "}
              <a
                className="text-ring hover:underline"
                href="RyanFritz_Resume.pdf"
                download="RyanFritz_Resume.pdf">
                Resume
              </a>
            </p>
            <p className="flex flex-row items-center gap-2 text-sm sm:text-md sm:mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="linkedin-bug-medium"
                fill="currentColor"
                aria-hidden="true"
                data-supported-dps="24x24"
                viewBox="0 0 24 24"
                data-token-id="215"
                width="16"
                height="16"
                className="_605bf263 _70e4f2de _97fac828 e3e94a45 _321a6fc6">
                <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2M8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75M19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.7.7 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              <a
                className="text-ring hover:underline"
                href="https://www.linkedin.com/in/ryan-fritz-60772814a">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
