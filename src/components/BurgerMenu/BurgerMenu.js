import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import icon from '../../images/account-icon.svg';

function BurgerMenu(props) {
  const [isNavShow, setIsNavShow] = useState(false);

  function handleCloseNavButtonClick() {
    setIsNavShow(false);
  }

  function handleOpenNavButtonClick() {
    setIsNavShow(true);
  }

  return (
    <>
      <button className="burger-menu__button" onClick={handleOpenNavButtonClick}></button>
      <div className={isNavShow ? "burger-menu active" : "burger-menu"}>
        <button className="burger-menu__button_close" onClick={handleCloseNavButtonClick}></button>
          <div className={isNavShow ? 'burger-menu__container active' : 'burger-menu__container'}>
              <div className="burger-menu__links">
                  <Link to="/" className="burger-menu__link">Главная</Link>
                  <Link to="/movies" className="burger-menu__link">Фильмы</Link>
                  <Link to="/saved-movies" className="burger-menu__link">Сохранённые фильмы</Link>
                  <Link to="/profile" className="burger-menu__link burger-menu__link_account">Аккаунт
                    <div className="header__account-icon">
                      <img className="header__icon" src={icon} alt="account icon" />
                    </div>
                  </Link>
              </div>
          </div>
      </div>
    </>
  )
}

export default BurgerMenu;