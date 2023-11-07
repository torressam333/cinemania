import './App.css';
import NavBar from './components/Navbar/NavBar';
import MovieList from './components/MovieList/MovieList';
import FireEmoji from './assets/emojis/fire.png';
import StarEmoji from './assets/emojis/star.png';
import PartyEmoji from './assets/emojis/partying-face.png';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <MovieList
                movieType='popular'
                title='Popular'
                emoji={FireEmoji}
              />
            }
          />
          <Route
            path='/top_rated'
            element={
              <MovieList
                movieType='top_rated'
                title='Top Rated'
                emoji={StarEmoji}
              />
            }
          />
          <Route
            path='/upcoming'
            element={
              <MovieList
                movieType='upcoming'
                title='Upcoming'
                emoji={PartyEmoji}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
