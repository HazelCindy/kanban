import { gql } from "@apollo/client";

export const DELETE_COLUMN = gql`
  mutation deleteColumn($deleteColumnId: ID!) {
    deleteColumn(id: $deleteColumnId)
  }
`;
