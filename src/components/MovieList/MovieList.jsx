import "./MovieList.css";
import FireEmoji from "../../assets/emojis/fire.png";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";

const MovieList = () => {
  // env vars in vite need `VITE` prefix
  const apiKey = import.meta.env.VITE_APP_TMBD_KEY;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl);

      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (rating) => {
    setMinRating(rating);

    const filteredMovies = movies.filter(
      (movie) => movie.vote_average >= minRating
    );

    setMovies(filteredMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie_list">
      <header className="align_flex_center movie_list_header">
        <h2 className="align_flex_center movie_list_heading">
          Popular{" "}
          <img src={FireEmoji} alt="Fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_flex_center movie_list_fs">
          <ul className="align_flex_center movie_filter">
            <li
              className="movie_filter_item active"
              onClick={() => handleFilter(6)}
            >
              6+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(7)}>
              7+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(8)}>
              8+ Star
            </li>
          </ul>
          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Release Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </section>
  );
};

export default MovieList;
