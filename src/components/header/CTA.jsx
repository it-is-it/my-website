import React from "react";
import CV from "../../assets/CV.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download="ishwortimalsina.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
