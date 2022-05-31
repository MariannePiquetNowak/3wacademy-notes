import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Author(props) {
  const [author, setAuthor] = useState([]);

  const { authorId } = useParams();

  const navigate = useNavigate();

  const navigateToAuthors = (e) => {
    e.preventDefault();
    navigate("/authors");
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("authors", data);
        setAuthor(data);
      })
      .catch((error) =>
        console.log(`Il y a eu un problème lors du fetch : ${error}`)
      );
  }, []);

  return (
    <div>
      {/* Si il y a un author, on affiche => */}
      {author && (
        <article>
          <h2>{author.name}</h2>
          <p>
            <span style={{ fontWeight: "bold" }}>Pseudo :</span>{" "}
            {author.username}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Téléphone :</span>{" "}
            {author.phone}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>email :</span>{" "}
            <a href={`mailto:${author.email}`}>{author.email}</a>
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>Site Web :</span>{" "}
            <a href={`https://${author.website}`}>{author.website}</a>
          </p>
          <span style={{ fontWeight: "bold" }}>Adresse : </span>
          <div>
            {/* 
            Notation : {author.address?.suite} 
            Lors de la recherche d'une valeur de propriété profondément ancrée 
            dans une structure arborescente, il faut souvent vérifier s'il existe 
            des nœuds intermédiaires. Celle-ci ne se charge pas forcément et génère
            une erreur dans la console. Cette notation permet de passer outre
        */}
            {/* @Link : https://github.com/tc39/proposal-optional-chaining*/}
            <p>
              {author.address?.suite}, {author.address?.street}
            </p>
            <p>
              {author.address?.city}, {author.address?.zipcode}
            </p>
          </div>
          <button className="btn btn-secondary" onClick={navigateToAuthors}>
            Revenir aux auteurs
          </button>
        </article>
      )}
    </div>
  );
}

export default Author;
