import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PostCard from "./PostCard";
import SelectResults from './SelectResults';
import Pagination from './Pagination';
import "../App.css";

const URL_POSTS = `https://jsonplaceholder.typicode.com/posts`;
const URL_USERS = `https://jsonplaceholder.typicode.com/users`;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [resultsPerPage, setResultsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1); // doit renvoyer les résultats souhaités

  useEffect(() => {
     fetch(URL_POSTS)
      .then((res) => res.json())
      .then((datas) => setPosts(datas))
      .catch(error => console.log(`erreur lors de la récupération des posts : ${error}`))


    fetch(URL_USERS)
      .then((res) => res.json())
      .then((datas) => setUsers(datas))
      .catch(error => console.log(`erreur lors de la récupération des auteurs : ${error}`))
  }, []);

  // fonction de récupération de user.name pour pouvoir le transmettre à Post
  const getUserById = (userId) => {
 
    // const user = users.filter(user => user.id === userId); => Les données sont stockées dans un tableau
    return users.filter((user) => user.id === userId); // => les données ne sont pas stockées dans un tableau, ce qui nous permet de les récupérer directement
  };

  const handleChange = (e) => {
    e.preventDefault();
    setResultsPerPage(e.target.value);
    setCurrentPage(1)
  }
  // console.log(results)

  const indexLastPost = currentPage * resultsPerPage; // renvoi 10ème ou 25ème ou 50ème post
  const indexFirstPost = indexLastPost - resultsPerPage; 
  const currentPosts = posts.slice(indexFirstPost, indexLastPost) // renvoi tableau avec le nombre voulu de résultats
  // console.log(currentPosts) => renvoi le bon nombre de posts dirigé par l'event 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  return (
   <div className="container mt-5">
      <h1 className="mb-3"> Le Super Blog de Julien</h1>
      <Pagination resultsPerPage={resultsPerPage} totalPosts={posts} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <SelectResults handleChange={handleChange} results={resultsPerPage}/>
      <div className="posts">
        {currentPosts &&
          currentPosts.map((post) => (
            <PostCard key={post.id} {...post} user={getUserById(post.userId)} />
          ))}
        </div>
    </div> 
   
  );
};

export default Posts;

