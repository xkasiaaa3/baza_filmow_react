import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

import logo_png from "./logo.png";

const RegisterSection = () => {
  const [login, setLogin] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [error, setError] = React.useState(null);

  const signUp = () => {
    axios
      .post("https://at.usermd.net/api/user/create", {
        name: login,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        window.location.replace("/signin");
      })
      .catch((err) => setError("Nieprawidłowe lub niekompletne dane"));
  };

  return (
    <div className="Login">
      <Link to="/">
        <img src={logo_png} alt="logo" height="75%" />
      </Link>
      <text className="Title">Login</text>
      <input
        type="text"
        placeholder="Wpisz login"
        className="Data"
        onChange={(e) => setLogin(e.target.value)}
      />
      <text className="Title">E-mail</text>
      <input
        type="text"
        placeholder="Wpisz e-mail"
        className="Data"
        onChange={(e) => setEmail(e.target.value)}
      />
      <text className="Title">Hasło</text>
      <input
        type="password"
        placeholder="Wpisz hasło"
        className="Data"
        onChange={(e) => setPassword(e.target.value)}
      />
      <text>{error}</text>
      <button
        className="SearchButton"
        onClick={() => {
          signUp();
        }}
      >
        Zarejestruj się
      </button>

      <Link to="/signin">
        <button className="SearchButton">Zaloguj się</button>
      </Link>
    </div>
  );
};

export default RegisterSection;
