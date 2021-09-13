import React from "react";
import logo from "./logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <a href="index.js" className="navbar-brand">
            <img src={logo} alt=""  />
            Keep
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
