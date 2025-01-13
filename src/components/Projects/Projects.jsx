import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import projectsData from "../../data/projectsData";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">Projects Section</h1>
      <div className="projects__list">
        {projectsData.map((project, index) => (
          <FeaturedProjects
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
