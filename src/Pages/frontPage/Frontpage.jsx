import classes from "./forntPage.module.css";
import React from "react";
import LogoMain from "../../components/logoMain/LogoMain";

import Fp from "../../components/fp/Fp";

export default function Frontpage() {
  return (
    <div className={classes.frontPage}>
      <LogoMain></LogoMain>
      <Fp></Fp>
    </div>
  );
}
