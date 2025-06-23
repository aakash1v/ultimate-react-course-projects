import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "27643f81";
const tempQuery = "Dark Knight";
export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [userRating, setUserRating] = useState(null);

  function onCloseMovie() {
    setSelectedId(null);
  }

  function handleSelectionMovie(id) {
    setSelectedId((selected) => (selected === id ? null : id));
  }
  function handleAddWatched(newmovie) {
    let alreadyExist = false;
    watched.map((movie, i) => {
      if (movie.imdbID === newmovie.imdbID) alreadyExist = true;
    });
    if (!alreadyExist) setWatched((movies) => [...movies, newmovie]);
  }
  function handleRemoveWatched(id) {
    setWatched((watched) => watched.filter((movie, i) => movie.imdbID != id));
  }

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://omdbapi.com/?apikey=${KEY}&s=${QQuery}`
          );
          if (!res.ok) {
            throw new Error("something went wrong with fetching movies..");
          }

          const data = await res.json();
          if (data.Response == "False") throw new Error("Movie not found");
          setMovies(data.Search);
        } catch (error) {
          setError(error.message);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {!isLoading ? <MoviesList movies={movies} /> : <Loader />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MoviesList
              movies={movies}
              onSelectionMovie={handleSelectionMovie}
              selectedId={selectedId}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={onCloseMovie}
              onAddWatched={handleAddWatched}
              userRating={userRating}
              onRating={setUserRating}
              watched={watched}
            />
          ) : (
            <WatchedMoviesList
              watched={watched}
              onRemoveWatched={handleRemoveWatched}
            />
          )}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading ...</p>;
}
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>📛</span> {message}
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

function MoviesList({ movies, selectedId, onSelectionMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          selectedId={selectedId}
          onSelectionMovie={onSelectionMovie}
        />
      ))}
    </ul>
  );
}
function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  userRating,
  onRating,
  watched
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const isWatched = watched.map((movie)=> movie.imdbID === selectedId )?.userRating
  console.log(isWatched)

  const {
    Title: title,
    Year: year,
    Poster: poster,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Runtime: runtime, 
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating: userRating,
    };
    onAddWatched(newWatchedMovie);
  }

  useEffect(function(){
    document.title = `Movie | ${title}`

    return function(){
      document.title = "usePopcorn"
    }
  }, [selectedId])


  useEffect(
    function () {
      const controller = new AbortController();
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [selectedId]
  );

  return (
    <div className="details">
      {!isLoading ? (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    size="20"
                    maxRating={10}
                    color="yellow"
                    onRating={onRating}
                  />
                  <button onClick={handleAdd}>+ Add to list</button>
                </>
              ) : (
                <p>Rating already exist {userRating} <span>🌟</span></p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

function Movie({ movie, onSelectionMovie }) {

  return (
    <li onClick={() => onSelectionMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WatchedMoviesList({ watched, onRemoveWatched }) {
  return (
    <>
      <WatchedSummary watched={watched} />
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie movie={movie} onRemoveWatched={onRemoveWatched} />
        ))}
      </ul>
    </>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMovie({ movie, onRemoveWatched }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onRemoveWatched(movie.imdbID)}
        >
          x
        </button>
      </div>
    </li>
  );
}

function Navbar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}
function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function NumResult({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}
