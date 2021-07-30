import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({ movie }) {
  const { pathname } = useLocation();
  const { picture, title, time, isSaved } = movie;
  return (
    <li className="card">
      <div className="card__info">
        <p className="card__title">{title}</p>
        <p className="card__time">{ time }</p>
      </div>
      <img className="card__picture" alt={title} src={picture}/>
      {pathname === "/movies" ? 
        <button className={`card__button ${isSaved ? 'card__button_saved' : ''}`} /> :
        <button className="card__button card__button_delete" />
      }
    </li>
  )
}

export default MoviesCard;