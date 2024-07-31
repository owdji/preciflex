import React, { useState } from "react";
import "../styles/CompetencesCarousel.css";
import { Link } from "react-router-dom";
import config from "../config";

const CompetencesCarousel = ({ competences }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="col-span-6 grid grid-cols-6">
      <div className="competencesTitle col-span-6 flex overflow-x-auto space-x-4 hideScrollBar whitespace-nowrap md:whitespace-normal">
        {competences.map((competence, index) => (
          <p
            key={index}
            onClick={() => setCurrent(index)}
            className={`inline-block ${current === index ? "pBoldBlue" : "p"}`}
          >
            {competence.competenceTitle}
          </p>
        ))}
      </div>

      <div className="col-span-6">
        <div className="col-span-6 grid grid-cols-1 md:grid-cols-6 carouselbox">
          <div className="md:col-span-3">
            <h3 className="title2 carouselTitle">
              {competences[current].competenceTitle}
            </h3>
            <div className="carouselDescription">
              <p className="p">{competences[current].competenceDescription}</p>
              <Link to={`competences#${competences[current].competenceTitle.toLowerCase().replace(/\s+/g, '-')}`}>
                <p className="pLink">See more...</p>
              </Link>
            </div>
          </div>
          <img
            src={`${config.apiUrl}${competences[current].competenceImage.data.attributes.url}`}
            className="md:col-span-3 order-2 md:order-1 comptenceCarouselImage"
          />
        </div>
      </div>
    </div>
  );
};

export default CompetencesCarousel;
