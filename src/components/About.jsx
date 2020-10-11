import React from "react";
import DP from "../assets/img/DP.svg";
import { Typography } from "@material-ui/core";
export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "80px 0",
        color: "rgb(0, 35, 54)",
      }}
    >
      <div style={{ width: "30vw" }}>
        <Typography variant="body1" style={{ fontSize: "1.24rem" }}>
          Heya! I'm Rishabh Shukla, a Full Stack developer from India, I love
          building for the web. Beside's developing stuff, I enjoy listening
          music and also love food & travel. <br />
          <br />
          <strong className="intro-text">
            Talking about the Personal Stuffs/Achievements
          </strong>
          <ul>
            <li>
              GSOC'20 Mentor at Digital Alliance at United Nations Foundation
            </li>
            <li>
              Maintainer at &nbsp;
              <a href="https://github.com/publiclab/image-sequencer/">
                Image Sequencer
              </a>
            </li>
            <li>
              Co-founder of &nbsp;
              <a href="https://eduthon.tech">
                Eduthon: An Education themed Hackathon
              </a>
            </li>
            <li>
              Overall Cordinator of{" "}
              <a href="https://github.com/axios-iiitl">
                Technical Club of IIIT Lucknow
              </a>
            </li>
            <li>
              How to reach me:{" "}
              <a href="mailto:rishabhshukla1999@gmail.com">
                rishabhshukla1999@gmail.com
              </a>
            </li>
          </ul>
        </Typography>
      </div>
      <img src={DP} style={{ height: "50vh" }} />
    </div>
  );
}
