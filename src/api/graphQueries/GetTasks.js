import React from "react";
import { gql } from "@apollo/client";
import Query from "../../components/Query";

export const GET_TASKS = gql`
  query GetTasks($columnId: String) {
    getTasks(columnId: $columnId) {
      columnId
      description
      id
    }
  }
`;

function GetTasksQuery({ ...rest }) {
  return <Query query={GET_TASKS} {...rest} />;
}

export default GetTasksQuery;
