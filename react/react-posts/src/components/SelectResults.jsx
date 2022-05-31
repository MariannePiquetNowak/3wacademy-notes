import React from "react";

const SelectResults = ({ handleChange, results }) => {

  // console.log("resultats",results)

  return (
    <div id="select-post-results">
      <label htmlFor="postsResults">Choisissez le nombre de posts</label>
      <select
        name="postsResults"
        onChange={handleChange}
        value={results}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="10">10 résultats</option>
        <option value="25">25 résultat</option>
        <option value="50">50 résultats</option>
      </select>
    </div>
  );
};

export default SelectResults;
