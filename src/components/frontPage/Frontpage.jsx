import { Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import LogoMain from "../logoMain/LogoMain";
import classes from "./forntPage.module.css";
import { motion } from "framer-motion";

const useStyle = makeStyles(() => ({
  txt: {
    width: "100%",
    marginBottom: "1rem",
  },
}));

export default function Frontpage() {
  const klases = useStyle();
  return (
    <div className={classes.frontPage}>
      <LogoMain></LogoMain>
      <motion.div
        className={classes.myGlass}
        initial={{ y: "-80vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 3,
          duration: 2.2,
          ease: "easeInOut",
        }}
      >
        <div className={classes.glassMessage}>
          <div className={classes.left}>
            <Typography variant="h2" className={klases.txt}>
              JOY OF LIFE
            </Typography>
            <Typography className={klases.txt} variant="h5">
              For we are to God the fragrance of Christ among those who are
              being saved and among those who are perishing.
            </Typography>
            <Typography className={klases.txt} variant="h5">
              2 Corinthians 2:15 NKJV
            </Typography>
          </div>
          <div className={classes.right}>Euodia</div>
        </div>
      </motion.div>
    </div>
  );
}
