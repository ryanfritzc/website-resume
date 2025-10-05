//used to merge class names together, mainly for shadcn components
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentYear() {
  return new Date().getFullYear().toString();
}

export function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}