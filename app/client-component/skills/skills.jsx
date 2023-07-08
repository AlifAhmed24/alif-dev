
import "./skills.css";
import SectionHeading from "../../server-component/section-heading/section-heading";
import Skill from "./skill/skill";
import { programmingSkills, othersSkills } from "./skills-data";

function Skills() {


  return (
    <div className="skills" id='skills'>
      <div className="container">
        <SectionHeading heading="SKILLS" direction="left" />
        <div className="programming-skills">
          <h3 className="skills-type">Programming</h3>

          <div
            className='skillsWrapper'
            // ref={programmingSkillsRef}
          >
            {programmingSkills.map((skill, index) => (
              <Skill
                key={index}
                index={index}
                name={skill.name}
                percentages={skill.percentage}
                logo={skill.logo}
                // getter={animationProgrammingVisibleGetter}
              />
            ))}
          </div>
        </div>
        <div className="othersSkills">
          <h3 className="skills-type">Others</h3>
          <div
            className='skillsWrapper' >
            {othersSkills.map((skill, index) => (
              <Skill
                key={index}
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
