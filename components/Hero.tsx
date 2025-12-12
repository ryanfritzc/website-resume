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
            I am a web developer specializing in full-stack development, site and SEO
            optimization, incorporating and utilizing 3rd party analytical
            tools, and fast pace individual teams or agile workflows.
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
          </div>
        </div>
      </div>
    </div>
  );
};
