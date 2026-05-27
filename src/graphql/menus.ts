import { gql } from "graphql-request";

export const ALMANAQUE_MENU = gql`
  query AlmanaqueMenu {
    menu(id: "Almanaque", idType: NAME) {
      menuItems {
        nodes {
          label
          uri
        }
      }
    }
  }
`;
