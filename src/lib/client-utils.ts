"use client";

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
