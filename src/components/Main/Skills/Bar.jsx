import React from "react";

const Progress = ({ width }) => {
  const getWidth = () => {
    if (width) {
      const w = (width / 5) * 100;
      const str = `w-[${w}%]`;

      return str;
    }
  };

  return (
    <div
      className={`${
        width === 0 ? "bg-gray-600" : `bg-green-500`
      } h-[100%]  rounded-[4px] ${getWidth()}`}
    ></div>
  );
};

const GreenBar = ({ children }) => {
  return (
    <div className={`bg-gray-600 h-[100%] w-[20px] rounded-[4px]`}>
      {children || (
        <div className={`bg-green-500 h-[100%] w-full rounded-[4px]`}></div>
      )}
    </div>
  );
};

const Bar = ({ width }) => {
  return (
    <div className="flex flex-row  gap-x-1 items-center h-[7px] w-full">
      <GreenBar />
      <GreenBar />
      <GreenBar />
      <GreenBar />
      <GreenBar>
        <Progress width={width} />
      </GreenBar>
    </div>
  );
};

export default Bar;
