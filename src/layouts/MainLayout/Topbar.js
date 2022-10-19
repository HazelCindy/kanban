import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function TopAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            sx={{
              marginRight: 2,
            }}
            color="inherit"
            aria-label="open drawer"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={(theme) => ({
              flexGrow: 1,
              display: "none",
              [theme.breakpoints.up("sm")]: {
                display: "block",
              },
            })}
            variant="h6"
            noWrap
          >
            Safaricom Starter Pack
          </Typography>
          <Box
            sx={(theme) => ({
              position: "relative",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              marginLeft: 0,
              width: "100%",
              [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto",
                flex: 0.5,
              },
            })}
          >
            <Box
              sx={(theme) => ({
                padding: theme.spacing(0, 2),
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              })}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              sx={(theme) => ({
                padding: theme.spacing(1, 1, 1, 0),
                color: theme.palette.white.main,
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
                [theme.breakpoints.up("sm")]: {
                  width: "12ch",
                  "&:focus": {
                    width: "20ch",
                  },
                },
              })}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopAppBar;
