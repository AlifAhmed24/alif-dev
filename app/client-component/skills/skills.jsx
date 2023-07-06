"use client";

import React, { useState, useRef, useEffect } from "react";
import "./skills.css";
import SectionHeading from "../../server-component/section-heading/section-heading";
import Skill from "./skill/skill";
import { programmingSkills, othersSkills } from "./skills-data";
import VisibilitySensor from "react-visibility-sensor";

function Skills() {
  const [animationProgrammingVisible, setAnimationProgrammingVisible] =
    useState(false);
  const [animationOtherVisible, setAnimationOtherVisible] = useState(false);
  const programmingSkillsRef = useRef(null);
  const otherSkillsRef = useRef(null);

  function animationProgrammingVisibleGetter(value){
      setAnimationProgrammingVisible(value);
  }

  return (
    <div className="skills">
      <div className="container">
        <SectionHeading heading="SKILLS" direction="left" />
        <div className="programming-skills">
          <h3 className="skills-type">Programming</h3>

          <div
            className='skillsWrapper'
            ref={programmingSkillsRef}
          >
            {programmingSkills.map((skill, index) => (
              <Skill
                index={index}
                name={skill.name}
                percentages={skill.percentage}
                logo={skill.logo}
                getter={animationProgrammingVisibleGetter}
              />
            ))}
          </div>
        </div>
        <div className="othersSkills">
          <h3 className="skills-type">Others</h3>
          <div
            className={`skillsWrapper ${
              animationOtherVisible ? "otherSkillsAnimate" : ""
            }`}
            ref={otherSkillsRef}
          >
            {othersSkills.map((skill, index) => (
              <Skill
                name={skill.name}
                percentages={skill.percentage}
                logo={skill.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
