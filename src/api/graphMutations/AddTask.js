import { gql } from "@apollo/client";

export const ADD_TASK = gql`
  mutation Mutation($columnId: String!, $description: String) {
    addTask(columnId: $columnId, description: $description) {
      columnId
      description
      id
    }
  }
`;
