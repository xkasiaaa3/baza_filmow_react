import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const LoginSection = () => {
  return (
    <div className="Login">
      <Link to="/">
        <img src={logo_png} alt="logo" height="75%" />
      </Link>
      <text className="Title">Login</text>
      <input type="text" placeholder="Wpisz login" className="Data" />
      <text className="Title">Hasło</text>
      <input type="password" placeholder="Wpisz hasło" className="Data" />
      <button className="SearchButton">Zaloguj się</button>
      <Link to="/signup">
        <button className="SearchButton">Zarejestruj się</button>
      </Link>
    </div>
  );
};

export default LoginSection;
