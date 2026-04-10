import { gql } from "graphql-request";

export const CHAPTERS_ALMANAQUE = gql`
  query CBCTheme {
    cbcTheme {
      cbcSettings {
        capitulosDoEBook {
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
