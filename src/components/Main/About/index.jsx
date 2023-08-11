import React from "react";
import CustomParagraph from "../CustomParagraph";
import Highlight from "../../Highlight";

const About = () => {
  return (
    <section className="md:w-3/4 snap-mandatory snap-y flex flex-col px-3 mb-5 md:mx-auto h-screen justify-center items-center">
      <div className="text-gray-200 text-3xl snap-center">About Me</div>
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
        I am a proactive problem-solver and a collaborative team player,
        constantly enhancing my skills to deliver impactful digital solutions.{" "}
        {/* <ReadMoreBox onClick={toggleReadMore}>read less</ReadMoreBox> */}
      </CustomParagraph>
    </section>
  );
};

export default About;
