import React from "react";
import CV from "../../assets/CV.pdf";
import ME from "../../assets/me.png";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

function Header() {
  // Smooth scroll to the #contact section
  const handleScrollDownClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector("#contact");
    targetSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ishwor Timalsina</h1>
        <h5 className="text-light">
          I'm currently learning JavaScript and Python to start my journey as a
          developer
        </h5>

        <div className="cta">
          <a href={CV} download="ishwortimalsina.pdf" className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="header_socials">
          <a
            href="https://www.linkedin.com/in/ishwortimalsina/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/it-is-it"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://x.com/iamoratic007" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="me">
          <img src={ME} alt="Ishwor Timalsina" />
        </div>

        <ScrollAnimation
          animateIn="fadeIn"
          duration={1}
          delay={0}
          animateOnce={true}
        >
          <a
            href="#contact"
            onClick={handleScrollDownClick}
            className="scroll_down"
          >
            Scroll Down
          </a>
        </ScrollAnimation>
      </div>
    </header>
  );
}

export default Header;
