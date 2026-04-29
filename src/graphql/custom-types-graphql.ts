import { gql } from "graphql-request";

//Consulta para exibição da localidades no Mapa Interativo
export const INTERACTIVE_MAP = gql`
  query InteractiveMap {
    locations {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
        featuredImage {
          node {
            guid
          }
        }
        places {
          coordinates
          description
          featuredImageCopy
        }
      }
    }
  }
`;

export const INTERACTIVE_MAP_LOCATION = gql`
  query InteractiveMapLocation($id: ID!) {
    location(id: $id) {
      id
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;

//Consulta para exibiçao dos termos do Glossário
export const GLOSSARY = gql`
  query Glossary {
    glossarios(where: { orderby: { field: TITLE, order: ASC } }) {
      nodes {
        id
        title(format: RENDERED)
        content(format: RENDERED)
      }
    }
  }
`;
