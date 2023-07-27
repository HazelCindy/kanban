import { gql } from "@apollo/client";

const UPDATE_TASKS = gql`
  mutation updateTask(
    $updateTaskId: ID!
    $description: String
    $columnId: String
  ) {
    updateTask(
      id: $updateTaskId
      description: $description
      columnId: $columnId
    ) {
      id
      description
      columnId
    }
  }
`;
export default UPDATE_TASKS;
