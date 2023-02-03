import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo_png from "./logo.png";

const LoginSection = () => {
  const [login, setLogin] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [error, setError] = React.useState(null);

  const signIn = () => {
    axios
      .post("https://at.usermd.net/api/user/auth", {
        login: login,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response);
        console.log(response.data.token);
        window.location.replace("/");
      })
      .catch((err) => setError("Nieprawidłowe dane logowania"));
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
          signIn();
        }}
      >
        Zaloguj się
      </button>
      <Link to="/signup">
        <button className="SearchButton">Zarejestruj się</button>
      </Link>
    </div>
  );
};

export default LoginSection;
