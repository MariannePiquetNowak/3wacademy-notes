import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const Random = () => {
  const [post, setPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [allComments, setAllComments] = useState(false);
  const [loading, setLoading] = useState(true)

  const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const randomId = getRandomId(1, posts.length);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => res.json())
      .then((datas) => setPosts(datas))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`)
      .then((res) => res.json())
      .then((datas) => setPost(datas))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, [posts]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`)
      .then((res) => res.json())
      .then((datas) => setComments(datas))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, [posts]);

  useEffect(() => {
    setLoading(false)
  }, [comments])

  const navigateToPosts = (e) => {
    e.preventDefault();
    navigate("/posts");
  };

  const getAllComments = () => {
    setAllComments(true);
  };

  const hideComments = () => {
    setAllComments(false);
  };

  
    
  return (
    <Fragment>
    {
        loading ? (
            <div>Chargement...</div>
        ) : (

            <div className="post-id">
              <h2>
                {post.id} : {post.title}
              </h2>
              <p>{post.body}</p>
              <button className="btn btn-secondary mt-3" onClick={navigateToPosts}>
                Retourner aux articles
              </button>
            </div>
        )
    }

      {!allComments ? (
        <AllComments getAllComments={getAllComments} />
      ) : (
        <HideComments hideComments={hideComments} />
      )}
      <div className="comments-post">
        {!allComments
          ? comments.slice(0, 3).map((comment) => (
              <div key={comment.id} className="comment">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </div>
            ))
          : comments.map((comment) => (
              <div key={comment.id} className="comment">
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
              </div>
            ))}
      </div>
    </Fragment>
  );
};

export default Random;

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
