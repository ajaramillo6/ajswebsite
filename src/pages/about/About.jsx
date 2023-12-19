import "./about.css";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../../components/contact/Contact";

export default function About() {
  const { theme } = useContext(ThemeContext);

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
    <div className="about" data-theme={theme}>
      <motion.div 
        className="about-wrapper"
        variants={variants} 
        initial="initial" 
        whileInView="animate">
          <motion.div className="about-left" variants={variants}>
            <img src="./img/profile-pic2.jpeg" alt="" className="about-img" />
          </motion.div>
          <motion.div className="about-right" variants={variants}>
            <p className="about-text" >
              My name is Alvaro Jaramillo, but I also go by AJ. I am currently a Purchasing Supervisor 
              for North America at <a className="about-link" href="https://amphenol.com/">Amphenol</a>, with experience creating and managing
              strategic planning reports concerning raw materials and logistics. I started
              working at Amphenol in 2017, and since then I’ve learned valuable professional skills such as excel automation with Python, 
              advanced data analytics, problem solving and teamwork.
              <br />
              <br />
              I graduated from <a className="about-link" href="https://www.liberty.edu/">Libery University</a> in 2017 with a BS degree in Industrial and Systems 
              Engineering and a minor in Mathematics. Outside of work I also learned valuable web-development 
              skills and successfully completed several beautifully designed <Link to={`/portfolio`}  className="about-link">full-stack websites</Link> that use JWT 
              authentication, Google Auth, password encryption, email OTP verification and other methods to secure 
              user’s information.
              <br />
              <br />
              Finally, I enjoy sports, making music, working on projects and I'm always interested in a challenge.
              Reach out below to connect with me! Thank you for your time!
            </p>
            <motion.div className="about-connect-container" variants={variants}>
              <a className="about-resume" href='https://drive.google.com/file/d/1YS55gwWukTDfHg-RenDJMQ6JfAiOQlVn/view?usp=sharing'>
                <i class="fa-solid fa-file"></i>
                  Get CV
              </a>
            </motion.div>
          </motion.div>
      </motion.div>
    </div>
    <Contact />
    </>
  )
}
