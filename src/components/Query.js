import React from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import Box from "@mui/material/Box";
import Loader from "./loader";
import MySnackbarContentWrapper from "./MySnackbarContentWrapper";
import ErrorHandler from "../utils/errorHandler";

// const getErrorCode = (error) => {
//   if (error) {
//     const { graphQLErrors } = error;
//     if (Array.isArray(graphQLErrors) && graphQLErrors.length > 0) {
//       const { extensions = {} } = graphQLErrors[0];
//       const { code } = extensions;
//
//       return code;
//     }
//   }
//
//   return undefined;
// };

const printErrorMessage = (error) => {
  let message =
    error.message ||
    "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
  if (error.message === "Network error: Failed to fetch") {
    message =
      "Sorry! We encountered a network error. Please refresh this page. If the problem persists, please contact us.";
  }
  return ErrorHandler(message);
};

function Query({
  children,
  getTranslations,
  fetchMore,
  loader,
  query,
  hideError = false,
  ...restProps
}) {
  const {
    loading,
    error,
    data,
    networkStatus,
    fetchMore: apolloFetchMore,
    refetch,
  } = useQuery(query, { ...restProps });
  if (error && hideError === false) {
    let message = printErrorMessage(error);
    if (printErrorMessage(error).match(/Network error.*/)) {
      message =
        "Looks like we are experiencing a technical difficulty. Our team is working to resolve the issue. Please try again later.";
    }
    // const errorCode = getErrorCode(error);
    // TODO: check errorPolicy and if === 'all' then pass thru render props all extracted/formated errors with errorcodes instead of inline error message
    return (
      <Box component="div">
        <MySnackbarContentWrapper
          variant="danger"
          variantText="dangerText"
          message={`${ErrorHandler(message)}`}
        />
      </Box>
    );
  }

  if (
    networkStatus === NetworkStatus.loading ||
    (networkStatus !== NetworkStatus.fetchMore && loading)
  ) {
    return loader || <Loader />;
  }

  const props = {
    ...data,
    networkStatus,
    fetchMore: fetchMore ? () => fetchMore(data, apolloFetchMore) : undefined,
    refetch,
  };

  return children(props);
}

export default Query;
