import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="nav-bar">

        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </ul>
     
    </div>
  );
};

export default Home;
