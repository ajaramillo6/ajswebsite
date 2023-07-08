import './intro.css';
import { useContext } from "react";
import { ThemeContext } from '../../context';
import "../../index.css";
// import { Flip, Fade } from "react-reveal";

export default function Intro() {

    const theme = useContext(ThemeContext).state.darkMode;

  return (
    <div className="intro" data-theme={theme}>
        <div className="intro-l">
            <div className="intro-l-wrapper">
                {/* <Fade left> */}
                <h2 className="intro-text">Hello, my name is</h2>
                <h1 className="intro-name">AJ</h1>
                <p className="intro-desc">
                    Eager to learn, dedicated, creative. Currently designing aesthetically pleasing websites that promote user friendliness and data security.
                </p>
                <div className="intro-social-wrapper">
                    <a className="link" href="https://github.com/ajaramillo6">
                        <i className="intro-social-i fa-brands fa-github"></i>
                    </a>
                    <a className="link" href="https://www.linkedin.com/in/alvaro-jaramillo-05131297/">
                        <i className="intro-social-i fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                {/* </Fade> */}
                <div className="intro-scroll-wrapper" onClick={()=>window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'})}>
                    <i className="intro-scroll fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
        <div className="intro-r">
            {/* <Fade right> */}
            {/* <div className="intro-bg"></div> */}
            {/* </Fade> */}
            {/* <Flip top> */}
            <div className="intro-img-wrapper">
                <img src="./img/profile-pic2.jpeg" alt="" className="intro-img" />
            </div>
            {/* </Flip> */}
        </div>
    </div>
  )
}

