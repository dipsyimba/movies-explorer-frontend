/*eslint-disable */

import "./Movies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { getMoreMovies, getMoviesQty, getShortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const { isLoading, movies, onCardButtonClick, loggedIn, getAllMovies } =
    props;
  const [searchWord, setSearchWord] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [moviesQuantity, setMoviesQuantity] = useState(getMoviesQty);
  const moviesQty = movies.length > 0;
  const searchMessage = `${
    JSON.parse(localStorage.getItem("foundMovies"))
      ? "Ничего не найдено."
      : "Начните поиск."
  }`;

  function handleSearchSubmit(value) {
    setSearchWord(value);
    getAllMovies(value);
  }

  function handleMoreButtonClick() {
    setMoviesQuantity(moviesQuantity + getMoreMovies());
  }

  function toggleFilter() {
    setIsFilterChecked(!isFilterChecked);
  }

  useEffect(() => {
    const filteredMovies = getShortMovies(movies, isFilterChecked);
    setAllMovies(filteredMovies);
    setCurrentMovies(filteredMovies.slice(0, moviesQuantity));
  }, [movies, searchWord, isFilterChecked, moviesQuantity]);

  useEffect(() => {
    function updateWindowWidth() {
      setTimeout(() => {
        setMoviesQuantity(getMoviesQty());
        setCurrentMovies(allMovies.slice(0, getMoviesQty()));
      }, 1000);
    }

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [allMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="movies-content">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          isFilterChecked={isFilterChecked}
          isLoading={isLoading}
          toggleFilter={toggleFilter}
        />
        {!isLoading && (
          <>
            {!moviesQty && (
              <p className="movies-content__message">{searchMessage}</p>
            )}
            {currentMovies && (
              <MoviesCardList
                movies={currentMovies}
                onCardButtonClick={onCardButtonClick}
              />
            )}
            {currentMovies.length < allMovies.length && (
              <button
                className="movies-content__button"
                onClick={handleMoreButtonClick}
              >
                Ещё
              </button>
            )}
          </>
        )}
        {isLoading && <Preloader />}
      </section>
      <Footer />
    </>
  );
}

export default Movies;
