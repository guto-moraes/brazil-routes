//Tipagem da consulta de localidades do mapa interativo
export type LocationTypes = {
  id: string;
  title: string;
  content: string;
  featuredImage: {
    node: {
      guid: string;
    };
  };
  places: {
    coordinates: string;
    description: string;
    featuredImageCopy: string;
  };
};

export type InteractiveMapTypes = {
  locations: {
    nodes: LocationTypes[];
  };
};
