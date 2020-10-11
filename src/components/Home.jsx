import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HeroImage from "../assets/img/hero.svg";

export default function home() {
  return (
    <div style={{overflow: "hidden"}}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="home">
          <div className="home-left">
            <Typography className="intro-text" variant="h6">
              Hi, I am Rishabh Shukla <br />pre-final year student at IIIT
              Lucknow.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: "40px", width: "fit-content" }}
            >
              Download Resume
            </Button>
          </div>
          <img src={HeroImage} alt="Main svg" style={{ height: "50vh" }} />
        </div>
      </div>
    </div>
  );
}
