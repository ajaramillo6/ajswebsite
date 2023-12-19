import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import "./topbar.css";
import Sidebar from "../sidebar/Sidebar";

export default function Topbar() {

    const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="top" data-theme={theme}>
        <div className="top-l-hide">
            <Sidebar mode={theme} handleClick={toggle} />
        </div>
        <div className="top-l"></div>
        <div className="top-r">
            <ul className="top-r-list">
                <Link to="/" className="top-r-list-link">
                    <li className="top-r-list-item">
                        Home
                    </li>
                </Link>
                <Link to="/about" className="top-r-list-link">
                    <li className="top-r-list-item">
                        About Me
                    </li>
                </Link>
                <Link to="/portfolio" className="top-r-list-link">
                    <li className="top-r-list-item">
                        Portfolio
                    </li>
                </Link>
                <li className="top-r-list-theme-wrapper">
                    <Link to="#" className="top-r-list-link" onClick={toggle}>
                        {theme === 'dark' ?
                        <i className="top-r-list-theme fa-solid fa-moon"></i>:
                        <i className="top-r-list-theme fa-solid fa-sun"></i>
                        }
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
