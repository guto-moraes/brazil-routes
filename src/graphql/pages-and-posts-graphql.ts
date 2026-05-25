import { gql } from "graphql-request";

//GraphQl Query para pegar uma página baseada no slug
export const PAGE = gql`
  query Page($slug: ID!) {
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;

//GraphQl Query para pegar uma página baseada no slug
export const CHAPTER_PAGE = gql`
  query ChapterPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      chaptersCustom {
        firstPartTitle
        secondPartTitle
        subtitle
      }
    }
  }
`;

//GraphQl Query para todos os posts publicados nas categorias Agenda e Blog
export const BLOG = gql`
  query Blog {
    posts(where: { categoryName: "agenda, blog" }) {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        id
        modified
        date
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            name
          }
        }
        news {
          author
          location
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            guid
          }
        }
        title(format: RENDERED)
        excerpt(format: RENDERED)
        link
        slug
      }
    }
  }
`;

export const SINGLE_BLOG = gql`
  query SingleBlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      modified
      date
      author {
        node {
          name
        }
      }
      tags {
        nodes {
          name
        }
      }
      news {
        author
        location
      }
      title(format: RENDERED)
      content(format: RENDERED)
    }
  }
`;

//Query para todos os posts publicados na categoria Agenda
export const CALENDAR = gql`
  query Calendar {
    posts(where: { categoryName: "agenda" }) {
      pageInfo {
        offsetPagination {
          hasMore
          hasPrevious
          total
        }
      }
      nodes {
        id
        modified
        date
        author {
          node {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        agenda {
          eventDate
          eventPlace
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        title(format: RENDERED)
        content(format: RENDERED)
        link
      }
    }
  }
`;

//Query para a página Vá Além
export const GO_FURTHER = gql`
  query GoFurhter {
    nodeByUri(uri: "almanaque-digital/va-alem") {
      id
      ... on Page {
        title(format: RENDERED)
        content(format: RENDERED)
        goFurther {
          goFurther {
            subject
            name
            description
            link
          }
        }
      }
    }
  }
`;

//Query para a página inicial do Teste de Conhecimento
export const QUIZ_HOME = gql`
  query Quiz($slug: ID!) {
    page(id: $slug, idType: URI) {
      title(format: RENDERED)
      content(format: RENDERED)
      quiz {
        totalQuestions
        countdown
        rules {
          message
        }
        content {
          imgSrc {
            node {
              sourceUrl
            }
          }
          title
          message
        }
      }
    }
  }
`;
