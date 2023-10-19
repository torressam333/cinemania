import './MovieCard.css';
import StarEmoji from '../../assets/emojis/star.png';

const MovieCard = ({ movie }) => {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    overview,
  } = movie;
  return (
    <a href='' className='movie_card'>
      <img src={movie.poster_path} alt={title} className='movie_poster' />
      <div className='movie_details'>
        <h3 className='movie_details_heading'>{title}</h3>
        <div className='align_flex_center movie_date_rate'>
          <p>{release_date}</p>
          <p>
            {vote_average}{' '}
            <img src={StarEmoji} alt='Star Emoji' className='card_emoji' />
          </p>
        </div>
        <p className='movie_description'>{overview.slice(0, 100) + '...'}</p>
      </div>
    </a>
  );
};

export default MovieCard;
