import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

import logo_png from "./logo.png";

const AddMovieSection = () => {
  return (
    <div className="Login">
      <Link to="/">
        <img src={logo_png} alt="logo" height="75%" />
      </Link>
      <text className="Title">Tytuł</text>
      <input type="text" placeholder="Wpisz login" className="Data" />
      <text className="Title">Opis</text>
      <input type="password" placeholder="Wpisz opis" className="Data" />
      <text className="Title">Plakat</text>
      <input type="password" placeholder="Wklej link" className="Data" />
      <button className="SearchButton">Dodaj</button>
    </div>
  );
};

export default AddMovieSection;
