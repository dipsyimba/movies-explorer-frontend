import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { convertMovieDuration, convertMovieLink } from "../../utils/utils";

function MoviesCard(props) {
  const { movie, onCardButtonClick } = props;
  const { pathname } = useLocation();
  const time = convertMovieDuration(movie.duration);

  function handleCardButtonClick() {
    onCardButtonClick(movie);
  }

  function getMovieImageLink(movie) {
    // console.log(movie.liked);
    // console.log(movie.isSaved);
    if (movie.image && movie.image.url) {
      return convertMovieLink(movie.image.url);
    } else if (movie.image) {
      return movie.image;
    } else {
      return "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    }
  }

  return (
    <li className="card">
      <div className="card__info">
        <a
          className="card__title"
          target="_blank"
          href={movie.trailerLink || movie.trailer}
          rel="noreferrer"
        >
          {movie.nameRU}
        </a>
        <p className="card__time">{time}</p>
      </div>
      <a
        href={movie.trailerLink || movie.trailer}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__picture"
          alt={movie.nameRU}
          src={getMovieImageLink(movie)}
        />
      </a>

      {pathname === "/movies" ? (
        <button
          onClick={handleCardButtonClick}
          className={`card__button ${
            movie.isSaved ? "card__button_saved" : ""
          }`}
        />
      ) : (
        <button
          className="card__button card__button_delete"
          onClick={handleCardButtonClick}
        />
      )}
    </li>
  );
}

export default MoviesCard;
