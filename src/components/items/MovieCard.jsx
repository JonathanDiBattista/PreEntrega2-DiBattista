import React from "react";
import Counter from "../counter/Counter";

function MovieCard({ movie, onAdd}) {
  return (
    <div>
      {movie && (
        <div className="flex flex-col items-center mt-5">
          <h1>{movie.name}</h1>
          <img src={movie.image} alt={movie.name} />
          <p>Año:   {movie.year}</p>
          <p>Precio:    {movie.price}</p>
        </div>
      )}
      <Counter onAdd={onAdd} />
    </div>
  );
}

export default MovieCard;
