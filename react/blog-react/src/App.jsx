import React, { Fragment } from "react";
import {
  BrowserRouter as BRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Articles from "./Views/Articles";
import Authors from "./Views/Authors";
import Home from "./Views/Home";
import Article from "./Components/Article";
import Author from "./Components/Author";

const App = () => {
  function setActiveClassName(className) {
    return ({ isActive }) => (isActive ? className : "");
  }
  return (
      <Fragment>
        <BRouter>
          <nav className="nav">
            <NavLink to="/" className={setActiveClassName("nav-active")}>
              Accueil
            </NavLink>
            <NavLink
              to="/articles"
              className={setActiveClassName("nav-active")}
            >
              Articles
            </NavLink>
            <NavLink to="/authors" className={setActiveClassName("nav-active")}>
              Auteurs
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:articleId" element={<Article />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/authors/:authorId" element={<Author />} />
          </Routes>
        </BRouter>
      </Fragment>
  );
};

export default App;
