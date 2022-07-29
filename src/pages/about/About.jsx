import "./about.css";
import { useContext } from "react";
import { ThemeContext } from '../../context';

export default function About() {
  const theme = useContext(ThemeContext).state.darkMode;
  return (
    <div className="about" data-theme={theme}>
      <div className="about-wrapper">
        <div className="about-left">
          <img src="./img/profile-pic3.jpg" alt="" className="about-img" />
        </div>
        <div className="about-right">
          <p className="about-text" >
            Alvaro Jaramillo, also known as AJ, is currently a Purchasing Supervisor 
            for North America at Amphenol, with experience creating and managing
            strategic planning reports concerning raw materials and logistics. During the 5 years
            AJ has worked at Amphenol, he has learned valuable professional skills such as 
            report automation with Python, data analysis, problem solving and teamwork.
            <br />
            <br />
            He graduated from Libery University in 2017 with a BS degree in Industrial and Systems 
            Engineering and a minor in Mathematics. Outside of work, AJ also learned valuable 
            Web Developement skills and successfully completed the Codecademy Pro Web-developement 
            course online. He has applied this knowledge into several websites that require back-end
            developement and other advanced skills.
            <br />
            <br />
            AJ enjoys sports, making music, working on projects and is always interested in a challenge.
            Reach out below to connect with AJ! Thank you for your time!
          </p>
        </div>
      </div>
    </div>
  )
}
