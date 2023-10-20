import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const MovieListCont = () => {
  const [movies, setMovies] = useState([]);
  useEffect (()=>{
    fetchMovies()
  },[])

  const fetchMovies = async () => {
    const db = getFirestore();
    const moviesCollection = collection(db, "peliculas");
    try {
      const snapshot = await getDocs(moviesCollection);
      const allData = snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
      setMovies(allData);
    } catch (error) {
      // Maneja el error aquí
      console.error("Error al obtener datos:", error);
    }
  };
        return <MovieList movies={movies} />;
  };
export default MovieListCont;
