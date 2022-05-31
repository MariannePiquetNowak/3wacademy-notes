import React from "react";
import Posts from './components/Posts';
import Post from './components/Post';
import Home from './components/Home';
import Random from './components/Random';
import Navbar from "./components/Navbar";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const theme = useSelector((state) => state.interface);
  return (
    <BRouter>
      <div className={`App ${theme.mode === "dark" ? "dark-mode" : "" }`}>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<Post />} />
            <Route path="/random" element={<Random />} />
        </Routes>
        </div> 
      </BRouter>
   
  );
};

export default App;

