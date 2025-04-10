import React from "react";
import PropTypes from "prop-types";
import "./FeaturedProjects.css";
import { GithubIcon, WebIcon } from "../../assets/icons/icons";

function FeaturedProjects({
  title = "Project Title",
  description = "Project description not available.",
  github = "#",
  link = "#",
  image = "default-image.png",
  technologies = [],
}) {
  return (
    <div className="featured-project">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="featured-project__image-link"
      >
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="featured-project__image"
        />
      </a>
      <div className="featured-project__content">
        <h2 className="featured-project__header">Featured Project</h2>
        <h3 className="featured-project__title">{title}</h3>
        <div className="featured-project__details">
          <p className="featured-project__description">{description}</p>
          <p className="featured-project__technologies">
            {Array.isArray(technologies) ? technologies.join(" • ") : ""}
          </p>
        </div>
        <div className="featured-project__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project__link"
            >
              <GithubIcon className="featured-project__icon" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="featured-project__link"
            >
              <WebIcon className="featured-project__icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

FeaturedProjects.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

export default FeaturedProjects;
