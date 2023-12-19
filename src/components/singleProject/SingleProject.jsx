import "./singleProject.css";
import { useLocation, Link } from "react-router-dom";
import { ThemeContext } from '../../context';
import { useContext, useRef } from "react";
import { motion, useScroll, useSpring } from 'framer-motion';

export default function SingleProject({ projects }) {

  const { theme } = useContext(ThemeContext);

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

  //Animations

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


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
    <div className="singleProject">
      <motion.div className="singleProjectWrapper" variants={variants} initial="initial" whileInView="animate">
        <div className="single-progress">
          <div className="singleProject-cat">{currProject.cat}</div>
          <h1 className="singleProject-title">{currProject.title}</h1>
          <motion.div style={{ scaleX }} className="single-progressBar" variants={variants}></motion.div>
        </div>
        <div className="singleProject-img-container">
          <img className="singleProject-img" src={`../${theme === 'dark' ? currProject.img[0] : currProject.img[1]}`} alt="" />
        </div>
        <motion.div className="singleProject-overview-container" variants={variants}>
          <motion.div className="singleProject-overview-wrapper" variants={variants}>
            <span className="singleProject-subTitle">Overview</span>
            <div className="singleProject-desc">{currProject.overview}</div>
          </motion.div>
          <motion.div className="singProject-tools-wrapper" variants={variants}>
            <span className="singleProject-subTitle">Tools</span>
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>Technologies: </p>{currProject.tools.technologies?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>Storage: </p>{currProject.tools.storage?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>Libraries: </p>{currProject.tools.libraries?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>
            {currProject.tools.api?.length > 0 &&
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>APIs: </p>{currProject.tools.api?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>}
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>Styling: </p>{currProject.tools.styling?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>
            <div className="singleProject-tools"><p style={{marginRight:"5px"}}>Deployment tool: </p>{currProject.tools.deployment?.map((tool, i) => (
              <div className="singleProject-tool" key={i}>{(i ? ', ':'')+tool}</div>
            ))}</div>
          </motion.div>
        </motion.div>
        <motion.div className="singleProject-goals-container" variants={variants}>
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
        </motion.div>
        <motion.div className="singleProject-additional-container" variants={variants}>
          <span className="singleProject-subTitle">Responsive Design</span>
          <div className="singleProject-additional-wrapper">
            <img className="singleProject-additional-computer" src={theme === 'dark' ? currProject.additionalPic[0] : currProject.additionalPic[1]} alt="" />
          </div>
        </motion.div>
        <motion.div className="singleProject-github" variants={variants}>
          <a href={currProject.githubLink} className="link">
            <i className="singleProject-i fa-brands fa-github"></i>
            View code in Github
          </a>
        </motion.div>
        {currProject.status==="complete" ? <motion.a href={currProject.link} className="link" variants={variants}>
          <div className="singleProject-link">Check out website</div></motion.a>:
          <motion.div className="singleProject-noLink">Link to website not available</motion.div>
        }
        <motion.b className="skip-text" variants={variants}>Want to skip to another project?</motion.b>
        <motion.div className="singleProject-skip-wrapper" variants={variants}>
          {projects.length > 2 &&
            <Link to={`/projects/${prevProject?.id}`}  className="link">
            <div className="singleProject-skip-left">
              <i className="skip-i fa-solid fa-circle-arrow-left"></i>
              <div className="skip-title">{prevProject.title}</div>
              <div className="skip-desc">{prevProject.overview}</div>
            </div>
            </Link>
          }
          <Link to={`/projects/${nextProject?.id}`}  className="link">
          <div className="singleProject-skip-right">
            <i className="skip-i fa-solid fa-circle-arrow-right"></i>
            <div className="skip-title">{nextProject.title}</div>
            <div className="skip-desc">{nextProject.overview}</div>
          </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
