import "./projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data";
import { useContext } from "react";
import { ThemeContext } from '../../context';
// import { Fade } from "react-reveal";

export default function Projects() {
  const theme = useContext(ThemeContext).state.darkMode;
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
          <div className="projects-list">
            {projects.slice(0,3).map((project)=>(
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
                desc={project.desc}
                link={project.link}
                status={project.status}
              />
            ))}
          </div>
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
