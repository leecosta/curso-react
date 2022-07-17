import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetchMoviesHandler() {
  //   // dentro do fetch passar o url que vc quer enviar a request, por padrão as solicitações são get
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json(); //transformando o arquivo
  //     })
  //     .then((data) => {
  //       //results é um objeto dentro do arquivo
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.releaseDate,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  // Fazer de forma assíncrona
  // async function fetchMoviesHandler() {
  //   setIsLoading(true);
  //   setError(null);
  //   // Ver tratativa de erros
  //   try {
  //     const response = await fetch("https://swapi.dev/api/films");
  //     // Mensagem aparecerá caso tiver algum erro
  //     if (!response.ok) {
  //       throw new Error("Something went wrong!");
  //     }
  //     const data = await response.json();

  //     //results é um objeto dentro do arquivo
  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.releaseDate,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // Ver tratativa de erros
    try {
      // dentro do fetch passar o url que vc quer enviar a request, por padrão as solicitações são get
      const response = await fetch(
        "https://react-http-ca788-default-rtdb.firebaseio.com/movies.json"
      );
      // Mensagem aparecerá caso tiver algum erro
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-http-ca788-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie), //Convertendo a variável para formato json(útil para fazer a comunicação do back com o front)
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
