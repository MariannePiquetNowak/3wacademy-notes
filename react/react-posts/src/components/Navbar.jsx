import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from '../reducers/interface'

const Navbar = () => {
  // constante = useSelector((state) => state.reducer)
  const theme = useSelector((state) => state.interface);
  const dispatch = useDispatch();
  // console.log(theme.mode)

  function setActiveClassName(className) {
    return ({ isActive }) => (isActive ? className : "");
  }

  return (
    <div className="nav">
      <nav>
        <NavLink to="/" className={setActiveClassName("nav-active")}>
          Accueil
        </NavLink>
        <NavLink to="/posts" className={setActiveClassName("nav-active")}>
          Article
        </NavLink>
        <NavLink to="/random" className={setActiveClassName("nav-active")}>
          Random
        </NavLink>
      </nav>
      <label className="switch">
        <input type="checkbox" onClick={() => dispatch(toggle(theme.mode === "dark" ? "light" : "dark"))}/>
        <span className="slider round"></span>
      </label>
      
      {
        theme.mode === "light" ? <span style={{marginLeft: ".5em", color: "white"}}>Light Mode</span> : <span style={{marginLeft: ".5em", color: "white"}}>Dark Mode</span>
      }
    </div>
  );
};

export default Navbar;
