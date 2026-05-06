import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import DOMPurify from "isomorphic-dompurify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sanitizedData = (data: string) => ({
  __html: DOMPurify.sanitize(data),
});

export const stripHtml = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    // textContent returns the plain text without tags
    return tempDiv.textContent || tempDiv.innerText || "";
}