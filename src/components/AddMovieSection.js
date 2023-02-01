import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";

import logo_png from "./logo.png";

const AddMovieSection = () => {
  const [title, setTitle] = React.useState(null);
  const [content, setContent] = React.useState(null);
  const [image, setImage] = React.useState(null);

  const addMovie = () => {
    axios
      .post("https://at.usermd.net/api/movies", {
        image: image,
        content: content,
        title: title,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <Link to="/">
        <img src={logo_png} alt="logo" height="75%" />
      </Link>
      <text className="Title">Tytuł</text>
      <input
        type="text"
        placeholder="Wpisz tytuł"
        className="Data"
        onChange={(e) => setTitle(e.target.value)}
      />
      <text className="Title">Opis</text>
      <input
        type="text"
        placeholder="Wpisz opis"
        className="Data"
        onChange={(e) => setContent(e.target.value)}
      />
      <text className="Title">Plakat</text>
      <input
        type="text"
        placeholder="Wklej link"
        className="Data"
        onChange={(e) => setImage(e.target.value)}
      />
      <Link to="/">
        <button
          className="SearchButton"
          onClick={() => {
            console.log(title, content, image);
            addMovie();
          }}
        >
          Dodaj
        </button>
      </Link>
    </div>
  );
};

export default AddMovieSection;
