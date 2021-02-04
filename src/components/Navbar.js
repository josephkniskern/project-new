import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>This is the NavBar, baby</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navbar;
