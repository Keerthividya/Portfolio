import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";

function Header(props) {
  const theme = props.theme;
  const [currTheme, setCurrTheme] = useState(props.theme);

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  function changeTheme() {
    const next = currTheme === "light" ? "dark" : "light";
    props.setTheme(next);
    localStorage.setItem("theme", next);
    setCurrTheme(next);
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon strokeWidth={1} size={20} color="#A7A7A7" />
    ) : (
      <CgSun strokeWidth={1} size={20} color="#F9D784" />
    );

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/education", label: "Education and Certifications" },
    { to: "/experience", label: "Experience" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact and Resume" },
  ];

  const link = settings.isSplash ? "/splash" : "/home";

  return (
    <Fade top duration={1000} distance="20px">
      <header className="header">
        <NavLink to={link} className="logo">
          <span style={{ color: theme.text }}>&lt;</span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </NavLink>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="nav-link"
                activeClassName="active"
                style={{ color: theme.text }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <button {...styles} onClick={changeTheme}>
            {icon}
          </button>
        </ul>
      </header>
    </Fade>
  );
}

export default Header;
