import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Link,
  Card,
  CardHeader,
  CardContent,
  Typography,
  List,
  Button,
  NoSsr,
} from "@material-ui/core";
import styles from "../styles/Home.module.css";
import MainLayout from "../src/layouts/MainLayout";
import Dialog from "../src/components/Dialog";
import Alert from "../src/components/Alert";
import GetCountriesQuery from "../src/api/Queries/GetCountries";
import ListShimmers from "../src/Shimmers/ListShimmers";
import CountriesListItem from "../src/HomeComponents/CountriesListItem";
import CountrySearchTextField from "../src/forms/Home/CountrySearchTextField";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 35,
  },
  card: {
    border: "1px solid #eaeaea",
    borderRadius: 10,
    padding: 15,
  },
  cardLink: {
    color: theme.palette.text.primary,
    width: "100%",
    textDecoration: "none",
  },
  cardHeader: {
    "& span": {
      fontSize: 20,
    },
  },
  countriesWrapper: {
    maxHeight: 300,
    overflow: "scroll",
  },
}));
export default function Home() {
  const classes = useStyles();
  const [searchParam, setSearchParam] = React.useState("");
  const [dialogDetails, setDialogDetails] = React.useState({
    open: false,
    country: "",
  });
  const handleChange = (event) => {
    setSearchParam(event.target.value);
  };
  const selectOption = (value) => {
    setDialogDetails({ open: true, country: value });
  };
  const closeDialog = () => {
    setDialogDetails({ open: false, country: "" });
  };
  const { open, country } = dialogDetails;
  return (
    <MainLayout>
      <Dialog
        open={open}
        maxWidth="xs"
        modalContent={
          <div className="center">
            <Typography variant="body1">
              You have selected <strong>{country}</strong>.
            </Typography>
            <Box mt={1}>
              <Button variant="contained" color="primary" onClick={closeDialog}>
                Close
              </Button>
            </Box>
          </div>
        }
        handleClose={closeDialog}
      />
      <div>
        <Head>
          <title>Next Js Boilerplate Starter pack</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicons/72x72.png" />
        </Head>
        <NoSsr>
          <Grid container spacing={2} className={styles.main}>
            <Grid item lg={3} xl={3} />
            <Grid item lg={6} xl={6} sm={12} xs={12}>
              <Typography variant="h1" className={classes.heading}>
                Welcome to{" "}
                <Link href="https://nextjs.org" target="_blank">
                  Next.js!
                </Link>
              </Typography>
              <Box mt={1}>
                <Typography variant="body1" className={styles.description}>
                  Get started by editing{" "}
                  <code className={styles.code}>pages/index.js</code>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xl={3} />
            <Grid item lg={3} xl={3} />
            <Grid item lg={6} xl={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item lg={6} xl={6} sm={6} xs={12}>
                  <div className={classes.card}>
                    <Link
                      href="https://nextjs.org/docs"
                      target="_blank"
                      className={classes.cardLink}
                    >
                      <Typography variant="h3">Documentation &rarr;</Typography>
                      <Box mt={1}>
                        <Typography variant="body1">
                          Find in-depth information about Next.js features and
                          API.
                        </Typography>
                      </Box>
                    </Link>
                  </div>
                </Grid>
                <Grid item lg={6} xl={6} sm={6} xs={12}>
                  <div className={classes.card}>
                    <Link
                      href="https://nextjs.org/learn"
                      target="_blank"
                      className={classes.cardLink}
                    >
                      <Typography variant="h3">Learn &rarr;</Typography>
                      <Box mt={1}>
                        <Typography variant="body1">
                          Discover and deploy boilerplate example Next.js
                          projects.
                        </Typography>
                      </Box>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={3} xl={3} />
            <Grid item lg={3} xl={3} />
            <Grid item lg={6} xl={6} sm={12} xs={12}>
              <Card style={{ width: "100%" }}>
                <CardHeader title="Countries" className={classes.cardHeader} />
                <CardContent>
                  <CountrySearchTextField handleChange={handleChange} />
                  <Box className={classes.countriesWrapper}>
                    <GetCountriesQuery
                      variables={{ param: searchParam }}
                      loader={<ListShimmers />}
                    >
                      {({ getCountries }) => (
                        <>
                          {getCountries.length > 0 ? (
                            <List>
                              {getCountries.map((item) => (
                                <CountriesListItem
                                  key={item.country}
                                  item={item}
                                  selectOption={selectOption}
                                />
                              ))}
                            </List>
                          ) : (
                            <Alert severity="warning">
                              Sorry we do not have any countries
                            </Alert>
                          )}
                        </>
                      )}
                    </GetCountriesQuery>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item lg={3} xl={3} />
          </Grid>
        </NoSsr>
      </div>
    </MainLayout>
  );
}
