import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieList from "./MovieList";

function MovieCategory() {
  const [movies, setMovies] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    getMovies(category);
  }, [category]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${category}&apikey=bd21e663`
      );
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  return <MovieList movies={movies} />;
}

export default MovieCategory;
