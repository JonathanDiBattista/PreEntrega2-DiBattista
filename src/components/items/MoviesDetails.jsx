import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "./MovieCard";
function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=bd21e663`
      );
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <MovieCard movie={movie} />;
}

export default MovieDetails;
