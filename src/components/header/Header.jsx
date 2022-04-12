import classes from "./header.module.css";
import React from "react";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logoPh} alt="logo" src="img/joyoflife.png" />
      </div>

      <div className={classes.headerLinks}>
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
            <Button className={classes.myBtn} variant="text" to="ministries">
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
      </div>
    </div>
  );
}
