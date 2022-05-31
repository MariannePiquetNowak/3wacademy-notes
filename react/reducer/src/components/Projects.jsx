import React, { useContext } from 'react';

import Project from './Project';

import ProjectsContext from '../contexts/projectsContext';

export default function Projects() {
  const { projectsState } = useContext(ProjectsContext);

  return (
    <>
      {projectsState.map((project) => (
        <Project key={project.id} title={project.title} id={project.id} />
      ))}
    </>
  );
}
