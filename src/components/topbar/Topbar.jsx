import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import "./topbar.css";
import Sidebar from "../sidebar/Sidebar";

export default function Topbar() {

    const theme = useContext(ThemeContext);
    const mode = theme.state.darkMode


    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    }

  return (
    <div className="top" data-theme={mode}>
        <div className="top-l-hide">
            <Sidebar mode={mode} handleClick={handleClick} />
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
                    <Link to="#" className="top-r-list-link" onClick={handleClick}>
                        {mode ?
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
