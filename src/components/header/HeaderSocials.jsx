import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/ishwortimalsina/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/it-is-it" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://x.com/iamoratic007" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
