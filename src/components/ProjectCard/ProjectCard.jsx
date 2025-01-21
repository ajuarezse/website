import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import { GithubIcon, WebIcon } from "../../assets/icons/icons";

function ProjectCard({ title, description, github, link, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <p className="project-card__technologies">{technologies.join(" • ")}</p>
      <div className="project-card__links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <GithubIcon className="project-card__icon" />
          </a>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            <WebIcon className="project-card__icon" />
          </a>
        )}
      </div>
    </div>
  );
}

ProjectCard.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string,
  link: PropTypes.string,
  tecnhologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
