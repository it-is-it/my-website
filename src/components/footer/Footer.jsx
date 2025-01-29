import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="main">
      <a href="/" className="footer_logo">
        <img src={logo} alt="logo" className="footer_logo_image" />
      </a>
      <div className="footer">
        <p>To communicate with me :</p>
        <div className="social footer_socials">
          <a
            href="https://www.facebook.com/it.ishwortimalsina/"
            target="_blank"
            rel="noreferrer"
            className="social_icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/it.ishwortimalsina/"
            target="_blank"
            rel="noreferrer"
            className="social_icon"
          >
            <FiInstagram />
          </a>
          <a
            href="https://x.com/iamoratic007"
            target="_blank"
            rel="noreferrer"
            className="social_icon"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </div>

      <div className="footer_copyright">
        <small>© Ishwor Timalsina&#39;s Portfolio. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
