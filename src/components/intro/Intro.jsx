import './intro.css';
import { useContext } from "react";
import { ThemeContext } from '../../context';
import "../../index.css";
import { motion } from "framer-motion";

export default function Intro() {

    const { theme } = useContext(ThemeContext);

    const textVariants = {
        initial: {
            y: -500,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        }
    }


    const textVariants2 = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        }
    }

  return (
    <div className="intro" data-theme={theme}>
        <div className="intro-l">
            <motion.div 
                className="intro-l-wrapper"
                variants={textVariants}
                initial="initial"
                animate="animate">
                <motion.h2 className="intro-text" variants={textVariants}>Hello, my name is</motion.h2>
                <motion.h1 className="intro-name" variants={textVariants}>Alvaro Jaramillo (AJ)</motion.h1>
                <motion.p className="intro-desc" variants={textVariants}>
                    Eager to learn, dedicated, creative. Currently designing aesthetically pleasing websites that promote user friendliness and data security.
                </motion.p>
                <motion.div className="intro-social-wrapper" variants={textVariants}>
                    <a className="link" href="https://github.com/ajaramillo6">
                        <i className="intro-social-i fa-brands fa-github"></i>
                    </a>
                    <a className="link" href="https://www.linkedin.com/in/alvaro-jaramillo-05131297/">
                        <i className="intro-social-i fa-brands fa-linkedin-in"></i>
                    </a>
                    <button 
                        className="intro-connectBtn" 
                        onClick={()=>window.scrollTo({
                            top: document.body.scrollHeight, behavior: 'smooth',
                        })}>
                            Contact Me
                    </button>
                </motion.div>
                <motion.div 
                    className="intro-scroll-wrapper" 
                    onClick={()=>window.scrollTo({
                        top: window.innerHeight, 
                        left: 0, behavior: 'smooth'
                    })}
                    variants={textVariants2}>
                    <motion.i className="intro-scroll fa-solid fa-chevron-down" variants={textVariants2}></motion.i>
                </motion.div>
            </motion.div>
        </div>
        <div className="intro-r">
            <img className="intro-img" src="./img/intro-img.png" alt="" />
        </div>
    </div>
  )
}

