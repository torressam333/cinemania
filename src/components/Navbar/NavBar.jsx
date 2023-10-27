import './NavBar.css';
import Fire from '../../assets/emojis/fire.png';
import GlowingStar from '../../assets/emojis/glowing-star.png';
import Celebrate from '../../assets/emojis/partying-face.png';
import DarkMode from '../DarkMode/DarkMode';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <h1>Cinemania</h1>
      <div className='navbar_links'>
        <DarkMode />
        <a href='#popular'>
          Popular <img src={Fire} alt='fire emoji' className='navbar_emoji' />
        </a>
        <a href='#top_rated'>
          Top Rated
          <img
            src={GlowingStar}
            alt='glowing star emoji'
            className='navbar_emoji'
          />
        </a>
        <a href='#upcoming'>
          Upcoming
          <img
            src={Celebrate}
            alt='party face emoji'
            className='navbar_emoji'
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
