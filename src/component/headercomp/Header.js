import React from "react";
import "./header.css";
import logo from "../../assets/Sql_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
const Header = ({ isDarkModeActive, setIsDarkModeActive }) => {
  return (
    <div className="header">
      <div>
        <div className="logoimg">
          <img src={logo} />
          <FontAwesomeIcon icon={faMoon} onClick={() => setIsDarkModeActive(!isDarkModeActive)} className="darkmode" />
        </div>

        <h1>SQL EDITOR</h1>

      </div>
    </div>
  );
};

export default Header;
