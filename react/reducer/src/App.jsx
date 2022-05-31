import React, { useReducer } from 'react';

import Portfolio from './components/Portfolio';
import ProjectsContext from './contexts/projectsContext';
import projectsReducer from './reducers/projectsReducer';
import FormProject from './components/FormProject';

const projectsList = [
  { id: 1, title: 'Projet JS 1' },
  { id: 2, title: 'Projet HTML' },
  { id: 3, title: 'Projet CSS' },
];

function App() {
  const [projectsState, dispatch] = useReducer(projectsReducer, projectsList);

  return (
    <div>
      <h1>Portfolio</h1>

      <pre>{JSON.stringify(projectsState, null, 2)}</pre>

      <ProjectsContext.Provider value={{ projectsState, dispatch }}>
        <Portfolio />
        <FormProject />
      </ProjectsContext.Provider>
    </div>
  );
}

export default App;