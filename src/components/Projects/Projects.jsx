import React from "react";
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects";
import ProjectCard from "../ProjectCard/ProjectCard";
import projectsData from "../../data/projectsData";
import "./Projects.css";

function Projects() {
  const featuredProjects = projectsData.filter((project) => project.featured);
  const nonFeaturedProjects = projectsData.filter(
    (project) => !project.featured
  );
  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">
        Things I've Built
        <span className="projects__title-line"></span>
      </h1>
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
      <h2 className="projects__sub-title">Other Projects</h2>
      <div className="projects__grid">
        {nonFeaturedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
