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

//Tipagem da consulta de informações de uma localidade no mapa interativo
export type InteractiveMapLocationTypes = {
  location: {
    id: string;
    title: string;
    content: string;
  };
};
