import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_DRAGON, SET_DRAGON } from "../../contants/actions";

const CreateDragon = () => {
  // lecture du state
  const { dragon } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: SET_DRAGON, dragon: e.target.value });
    // console.log(dragon);
  };

  const addDragon = () => {

    // Si on écrit rien dans l'input
    if(dragon.trim().length > 0) {
        dispatch({ type: ADD_DRAGON, dragon });
    } else {
        alert("Vous devez écrire un nom")
    }
  };

  return (
    <Fragment>
      <label>Ajouter un dragon</label>
      <div>
        <input onChange={handleChange} />
        <button type="button" onClick={addDragon}>
          Ajouter
        </button>
      </div>
    </Fragment>
  );
};

export default CreateDragon;
