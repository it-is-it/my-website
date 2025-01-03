import { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoGitNetworkSharp } from "react-icons/io5";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveNav("#");
  };

  return (
    <nav>
      {/* Home Section */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleScrollToTop();
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      {/* About Section */}
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      {/* Portfolio Section */}
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <IoGitNetworkSharp />
      </a>

      {/* Contact Section */}
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
