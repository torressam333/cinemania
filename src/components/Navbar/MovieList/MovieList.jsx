import './MovieList.css';
import FireEmoji from '../../../assets/emojis/fire.png';

const MovieList = () => {
  return (
    <section className='movie_list'>
      <header className='align_flex_center movie_list_header'>
        <h2 className='align_flex_center movie_list_heading'>
          Popular{' '}
          <img src={FireEmoji} alt='Fire emoji' className='navbar_emoji' />
        </h2>
        <div className='align_flex_center movie_list_fs'>
          <ul className='align_flex_center movie_filter'>
            <li className='movie_filter_item active'>7+ Star</li>
            <li className='movie_filter_item'>8+ Star</li>
            <li className='movie_filter_item'>9+ Star</li>
          </ul>
          <select name='' id='' className='movie_sorting'>
            <option value=''>Sort By</option>
            <option value=''>Release Date</option>
            <option value=''>Rating</option>
          </select>
          <select name='' id='' className='movie_sorting'>
            <option value=''>Ascending</option>
            <option value=''>Descending</option>
          </select>
        </div>
      </header>
      <div className='movie_cards'></div>
    </section>
  );
};

export default MovieList;
