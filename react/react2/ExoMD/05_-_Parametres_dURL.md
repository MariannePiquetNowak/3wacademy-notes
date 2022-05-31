# Paramètres d'URL

Les paramètres d'URL correspondent à la Query String, déterminée par le marqueur de positionnement `?`.

```
mywebsite.com/articles?order=asc
```

Pour récupérer les paramètres d'une route, on utilise le Hook **useSearchParams** de `react-router-dom`, qui renverra comme 1er objet un wrapper avec les méthodes :

- `.get()` pour récupérer paramètre.
- `.getAll()` pour récupérer tous les paramètres sous forme d'Array

```js
import { useSearchParams } from 'react-router-dom';

function Articles() {
  const [searchParams] = useSearchParams();
  const order = searchParams.get('order');

  return (
    <div>
      <p>Le paramètres d'URL `order` vaut {order}</p>
    </div>
  );
}
```

Le second paramètres du hook est une fonction permettant de redéfinir les paramètres d'URL.

```js
import { useSearchParams } from 'react-router-dom';

function Articles() {
  const [searchParams, setSearchParams] = useSearchParams(0);
  const order = searchParams.get('order');

  return (
    <div>
      <p>Le paramètres d'URL `order` vaut {order}</p>
      Trier par ordre :<button
        onClick={() => setSearchParams({ order: 'asc' })}
      >
        Croissant
      </button>
      <button onClick={() => setSearchParams({ order: 'desc' })}>
        Décroissant
      </button>
    </div>
  );
}
```

# Exercice

Dans le composant `Projects`, mettez en place un filtre sur les projets permettant d'afficher soit :

- Toutes les catégories
- Seulement la catégorie `dev`
- Seulement la catégorie `design`

Vous utiliserez une balise `<select>` pour afficher les catégories.



=> Projects.jsx

```js
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

  const category = searchParams.get("category") ?? "all"

  const filter = data.filter((project) => project.category === category || category === "all");

  console.log(category);
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
          <Link to={`${project.id}`}>Accéder au projet</Link>
        </div>
      ))}
    </Fragment>
  );
};

export default Projects;

// {data.map((project) => {

//   if(category == "dev" && project.category == "dev") {
//     return (
//       <div key={project.id}>
//         <h3>{project.name}</h3>
//         <Link to={`${project.id}`}>Accéder au projet</Link>
//       </div>
//     )
//   }
//   if(category == "design" && project.category == "design") {
//     return (
//       <div key={project.id}>
//       <h3>{project.name}</h3>
//       <Link to={`${project.id}`}>Accéder au projet</Link>
//     </div>
//     )

//   }
//   if(category == "all") {
//     return (
//       <div key={project.id}>
//         <h3>{project.name}</h3>
//         <Link to={`${project.id}`}>Accéder au projet</Link>
//       </div>
//     )
//   }
// })}

```