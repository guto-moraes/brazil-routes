import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import DOMPurify from "isomorphic-dompurify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Prevent remove specific tags to sanitize
export const sanitizedData = (data: string) => {
  const sanitizedHtml = DOMPurify.sanitize(data, {
    ADD_TAGS: ["iframe", "video", "source"],
    ADD_ATTR: ["src", "allowfullscreen", "frameborder", "controls"],
  });

  return { __html: sanitizedHtml };
};

// Remove HTML code
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

// Formata a data para as postagens
/**
 * Function to forma.
 * @param str date one Date() format.
 */
export const dateFormat = (str: string) => {
  const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(str));
  return date;
};

/**
 * Function to split one string by position.
 * @param str Splitted string.
 * @returns str splitted in index position.
 */
const splitSingleString = (str: string, index: number): [string, string] => {
  return [str.slice(0, index), str.slice(index)];
};

/**
 * Function to split long string
 * @param element The DOM element to add classes.
 * @param classes String array with classes to add in element.
 * @returns firsPart and secondPart of splitted string
 */
export const pageTitle = (title: string) => {
  let firstPart: string;
  let secondPart: string;

  const [firstPartString, ...othersPartsString] = title.split(/\s+/);
  /**
  * Check if string is single word
  * If is true, apply splitSingle string function
  * If is not, split first part of long string and join others parts
  */ 
  if (othersPartsString.length === 0) {
    firstPart = splitSingleString(firstPartString, 5)[0];
    secondPart = splitSingleString(firstPartString, 5)[1];
  } else {
    firstPart = firstPartString + " ";
    secondPart = othersPartsString.join(" ");
  }
  // Return first and second part of splitted string
  return {
    firstPart,
    secondPart,
  };
};

/**
 * Include multiple class in HTML element.
 * @param element The DOM element to add classes.
 * @param classes String array with classes to add in element.
 */
export const multiToggle = (element: HTMLElement, ...classes: string[]) => {
  classes.forEach((cls) => element.classList.toggle(cls));
};

/**
 * Monitors an element's visibility within the viewport.
 * @param element The DOM element to observe.
 * @param callback Function triggered when visibility state changes.
 */
export const watchElementViewport = (element: HTMLElement, callback: (isInViewport: boolean) => void) => {
  const options: IntersectionObserverInit = {
    root: null, // Defaults to the browser viewport
    threshold: 0, // Triggers as soon as even 1 pixel is visible
  };

  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  }, options);

  observer.observe(element);

  // Return a cleanup function to disconnect the observer when no longer needed
  return () => observer.disconnect();
};
