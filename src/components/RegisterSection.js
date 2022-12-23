import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const RegisterSection = () => {
  return (
    <div className="Login">
      <Link to="/">
        <img src={logo_png} alt="logo" height="75%" />
      </Link>
      <text className="Title">Login</text>
      <input type="text" placeholder="Wpisz login" className="Data" />
      <text className="Title">Nazwa</text>
      <input type="text" placeholder="Wpisz nazwę" className="Data" />
      <text className="Title">E-mail</text>
      <input type="text" placeholder="Wpisz e-mail" className="Data" />
      <text className="Title">Hasło</text>
      <input type="password" placeholder="Wpisz hasło" className="Data" />
      <button className="SearchButton">Zarejestruj się</button>
      <Link to="/signin">
        <button className="SearchButton">Zaloguj się</button>
      </Link>
    </div>
  );
};

export default RegisterSection;
