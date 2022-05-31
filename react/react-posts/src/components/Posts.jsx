import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "./PostCard";
import SelectResults from "./SelectResults";
import Pagination from "./Pagination";
import "../App.css";
import { initPosts } from "../reducers/posts";
import { initUsers } from "../reducers/users";
import {
  setPostsPerPage,
  setCurrentPage,
  incrementPage,
  decrementPage,
} from "../reducers/pagination";

const URL_POSTS = `https://jsonplaceholder.typicode.com/posts`;
const URL_USERS = `https://jsonplaceholder.typicode.com/users`;

const Posts = () => {
  const dispatch = useDispatch();
  // constante = useSelector((state) => state.nom_du_reducer)
  const posts = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users.data);
  const postsPerPage = useSelector((state) => state.pagination.postsPerPage);
  const currentPage = useSelector((state) => state.pagination.currentPage);

  // const [currentPage, setCurrentPage] = useState(1); // doit renvoyer les résultats souhaités

  useEffect(() => {
    fetch(URL_USERS)
      .then((res) => res.json())
      .then((datas) => dispatch(initUsers(datas)))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );

    fetch(URL_POSTS)
      .then((res) => res.json())
      .then((datas) => dispatch(initPosts(datas)))
      .catch((error) =>
        console.log(`erreur lors de la récupération des posts : ${error}`)
      );
  }, []);

  // fonction de récupération de user.name pour pouvoir le transmettre à Post

  // Gestion des posts par page
  const indexLastPost = currentPage * postsPerPage; // renvoi 10ème ou 25ème ou 50ème post
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost); // renvoi tableau avec le nombre voulu de résultats
  //console.log(currentPosts) // => renvoi le bon nombre de posts dirigé par l'event

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(setPostsPerPage(e.target.value));
    dispatch(setCurrentPage(1));
  };
  // console.log(postsPerPage)

  const getUserById = (userId) => {
    return users.filter((user) => user.id === userId)[0];
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-3"> Le Super Blog de Julien</h1>
      <Pagination
        resultsPerPage={postsPerPage}
        totalPosts={posts}
        dispatch={dispatch}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
      <SelectResults handleChange={handleChange} results={postsPerPage} />
      <div className="posts">
        {posts &&
          currentPosts.map((post) => (
            <PostCard key={post.id} {...post} user={getUserById(post.userId)} />
          ))}
      </div>
    </div>
  );
};

export default Posts;
