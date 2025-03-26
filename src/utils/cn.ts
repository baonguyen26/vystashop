import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cleanUrl = (url: string) => {
  const urlObj = new URLSearchParams(url.replace(/^\?/, ""));
  urlObj.delete("p");
  urlObj.delete("l");
  return urlObj.toString() ? `?${urlObj.toString()}` : "";
};
