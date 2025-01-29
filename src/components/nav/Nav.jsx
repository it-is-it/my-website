import { useState } from "react";
import "./nav.css";
import { AiFillHome, AiOutlineMail } from "react-icons/ai"; // Updated Home and Contact Icons
import { FaUserAlt, FaCode, FaSuitcase, FaAddressBook } from "react-icons/fa"; 

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  // Function for scrolling to a section
  const handleScroll = (section) => {
    const target = document.querySelector(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveNav(section);
    }
  };

  return (
    <nav>
      {/* Home Section */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("#home");
        }}
        className={activeNav === "#home" ? "active" : ""}
      >
        <AiFillHome />
      </a>

      {/* About Section */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>

      {/* Skills Section */}
      <a
        href="#skills"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("#skills");
        }}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <FaCode />
      </a>

      {/* Portfolio Section */}
      <a
        href="#portfolio"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("#portfolio");
        }}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <FaSuitcase />
      </a>

      {/* Contact Section */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaAddressBook />
      </a>
    </nav>
  );
}

export default Nav;
