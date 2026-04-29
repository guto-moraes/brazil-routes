import { gql } from "graphql-request";

//Consulta da Seção de Pioneiros - Página Inicial
export const PIONEERS = gql`
  query Pioneers {
    project {
      theming {
        firstScreen {
          title
          description
        }
        pioneersList {
          image {
            node {
              guid
            }
          }
          name
          tribute
        }
        lastScreen {
          title
          textButton
          urlButton
        }
      }
    }
  }
`;

//Consulta da Seção Áreas de Atuação - Página Inicial
export const FIELDS_ACTIVITY = gql`
  query ProjectActivities {
    project {
      theming {
        projectName
        fieldsActivityTitle
        fieldsActivityPresentation
        fieldsActivities {
          fieldActivityColor
          fieldActivity
          fieldActivityDescription
          fieldActivityTags
          fieldActivityRotateFrom
          fielActivityRotateTo
        }
      }
    }
  }
`;

//Consulta da Seção Realizadores - Leiaute Padrão
export const PARTNERS = gql`
  query Partners {
    project {
      theming {
        partners {
          image {
            node {
              guid
            }
          }
          name
          url
        }
      }
    }
  }
`;
