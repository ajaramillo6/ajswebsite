import "./singleProject.css";
import { useLocation, Link } from "react-router-dom";

export default function SingleProject({ projects }) {

  let prevProject;
  let nextProject;

  const location = useLocation()
  const path = location.pathname.split("/")[2];

  let currProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path))[0];

  if (currProject.id === 1){
    prevProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path) + (projects.length - 1))[0];
    nextProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path) + 1)[0];
  } else if (currProject.id > 1 && (currProject.id < projects.length)) {
    prevProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path) - 1)[0];
    nextProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path) + 1)[0];
  } else if (currProject.id === projects.length) {
    prevProject = projects.map(projectList=>projectList).filter(project=>project.id === Number(path)-1)[0];
    nextProject = projects.map(projectList=>projectList).filter(project=>project.id === 1)[0];
  }

  console.log(currProject.video)
  return (
    <div className="singleProject">
      <div className="singleProjectWrapper">
        <div className="singleProject-cat">{currProject.cat}</div>
        <span className="singleProjectTitle">{currProject.title}</span>
        {(currProject.status==="complete" || currProject.status==="in-process") ?
          <iframe title="video" src={currProject.video} className="singleProject-iframe"></iframe>:
          <div className="singleProject-img-container">
            <img className="singleProject-img" src={`../${currProject.img}`} alt="" />
          </div>
        }
        <div className="singleProject-desc">{currProject.desc}</div>
        <div className="singleProject-tools"><b>Utilized: </b>{currProject.tools}</div>
        {currProject.status==="complete" ? <a href={currProject.link} className="link">
          <div className="singleProject-link">Check out website</div></a>:
          <div className="singleProject-noLink">Link not available</div>
        }
        <b className="skip-text">Want to skip to another project?</b>
        <div className="singleProject-skip-wrapper">
          <Link to={`/projects/${prevProject.id}`}  className="link">
          <div className="singleProject-skip-left">
            <i className="skip-i fa-solid fa-circle-arrow-left"></i>
            <div className="skip-title">{prevProject.title}</div>
            <div className="skip-desc">{prevProject.desc}</div>
          </div>
          </Link>
          <Link to={`/projects/${nextProject.id}`}  className="link">
          <div className="singleProject-skip-right">
            <i className="skip-i fa-solid fa-circle-arrow-right"></i>
            <div className="skip-title">{nextProject.title}</div>
            <div className="skip-desc">{nextProject.desc}</div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
