import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul id="navbar-container">
        <a className="nav-item" href="/experience">
          <li>Experience</li>
        </a>
        <a className="nav-item" href="/education">
          <li>Education</li>
        </a>
        <a href="/">
          <div id="juli"></div>
        </a>
        <a className="nav-item" href="/skills">
          <li>Skills</li>
        </a>
        <a className="nav-item" href="/contact">
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
