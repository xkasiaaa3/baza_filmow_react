import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <Link to="/details" style={{ textDecoration: "none" }} className="Card">
      <img src={props.image} alt="brak" height={200} width={200} />
      <br />
      <div className="MovieInfo">
        <text className="MovieTitle">{props.title}</text>
        <br />
        <text className="AboutMovie">{props.about}</text>
      </div>
    </Link>
  );
};

export default MovieCard;
