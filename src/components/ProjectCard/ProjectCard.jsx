import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";

function ProjectCard({ title, description, github, link, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <p className="project-card__technologies">{technologies.join(" • ")}</p>
    </div>
  );
}

ProjectCard.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tecnhologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
