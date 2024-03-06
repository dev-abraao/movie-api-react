import { useEffect, useState } from "react";
import Header from "./header/Header.jsx";
import { useParams } from "react-router-dom";
import placeholder from "./assets/placeholder.png";
import "./movie.css";

function Movie() {
  const { id } = useParams();
  const [movieID, setMovieID] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=7fdec854`
      );
      const data = await response.json();
      setMovieID(data);
      console.log(data);
    }
    fetchMovie();
  }, [id]);

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="movie-wrapper">
            <div className="img-wrapper">
            {movieID.Poster !== "N/A" ? (
                <img src={movieID.Poster} alt="" />
            ) : (
                <img src={placeholder} alt="" />
            )}
            </div>
            <div className="details-wrapper">
                <div className="titlerating">
                  <h2 className="title">{movieID.Title}</h2>
                  <p>⭐ {movieID.imdbRating} / 10</p>
                </div>
                <p className="year">{movieID.Year}</p>
                <p>Genres : {movieID.Genre}</p>
                <p>Type : {movieID.Type}</p>
                <p>Rated : {movieID.Rated}</p>
                <p>Duration : {movieID.Runtime}</p>
                <p className="plot">{movieID.Plot}</p>
                <p className="cast"> <hr />Directors - {movieID.Director} </p>
                <p className="cast"><hr />Writers - {movieID.Writer}</p>
                <p className="cast"><hr />Actors - {movieID.Actors}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
