import React from "react";

const ProjectItem = ({ id, title, description, technologies }) => {
  return (
    <div data-testid={`project-item-${id}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        Technologies:
        {technologies.map((tech, index) => (
          <span key={index}>{tech} </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
