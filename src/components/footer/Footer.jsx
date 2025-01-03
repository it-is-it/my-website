import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      <a href="/" className="footer_logo">
        {/* Ishwor's Logo */}
        <img
          src={require("../../assets/logo.png")}
          alt="logo"
          style={{ width: "200px", height: "auto" }}
        />
      </a>
      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/it.ishwortimalsina/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/it.ishwortimalsina/" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://x.com/iamoratic007" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copyright">
        <small>© Ishwor Timalsina's Portfolio. All rights reserved </small>
      </div>
    </footer>
  );
}

export default Footer;
