import React, { useState, useEffect } from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import Movies from "../components/Movies";
import Nav from "../components/Nav";



const Favorites = () => {
  const [favorites, setFavorites] = useState([]); // liste de favoris
  const [movies, setMovies] = useState([]); // resultat de chq tour de la boucle OMDB
  const API = "https://www.omdbapi.com/?apikey=ffe9f21a";


  /*
   * Ici on fetch l'api express avec le contenu du fichier JSON (data.json)
   * Ensuite nous mettons notre state favorites à jour avec les données de l'api
   * Attention la sturcture de base du fetch étant un tableau principal, il faut
   * cibler le contenu qui se trouve dans celui-ci (data.favorites)
   */
  const fetchFavorites = async () => {
    try {
      const res = await fetch(`/api/favorites`);
      const data = await res.json();
      if (data.favorites) {
        setFavorites(data.favorites); // On stock les données ds la const favorites
      }
    } catch (err) {
      console.log(
        "une erreur est survenue lors de la récup des favoris :" + err
      );
    }
  };

  const fetchMovies = async () => {
    const moviesArray = []; // Déclaration d'un tableau vide pr y mettre les objects "movies"
    // On initialise 1 boucle "for of" afin de s'assurer que chq tour de la bcle soit terminé avant de passer au suivant
    try {
      for (const item of favorites) {
        const res = await fetch(API + "&i=" + item.movie);
        const data = await res.json();
        moviesArray.push({
          imdbID: data.imdbID,
          Title: data.Title,
          Poster: data.Poster,
        });
      }
      if (moviesArray.length > 0) {
        setMovies(moviesArray);
      }
    } catch (err) {
      console.log(
        "Une erreur est survenue lors de la récupération des films :" + err
      );
    }
  };

  // On lance le récup des favoris ds le JSON
  useEffect(() => {
    fetchFavorites();
  }, []);

  // On lance le récup des films ds l'API OMDB seulement lorsque le state favorite est mis à jour
  useEffect(() => {
    fetchMovies();
  }, [favorites]);

  return (
    <div>
      <Nav />
      <header>
      <img src={cinemaxLogo} className="logo" alt="logo cinema" />
      <h1 className="tang">Favorites</h1>
      </header>
      <div>
        <Movies movies={movies} />
      </div>
    </div>
   
  );
};

export default Favorites;
