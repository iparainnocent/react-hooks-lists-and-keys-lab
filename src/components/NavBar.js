import React from "react";

const NavBar = () => {
  return (
    <nav>
      <a href="#home" key="home-link">
        Home
      </a>
      <a href="#about" key="about-link">
        About
      </a>
      <a href="#projects" key="projects-link">
        Projects
      </a>
    </nav>
  );
};

export default NavBar;
