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

//GraphQl Query para todos os posts do Blog do Conhecimento
export const BLOG = gql`
  query Blog {
    posts {
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
