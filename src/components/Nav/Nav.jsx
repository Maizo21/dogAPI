import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import logo from "../../images/logo.png";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand solo-mobile" to={`/`}>
          <img src={logo} alt="Logo" style={{ width: "3em" }} />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-around w-100 align-items-center">
            <li className="navbar-brand__container solo-desktop">
              <Link className="navbar-brand solo-desktop" to={`/`}>
                <img src={logo} alt="Logo" style={{ width: "3em" }} />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/`}>
                Inicio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
