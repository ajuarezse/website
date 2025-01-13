import React from "react";
import "./FeaturedProjects.css";

function FeaturedProjects({ title, description, link, image }) {
  return (
    <div className="featured-project">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="featured-project__image"
      />
      <div className="featured-project__content">
        <h3 className="featured-project__title">{title}</h3>
        <p className="featured-project__description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="featured-project__link"
        >
          ViewProject
        </a>
      </div>
    </div>
  );
}

export default FeaturedProjects;
