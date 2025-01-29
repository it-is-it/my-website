import React, { useState } from "react";
import "./portfolio.css";
import { FaGithub, FaEye } from "react-icons/fa";
import { data } from "../data";
import { Link } from "react-router-dom";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentItems = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {currentItems.map(({ id, Image, title, github, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={Image} alt={title} />
              {/* Eye Icon Overlay */}
              <Link
                to={`/projects/${id}`}
                className="view-details-icon"
                title="View Details"
              >
                <FaEye size={30} />
              </Link>
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  title="Github"
                >
                  <FaGithub size={24} />
                </a>
              )}
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                title="Live Demo"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          aria-label="Previous Page"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={(currentPage + 1) * itemsPerPage >= data.length}
          aria-label="Next Page"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
