export const convertMovieLink = (link) => {
  return `https://api.nomoreparties.co${link}`;
};

export const convertMovieDuration = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
};

export const getMovieByKeyword = (movies, keyword) =>
  movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
  });

export const markSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((movie) => movie.nameRU === savedMovie.nameRU);
    if (typeof movie !== "undefined") {
      movie.isSaved = true;
    }
  });

  return allMovies;
};

export const getShortMovies = (movies, checked) => {
  return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
};

export const getMoviesQty = () => {
  if (window.innerWidth <= 767) {
    return 5;
  } else if (window.innerWidth <= 1275) {
    return 8;
  } else {
    return 12;
  }
};

export const getMoreMovies = () => {
  if (window.innerWidth <= 767) {
    return 2;
  } else if (window.innerWidth <= 1275) {
    return 2;
  } else {
    return 3;
  }
};
