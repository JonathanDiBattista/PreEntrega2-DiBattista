import React from "react";
import { useNavigate } from "react-router-dom";

export const MovieList = ({ movies }) => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-5">
      {movies.length > 0 &&
        movies.map((movie, i) => (
          <div className="flex flex-col justify-between mt-5" key={i}>
            <h1 className="text-xl">{movie.Title}</h1>
            <img onClick={()=>{navigate(`/movies/${movie.imdbID}`)}} className="w-56 h-72 cursor-pointer rounded-md" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
    </div>
  );
};
export default MovieList;
