import "./portfolio.css";
import { projects } from "../../data";
import AllProjectCard from "../../components/allProjectCard/AllProjectCard";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import { Fade } from "react-reveal";

export default function Portfolio() {
  const theme = useContext(ThemeContext).state.darkMode;
  return (
    <div className="portfolio" data-theme={theme}>
      <div className="portfolio-wrapper">
        <Fade top>
          <div className="portfolio-texts">
            <h1 className="portfolio-title">My Portfolio</h1>
          </div>
        </Fade>
        <Fade left>
          <div className="portfolio-list">
            {projects.map((project)=>(
            <AllProjectCard 
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
        </Fade>
      </div>
    </div>
  )
}
