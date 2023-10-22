import "./MovieList.css";
import FireEmoji from "../../assets/emojis/fire.png";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import { useState } from "react";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  // env vars in vite need `VITE` prefix
  const apiKey = import.meta.env.VITE_APP_TMBD_KEY;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filterMovies, setFilterMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc"
  });

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl);

      const data = await response.json();

      setMovies(data.results);
      setFilterMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (rating) => {
    // Reset to default rating
    if (rating === minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rating);
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rating
      );

      setFilterMovies(filteredMovies);
    }
  };

  const dynamicItemClass = (rating) => {
    return rating === minRating
      ? "movie_filter_item active"
      : "movie_filter_item";
  };

  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie_list">
      <header className="align_flex_center movie_list_header">
        <h2 className="align_flex_center movie_list_heading">
          Popular
          <img src={FireEmoji} alt="Fire emoji" className="navbar_emoji" />
        </h2>
        <div className="align_flex_center movie_list_fs">
          <FilterGroup
            onRatingClick={handleFilter}
            dynamicItemClass={dynamicItemClass}
            ratings={[6, 7, 8]}
          />
          <select
            name="by"
            id="sort"
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">Sort By</option>
            <option value="release_date">Release Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id="order"
            onChange={handleSort}
            className="movie_sorting"
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies &&
          filterMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </section>
  );
};

export default MovieList;
