/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import {
  convertMovieLink,
  getMovieByKeyword,
  markSavedMovies
} from "../../utils/utils";
import InfoPopup from "../InfoPopup/InfoPopup";
import getErrorMessage from "../../utils/errorMessages";

function App() {
  const history = useHistory();
  const path = useLocation().pathname;

  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [popupState, setPopupState] = useState({
    open: false,
    error: true,
    title: "Ой!",
    message: "Что-то пошло не так..."
  });

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((userData) => {
          setCurrentUser({ name: userData.name, email: userData.email });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies()
        .then((movies) => {
          setSavedMovies(movies.reverse());
          localStorage.setItem("saved-movies", JSON.stringify(movies));
        })
        .catch((err) => {});
    }
  }, [loggedIn]);

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedIn(true);
      history.push(path);
    }
  }, [history]);

  useEffect(() => {
    const foundMovies = JSON.parse(localStorage.getItem("foundMovies"));
    if (foundMovies) {
      setMovies(markSavedMovies(foundMovies, savedMovies));
    } else {
      setMovies([]);
    }
  }, [savedMovies]);

  function handleSignUpSubmit(data) {
    setIsLoading(true);
    mainApi
      .signUp(data)
      .then((res) => {
        if (res) {
          handleSignInSubmit({
            email: data.email,
            password: data.password
          });
        }
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignInSubmit(data) {
    setIsLoading(true);
    mainApi
      .signIn(data)
      .then((res) => {
        localStorage.setItem("loggedIn", "true");
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then((res) => {
        localStorage.clear();
        setLoggedIn(false);
        history.push("/");
      })
      .catch((err) => openInfoPopup(getErrorMessage(err)));
  }

  function handleUpdateUser(newData) {
    setIsLoading(true);
    mainApi
      .patchUserInfo(newData)
      .then((res) => {
        setCurrentUser(res);
        openInfoPopup("Данные изменены!", "Успешно!", false);
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function getAllMovies(keyword) {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem(
          "foundMovies",
          JSON.stringify(getMovieByKeyword(movies, keyword))
        );
        setMovies(
          markSavedMovies(getMovieByKeyword(movies, keyword), savedMovies)
        );
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .addMovie({
        movieId: movie.id,
        country: movie.country || "unknown",
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        image: convertMovieLink(movie.image.url),
        thumbnail: convertMovieLink(movie.image.formats.thumbnail.url),
        nameEN: movie.nameEN || "unknown",
        nameRU: movie.nameRU,
        trailer: movie.trailerLink,
        year: movie.year
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      });
  }

  function handleDeleteMovie(movie) {
    const movieId = movie.id || movie.movieId;
    const movieToDelete = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteSavedMovie(movieToDelete._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(updatedSavedMovies);
      })
      .catch((err) => {
        openInfoPopup(getErrorMessage(err));
      });
  }

  function handleCardButtonClick(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  }

  const openInfoPopup = useCallback(
    (message, title = "Ой!", error = true) => {
      setPopupState({
        ...popupState,
        open: true,
        message,
        title,
        error
      });
    },
    [popupState]
  );

  function closeInfoPopup() {
    setPopupState({ ...popupState, open: false });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn} main={false} />
          </Route>
          <Route exact path="/signup">
            {!loggedIn ? (
              <Register onRegister={handleSignUpSubmit} isLoading={isLoading} />
            ) : (
              <Redirect to="/movies" />
            )}
          </Route>
          <Route exact path="/signin">
            {!loggedIn ? (
              <Login
                loggedIn={loggedIn}
                onLogin={handleSignInSubmit}
                isLoading={isLoading}
              />
            ) : (
              <Redirect to="/movies" />
            )}
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            movies={movies}
            getAllMovies={getAllMovies}
            isLoading={isLoading}
            onCardButtonClick={handleCardButtonClick}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={savedMovies}
            onCardButtonClick={handleCardButtonClick}
          />
          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            isLoading={isLoading}
            handleSignOut={handleSignOut}
            handleUpdateUser={handleUpdateUser}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <InfoPopup state={popupState} onClose={closeInfoPopup} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
