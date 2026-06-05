import { gql } from "graphql-request";

export const ALMANAQUE_PAGE = gql`
  query AlmanaquePage {
    page(id: "almanaque-digital", idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      featuredImage {
        node {
          sourceUrl
        }
      }
      almanaque {
        almanaqueDownload {
          text
          almanaqueLink
          image {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

// Consulta da Seção de Apresentaçã do Almanaque - Página Inicial
export const ALMANAQUE_PRESENTATION = gql`
  query AlmanaquePresentation {
    project {
      theming {
        ebookPresentation {
          projectIcon {
            node {
              guid
            }
          }
          ebookCover {
            node {
              guid
            }
          }
          title
          ebookSynopsis
          almanaqueUrlPage
          almanaqueDownloadUrl
        }
      }
    }
  }
`;

// Consulta da Seção Capítulos do Almanaque - Página Inicial
export const ALMANAQUE_CHAPTERS = gql`
  query AlmanaqueChapters($slug: ID!) {
    page(id: $slug, idType: URI) {
      almanaque {
        ebookChapters {
          tag
          title
          synopsis
          image {
            node {
              guid
            }
          }
          link {
            url
          }
        }
      }
    }
  }
`;

// GraphQl Query para pegar cada capítulo do Almanaque
export const CHAPTER_PAGE = gql`
  query ChapterPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      chaptersCustom {
        title
        subtitle
      }
    }
  }
`;
