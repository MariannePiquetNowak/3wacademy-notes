import React, { createContext } from 'react';

import TodoList from './Components/TodoList';

export const ValueContext = createContext("");
export const ValueProvider = ValueContext.Provider;
export const ValueConsumer = ValueContext.Consumer;


function App () {
  const MY_VALUE = {name: "toto", age: 20};

  return (
    <ValueProvider value={MY_VALUE}>
      <TodoList />
    </ValueProvider>
  )
}

export default App; 