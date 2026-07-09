"use client";
import { getCurrentYear, scrollToLocation } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-2 px-4 py-6 text-sm sm:w-64 sm:flex-nowrap sm:justify-start sm:gap-2.5 sm:px-0 sm:py-0 sm:text-base">
      <p className="text-center sm:text-left">© {getCurrentYear()} Ryan Fritz</p>
      <p> | </p>
      <p
        className="underline hover:cursor-pointer"
        onClick={() => scrollToLocation(0)}>
        Back to top
      </p>
    </div>
  );
};

export default Footer;
