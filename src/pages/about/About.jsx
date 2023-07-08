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
              strategic planning reports concerning raw materials and logistics. During the 6 years
              working at Amphenol, I’ve learned valuable professional skills such as report automation with Python, 
              advanced data analysis skills with Excel, problem solving and teamwork.
              <br />
              <br />
              I graduated from Libery University in 2017 with a BS degree in Industrial and Systems 
              Engineering and a minor in Mathematics. Outside of work I also learned valuable web-development 
              skills and successfully completed several beautifully designed MERN stack websites that use JWT 
              authentication, password encryption (bcrypt), email OTP verification and other methods to secure 
              user’s information.
              <br />
              <br />
              Finally, I enjoy sports, making music, working on projects and I'm always interested in a challenge.
              Reach out below to connect with me! Thank you for your time!
            </p>
            <div className="about-connect-container">
              <a className="about-resume" href='https://drive.google.com/file/d/1YS55gwWukTDfHg-RenDJMQ6JfAiOQlVn/view?usp=sharing'>
                <i class="fa-solid fa-file"></i>
                  Get CV
              </a>
            </div>
          </div>
        {/* </Fade> */}
      </div>
    </div>
  )
}
