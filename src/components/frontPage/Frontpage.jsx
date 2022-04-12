import { createTheme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import LogoMain from "../logoMain/LogoMain";
import classes from "./forntPage.module.css";

const theme = createTheme({
  typography: {
    textAlign: "left",
  },
});
export default function Frontpage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.frontPage}>
        <LogoMain></LogoMain>
        <div className={classes.myGlass}>
          <div className={classes.glassMessage}>
            <div className={classes.left}>
              <Typography variant="h2">JOY OF LIFE</Typography>
              <Typography variant="p">
                For we are to God the fragrance of Christ among those who are
                being saved and among those who are perishing.
              </Typography>
              <Typography variant="subtitle1">
                2 Corinthians 2:15 NKJV
              </Typography>
            </div>
            <div className={classes.right}>Euodia</div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
