import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import MovieCard from "./MovieCard";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  useEffect(()=>{
    fetchMovie()
  },[id])
  const fetchMovie = async () => {
    const db = getFirestore();
    const movieRef = doc(db, "peliculas", id);

    try {
      const snapshot = await getDoc(movieRef);

      snapshot.exists()
      ? setMovie({
          id: snapshot.id,
          ...snapshot.data(),
        })
      : setMovie(null);
      
    }catch(error){
      console.log(error);
    }
  };
  return <MovieCard movie={movie} />;
  };


export default MovieDetails;
