import { gql } from "graphql-request";

export const CHAPTERS_ALMANAQUE = gql`
  query ProjectTheme {
    project {
      theming {
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

export const FIELDS_ACTIVITY = gql`
  query ActionsOfProject {
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
