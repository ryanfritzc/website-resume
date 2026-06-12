import Headshot from "../app/assets/headshot.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-dvh flex bg-secondary pt-20">
      <div className="w-full flex flex-row items-center justify-between max-w-6xl mx-auto gap-20">
        <div>
          <Image src={Headshot} alt="Ryan Fritz" className="rounded-2xl" />
        </div>
        <div className="flex flex-col max-w-1/2">
          <h1 className="text-5xl font-bold mb-5">Hey, I'm Ryan Fritz</h1>
          <p className="text-lg mb-5">
            I am a web developer specializing in full-stack development, site
            and SEO optimization, incorporating and utilizing 3rd party
            analytical tools, and fast pace individual teams or agile workflows.
            Experienced in building and maintaining high-performance websites
            and delivering creative solutions in fast-paced environments. Eager
            to learn and adapt to meet evolving business needs
          </p>
          <div className="flex flex-row gap-5">
            <p className="text-md mb-5">📞 919-426-8030</p>
            <p className="text-md mb-5">
              ✉️{" "}
              <a
                className="text-ring hover:underline"
                href="mailto:ryanfritzc@gmail.com">
                ryanfritzc@gmail.com
              </a>
            </p>
            <p className="text-md mb-5 flex flex-row items-center gap-2">
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
