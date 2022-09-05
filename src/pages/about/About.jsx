import "./about.css";
import { useContext } from "react";
import { ThemeContext } from '../../context';
// import { Fade, Flip } from "react-reveal";

export default function About() {
  const theme = useContext(ThemeContext).state.darkMode;
  return (
    <div className="about" data-theme={theme}>
      <div className="about-wrapper">
        {/* <Flip top> */}
          <div className="about-left">
            <img src="./img/profile-pic2.jpeg" alt="" className="about-img" />
          </div>
        {/* </Flip> */}
        {/* <Fade right> */}
          <div className="about-right">
            <p className="about-text" >
              My name is Alvaro Jaramillo, but I also go by AJ. I am currently a Purchasing Supervisor 
              for North America at Amphenol, with experience creating and managing
              strategic planning reports concerning raw materials and logistics. During the 5 years
              working at Amphenol, I have learned valuable professional skills such as 
              report automation with Python, data analysis, problem solving and teamwork.
              <br />
              <br />
              I graduated from Libery University in 2017 with a BS degree in Industrial and Systems 
              Engineering and a minor in Mathematics. Outside of work, I also learned valuable 
              Web Developement skills and successfully completed the Codecademy Pro Web-developement 
              course online. I have applied this knowledge into several websites that require back-end
              developement and other advanced skills.
              <br />
              <br />
              Finally, I enjoy sports, making music, working on projects and I'm always interested in a challenge.
              Reach out below to connect with me! Thank you for your time!
            </p>
            <div className="about-connect-container">
              <div className="about-scroll-wrapper" onClick={()=>window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})}>
                <i className="about-scroll fa-solid fa-address-card"></i>
              </div>
              <a className="about-resume" href='https://drive.google.com/file/d/1vmhjyOUJ0mbaw0e9nCRVJ83xSXHBPHFc/view?usp=sharing'>
                <i className="about-resume-i fa-solid fa-cloud-arrow-down"></i>
                  Résumé
              </a>
            </div>
          </div>
        {/* </Fade> */}
      </div>
    </div>
  )
}
