import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/formValidation";
import Preloader from "../Preloader/Preloader";

function Login(props) {
  const { onLogin, isLoading } = props;
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const { email, password } = values;

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({
      email,
      password
    });
  }

  return (
    <>
      <section className="login">
        {!isLoading && (
          <>
            <Link to="/">
              <img className="login__logo" alt="logo" src={logo} />
            </Link>
            <h2 className="login__title">Рады видеть!</h2>
            <form className="login__form" onSubmit={handleSubmit}>
              <fieldset className="login__fieldset">
                <div className="login__form-inputs">
                  <p className="login__form-input">E-mail</p>
                  <input
                    className="login__form-input-field"
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email || ""}
                  />
                </div>
                <span className="login__input-error">{errors.email}</span>
                <div className="login__form-inputs">
                  <p className="login__form-input">Пароль</p>
                  <input
                    className="login__form-input-field"
                    type="password"
                    name="password"
                    minLength="6"
                    required
                    onChange={handleChange}
                    value={password || ""}
                  />
                </div>
                <span className="login__input-error">{errors.password}</span>
              </fieldset>
              <button
                className={`login__button_signip ${
                  isValid ? "" : "login__button_disabled"
                }`}
              >
                Войти
              </button>
              <div className="login__signup">
                <p className="login__question">
                  Ещё не зарегистрированы?
                  <Link className="login__link" to="/signup">
                    {" "}
                    Регистрация
                  </Link>
                </p>
              </div>
            </form>
          </>
        )}
        {isLoading && <Preloader />}
      </section>
    </>
  );
}

export default Login;
