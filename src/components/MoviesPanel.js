import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import MovieCard from "./MovieCard";

const MovieList = [
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
  {
    title: "Thor: Miłość i grom",
    about: "(2022) Taika Watiti",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
  },
];

const MoviesPanel = () => {
  return (
    <>
      <div className="MoviesGrid">
        {MovieList.map((items) => (
          <MovieCard
            title={items.title}
            about={items.about}
            image={items.image}
          />
        ))}

        <Link
          to="/add"
          className="Card"
          style={{ justifyContent: "center", textDecoration: "none" }}
        >
          <text
            style={{
              fontSize: 100,
              textAlign: "center",
              fontWeight: "bold",
              color: "black",
            }}
          >
            +
          </text>
        </Link>
      </div>
    </>
  );
};

export default MoviesPanel;
