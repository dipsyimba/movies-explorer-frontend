import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from '../../images/logo.svg';

function Register(props) {
  return (
    <>
      <section className="register">
        <Link to="/">
          <img className="register__logo" alt="logo" src={logo} />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <fieldset className="register__fieldset">
            <div className="register__form-inputs">
              <p className="register__form-input">Имя</p>
              <input className="register__form-input-field" type="text" placeholder="Виталий"  />
            </div>
            <span className="register__input-error">Что-то пошло не так...</span>
            <div className="register__form-inputs">
              <p className="register__form-input">E-mail</p>
              <input className="register__form-input-field" type="text" placeholder="pochta@yandex.ru"  />
            </div>
            <span className="register__input-error">Что-то пошло не так...</span>
            <div className="register__form-inputs">
              <p className="register__form-input">Пароль</p>
              <input className="register__form-input-field register__form-input_invalid" type="password" placeholder="••••••••"  />
            </div>
            <span className="register__input-error visible">Что-то пошло не так...</span>
          </fieldset>
          <button className="register__button_signup" >Зарегистрироваться</button>
          <div className="register__signin">
            <p className="register__question">Уже зарегистрированы?
              <Link className="register__link" to="/signin"> Войти</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register;