import React from "react";
import SectionWrapper from "../../SectionWrapper";
import Me from "../../../assets/imgs/me.jpg";

const Intro = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="text-4xl flex flex-col h-full justify-center items-center">
          <div className="h-[300px] w-[300px] p-1 rounded-full border-[2px] border-gray-500 my-3">
            <img
              src={`${Me}`}
              alt="monsur-oyedeji"
              className="h-[100%] w-full rounded-full object-cover"
            />
          </div>
          <div className="">I am </div>
          <div className="">Monsur Oyedeji</div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Intro;
