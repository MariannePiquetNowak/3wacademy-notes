import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = (props) => {
  const [articles, setArcticle] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((datas) => setArcticle(datas))
      .catch((error) => console.log(`Il y a eu un problème lors du fetch : ${error}`))
  }, []);

  return (
    <div className="main-articles">
      <h1 className="mt-5 mb-5 text-center">Liste de nos articles</h1>
      <div className="list-articles row">
        {articles.map((article) => (
          <div
            className="article"
            key={article.id}
            style={{ textAlign: "start", margin: "2rem 0" }}
          >
            <h6>Arcticle N°{article.id}</h6>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <Link className="btn btn-primary" to={`${article.id}`}>Accéder à l'article</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
