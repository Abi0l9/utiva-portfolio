import React from "react";
import SectionWrapper from "../../SectionWrapper";
import SkillWrapper from "./SkillWrapper";
import Skill from "./Skill";

import { mySkills } from "../../../const";

const Skills = () => {
  return (
    <SectionWrapper>
      <div className="snap-center  text-center">
        <p className="text-3xl">My Skills</p>
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
