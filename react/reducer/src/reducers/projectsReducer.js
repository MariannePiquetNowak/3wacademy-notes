export default function projectsReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_PROJECT_TITLE':
      const projectId = action.payload.id;
      const newTitle = action.payload.newTitle;

      const newState = [...state];
      const index = newState.findIndex((p) => p.id == projectId);
      newState.splice(index, 1, { id: projectId, title: newTitle });

      return newState;

    case 'ADD_NEW_PROJECT':
      return [...state, { id: action.payload.id, title: action.payload.title }];

    case 'DELETE_PROJECT':
      const projectIndex = action.payload;

      const newStateAfterDelete = [...state];
      const id = newStateAfterDelete.findIndex((p) => p.id == projectIndex);
      newStateAfterDelete.splice(id, 1);
      // console.log(newStateAfterDelete);
      return newStateAfterDelete;
    default: 
      return "coucou";
  }
}
