import "./portfolio.css";
import { projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from '../../context';
// import { Fade } from "react-reveal";

export default function Portfolio() {
  const theme = useContext(ThemeContext).state.darkMode;

  const [index, setIndex] = useState(0);

  const handleScroll = (direction) => {
    if(direction === "l") {
        setIndex(index !== 0 ? index-1 : projects.length-4)
    }
    if(direction === "r") {
        setIndex(index !== projects.length-4 ? index+1 : 0)
    }
  }

  return (
    <div className="portfolio" data-theme={theme}>
      <div className="portfolio-wrapper">
        {/* <Fade top> */}
          <div className="portfolio-texts">
            <h1 className="portfolio-title">My Portfolio</h1>
          </div>
        {/* </Fade> */}
        {/* <Fade left> */}
          {index > 0 &&
          <div className="portfolio-arrowLeft" style={{left: 0}} onClick={()=>handleScroll("l")}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          }
          <div className="portfolio-list" style={{transform:`translateX(${-335*index}px)`}}>
            {projects.map((project)=>(
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.img}
              overview={project.overview}
              link={project.link}
              status={project.status}
              type="portfolio"
            />
            ))}
          </div>
          {index < projects.length-4 &&
          <div className="portfolio-arrowRight" style={{right: 0}} onClick={()=>handleScroll("r")}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
          }
        {/* </Fade> */}
      </div>
    </div>
  )
}
