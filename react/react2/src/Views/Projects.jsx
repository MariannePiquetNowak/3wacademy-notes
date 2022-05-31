import React, { Fragment } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

import data from "../data/list-project.js";

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams("all");

  /* 
  ?? = null coalecling 
  la valeur "all" passera en défault 

  La ligne en dessous revient à dire 
  Si la valeur est false, on renvoit "all"
  Cel revient à ||, sauf que ce dernier ne prend pas les valeurs falsy
  */

  const category = searchParams.get("category") ?? "all";

  const filter = data.filter(
    (project) => project.category === category || category === "all"
  );

  // console.log(category);
  return (
    <Fragment>
      <h1>La liste de mes projets</h1>

      <label htmlFor="category-select">Choisissez une catégorie</label>
      <select
        value={category}
        onChange={(e) => setSearchParams({ category: e.target.value })}
        id="category-select"
      >
        <option value="all">Toutes les catégories</option>
        <option value="dev">Dev</option>
        <option value="design">Design</option>
      </select>

      {filter.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <Link
            to={
              "/projects/" +
              project.id +
              "?category=" +
              category
            }
          >
            Accéder au projet
          </Link>
        </div>
      ))}
      <hr />
      <Outlet />
    </Fragment>
  );
};

export default Projects;

