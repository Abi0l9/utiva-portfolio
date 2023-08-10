import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  return (
    <div className="">
      <div className="" id="about">
        <Intro />
      </div>
      <div className="" id="skills">
        <Skills />
      </div>
      <div className="" id="works">
        <Works />
      </div>
      <Fade>
        <div className="" id="contact">
          <Contact />
        </div>
      </Fade>
    </div>
  );
};

export default Main;
