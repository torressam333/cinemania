import './App.css';
import NavBar from './components/Navbar/NavBar';
import MovieList from './components/MovieList/MovieList';

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
