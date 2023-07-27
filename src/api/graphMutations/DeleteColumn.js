import { gql } from "@apollo/client";

const DELETE_COLUMN = gql`
  mutation deleteColumn($deleteColumnId: ID!) {
    deleteColumn(id: $deleteColumnId)
  }
`;
export default DELETE_COLUMN;
