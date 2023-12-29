import "./skills.css";
import SkillCard from "../skillCard/SkillCard";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import { skills } from "../../data";
import { motion } from "framer-motion";

export default function Skills() {

  const { theme } = useContext(ThemeContext);

  const variants = {
    initial:{
      x: 0,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <div className="skills" data-theme={theme}>
      <motion.div 
        className="skills-wrapper"
        variants={variants} 
        initial="initial" 
        whileInView="animate">
          <motion.div className="skills-texts" variants={variants}>
              <h1 className="skills-title">What Do I Offer?</h1>
              <p className="skills-desc">
                My approach to developing technical skills is to take my existing skills, 
                keep expanding on them and develop new skills to benefit your company
              </p>
          </motion.div>
          <motion.div className="skills-list" variants={variants}>
            {skills.map((skill)=>(
              <SkillCard 
                key={skill.id} 
                title={skill.title} 
                logo={skill.logo} 
                desc={skill.desc} 
              />
            ))}
          </motion.div>
      </motion.div>
    </div>
  )
}
