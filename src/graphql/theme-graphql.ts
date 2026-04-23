import { gql } from "graphql-request";

//Consulta da Seção Capítulos do Almanaque - Página Inicial
export const CHAPTERS_ALMANAQUE = gql`
  query AlmanaqueChapters {
    project {
      theming {
        ebookChapters {
          tag
          title
          synopsis
          image {
            node {
              guid
            }
          }
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
          name
          url
          image {
            node {
              guid
            }
          }
        }
      }
    }
  }
`;
