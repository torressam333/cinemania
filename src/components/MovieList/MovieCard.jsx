import "./MovieCard.css";
import StarEmoji from "../../assets/emojis/star.png";

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, release_date, vote_average, overview } =
    movie;

  return (
    <a
      href={`https://www.themoviedb.org/movie/${id}`}
      className="movie_card"
      target="_blank"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">{title}</h3>
        <div className="align_flex_center movie_date_rate">
          <p>{release_date}</p>
          <p>
            {vote_average}{" "}
            <img src={StarEmoji} alt="Star Emoji" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{overview.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
};

export default MovieCard;
