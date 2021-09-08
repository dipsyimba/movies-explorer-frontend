import "./SavedMovies.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useContext, useEffect, useState } from "react";
import { getMovieByKeyword, getShortMovies } from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedMovies(props) {
  const { savedMovies, onCardButtonClick, loggedIn } = props;
  const currentUser = useContext(CurrentUserContext);
  const [searchWord, setSearchWord] = useState("");
  const [isFilterChecked, setIsFilterChecked] = useState(false);
  const [savedMoviesByCurrentUser, setSavedMoviesByCurrentUser] = useState([]);
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
    const arr = savedMovies.filter((item) =>
      item.likes.some((i) => i === currentUser._id)
    );
    setSavedMoviesByCurrentUser(arr);
  }, [currentUser._id, savedMovies]);

  useEffect(() => {
    const foundMovies = getMovieByKeyword(savedMoviesByCurrentUser, searchWord);
    const filteredMovies = getShortMovies(foundMovies, isFilterChecked);
    setMovies(filteredMovies);
  }, [
    savedMovies,
    searchWord,
    isFilterChecked,
    savedMoviesByCurrentUser,
    currentUser._id
  ]);

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
