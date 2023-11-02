import React from "react";

const Movies = ({ movies }) => {
  // lien IMDB
  const imdb = "https://imdb.com/title";
  return (
    <div className="movies">
      {movies.map((movie) => (
        <div className="movie" key={movie.imdbID}>
          <div className="movie-info">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://placehold.co/300x450/008080/FFF?text=Image+indisponible"
              }
              alt
            />
            <h3>{movie.Title}</h3>
            <p>
              Voir les détauils{""}
              <a href={imdb + movie.imdbID} target="_blank">
                IMDB
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
