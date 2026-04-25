import { gql } from "graphql-request";

//Consulta para exibição da localidades no Mapa Interativo
export const INTERACTIVE_MAP = gql`
  query InteractiveMap {
    locations {
      nodes {
        id
        title
        content
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
