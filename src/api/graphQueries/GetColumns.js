import React from "react";
import { gql } from "@apollo/client";
import Query from "../../components/Query";

export const GET_COLUMNS = gql`
  query GetColumns {
    getColumns {
      id
      title
    }
  }
`;

function GetColumnsQuery({ ...rest }) {
  return <Query query={GET_COLUMNS} {...rest} />;
}

export default GetColumnsQuery;
