import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../../context';
import "./navbarMobile.css";

const NavbarMobile = () => {

    const { theme, toggle } = useContext(ThemeContext);

  return (
    <div className="navMobile" data-theme={theme}>
        <div className="navMobile-wrapper">
            <ul className="navMobile-list">
                <Link to="/" className="navMobile-list-link">
                    <li className="navMobile-list-item">
                        <i className="fa-solid fa-house"></i>
                    </li>
                </Link>
                <Link to="/about" className="navMobile-list-link">
                    <li className="navMobile-list-item">
                        <i className="fa-solid fa-user"></i>
                    </li>
                </Link>
                <li className="navMobile-theme-wrapper">
                    <Link to="#" className="navMobile-list-link" onClick={toggle}>
                        {theme === 'dark' ?
                        <i className="navMobile-list-theme fa-solid fa-moon"></i>:
                        <i className="navMobile-list-theme fa-solid fa-sun"></i>
                        }
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavbarMobile