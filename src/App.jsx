import './App.css';
import NavBar from './components/Navbar/NavBar';
import MovieList from './components/MovieList/MovieList';
import FireEmoji from './assets/emojis/fire.png';
import StarEmoji from './assets/emojis/star.png';
import PartyEmoji from './assets/emojis/partying-face.png';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <MovieList movieType='popular' title='Popular' emoji={FireEmoji} />
        <MovieList movieType='top_rated' title='Top Rated' emoji={StarEmoji} />
        <MovieList movieType='upcoming' title='Upcoming' emoji={PartyEmoji} />
      </main>
    </div>
  );
};

export default App;
