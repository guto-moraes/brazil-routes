import { type LatLngTuple } from "leaflet";

/**
 * Partners types
 */
export type PartnersTypes = {
  name: string;
  logo: string;
  link: string;
  height: string;
};

/**
 * Slider types
 */
export type SliderTypes = {
  title: string;
  image: string;
  copy: string;
};

/**
 * Slider types
 */
export type LinkTypes = {
  title: string;
  url: string;
  transition: string[];
};


/**
 * Section transition types
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
}