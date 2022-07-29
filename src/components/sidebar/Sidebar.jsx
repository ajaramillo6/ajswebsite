import "./sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ mode, handleClick }) {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
      setSidebar(!sidebar)
    };

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
    <div className={sidebar ? "sidebarMenuActive" : "sidebarMenu"}>
        <ul className="sidebarMenuItems">
            <li className="sidebarToggle" onClick={showSidebar}>
              <Link className="link" to="#">
                <i className="fa-solid fa-xmark" style={{fontSize:"20px", cursor:"pointer"}}></i>
              </Link>
            </li>
            <li className="sidebarSection">
              <Link className="link" to="/">
                <div className="section">
                  <i className="fa-solid fa-house"></i>
                  <span className="text">Home</span>
                </div>
              </Link>
            </li>
            <li className="sidebarSection">
              <Link className="link" to="/about">
                <div className="section">
                  <i className="fa-solid fa-user"></i>
                  <span className="text">About Me</span>
                </div>
              </Link>
            </li>
            <li className="sidebarSection">
              <Link className="link" to="/portfolio">
                <div className="section">
                  <i className="fa-solid fa-diagram-project"></i>
                  <span className="text">Portfolio</span>
                </div>
              </Link>
            </li>
            <li className="sidebarSection">
              <Link className="link" to="#" onClick={handleClick}>
                <div className="section">
                    {mode ?
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
            </li>
        </ul>
      </div>
    </>
  )
}
