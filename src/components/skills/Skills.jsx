import "./skills.css";
import SkillCard from "../skillCard/SkillCard";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import { skills } from "../../data";

export default function Skills() {

  const theme = useContext(ThemeContext).state.darkMode;

  return (
    <div className="skills" data-theme={theme}>
      <div className="skills-wrapper">
        <div className="skills-texts">
            <h1 className="skills-title">What Do I Offer?</h1>
            <p className="skills-desc">
              My approach to developing technical skills is to take my existing skills, 
              keep expanding on them and develop new skills to benefit your company
            </p>
        </div>
        <div className="skills-list">
          {skills.map((skill)=>(
            <SkillCard 
              key={skill.id} 
              title={skill.title} 
              logo={skill.logo} 
              desc={skill.desc} 
              />
          ))}
        </div>
      </div>
    </div>
  )
}
