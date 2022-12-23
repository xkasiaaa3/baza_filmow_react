import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const RegisterSection = () => {
  return (
    <div className="Login">
      <img src={logo_png} alt="logo" width="30%" />
      <text className="Title">Login</text>
      <input type="text" placeholder="Wpisz login" className="Data" />
      <text className="Title">Nazwa</text>
      <input type="text" placeholder="Wpisz nazwę" className="Data" />
      <text className="Title">E-mail</text>
      <input type="text" placeholder="Wpisz e-mail" className="Data" />
      <text className="Title">Hasło</text>
      <input type="password" placeholder="Wpisz hasło" className="Data" />
      <Link to="/signin">
        <button className="SearchButton">Zaloguj się</button>
      </Link>
      <button className="SearchButton">Zarejestruj się</button>
    </div>
  );
};

export default RegisterSection;
