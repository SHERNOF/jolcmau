import classes from "./details.module.css";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";
import { Button, Paper } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const useStyle = makeStyles({
  title: {
    display: "inline-block",
    fontFamily: "Montserrat",
    fontSize: "2rem",
    perspective: "80px",
    outline: "none",
    marginBottom: "2.5rem",
    color: "hsla(0, 0%, 0%, 0)",
    fontWeight: "bold",
    textShadow:
      " cyan 0 0 1px, #84ffff 0 -1px 1px, #84ffff 0 -1px 1px, cyan 0 1px 20px",
    transition: "margin-left 0.3s cubic-bezier(0, 1, 0, 1)",
  },

  pTxt: {
    fontFamily: "Montserrat",
    fontSize: "1.5rem",
    color: grey["A100"],
    textAlign: "justify",
  },
  bckGnd: {
    background: "#212121",
    border: "1px solid rgb(24, 255, 255, 0.1)",
    padding: "3rem",
  },
});

export default function Details({ handleVisibility, componentVisible }) {
  console.log(componentVisible);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const detailsAnimation = useAnimation();
  useEffect(() => {
    inView
      ? detailsAnimation.start({
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            delay: 10,
            bounce: 0.2,
            duration: 1,
          },
        })
      : detailsAnimation.start({ x: "-100vw", opacity: 0 });
  }, [inView]);
  const divVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    transition: {
      type: "spring",
      delay: 5,
      duration: 2,
    },
  };
  const [details, setDetails] = useState(true);
  console.log(componentVisible);

  const klas = useStyle();
  return (
    <AnimatePresence>
      {!componentVisible && (
        <motion.div
          className={classes.details}
          id="/details"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{
            x: "-100vw",
            opacity: 0,
          }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className={classes.detailsFrame}>
            <div className={classes.detailsTitle}>
              <h3 className={klas.title}>More About Joy of Life</h3>

              <Button className="back">
                <ArrowLeftIcon
                  onClick={handleVisibility}
                  color="primary"
                  sx={{ fontSize: "5rem" }}
                  to="/home"
                />
              </Button>
            </div>

            <Paper
              elevation={10}
              className={(classes.detailsLeft, klas.bckGnd)}
            >
              <div id="who">
                <h3 className={klas.title}>WHO WE ARE</h3>

                <p className={klas.pTxt}>
                  A church is a group of people who are, joyfully together.
                  We’re together with God because of His kindness and commitment
                  to humanity; together as a family learning to embody this
                  kindness and commitment one to another and beyond into the
                  wider world. All this is only possible because of Jesus, the
                  One who brings us together in life and keeps us together
                  joyfully. Joy Of Life Christian Ministries is a community
                  church of imperfect people seeking to know and love Jesus
                  more. We gather and serve in Craigieburn, Victoria, Australia.
                  We meet each Sunday, connect during the week in Care
                  Groups/Prayer Meetings and serve in the community and
                  surrounding areas. We are guided by seven central values. They
                  reflect both who we are and who we hope to be.
                </p>
              </div>

              <div id="greatCommission">
                <h3 className={klas.title}>THE GREAT COMMISSION</h3>
                <p className={klas.pTxt}>
                  We are a people who understand the church is not limited by
                  its building or by a street address. The church is us and we
                  are called to reach beyond our walls and impact the lives of
                  those who are far from God who live there. We see the sphere
                  of our influence ranges from our backyard to our world. We are
                  passionate about the Gospel that has set us free.
                </p>
              </div>

              <div id="spiritualFormation">
                <h3 className={klas.title}>SPIRITUAL FORMATION</h3>
                <p className={klas.pTxt}>
                  We're people who journey to be more like Jesus. We respect the
                  notion that we are at different places along the way and
                  celebrate the fact each of us has chosen the same path. Our
                  path is one of experiencing God in His fullness, of learning
                  to be Christ-like and then applying what we have learned in
                  love. We are a people of prayer. We are a people who follow
                  the ways of the Bible and understand our spiritual formation
                  is not complete without a disciplined life that includes both.
                  To know Jesus more is to hunger for more. We wish to be a
                  people hungry for spiritual formation.
                </p>
              </div>

              <div id="generosity">
                <h3 className={klas.title}>GENEROSITY</h3>
                <p className={klas.pTxt}>
                  We value many things. There are some things that are
                  particularly important to us; we call them our core values.
                  They act like guide posts as we move forward. These are the
                  things that make us tick.
                </p>
              </div>

              <div id="rec">
                <h3 className={klas.title}>RECOGNIZING AND RELEASING</h3>
                <p className={klas.pTxt}>
                  We value many things. There are some things that are
                  particularly important to us; we call them our core values.
                  They act like guide posts as we move forward. These are the
                  things that make us tick.
                </p>
              </div>
            </Paper>

            <Paper
              elevation={10}
              className={(classes.detailsLeft, klas.bckGnd)}
            >
              <div id="belief">
                <h3 className={klas.title}>WHAT WE BELIEVE</h3>
                <ul>
                  <li>
                    <p className={klas.pTxt}>
                      We believe the Holy Scriptures to be the Divinely
                      inbreathed, infallible, inerrant and authoritative Word of
                      God.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe that there is one God, eternally existent in
                      the Persons of the Holy Trinity.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe that Jesus Christ is God’s Son – that He had a
                      miraculous birth, that He lived a sinless life, that He
                      died on the cross for our sins, that He rose from the dead
                      and is now seated at the right hand of His Father and that
                      He is coming back again.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe that salvation has been provided through Jesus
                      Christ for all people, and those who repent and believe in
                      Him will be born again of the Holy Spirit, receive the
                      gift of eternal life and become children of God.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe in holy living, the present day reality of the
                      baptism of the Holy Spirit according to Acts 2:4, the
                      gifts of the Holy Spirit, and the Lord's supernatural
                      healing in the human body.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe in Christ's Lordship of the Church, the
                      observance of the ordinances of Christian baptism by
                      immersion for believers and the Lord's Supper.
                    </p>
                  </li>

                  <li>
                    <p className={klas.pTxt}>
                      We believe in the eternal blessedness of the redeemed in
                      heaven and the eternal doom of the unregenerate in the
                      lake of fire.{" "}
                    </p>
                  </li>
                </ul>
              </div>

              <div id="worship">
                <h3 className={klas.title}>WORSHIP</h3>
                <p className={klas.pTxt}>
                  <img src="public/img/do not worry.png" alt="dont" />
                  We are a people who recognize God for who He is and because of
                  that we are drawn naturally to a place of worship. Our worship
                  doesn't have to fit a particular box and is open to
                  expressions of the Spirit. We believe worship is expressed
                  throughout our whole lives.
                </p>
              </div>

              <div id="core">
                <h3 className={klas.title}>CORE VALUES</h3>
                <p className={klas.pTxt}>
                  We value many things. There are some things that are
                  particularly important to us; we call them our core values.
                  They act like guide posts as we move forward. These are the
                  things that make us tick.
                </p>
              </div>

              <div id="authenticity">
                <h3 className={klas.title}>AUTHENTICITY</h3>
                <p className={klas.pTxt}>
                  We value many things. There are some things that are
                  particularly important to us; we call them our core values.
                  They act like guide posts as we move forward. These are the
                  things that make us tick.
                </p>
              </div>
            </Paper>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
