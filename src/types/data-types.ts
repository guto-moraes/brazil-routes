import { type LatLngTuple } from "leaflet";

/**
 * Partners Types
 */
export type PartnersTypes = {
  name: string;
  logo: string;
  link: string;
  height: string;
};

/**
 * Slider Types
 */
export type SliderTypes = {
  title: string;
  image: string;
  copy: string;
};

/**
 * Slider Types
 */
export type LinkTypes = {
  title: string;
  url: string;
  transition: string[];
};


/**
 * Section Transition Types
 */
export type SectionTransitionTypes = {
  title: string;
  description: string;
  image: string;
  services: string[];
}


export type MapTypes = {
    title: string;
    image: string;
    description: string;
    coordinates: LatLngTuple;
    imageCopy: string;
}

/**
 * Section Pin Rotate Types
 */
export type SectionsPinRotateTypes = {
    tag: string;
    title: string;
    description: string;
    link: string;
    image: string;
}

/**
 * Alamanque Chapter Types
 */
export type AlmanaqueChapterTypes = {
  chapter: string;
  chapterTitle: string;
  synopsis: string;
  image: string;
}

/**
 * History People Types
 */
export type PeopleHistoryTypes = {
    name: string;
    image: string;
    tribute: boolean;
    color: string;
};