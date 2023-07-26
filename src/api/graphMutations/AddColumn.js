import { gql } from "@apollo/client";

export const ADD_COLUMN = gql`
  mutation Mutation($title: String) {
    addColumn(title: $title) {
      id
      title
    }
  }
`;
