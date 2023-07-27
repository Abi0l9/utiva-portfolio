import React from "react";
import SectionWrapper from "../../SectionWrapper";
import SkillWrapper from "./SkillWrapper";
import Skill from "./Skill";

import { mySkills } from "../../../const";

const Skills = () => {
  return (
    <SectionWrapper>
      <div className="border-b-2 md:ml-3 w-[70px]">
        <p className="text-3xl">Skills</p>
      </div>
      <SkillWrapper>
        {mySkills.map((skill) => (
          <Skill
            key={skill.name}
            imgSrc={skill.imgSrc}
            name={skill.name}
            width={skill.power}
          />
        ))}
      </SkillWrapper>
    </SectionWrapper>
  );
};

export default Skills;
