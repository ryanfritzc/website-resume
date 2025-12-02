import Headshot from "../app/assets/headshot.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full h-dvh flex bg-secondary pt-20">
      <div className="w-full flex flex-row items-center justify-between max-w-6xl mx-auto gap-10">
        <div>
          <Image
            src={Headshot}
            alt="Ryan Fritz"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-5">Hi, I'm Ryan Fritz</h1>
          <p className="text-lg mb-5">
            I'm a software developer specializing in building exceptional
            digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
};
