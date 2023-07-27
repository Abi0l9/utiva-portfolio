import React from "react";
import Bar from "./Bar";

const Skill = ({ name, imgSrc, width }) => {
  return (
    <div className="flex flex-row justify-center md:justify-start w-2/4 md:w-1/4 gap-x-2">
      <div className="mr-4">
        <img
          src={`${imgSrc}`}
          alt={`${name}`}
          className="h-[100%] py-1 w-[40px] object-contain"
        />
      </div>
      <div className="flex flex-col items-start text-left">
        <p className="text-base text-left">{name}</p>
        <Bar width={width} />
      </div>
    </div>
  );
};

export default Skill;
