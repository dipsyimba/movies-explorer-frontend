import './SavedMovies.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesArray from '../../utils/movies.js';

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={ props.loggedIn }/>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList movies={moviesArray} />
      </section>
      <Footer />
    </>  
  )
}

export default SavedMovies;