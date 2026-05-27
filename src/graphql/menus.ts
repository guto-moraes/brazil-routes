import { gql } from "graphql-request";

export const MENU = gql`
  query Menu($name: ID!){
    menu(id: $name, idType: NAME) {
      menuItems {
        nodes {
          label
          uri
        }
      }
    }
  }
`;
