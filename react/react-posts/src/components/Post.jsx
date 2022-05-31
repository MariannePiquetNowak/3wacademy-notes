import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";

const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [maxComments, setMaxComments] = useState(3);

  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((datas) => setPost(datas))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((datas) => setComments(datas))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, []);

  const navigateToPosts = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  return (
    <Fragment>
      <h1 className="mb-3 mt-5"> Le Super Blog de Julien</h1>
      <div className="post-id">
        <h2>
          {post.id} : {post.title}
        </h2>
        <p>{post.body}</p>
        <button className="btn btn-secondary mt-3" onClick={navigateToPosts}>
          Retourner aux articles
        </button>
      </div>
      <div className="comments-post">
        {comments.slice(0, maxComments).map((comment) => (
          <div key={comment.id} className="comment">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
          </div>
        ))}
        </div>
        {maxComments === 3 ? <button onClick={() => setMaxComments(comments.length)}>Voir plus</button> : <button onClick={() => setMaxComments(3)}>Voir moins</button>}       
    </Fragment>
  );
};

export default Post;

const AllComments = ({ getAllComments }) => {
  return (
    <button onClick={getAllComments} className="btn btn-primary mt-3">
      Voir plus de commentaires
    </button>
  );
};

const HideComments = ({ hideComments }) => {
  return (
    <button onClick={hideComments} className="btn btn-primary mt-3">
      Reduire les commentaires
    </button>
  );
};
