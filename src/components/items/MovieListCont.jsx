import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const MovieListCont = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://www.omdbapi.com/?s=movie&apikey=bd21e663"
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  return <MovieList movies={movies} />;
};
export default MovieListCont;
