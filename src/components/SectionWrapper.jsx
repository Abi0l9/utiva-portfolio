import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="min-h-screen md:min-h-[200px] snap-mandatory snap-y mb-[100px] px-3 mb-5 w-full">
      {children}
    </div>
  );
};

export default SectionWrapper;
