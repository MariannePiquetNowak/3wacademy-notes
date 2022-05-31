import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ucfirst } from "../utils/functions";

const Article = (props) => {
  const [article, setArticle] = useState([]);
  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { articleId } = useParams();
  const navigate = useNavigate();

  const navigateToArticles = (e) => {
    e.preventDefault();
    navigate("/articles");
  };

  /**
   * Méthode avec async : useeffect n'est pas fan de async, pour contourner ça, il faut
   * utiliser une fonction qui s'éxécute automatiquement
   * Elle s'écrit sous la forme (() => {})();
   * */

  /*
  useEffect(() => {
    (async () => {
      const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId).then(res => res.json());
      setArticle(post);
      console.log('1')
      
      const author = await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).then(res => res.json());
      setAuthor(author);
      console.log('2')
    })(); // () exécute la fonction flèchée

    (async () => {
      const commentsList = await fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments').then(res => res.json());
      setComments(commentsList);
      console.log('3')
    })();
  },[])  
  */
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
      .then((res) => res.json())
      .then((datas) => {
        setArticle(datas);
        // ON return les datas pour le .then suivant
        console.log("1. ", datas);

        return datas;
      })
      .then((datas) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${datas.userId}`)
      )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setUser(data);
        setIsLoading(true);
        console.log("2. ", data);
      })
      .catch((error) => console.log(`Il y a eu un problème lors du fetch : ${error}`));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}/comments/`)
      .then((res) => res.json())
      .then((comments) => {
        // console.log("commentaires",comments);
        setComments(comments);
        console.log("3. ", comments);
      })
      .catch((error) => console.log(`Il y a eu un problème lors du fetch : ${error}`));
  }, []);

  // console.log('liste des coms', comments)

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${article.userId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setUser(data)});
  //   setIsLoading(true);
  // }, [article]);

  return (
    <div className="article-content">
      {!isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div id={`article-${article.id}`} className="article">
          <h2>
            #{articleId} - {article.title}
          </h2>

          <p>{article.body}</p>
          <em>Ecrit par: </em>
          <Link to={`/authors/${user.id}`}>{user.name}</Link>
          <div>
            <button
              className="btn btn-secondary mt-3"
              onClick={navigateToArticles}
            >
              Retourner aux articles
            </button>
          </div>
        </div>
      )}

      <div className="article-comments">
        <h4>Commentaires de cet article</h4>
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span style={{ fontWeight: "bold" }}>
              #{comment.id} -{" "}
              <a href={`mailto:${comment.email.toLowerCase()}`}>
                {comment.email.toLowerCase()}
              </a>
            </span>
            <span style={{ fontWeight: "bold" }}>{ucfirst(comment.name)}</span>
            <p>{ucfirst(comment.body)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
