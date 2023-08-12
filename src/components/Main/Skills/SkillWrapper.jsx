import React from "react";

const SkillWrapper = ({ children }) => {
  return (
    <div className="flex flex-row mt-8 items-center gap-x-3 flex-wrap gap-y-4">
      {children}
    </div>
  );
};

export default SkillWrapper;
