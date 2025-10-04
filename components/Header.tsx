"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
export default function Header() {
  return (
    <div className="bg-primary w-full mx-auto flex justify-between p-5">
      <h1 className="">Ryan Fritz</h1>
      <div className="flex gap-8 items-center">
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <ThemeSwitcher />
    </div>
  );
}
