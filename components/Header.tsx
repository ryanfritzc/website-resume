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
      } fixed top-0 z-50 w-full border-b px-4 py-3 sm:p-5`}>
      <div className="mx-auto flex w-full items-center justify-between gap-3 sm:max-w-6xl sm:flex-row">
        <h1
          className="text-sm sm:text-base hover:underline hover:cursor-pointer"
          onClick={() => scrollToLocation(0)}>
          Ryan Fritz
        </h1>
        <div className="flex items-center gap-3 text-sm sm:gap-8 sm:text-base">
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() => scrollToLocation(getElementPosition("skills", "y"))}>
            Skills
          </p>
          <p
            className="hover:underline hover:cursor-pointer"
            onClick={() =>
              scrollToLocation(getElementPosition("projects", "y"))
            }>
            Projects
          </p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Header;
