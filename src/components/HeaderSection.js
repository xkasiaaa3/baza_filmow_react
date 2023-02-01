import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import { isExpired } from "react-jwt";
import logo_png from "./logo.png";

const HeaderSection = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo_png} alt="logo" width="60%" />
      </Link>
      <input type="text" placeholder="Szukaj..." className="SearchBar" />
      {isExpired(localStorage.getItem("token")) ? (
        <Link to="/signin">
          <button className="SearchButton">Zaloguj się</button>
        </Link>
      ) : (
        <button
          className="SearchButton"
          onClick={() => {
            localStorage.setItem("token", null);
            window.location.reload();
          }}
        >
          Wyloguj się
        </button>
      )}
    </div>
  );
};

export default HeaderSection;
