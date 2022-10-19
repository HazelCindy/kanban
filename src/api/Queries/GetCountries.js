import React from "react";
import { gql } from "@apollo/client";
import Query from "../../components/Query";

export const GET_COUNTRIES = gql`
  query GetCountries($param: String) {
    getCountries(param: $param) {
      country
    }
  }
`;

function GetCountriesQuery({ ...rest }) {
  return <Query query={GET_COUNTRIES} {...rest} />;
}

export default GetCountriesQuery;
