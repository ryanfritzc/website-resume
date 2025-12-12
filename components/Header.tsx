"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import { scrollToLocation, getElementPosition } from "@/lib/utils";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  function isScrollAtTop() {
    return scrollY === 0;
  }

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrollAtTop()
          ? "bg-secondary border-transparent"
          : "bg-secondary border-foreground "
      } fixed top-0 w-full mx-auto p-5 border-b`}>
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto">
        <h1
          className="hover:underline hover:cursor-pointer"
          onClick={() => scrollToLocation(0)}>
          Ryan Fritz
        </h1>
        <div className="flex gap-8 items-center">
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() => scrollToLocation(getElementPosition("skills", "y"))}>
            Skills
          </p>
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() => scrollToLocation(0)}>
            Projects
          </p>
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() => scrollToLocation(0)}>
            Contact
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Header;
