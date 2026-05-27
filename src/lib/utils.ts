import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";

//Merge tailwind class
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Prevent remove specific tags to sanitize
export const sanitizedData = (data: string) => {
  const sanitizedHtml = DOMPurify.sanitize(data, {
    ADD_TAGS: ["iframe", "video", "source"],
    ADD_ATTR: ["src", "allowfullscreen", "frameborder", "controls"],
  });

  return { __html: sanitizedHtml };
};

//Remove HTML code
export const stripHtml = (html: string) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  // textContent returns the plain text without tags
  return tempDiv.textContent || tempDiv.innerText || "";
};

export const calendarDateFormat = (formatDate: string) => {
  const fullDate = new Intl.DateTimeFormat("pt-BR", { month: "short", day: "numeric", timeZone: "UTC" }).format(
    new Date(formatDate),
  );
  const date = fullDate.split(" de ");
  const day = date[0].length < 2 ? `0${date[0]}` : date[0];
  const month = date[1].slice(0, -1);
  return {
    day,
    month,
  };
};