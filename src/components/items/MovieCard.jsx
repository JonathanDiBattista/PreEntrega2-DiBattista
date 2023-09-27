import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      {movie && (
        <div className="flex flex-col items-center mt-5">
          <h1>{movie.Title}</h1>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Year}</p>
          <p>{movie.Language}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
