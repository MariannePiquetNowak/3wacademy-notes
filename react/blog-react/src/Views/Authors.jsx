import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Authors = (props) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setAuthors(data))
      .catch((error) => console.log(`Il y a eu un problème lors du fetch : ${error}`))
  }, []);

  return (
    <div className="main-authors">
      <h1 className="mt-5 mb-5 text-center">Liste de nos auteurs</h1>
      <div className="list-authors row">
        {authors.map((author) => (
          <div className="author" key={author.id} style={{ textAlign: "start", margin: "2rem 0" }}>
            <h6>Author N°{author.id}</h6>
            <h3>{author.name}</h3>
            <Link className="btn btn-primary" to={`${author.id}`}>Accéder à l'auteur</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
