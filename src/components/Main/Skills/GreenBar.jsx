import React from "react";

const GreenBar = () => {
  return (
    <div className="flex flex-row justify-center gap-x-1 items-center h-[15px] w-full">
      <div className={`bg-gray-600 h-[100%] w-1/5 rounded-[4px]`}></div>
      <div className={`bg-gray-600 h-[100%] w-1/5 rounded-[4px]`}></div>
      <div className={`bg-gray-600 h-[100%] w-1/5 rounded-[4px]`}></div>
      <div className={`bg-gray-600 h-[100%] w-1/5 rounded-[4px]`}></div>
      <div className={`bg-gray-600 h-[100%] w-1/5 rounded-[4px]`}></div>
    </div>
  );
};

export default GreenBar;
