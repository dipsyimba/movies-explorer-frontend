import React from "react";
import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button
        className="not-found__button"
        type="button"
        role="link"
        onClick={() => history.go(-2)}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
