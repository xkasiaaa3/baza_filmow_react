import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

import MovieCard from "./MovieCard";

const MoviesPanel = () => {
  const [movieList, setList] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://at.usermd.net/api/movies")
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="AppStyle">
      <div className="MoviesGrid">
        {movieList.map((items) => (
          <MovieCard
            title={items.title}
            content={items.content}
            image={items.image}
            id={items.id}
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
    </div>
  );
};

export default MoviesPanel;
