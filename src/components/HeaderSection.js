import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const HeaderSection = () => {
  return (
    <div className="Header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img src={logo_png} alt="logo" width="60%" />
      </Link>
      <input type="text" placeholder="Szukaj..." className="SearchBar" />
      <Link to="/signin">
        <button className="SearchButton">Zaloguj</button>
      </Link>
    </div>
  );
};

export default HeaderSection;
