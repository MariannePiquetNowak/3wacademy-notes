import React, { useContext } from 'react';
import { ValueConsumer, ValueContext } from '../App';

function TodoItem() {
  const value = useContext(ValueContext)
  return (
    <div>
      <p>Nom = {value.name}</p>
      <p>Nom = {value.age}</p>
    </div>
  )
}

/****** OU SINON *******/

/*
function TodoItem() {
    return (
      <ValueConsumer>
        {value => (
          <div>
            <p>Nom = {value.name}</p>
            <p>Nom = {value.age}</p>
          </div>
        )}
      </ValueConsumer>
    )
  }
*/

  export default TodoItem;