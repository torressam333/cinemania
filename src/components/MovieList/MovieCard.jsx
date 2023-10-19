import './MovieCard.css';
import StarEmoji from '../../assets/emojis/star.png';

const MovieCard = () => {
  return (
    <a href='' className='movie_card'>
      <img
        src='https://m.media-amazon.com/images/I/71eHZFw+GlL._AC_SL1000_.jpg'
        alt='end game movie poster'
        className='movie_poster'
      />
      <div className='movie_details'>
        <h3 className='movie_details_heading'>Movie Name</h3>
        <div className='align_flex_center movie_date_rate'>
          <p>10-20-2014</p>
          <p>
            8.5 <img src={StarEmoji} alt='Star Emoji' className='card_emoji' />
          </p>
        </div>
        <p className='movie_description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aut
          ex dignissimos modi impedit ea.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
