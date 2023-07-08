import "./projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data";
import { useContext, useState } from "react";
import { ThemeContext } from '../../context';
// import { Fade } from "react-reveal";

export default function Projects() {

  const theme = useContext(ThemeContext).state.darkMode;

  const [index, setIndex] = useState(0);

  const handleScroll = (direction) => {
    if(direction === "l") {
        setIndex(index !== 0 ? index-1 : 1)
    }
    if(direction === "r") {
        setIndex(index !== 1 ? index+1 : 0)
    }
  }

  return (
    <div className="projects" data-theme={theme}>
      <div className="projects-wrapper">
        {/* <Fade bottom> */}
        <div className="projects-texts">
            <h1 className="projects-title">Recent projects</h1>
            <p className="projects-desc">
              These are the most recent projects that I've completed or are in the working stages
            </p>
        </div>
        {/* </Fade> */}
        {/* <Fade bottom delay={500}> */}
          {index > 0 &&
          <div className="arrowLeft" style={{left: 0}} onClick={()=>handleScroll("l")}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          }
          <div className="projects-list" style={{transform:`translateX(${-1275*index}px)`}}>
            <div className="projects-group">
            {projects.slice(0,2).map((project)=>(
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
                overview={project.overview}
                link={project.link}
                status={project.status}
              />
            ))}
            </div>
            <div className="projects-group">
            {projects.slice(2,4).map((project)=>(
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
                overview={project.overview}
                link={project.link}
                status={project.status}
              />
            ))}
            </div>
          </div>
          {index === 0 &&
          <div className="arrowRight" style={{right: 0}} onClick={()=>handleScroll("r")}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          }
        {/* </Fade> */}
        {/* <Fade left> */}
          <Link to="/portfolio" className="projects-link">
            <div className="projects-button">
              View all
            </div>
          </Link>
        {/* </Fade> */}
      </div>
    </div>
  )
}
