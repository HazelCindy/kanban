import { gql } from "@apollo/client";

const ADD_TASK = gql`
  mutation Mutation($columnId: String!, $description: String) {
    addTask(columnId: $columnId, description: $description) {
      columnId
      description
      id
    }
  }
`;
export default ADD_TASK;
