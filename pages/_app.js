import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import App from "next/app";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";
import theme from "../src/theme";

export default function MyApp(props) {
  const { Component, pageProps, headers } = props;

  const deviceType = parser(headers["user-agent"]).device.type || "desktop";
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: deviceType === "mobile" ? "0px" : "1024px",
    }),
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My SSR Page with Material UI</title>
      </Head>
      <ThemeProvider
        theme={{
          props: {
            // Change the default options of useMediaQuery
            MuiUseMediaQuery: { ssrMatchMedia },
          },
          ...theme,
        }}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const {
    ctx: {
      req: { headers },
    },
  } = appContext;
  return { ...appProps, headers };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
