import React from "react";
import "../App.css";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import MovieCard from "./MovieCard";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const MovieDetailsPage = (props) => {
  const location = useLocation();
  const propsData = location.state;
  //console.log("PROPSDATA:", propsData);
  const id = propsData;
  const link = "https://at.usermd.net/api/movies/" + id;
  console.log(link);
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(link)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //

  return (
    <div className="AppStyle">
      <div>
        <HeaderSection />
      </div>
      <div
        className="AppStyle"
        style={{ margin: "40px", justifyContent: "center", display: "flex" }}
      >
        <div
          style={{
            width: "30%",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <img src={movie.image} alt="brak" height={300} width={300} />

          <text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {movie.title}
          </text>

          <text className="AboutMovie">{movie.content}</text>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
