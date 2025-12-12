"use client";
import { getCurrentYear, scrollToLocation } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="w-64 mx-auto flex gap-2.5">
      <p>© {getCurrentYear()} Ryan Fritz</p>
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
