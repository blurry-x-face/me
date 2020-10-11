import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Wave from "./assets/img/wave.svg";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Nav />
      <img
        src={Wave}
        style={{
          height: "20vh",
          position: "absolute",
          left: "-3vw",
          transform: "rotate(-35deg)",
          top: "58%",
          zIndex: "-99",
        }}
      />
      <img
        src={Wave}
        style={{
          height: "20vh",
          position: "absolute",
          right: "-3vw",
          transform: "rotate(-135deg)",
          top: "18%",
          zIndex: "-99",
        }}
      />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        {/* <Route exact path="/contact">
          <Contact />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <footer>
        {" "}
        Created with ♥ by{" "}
        <a href="https://github.com/blurry-x-face" target="blank"> Rishabh Shukla </a>
      </footer>
    </div>
  );
}

export default App;
