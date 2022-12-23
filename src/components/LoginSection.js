import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const LoginSection = () => {
  return (
    <div className="Login">
      <img src={logo_png} alt="logo" width="30%" />
      <text className="Title">Login</text>
      <input type="text" placeholder="Wpisz login" className="Data" />
      <text className="Title">Hasło</text>
      <input type="password" placeholder="Wpisz hasło" className="Data" />
      <button className="SearchButton">Zaloguj</button>
    </div>
  );
};

export default LoginSection;
