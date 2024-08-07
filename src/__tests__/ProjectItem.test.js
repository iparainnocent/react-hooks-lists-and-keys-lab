import React from "react";

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{about}</p>
      <div>
        {technologies.map((tech, index) => (
          <span key={`tech-${index}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
