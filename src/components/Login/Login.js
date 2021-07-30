import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from '../../images/logo.svg';

function Login(props) {
  return (
    <>
      <section className="login">
        <Link to="/">
          <img className="login__logo" alt="logo" src={logo} />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <fieldset className="login__fieldset">
            <div className="login__form-inputs">
              <p className="login__form-input">E-mail</p>
              <input className="login__form-input-field" type="text" placeholder="pochta@yandex.ru"  />
            </div>
            <div className="login__form-inputs">
              <p className="login__form-input">Пароль</p>
              <input className="login__form-input-field" type="password"  />
            </div>
          </fieldset>
          <button className="login__button_signip" >Войти</button>
          <div className="login__signup">
            <p className="login__question">Ещё не зарегистрированы?
              <Link className="login__link" to="/signup"> Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login;