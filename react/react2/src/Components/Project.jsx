import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import data from "../data/list-project.js";

function Project(props) {
  const { projectId } = useParams();

  const navigate = useNavigate();


  // Permet de rechercher l'id concordant avec projectId
  const project = data.find(({ id }) => id == projectId);

  if (!project) return <div>Aucun projet trouvé</div>;

  const handleClick = () => {
    navigate('/projects/')
  }

  return (
    <div>
      <h2>Projet {projectId}</h2>

      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ margin: "0 1rem" }}
            src={project.icon}
            width="64"
            alt=""
          />
          <h3>{project.name}</h3>
        </div>
        <p>
          <span style={{ fontWeight: "bold" }}>Category:</span>{" "}
          {project.category}
        </p>
        <p>{project.description}</p>
      </div>
      <Link to="/projects">Retour aux projets</Link><br />
      <button type='submit' onClick={handleClick}>Revenir sur /projects</button>
    </div>
  );
}

export default Project;
