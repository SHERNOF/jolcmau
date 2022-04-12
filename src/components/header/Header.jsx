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
            <Button variant="text" activeclass="active" to="home">
              Home
            </Button>
          </li>
          <li>
            <Button variant="text" to="about">
              About us
            </Button>
          </li>
          <li>
            <Button variant="text" to="ministries">
              Ministries
            </Button>
          </li>
          <li>
            <Button variant="text" href="events">
              Contact Us
            </Button>
          </li>
          <li>
            <Button variant="text" to="events" href="events">
              Events
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
