import classes from "./services.module.css";
import React from "react";
import { Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  txt: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
    color: cyan["A200"],
  },
});

export default function Services() {
  const klas = useStyle();
  return (
    <div className={classes.services}>
      <Typography className={klas.txt} variants="h1">
        SERVICES
      </Typography>
    </div>
  );
}
