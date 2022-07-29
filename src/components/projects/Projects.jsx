import "./projects.css";
import { Link } from "react-router-dom";
import ProjectCard from "../projectCard/ProjectCard";
import { projects } from "../../data";
import { useContext } from "react";
import { ThemeContext } from '../../context';

export default function Projects() {
  const theme = useContext(ThemeContext).state.darkMode;
  return (
    <div className="projects" data-theme={theme}>
      <div className="projects-wrapper">
        <div className="projects-texts">
            <h1 className="projects-title">Recent projects</h1>
            <p className="projects-desc">
              My approach to developing technical skills is to take my existing skills, 
              keep expanding on them and develop new skills to benefit your company
            </p>
        </div>
        <div className="projects-list">
          {projects.slice(0,3).map((project)=>(
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.img}
              desc={project.desc}
              link={project.link}
            />
          ))}
        </div>
        <Link to="/portfolio" className="projects-link">
          <div className="projects-button">
            View all
          </div>
        </Link>
      </div>
    </div>
  )
}
