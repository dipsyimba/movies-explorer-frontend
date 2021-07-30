import './Movies.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesArray from '../../utils/movies.js';

function Movies(props) {
  return (
    <>
      <Header loggedIn={ props.loggedIn }/>
      <section className="movies-content">
        <SearchForm />
        <MoviesCardList movies={moviesArray} />
        <button className="movies-content__button">Ещё</button>
      </section>
      <Footer />
    </>  
  )
}

export default Movies;