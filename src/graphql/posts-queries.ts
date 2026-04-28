import { gql } from "graphql-request";

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
