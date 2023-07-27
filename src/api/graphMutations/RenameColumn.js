import { gql } from "@apollo/client";

const UPDATE_COLUMNS = gql`
  mutation updateColumn($updateColumnId: ID!, $title: String) {
    updateColumn(id: $updateColumnId, title: $title) {
      id
      title
    }
  }
`;
export default UPDATE_COLUMNS;
