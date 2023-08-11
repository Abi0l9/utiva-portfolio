import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="min-h-screen snap-mandatory snap-y sm:mb-[100px] lg:mb-0  px-3 mb-5 w-full">
      {children}
    </div>
  );
};

export default SectionWrapper;
