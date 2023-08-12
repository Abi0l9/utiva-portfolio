import React from "react";
import Me from "../../../assets/imgs/me-2.JPG";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const roles = [
    "Monsur Oyedeji",
    "A Frontend Developer",
    "A Backend Developer",
    "A Fullstack Developer",
  ];

  return (
    <div className="min-h-screen pt-10 md:pt-0 flex flex-col px-2 justify-center items-center">
      <div className="  p-1 rounded-[5px] border-dashed border-[2px] border-gray-500 my-3">
        <img
          src={`${Me}`}
          alt="monsur-oyedeji"
          className="object-cover grayscale w-96 h-auto rounded-[5px]  shadow-md"
        />
      </div>
      <div className="flex flex-col md:flex-row text-4xl text-center">
        I'm
        <span className="mx-2">
          <Typewriter
            options={{
              strings: roles,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Intro;
