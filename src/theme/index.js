import { colors } from "@mui/material";
import typography from "./typography";

const white = "#FFFFFF";

const theme = {
  palette: {
    background: {
      dark: "#F4F6F8",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      contrastText: white,
      dark: "#2e7b1d",
      main: "#43b02a",
      light: "#68bf54",
    },
    secondary: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue.A400,
      light: colors.blue.A400,
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
      link: colors.blue[600],
    },
    white: {
      main: white,
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
  },
  typography,
};

export default theme;
