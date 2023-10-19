import './App.css';
import NavBar from './components/Navbar/NavBar';
import MovieList from './components/Navbar/MovieList/MovieList';

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
