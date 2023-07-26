import { gql } from "@apollo/client";

export const UPDATE_COLUMNS = gql`
  mutation updateColumn($updateColumnId: ID!, $title: String) {
    updateColumn(id: $updateColumnId, title: $title) {
      id
      title
    }
  }
`;
