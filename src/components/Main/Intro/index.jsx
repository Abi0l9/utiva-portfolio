import React, { useEffect, useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import Me from "../../../assets/imgs/me-2.JPG";
import About from "../About";

const Intro = () => {
  const roles = ["Monsur Oyedeji", "a Fullstack Developer"];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === roles[currentRoleIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
          setDisplayText("");
          setCurrentIndex(0);
        }, 100); // Delay before switching to the next text
      } else {
        setDisplayText(
          (prevText) => prevText + roles[currentRoleIndex][currentIndex]
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 10); // Adjust the interval to control typing speed

    return () => clearInterval(interval);
  }, [currentIndex, currentRoleIndex]); //eslint-disable-line

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 10); // Adjust the interval for cursor blinking

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <SectionWrapper>
        <div className="text-4xl flex flex-col h-full justify-center items-center">
          <div className="  p-1 rounded-[5px] border-dashed border-[2px] border-gray-500 my-3">
            <img
              src={`${Me}`}
              alt="monsur-oyedeji"
              className="object-cover grayscale w-96 h-auto rounded-[5px]  shadow-md"
            />
          </div>
          <div className="">
            I am {displayText}
            {showCursor && <span className="absolute"> |</span>}
          </div>
          <div className=""></div>
        </div>
        <About />
      </SectionWrapper>
    </div>
  );
};

export default Intro;
