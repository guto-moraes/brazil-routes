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