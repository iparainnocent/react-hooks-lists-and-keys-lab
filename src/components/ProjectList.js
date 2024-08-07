import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.about}</p>
          <div>
            {project.technologies.map((tech, index) => (
              <span key={`tech-${index}`}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
