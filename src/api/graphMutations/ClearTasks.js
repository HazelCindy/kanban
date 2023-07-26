import { gql } from "@apollo/client";

export const CLEAR_TASKS = gql`
  mutation clearColumnTasks($columnId: String!) {
    clearColumnTasks(columnId: $columnId)
  }
`;
