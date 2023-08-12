import React from "react";
import CustomParagraph from "../CustomParagraph";
import Highlight from "../../Highlight";

const About = () => {
  return (
    <section className="md:w-full flex flex-col my-[50px] mb-[100px]  px-3 mb-5 min-h-[70%] ">
      <div className="text-gray-200 text-3xl text-center">About Me</div>
      <CustomParagraph>
        With an harmonious blend of
        <Highlight>frontend</Highlight>
        finesse and <Highlight>backend</Highlight> brilliance, I am a versatile
        web developer experienced in crafting captivating user interfaces and
        robust server-side architectures.
      </CustomParagraph>
      <CustomParagraph>
        Proficient in HTML, CSS, and Javascript, I create engaging{" "}
        <Highlight>frontend</Highlight>
        experiences using popular Libraries and Frameworks like
        <Highlight>React</Highlight>,<Highlight>Vue</Highlight> and{" "}
        <Highlight>GraphQL</Highlight>.
      </CustomParagraph>
      <CustomParagraph>
        On the <Highlight>backend</Highlight>, I excel in
        <Highlight>Node.js</Highlight>,<Highlight>Django</Highlight>,
        <Highlight>MongoDB</Highlight>, and
        <Highlight>Relation Database Management</Highlight>
        ensuring efficient data processing and seamless integration.
      </CustomParagraph>
      <CustomParagraph>
        I am a <Highlight>proactive problem-solver</Highlight> and a{" "}
        <Highlight>collaborative team player</Highlight>, constantly enhancing
        my skills to deliver <Highlight>impactful digital solutions</Highlight>{" "}
        . {/* <ReadMoreBox onClick={toggleReadMore}>read less</ReadMoreBox> */}
      </CustomParagraph>
    </section>
  );
};

export default About;
