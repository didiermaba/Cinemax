import "./styles.css";
//  http://www.omdbapi.com/?i=tt3896198&apikey=486d5299
import cinemaxLogo from "./assets/cinemax-lg.png";
import { useEffect, useState } from "react";
import Search from "./components/Search";
import Movies from "./components/Movies";

export default function App() {
  // OMDB API
  const API = "https://www.omdbapi.com/?i=tt3896198&apikey=486d5299";

  // States (Etats)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Fonction : searchMovies()
  const searchMovies = async (searchValue) => {
    // Fetch de l'API OMDB
    const response = await fetch(`${API}&s=${search}`);
    const data = await response.json();

    // On modifie le tableau si l'API retrouve des données
    if (data.Search) {
      setMovies(data.Search);
    }

    // Vérifier  les infos recu par l'API
    console.log(data);
  };
  // useEffect pr lancer la recherche des films
  useEffect(() => {
    searchMovies("Hunger Games");
  }, []);

  return (
    <div className="App">
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinema" />
        <Search
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
