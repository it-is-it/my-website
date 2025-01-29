import Header from "../header/Header";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../portfolio/Portfolio";
import Nav from "../nav/Nav";
import Certificates from "../certificates/Certificates";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { useTheme } from "../ThemeProvider";
import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const theme = useTheme();
  const { darkMode, toggleTheme } = theme || {};
  const [navbarPosition, setNavbarPosition] = useState("bottom");

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        setNavbarPosition("top");
      } else {
        setNavbarPosition("bottom");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${darkMode ? "dark" : "light"} `}>
      <button
        className={styles.darkModeToggle}
        onClick={toggleTheme}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
