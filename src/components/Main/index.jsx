import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Works from "./Works";
import Contact from "./Contact";

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
      <div className="" id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
