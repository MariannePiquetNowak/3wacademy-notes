import React, { useContext } from 'react';

import Projects from './Projects';

import ProjectsContext from '../contexts/projectsContext';

export default function Portfolio() {
  const { projectsState } = useContext(ProjectsContext);

  return (
    <>
      Nombre de projet au total : {projectsState.length}
      <Projects />
    </>
  );
}
