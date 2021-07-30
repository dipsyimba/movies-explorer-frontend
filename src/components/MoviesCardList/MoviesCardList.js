import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ movies }) {
  const { pathname } = useLocation();

  const result = movies.filter(function (v) {
    return (v.isSaved === true)
  })

  // return (
  //   <section className="movies">
  //     <ul className="movie-list">
  //       {result.map((movie, index) => (
  //         <MoviesCard
  //           key={index}
  //           movie={movie}
  //         />
  //       ))}
  //     </ul>
      
  //   </section>
  // )
  return (
    <section className="movies">
      <ul className="movie-list">
        {pathname === '/saved-movies' ?
          result.map((movie, index) => (
            <MoviesCard
              key={index}
              movie={movie} />
            ))
          :
            movies.map((movie, index) => (
              <MoviesCard
                key={index}
                movie={movie}
              />
            ))
          
        }
      </ul>
      
    </section>
  )
}

export default MoviesCardList;