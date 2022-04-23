import classes from "./header.module.css";
import React from "react";
import { Button } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function Header({ showHeader }) {
  const visibility = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // delay: 4.5,
        duration: 2,
      },
      ease: "easeInOut",
    },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          className={classes.header}
          exit={{
            opacity: 0,
          }}
          variants={visibility}
        >
          <motion.div
            className={classes.logoContainer}
            variants={visibility}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          >
            <img
              className={classes.logoPh}
              alt="logo"
              src="img/joyoflife.png"
            />
          </motion.div>

          <motion.div
            className={classes.headerLinks}
            variants={visibility}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          >
            <ul className={classes.myUl}>
              <li>
                <Button
                  className={classes.myBtn}
                  variant="text"
                  activeclass="active"
                  to="home"
                >
                  Home
                </Button>
              </li>
              <li>
                <Button className={classes.myBtn} variant="text" to="about">
                  About us
                </Button>
              </li>
              <li>
                <Button
                  className={classes.myBtn}
                  variant="text"
                  to="ministries"
                >
                  Ministries
                </Button>
              </li>
              <li>
                <Button className={classes.myBtn} variant="text" href="events">
                  Contact Us
                </Button>
              </li>
              <li>
                <Button
                  className={classes.myBtn}
                  variant="text"
                  to="events"
                  href="events"
                >
                  Events
                </Button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
