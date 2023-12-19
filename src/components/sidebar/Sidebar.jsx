import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar({ mode, handleClick }) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
      setSidebar(!sidebar)
    };

    const variants = {
      sidebarMenuActive:{
        transition:{
          staggerChildren: 0.1,
        }
      },
      sidebarMenu:{
        transition:{
          staggerChildren: 0.05,
        }
      }
    }

    const itemVariants = {
      sidebarMenuActive:{
        y: 0,
        opacity: 1,
      },
      sidebarMenu:{
        y: 50,
        opacity: 0,
      }
    }

  return (
    <>
    <div className="sidebar">
        <ul className="sidebar-list">
            <li className="side-list-item">
                <Link to="#" className="link" onClick={showSidebar}>
                    <i className="side-bars fa-solid fa-bars"></i>
                </Link>
            </li>
        </ul>
    </div>
    <motion.div className={sidebar ? "sidebarMenuActive" : "sidebarMenu"} variants={variants} animate={sidebar ? "sidebarMenuActive" : "sidebarMenu"}>
        <ul className="sidebarMenuItems">
            <motion.li className="sidebarToggle" onClick={showSidebar} variants={itemVariants}>
              <Link className="link" to="#">
                <i className="fa-solid fa-xmark" style={{fontSize:"20px", cursor:"pointer"}}></i>
              </Link>
            </motion.li>
            <motion.li className="sidebarSection" variants={itemVariants}>
              <Link className="link" to="/">
                <div className="section">
                  <i className="fa-solid fa-house"></i>
                  <span className="text">Home</span>
                </div>
              </Link>
            </motion.li>
            <motion.li className="sidebarSection" variants={itemVariants}>
              <Link className="link" to="/about">
                <div className="section">
                  <i className="fa-solid fa-user"></i>
                  <span className="text">About Me</span>
                </div>
              </Link>
            </motion.li>
            <motion.li className="sidebarSection" variants={itemVariants}>
              <Link className="link" to="/portfolio">
                <div className="section">
                  <i className="fa-solid fa-diagram-project"></i>
                  <span className="text">Portfolio</span>
                </div>
              </Link>
            </motion.li>
            <motion.li className="sidebarSection" variants={itemVariants}>
              <Link className="link" to="#" onClick={handleClick}>
                <div className="section">
                    {mode === 'dark' ?
                    <>
                        <i className="fa-solid fa-moon"></i>
                        <span className="text">Dark Mode</span>
                    </>:
                    <>
                    <i className="fa-solid fa-sun"></i>
                    <span className="text">Light Mode</span>
                    </>
                    }
                </div>
              </Link>
            </motion.li>
        </ul>
      </motion.div>
    </>
  )
}
