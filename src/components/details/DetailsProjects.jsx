import "./DetailsProjects.css";
import { useParams, Link } from "react-router-dom";
import { data } from "../data";
import Footer from "../footer/Footer";
import { useTheme } from "../ThemeProvider";
import OtherProjects from "../OtherProjects/OtherProjects";

const DetailsProjects = () => {
  const theme = useTheme();
  const { darkMode } = theme || {};
  const { id } = useParams();

  // Find the project using the id
  const card = data.find((card) => card.id === parseInt(id));

  // If no card is found, show an error message
  if (!card) {
    return <div>Project not found</div>;
  }

  const imgArray = card.imgs;
  const skillsarray = card.tools;

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Link to="/" className="btn-arrow">
        <i className="fa-solid fa-arrow-left fa-flip-vertical fa-2xl"></i>
      </Link>

      <div className="Details pt-128">
        <div className="container">
          <div className="about-me">
            <div className="container-img">
              {imgArray.map((Element, index) => (
                <img src={Element} alt={`Project image ${index}`} key={index} />
              ))}
            </div>
          </div>

          <div className="container-text">
            <h3>{card.description}</h3>{" "}
            <h3>Skills:</h3>
            <div className="child">
              {skillsarray.map((element, index) => (
                <div key={index}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <h4>{element}</h4>
                </div>
              ))} 
              <a href={card.demo} className="btn btn-primary">
                Live Demo
              </a>
              <a href={card.urlgh} className="btn btn-primary">
                Go To GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <OtherProjects />
      <Footer />
    </div>
  );
};

export default DetailsProjects;
