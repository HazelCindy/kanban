import { gql } from "@apollo/client";

const ADD_COLUMN = gql`
  mutation Mutation($title: String) {
    addColumn(title: $title) {
      id
      title
    }
  }
`;
export default ADD_COLUMN;
