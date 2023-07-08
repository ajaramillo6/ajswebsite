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
        <div className="singleProject-overview-container">
          <div className="singleProject-overview-wrapper">
            <span className="singleProject-subTitle">Overview</span>
            <div className="singleProject-desc">{currProject.overview}</div>
          </div>
          <div className="singProject-tools-wrapper">
            <span className="singleProject-subTitle">Tools</span>
            <div className="singleProject-tools">{currProject.tools.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{tool}</div>
            ))}</div>
          </div>
        </div>
        <div className="singleProject-goals-container">
          <span className="singleProject-subTitle">Design Goals</span>
          <div className="singleProject-goals">{currProject.designGoals.map((goal, i) => (
            <div className="singleProject-goal-wrapper">
              <div className="singleProject-goal-header">
                <div className="singleProject-goal-logo"><i className={goal[0]}></i></div>
                <div className="singleProject-goal-title">{goal[1]}</div>
              </div>
              <div className="singleProject-goal-desc">
                {goal[2]}
              </div>
            </div>
          ))}</div>
        </div>
        <div className="singleProject-additional-container">
          <span className="singleProject-subTitle">Responsive Design</span>
          <div className="singleProject-additional-wrapper">
            <img className="singleProject-additional-computer" src={currProject.additionalPic} alt="" />
          </div>
        </div>
        <div className="singleProject-github">
          <a href={currProject.githubLink} className="link">
            <i className="singleProject-i fa-brands fa-github"></i>
            View code in Github
          </a>
        </div>
        {currProject.status==="complete" ? <a href={currProject.link} className="link">
          <div className="singleProject-link">Check out website</div></a>:
          <div className="singleProject-noLink">Link to website not available</div>
        }
        <b className="skip-text">Want to skip to another project?</b>
        <div className="singleProject-skip-wrapper">
          <Link to={`/projects/${prevProject?.id}`}  className="link">
          <div className="singleProject-skip-left">
            <i className="skip-i fa-solid fa-circle-arrow-left"></i>
            <div className="skip-title">{prevProject.title}</div>
            <div className="skip-desc">{prevProject.overview}</div>
          </div>
          </Link>
          <Link to={`/projects/${nextProject?.id}`}  className="link">
          <div className="singleProject-skip-right">
            <i className="skip-i fa-solid fa-circle-arrow-right"></i>
            <div className="skip-title">{nextProject.title}</div>
            <div className="skip-desc">{nextProject.overview}</div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
