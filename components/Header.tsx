"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";

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
          ? "bg-transparent border-transparent"
          : "bg-primary border-foreground"
      } fixed top-0 w-full mx-auto p-5 border-b`}>
      <div className="flex flex-row items-center justify-between max-w-6xl mx-auto">
        <h1 className="">Ryan Fritz</h1>
        <div className="flex gap-8 items-center">
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
export default Header;
