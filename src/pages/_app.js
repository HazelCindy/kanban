import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import App from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@emotion/react";
import parser from "ua-parser-js";
import mediaQuery from "css-mediaquery";
import theme from "../theme";
import Client from "../apolloConfigs/Client";
import "../../styles/globals.css";
import createEmotionCache from "../utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // The estimated CSS width of the browser.
      width: pageProps?.deviceType === "mobile" ? "0px" : "1200px",
    }),
  });
  const defaultTheme = createTheme({
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
    },
    ...theme,
  });
  return (
    <CacheProvider value={emotionCache}>
      <ApolloProvider client={Client}>
        <Head>
          <title>My SSR Page with Material U</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={defaultTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // console.log({ req: ctx.ctx.req });
  const { req } = ctx.ctx;
  const userAgent = req?.headers?.["user-agent"] || null;
  const deviceType = userAgent
    ? parser(userAgent).device.type || "desktop"
    : "desktop";

  return {
    pageProps: {
      deviceType,
      ...appProps.pageProps,
    },
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
