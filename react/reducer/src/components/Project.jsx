import React, { createRef, useContext } from 'react';

import ProjectsContext from '../contexts/projectsContext';

export default function Project({ title, id }) {
  const inputRef = createRef();
  const { dispatch } = useContext(ProjectsContext);

  function changeTitle() {
    const newTitle = inputRef.current.value;
    console.log('Nouveau titre souhaité :', newTitle);
    dispatch({ type: 'UPDATE_PROJECT_TITLE', payload: { id, newTitle } });
  }

  function deleteProject() {
    console.log(id);
    dispatch({ type: 'DELETE_PROJECT', payload: id });
  }

  return (
    <div style={{ margin: '1rem' }}>
      Project title: <strong>{title}</strong>
      <div>
        <input type="text" defaultValue={title} ref={inputRef} />
        <button onClick={changeTitle}>Modifier</button>
        <button onClick={deleteProject}>Supprimer</button>
      </div>
    </div>
  );
}
