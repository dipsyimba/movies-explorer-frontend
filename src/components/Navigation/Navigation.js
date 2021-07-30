import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './Navigation.css';
import icon from '../../images/account-icon.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function Navigation(props) {
  const [isNavShow, setIsNavShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  })

  function handleCloseNavButtonClick() {
    setIsNavShow(false);
  }

  function handleOpenNavButtonClick() {
    setIsNavShow(true);
  }


  return (
    <div className={props.loggedIn ? 'header__nav' : 'header__nav header__nav_position_right'}>
      {(props.loggedIn && windowWidth < 768) ? <BurgerMenu /> :
        <>
          <div className={props.loggedIn ? 'header__movies-nav' : 'header__movies-nav no-display'}>
              <Link to="/movies" className="header__link header__link_movies">Фильмы</Link>
              <Link to="/saved-movies" className="header__link header__link_movies">Сохранённые фильмы</Link>
          </div>
          <div className="header__login-nav">
              <Link to="/signup" className={props.loggedIn ? 'header__link header__link_register no-display' :
                  'header__link header__link_register'}>Регистрация</Link>
            {props.loggedIn ?
              <Link to="/profile" className="header__link header__link_account">Аккаунт
                <div className="header__account-icon">
                  <img className="header__icon" src={icon} alt="account icon" />
                </div>
              </Link> :
              <Link to="/signin" className="header__link header__link_signin">Войти</Link>
            }
          </div>
        </>
      }
    </div>
  )
}

export default Navigation;