import React, { Fragment } from "react";
import {
  BrowserRouter as BRouter,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import Home from "./Views/Home";
import Projects from "./Views/Projects";
import Project from "./Components/Project";
import About from "./Views/About";
import NotFound from "./Views/NotFound";

function setActiveClassName(className) {
  return ({ isActive }) => (isActive ? className : "");
}

const App = () => {
  return (
    <Fragment>
      <BRouter>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="/projects" className={setActiveClassName("nav-active")}>
            Projects
          </NavLink>
          <NavLink to="/about" className={setActiveClassName("nav-active")}>
            About
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BRouter>
    </Fragment>
  );
};

export default App;
