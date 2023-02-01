import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const desc =
    props.content.length < 150
      ? props.content
      : props.content.substring(0, 150) + "...";

  return (
    <Link
      to="/details"
      style={{ textDecoration: "none" }}
      className="Card"
      state={props.id}
    >
      <img src={props.image} alt="brak" height={200} width={200} />
      <br />
      <div className="MovieInfo">
        <text className="MovieTitle">{props.title}</text>
        <br />
        <text className="AboutMovie">{desc}</text>
      </div>
    </Link>
  );
};

export default MovieCard;
