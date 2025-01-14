import React from "react";
import "./FeaturedProjects.css";

function FeaturedProjects({
  title,
  description,
  github,
  link,
  image,
  technologies,
}) {
  return (
    <div className="featured-project">
      <img
        src={image}
        alt={`${title} screenshot`}
        className="featured-project__image"
      />
      <div className="featured-project__content">
        <h2 className="featured-project__header">Featured Project</h2>
        <h3 className="featured-project__title">{title}</h3>
        <p className="featured-project__description">{description}</p>
        <p className="featured-project__technologies">
          {technologies.join(" • ")}
        </p>
        <div className="featured-project__links">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-project__link"
          >
            Github
          </a>
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
    </div>
  );
}

export default FeaturedProjects;
