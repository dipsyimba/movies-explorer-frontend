import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useFormWithValidation } from "../../utils/formValidation";
import Preloader from "../Preloader/Preloader";

function Register(props) {
  const { onRegister, isLoading } = props;
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const { name, email, password } = values;

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      name,
      email,
      password
    });
  }

  return (
    <>
      <section className="register">
        {!isLoading && (
          <>
            <Link to="/">
              <img className="register__logo" alt="logo" src={logo} />
            </Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <form className="register__form" onSubmit={handleSubmit}>
              <fieldset className="register__fieldset">
                <div className="register__form-inputs">
                  <p className="register__form-input">Имя</p>
                  <input
                    className="register__form-input-field"
                    type="text"
                    name="name"
                    minLength="2"
                    maxLength="30"
                    required
                    onChange={handleChange}
                    value={name || ""}
                  />
                </div>
                <span className="register__input-error">{errors.name}</span>
                <div className="register__form-inputs">
                  <p className="register__form-input">E-mail</p>
                  <input
                    className="register__form-input-field"
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    value={email || ""}
                  />
                </div>
                <span className="register__input-error">{errors.email}</span>
                <div className="register__form-inputs">
                  <p className="register__form-input">Пароль</p>
                  <input
                    className="register__form-input-field register__form-input_invalid"
                    type="password"
                    name="password"
                    minLength="6"
                    required
                    onChange={handleChange}
                    value={password || ""}
                  />
                </div>
                <span className="register__input-error">{errors.password}</span>
              </fieldset>
              <button
                className={`register__button_signup ${
                  isValid ? "" : "register__button_disabled"
                }`}
                type="submit"
              >
                Зарегистрироваться
              </button>
              <div className="register__signin">
                <p className="register__question">
                  Уже зарегистрированы?
                  <Link className="register__link" to="/signin">
                    {" "}
                    Войти
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

export default Register;
