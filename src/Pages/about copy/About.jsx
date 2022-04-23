import classes from "./about.module.css";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

// import AboutContent from "../aboutContent/AboutContent";
import { motion, useAnimation } from "framer-motion";
import { makeStyles } from "@mui/styles";
import { cyan, grey } from "@mui/material/colors";
import { Button } from "@mui/material";

const useStyle = makeStyles({
  palette: {
    primary: {
      main: cyan["A200"],
    },
    secondary: {
      main: grey[900],
    },
  },
  txt: {
    display: "inline-block",
    fontFamily: "Montserrat",
    fontSize: "3.5rem",
    perspective: "80px",
    outline: "none",
    letterSpacing: "5px",

    marginBottom: "2.5rem",
    color: "hsla(0, 0%, 0%, 0)",
    fontWeight: "bold",

    textShadow:
      " cyan 0 0 1px, #84ffff 0 -2px 1px, #84ffff 0 -2px 1px, cyan 0 1px 20px",
    transition: "margin-left 0.3s cubic-bezier(0, 1, 0, 1)",
  },
  txt2: {
    fontFamily: "Montserrat",
    fontSize: "2rem",
    perspective: "80px",
    outline: "none",
    letterSpacing: "2px",
    color: "hsla(0, 0%, 0%, 0)",
    fontWeight: "bold",
    textShadow:
      " cyan 0 0 1px, #84ffff 0 -1px 1px, #84ffff 0 -1px 1px, cyan 0 1px 20px",
    transition: "margin-left 0.3s cubic-bezier(0, 1, 0, 1)",
    textAlign: "end",
  },
  pTxt: {
    fontFamily: "Montserrat",
    fontSize: "2.5rem",
    color: grey["A100"],
  },
  pTxt2: {
    fontFamily: "Montserrat",
    fontSize: "1.4rem",
    color: grey["A100"],
    textAlign: "justify",
    lineHeight: "2.5rem",
    marginLeft: "5rem",
  },

  btn: {
    display: "block",
    fontFamily: "Montserrat",
    fontSize: "1.4rem",
    color: cyan["A200"],
  },

  pTxt3: {
    fontFamily: "Montserrat",
    fontSize: "1.4rem",
    color: grey["A100"],
    textAlign: "justify",
    lineHeight: "2.5rem",
  },
  hidden: {
    display: "none",
  },
});

const typVariants = {
  hidden: {
    opacity: 0,
    y: "10vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const spanVariants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export default function About() {
  const [appear, setAppear] = useState(true);

  const clickHandle = () => {
    setAppear(false);
  };

  const klas = useStyle();
  const animation = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    inView
      ? animation.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.3,
            duration: 10,
            staggerChildren: 5,
          },
        })
      : animation.start({ y: "10vh", opacity: 0 });
  }, [animation, inView]);

  return (
    <div className={classes.about} ref={ref}>
      <motion.div animate={animation}>
        <div className={classes.content}>
          <div className={classes.top}>
            <div className={classes.box}>
              <div className={classes.box1Content} initial="hidden">
                <motion.h1
                  className={klas.txt}
                  initial="hidden"
                  animate={animation}
                >
                  VISION
                </motion.h1>
                <motion.p
                  className={klas.pTxt}
                  initial="hidden"
                  animate={animation}
                >
                  To share life in Christ Jesus with great joy to all.
                </motion.p>
              </div>
            </div>
            <div className={classes.box}>
              <div className={classes.box2Content}>
                <motion.h1
                  className={klas.txt}
                  initial="hidden"
                  animate={animation}
                >
                  MISSION
                </motion.h1>
                <motion.p
                  className={klas.pTxt}
                  initial="hidden"
                  animate={animation}
                >
                  To see Christ-like people living in fullness of joy.
                </motion.p>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.box}>
              <div className={classes.box3Content}>
                <motion.div initial="hidden" animate={animation}>
                  <Button>Test</Button>
                </motion.div>
              </div>
            </div>
            <motion.div
              className={classes.box}
              initial="hidden"
              animate={animation}
            >
              <div className={classes.box4Content}>
                <div className={classes.box4Container}>
                  <div className={classes.circle}></div>
                  <h3 className={klas.txt2} variants={typVariants}>
                    WHO WE ARE
                  </h3>
                  <motion.p className={klas.pTxt2}>
                    A church is a group of people who are, joyfully together.
                    We’re together with God because of His kindness and
                    commitment to humanity; together as a family learning to
                    embody this kindness and commitment one to another and
                    beyond into the wider world. All this is only possible
                    because of Jesus, the One who brings us together in life and
                    keeps us together joyfully. Joy Of Life Christian Ministries
                    is a community church of imperfect people seeking to know
                    and love Jesus more.{" "}
                    <Button
                      onClick={clickHandle}
                      variant="text"
                      className={`${appear ? klas.hidden : klas.btn}`}
                    >
                      ...Read More
                    </Button>
                    <motion.span
                      className={klas.pTxt3}
                      initial="hidden"
                      animate={!appear ? "hidden" : "visible"}
                      variants={spanVariants}
                    >
                      We gather and serve in Craigieburn, Victoria, Australia.
                      We meet each Sunday, connect during the week in Care
                      Groups/Prayer Meetings and serve in the community and
                      surrounding areas. We are guided by seven central values.
                      They reflect both who we are and who we hope to be.
                    </motion.span>
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className={classes.box5}
          variants={typVariants}
          initial="hidden"
          animate={animation}
        >
          <div className={classes.imageContainer}>
            <img alt="worsship" src="img/worshipc.jpg"></img>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
