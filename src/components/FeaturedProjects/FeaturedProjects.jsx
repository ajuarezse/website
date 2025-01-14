import React from "react";
import PropTypes from "prop-types";
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
        alt={`Screenshot of ${title}`}
        className="featured-project__image"
      />
      <div className="featured-project__content">
        <h2 className="featured-project__header">Featured Project</h2>
        <h3 className="featured-project__title">{title}</h3>
        <p className="featured-project__description">{description}</p>
        <p className="featured-project__technologies">
          {Array.isArray(technologies) ? technologies.join(" • ") : ""}
        </p>
        <div className="featured-project__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project__link"
            >
              Github
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project__link"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

FeaturedProjects.defaultProps = {
  title: "Project Title",
  description: "Project description not available.",
  github: "#",
  link: "#",
  image: "default-image.png",
  technologies: [],
};

FeaturedProjects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

export default FeaturedProjects;
