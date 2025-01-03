import React, { useState } from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ishwor Timalsina</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials /> 
        <div className="me">
          <img src={ME} alt="Ishwor Timalsina" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
