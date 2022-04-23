import classes from "./fp.module.css";
import React from "react";
import { motion } from "framer-motion";
import { cyan } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  txt: {
    fontFamily: "Montserrat",
    fontSize: 120,
    fontWeight: 600,
    color: cyan["A200"],
  },
});

export default function Fp() {
  const klas = useStyle();
  return (
    <motion.div
      className={classes.over}
      initial={{ y: "-80vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1,
        type: "spring",
        bounce: 0.3,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <div className={classes.imageContainer}>
        <img alt="JOL" src="img/fp.png"></img>
      </div>
      <div className={classes.overlay}>
        <div className={classes.overlayContent}>
          <Typography variant="h4">Welcome to</Typography>
          <Typography variant="h1" className={klas.txt}>
            Joy Of Life
          </Typography>
          <Typography variant="h3">Christian Ministries</Typography>
        </div>
      </div>
    </motion.div>
  );
}
