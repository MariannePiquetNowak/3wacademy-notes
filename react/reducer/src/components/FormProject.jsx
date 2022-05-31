import React, { createRef, useContext } from 'react';

import ProjectsContext from '../contexts/projectsContext';

export default function FormProject() {
  const inputRef = createRef();
  const { dispatch } = useContext(ProjectsContext);

  function addProject(event) {
    event.preventDefault();

    const id = Date.now();
    const title = inputRef.current.value;

    console.log('Nouveau projet #', id, title);
    dispatch({ type: 'ADD_NEW_PROJECT', payload: { id, title } });
  }

  return (
    <form onSubmit={addProject}>
      <input type="text" ref={inputRef} />
      <button type="submit">Créer le projet</button>
    </form>
  );
}
