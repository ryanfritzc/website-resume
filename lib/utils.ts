//used to merge class names together, mainly for shadcn components
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear() {
  return new Date().getFullYear().toString();
}

export function scrollToLocation(scrollLocation: number) {
  document.body.scrollTop = scrollLocation;
  document.documentElement.scrollTop = scrollLocation;
}

export function getElementPosition(id: string, axis: "x" | "y"): number {
  const element = document.getElementById(id);
  if (element) {
    const rect = element.getBoundingClientRect();
    if (axis === "x") return rect.left;
    return rect.top - 200;
  }
  return 0;
}
