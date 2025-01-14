import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import projectsData from "../../data/projectsData";
import "./Projects.css";

function Projects() {
  const featuredProjects = projectsData.filter((project) => project.featured);
  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">Projects Section</h1>
      <div className="projects__list">
        {featuredProjects.map((project, index) => (
          <FeaturedProjects
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
            link={project.link}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
