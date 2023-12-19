import "./portfolio.css";
import { projects } from "../../data";
import Contact from "../../components/contact/Contact";
import { useContext, useRef } from "react";
import { ThemeContext } from '../../context';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Link } from "react-router-dom";

const SingleProject = ({project}) => {
  const { theme } = useContext(ThemeContext);
  const ref = useRef();
  const { scrollYProgress } = useScroll({target: ref});
  const y = useTransform(scrollYProgress, [0,1], [-700, 300])
  return (
    <section>
      <div className="singleProject-container">
        <div className="singleProject-wrapper">
          <div className="singleProjectImgContainer" ref={ref}>
            <img className="singleProjectImg" src={theme === 'dark' ? project.img[0] : project.img[1]} alt="" />
          </div>
          <motion.div className={theme === 'dark' ? "singleProjectTextContainer":"singleProjectTextContainer-light"} style={{ y }}>
            <h2 className="singleProjectTitle">{project.title}</h2>
            <p className="singleProjectDesc">{project.overview}</p>
            <Link to={`/projects/${project.id}`}  className="link">
              <button className="singleProjectBtn">See More</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {

  const ref = useRef()

  const { theme } = useContext(ThemeContext);

  const { scrollYProgress } = useScroll({target: ref, offset: ["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
    <div className="portfolio" data-theme={theme} ref={ref}>
      <div className="portfolioWrapper">
        <div className="progress">
          <h1>Web-Development Portfolio</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {projects.map((project)=>(
          <SingleProject project={project} key={project.id} />
        ))}
      </div>
      <section><Contact /></section>
    </div>
    </>
  )
}
