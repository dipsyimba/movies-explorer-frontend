import "./SavedMovies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useState } from "react";
import { getMovieByKeyword, getShortMovies } from "../../utils/utils";

function SavedMovies(props) {
  const { savedMovies, onCardButtonClick, loggedIn } = props;
  const [searchWord, setSearchWord] = useState("");
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [movies, setMovies] = useState(savedMovies);
  const moviesQty = movies.length > 0;
  const searchMessage =
    savedMovies.length < 1 ? "Нет сохраненных фильмов." : "Ничего не найдено.";

  function handleSearchSubmit(value) {
    setSearchWord(value);
  }

  function toggleFilter() {
    setIsFilterChecked(!isFilterChecked);
  }

  useEffect(() => {
    const foundMovies = getMovieByKeyword(savedMovies, searchWord);
    const filteredMovies = getShortMovies(foundMovies, isFilterChecked);
    setMovies(filteredMovies);
  }, [savedMovies, searchWord, isFilterChecked]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="saved-movies">
        <SearchForm
          isFilterChecked={isFilterChecked}
          handleSearchSubmit={handleSearchSubmit}
          toggleFilter={toggleFilter}
        />
        {!moviesQty && (
          <p className="movies-content__message">{searchMessage}</p>
        )}
        <MoviesCardList movies={movies} onCardButtonClick={onCardButtonClick} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
