import React from "react";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Main = () => {
  return (
    <div className="">
      <Fade duration={2000}>
        <div className="" id="">
          <Intro />
        </div>
      </Fade>
      <Zoom duration={2000}>
        <div className="" id="about">
          <About />
        </div>
      </Zoom>
      <Zoom>
        <div className="" id="skills">
          <Skills />
        </div>
      </Zoom>
      <Fade duration={3000} cascade damping={0.3}>
        <div className="" id="works">
          <Works />
        </div>
      </Fade>
      <Slide direction="right">
        <div className="" id="contact">
          <Contact />
        </div>
      </Slide>
    </div>
  );
};

export default Main;
