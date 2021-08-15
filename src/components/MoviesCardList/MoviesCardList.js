import "./MoviesCardList.css";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList(props) {
  const { movies, onCardButtonClick } = props;
  const { pathname } = useLocation();

  return (
    <section className="movies">
      <ul className="movie-list">
        {pathname === "/saved-movies"
          ? movies.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  movie={movie}
                  onCardButtonClick={onCardButtonClick}
                />
              );
            })
          : movies.map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie.movieId}
                  movie={movie}
                  onCardButtonClick={onCardButtonClick}
                />
              );
            })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
