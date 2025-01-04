import ME from "../../assets/about -me.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_contents">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Not yet Working</small>
            </article>

            {/* <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>50+ WorldWide</small>
            </article> */}

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I’m a web developer fueled by curiosity and creativity, currently mastering both JavaScript and Python. 
          With a strong passion for React, I focus on building polished, user-friendly web applications. I constantly seek new challenges and 
          strive to improve my skills while staying updated with the latest trends in the tech world. 
          My goal is to create innovative solutions and continually grow as a developer in the ever-evolving tech landscape.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;
