import { gql } from "@apollo/client";

const CLEAR_TASKS = gql`
  mutation clearColumnTasks($columnId: String!) {
    clearColumnTasks(columnId: $columnId)
  }
`;
export default CLEAR_TASKS;
