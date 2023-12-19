import "./projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data";
import { useContext, useState } from "react";
import { ThemeContext } from '../../context';
import { motion } from "framer-motion";
import Portfolio from "../../pages/portfolio/Portfolio";

export default function Projects() {

  const { theme } = useContext(ThemeContext);

  const [index, setIndex] = useState(0);

  const handleScroll = (direction) => {
    if(direction === "l") {
        setIndex(index !== 0 ? index-1 : 1)
    }
    if(direction === "r") {
        setIndex(index !== 1 ? index+1 : 0)
    }
  }

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
        duration: 1,
      }
    }
  }

  return (
    <>
    <div className="projectsMobile">
      <Portfolio />
    </div>
    <section className="projects" data-theme={theme}>
      <motion.div className="projects-wrapper" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="projects-texts" variants={variants}>
            <motion.h1 className="projects-title" variants={variants}>Recent projects</motion.h1>
            <motion.p className="projects-desc" variants={variants}>
              These are the most recent projects that I've completed or are in the working stages
            </motion.p>
        </motion.div>
        {(index > 0) &&
        <div className="arrowLeft" style={{left: 0}} onClick={()=>handleScroll("l")}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        }
        <div className={(projects?.length >= 4) ? "projects-list":"projects-list-sm"} style={{transform:`translateX(${-100*index}vw)`}}>
          <motion.div className="projects-group" variants={variants}>
          {projects.slice(0,2).map((project)=>(
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              img={theme === 'dark' ? project.img[0] : project.img[1]}
              overview={project.overview}
              link={project.link}
              status={project.status}
            />
          ))}
          </motion.div>
          {projects?.length >= 4 &&
          <motion.div className="projects-group" variants={variants}>
          {projects.slice(2,4).map((project)=>(
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              img={theme === 'dark' ? project.img[0] : project.img[1]}
              overview={project.overview}
              link={project.link}
              status={project.status}
            />
          ))}
          </motion.div>}
        </div>
        {(index === 0 && projects?.length >= 4) &&
        <div className="arrowRight" style={{right: 0}} onClick={()=>handleScroll("r")}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        }
        <Link to="/portfolio" className="projects-link">
          <motion.div className="projects-button" variants={variants}>
            View all
          </motion.div>
        </Link>
      </motion.div>
    </section>
    </>
  )
}
