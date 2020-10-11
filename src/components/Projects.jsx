import React from "react";
import ProjectCard from "./ProjectCard";
import { Typography } from "@material-ui/core";
import Equinox from "../assets/img/equinox.png";
import Sewak from "../assets/img/sewak.png";
import Vchat from "../assets/img/Vchat.png";
import Scrappy from "../assets/img/Scrappy.png";
import IIITL from "../assets/img/IIITL.png";
import Maze from "../assets/img/Maze.png";
import Weather from "../assets/img/Weather.png";
import Hostel from "../assets/img/Hostel.png";

export default function Projects() {
  return (
    <div style={{ marginBottom: 80 }}>
      <Typography variant="h6" align="center">
        My Projects
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          img={Sewak}
          name="Hospital Network"
          desc="Two-way system between a user and health provider with review system in place for better functioning of healthcare facilities"
          to="https://github.com/blurry-x-face/Sewak"
        />
        <ProjectCard
          img={
            "https://user-images.githubusercontent.com/42492389/79923572-69c6a700-8453-11ea-921f-bed0f7f8cefb.png"
          }
          name="Stundent Portal"
          desc="A sample application in react for student assignment submissions and attendance"
          to="https://github.com/blurry-x-face/Student-Portal"
        />
        <ProjectCard
          img={Vchat}
          name="VChat"
          desc="Deadest Simplest Cross-Platform Video Chat App"
          to="https://vgchat.herokuapp.com"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          img={IIITL}
          name="Official Website of IIIT Lucknow"
          desc="Official Website of IIIT Lucknow."
          to="https://iiitl.ac.in"
        />
        <ProjectCard
          img={Hostel}
          name="Hostels"
          desc="A simple Hostel Management Portal based on Node.js with custom Admin and Student Dashboard."
          to="https://github.com/axios-iiitl/Hostel-Managment-Portal"
        />
        <ProjectCard
          img={Scrappy}
          name="Scrappy"
          desc="This is a IMDB scrapper made with Node.js and Cheerio.js to scrape movies information."
          to="https://github.com/blurry-x-face/node-imdb-scrapper"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 40,
          flexWrap: "wrap",
        }}
      >
        <ProjectCard
          img={Equinox}
          name="Equinox Website"
          desc="Website of Equinox:Technical Fest of IIIT Lucknow, one page website with game like menue."
          to="https://equinox-iiitl.ac.in"
        />
        <ProjectCard
          img={Maze}
          name="Maze Generator"
          desc="Maze generator using backtracking"
          to="https://blurry-x-face.github.io/Maze-Generator"
        />
        <ProjectCard
          img={Weather}
          name="Weather"
          desc="React Weather app using openweathermap api."
          to="https://github.com/blurry-x-face/React-Weather-App"
        />
      </div>
    </div>
  );
}
